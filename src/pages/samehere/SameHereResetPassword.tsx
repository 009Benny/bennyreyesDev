import { useEffect, useState, type FormEvent } from 'react';
import { Eye, EyeOff, CircleCheck, Hourglass, LoaderCircle } from 'lucide-react';
import appIcon from '../../assets/samehere/app-icon.jpg';
import { initialLang, SAMEHERE, type Lang, type Localized } from './i18n';
import {
    PASSWORD_MIN_LENGTH as MIN,
    isAuthError,
    signOutLocal,
    updatePassword,
    verifyRecoveryToken,
} from './supabase';
import './samehere.css';

const COPY: Localized<Record<string, string>> = {
    es: {
        pageTitle: 'Same Here · Nueva contraseña',
        checking: 'Revisando tu enlace…',
        title: 'Elige una nueva contraseña',
        subtitle: 'Escríbela dos veces. Después vuelve a la app e inicia sesión con ella.',
        newPassword: 'Nueva contraseña',
        confirmPassword: 'Repite la contraseña',
        show: 'Mostrar contraseñas',
        hint: `Al menos ${MIN} caracteres.`,
        save: 'Guardar contraseña',
        saving: 'Guardando…',
        tooShort: `La contraseña debe tener al menos ${MIN} caracteres.`,
        mismatch: 'Las contraseñas no coinciden.',
        sameAsOld: 'La nueva contraseña debe ser distinta de la anterior.',
        weak: 'Esa contraseña es muy débil. Prueba con una más larga o con números y símbolos.',
        network: 'No pudimos conectarnos. Revisa tu conexión e inténtalo de nuevo.',
        generic: 'No se pudo guardar la contraseña. Inténtalo de nuevo.',
        doneTitle: '¡Listo!',
        doneBody: 'Tu contraseña se cambió. Regresa a Same Here e inicia sesión con la nueva.',
        invalidTitle: 'Este enlace ya no sirve',
        invalidBody: 'Los enlaces para cambiar la contraseña caducan en 1 hora y solo se pueden usar una vez. Abre Same Here, toca «¿Olvidaste tu contraseña?» y pide uno nuevo.',
        help: 'Ayuda',
    },
    en: {
        pageTitle: 'Same Here · New password',
        checking: 'Checking your link…',
        title: 'Choose a new password',
        subtitle: 'Type it twice. Then go back to the app and sign in with it.',
        newPassword: 'New password',
        confirmPassword: 'Repeat password',
        show: 'Show passwords',
        hint: `At least ${MIN} characters.`,
        save: 'Save password',
        saving: 'Saving…',
        tooShort: `Your password needs at least ${MIN} characters.`,
        mismatch: "The passwords don't match.",
        sameAsOld: 'Your new password must be different from the old one.',
        weak: 'That password is too weak. Try a longer one, or add numbers and symbols.',
        network: "We couldn't connect. Check your connection and try again.",
        generic: "Your password couldn't be saved. Please try again.",
        doneTitle: 'All set!',
        doneBody: 'Your password has been changed. Go back to Same Here and sign in with your new one.',
        invalidTitle: 'This link no longer works',
        invalidBody: 'Password links expire after 1 hour and can only be used once. Open Same Here, tap “Forgot your password?” and ask for a new one.',
        help: 'Help',
    },
};

/**
 * What the email link brought with it. Supabase sends people here as
 *   …/reset-password#access_token=…&refresh_token=…&type=recovery   (default template)
 *   …/reset-password?token_hash=…&type=recovery                      (if the template uses {{ .TokenHash }})
 * or, when the link is expired or already used,
 *   …/reset-password#error=access_denied&error_code=otp_expired&…
 */
type Link =
    | { kind: 'session'; accessToken: string }
    | { kind: 'tokenHash'; tokenHash: string }
    | { kind: 'invalid' };

let cachedLink: { link: Link; lang: Lang } | null = null;

/**
 * Reads the URL once and immediately wipes the token out of the address bar,
 * so it isn't left in history, a bookmark or a screenshot. Cached at module
 * level because React StrictMode runs effects twice in development, and the
 * second run would find an empty URL.
 */
function readLinkOnce(): { link: Link; lang: Lang } {
    if (cachedLink) return cachedLink;

    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    const query = new URLSearchParams(window.location.search);
    const lang = initialLang(); // honours ?lang=es before the query is cleared

    let link: Link = { kind: 'invalid' };
    const type = hash.get('type') ?? query.get('type');
    const hasError = hash.get('error') || query.get('error');

    if (!hasError && type === 'recovery') {
        const accessToken = hash.get('access_token');
        const tokenHash = query.get('token_hash');
        if (accessToken && !isExpired(accessToken)) link = { kind: 'session', accessToken };
        else if (tokenHash) link = { kind: 'tokenHash', tokenHash };
    }

    if (window.location.hash || window.location.search) {
        window.history.replaceState(window.history.state, '', window.location.pathname);
    }

    cachedLink = { link, lang };
    return cachedLink;
}

/** Peeks at the JWT's `exp` so a stale link shows the right screen up front. */
function isExpired(jwt: string): boolean {
    try {
        const payload = JSON.parse(atob(jwt.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
        return typeof payload.exp === 'number' && payload.exp * 1000 < Date.now();
    } catch {
        return false; // Let the server decide.
    }
}

type View = 'checking' | 'form' | 'done' | 'invalid';

/**
 * /sameHere/reset-password — where the "Forgot your password?" email lands.
 * The URL is hard-coded in the app (AppLinks.passwordReset) and must be listed
 * in Supabase → Authentication → URL Configuration → Redirect URLs.
 */
export const SameHereResetPassword = () => {
    const [{ link, lang }] = useState(readLinkOnce);
    const t = COPY[lang];

    const [view, setView] = useState<View>(
        link.kind === 'session' ? 'form' : link.kind === 'tokenHash' ? 'checking' : 'invalid',
    );
    const [token, setToken] = useState<string | null>(link.kind === 'session' ? link.accessToken : null);
    const [pw1, setPw1] = useState('');
    const [pw2, setPw2] = useState('');
    const [reveal, setReveal] = useState(false);
    const [error, setError] = useState('');
    const [saving, setSaving] = useState(false);

    // Page chrome: title, language, and keep it out of search + referrers.
    useEffect(() => {
        const previousTitle = document.title;
        document.title = t.pageTitle;
        document.documentElement.lang = lang;
        const metas = [
            Object.assign(document.createElement('meta'), { name: 'robots', content: 'noindex' }),
            Object.assign(document.createElement('meta'), { name: 'referrer', content: 'no-referrer' }),
        ];
        metas.forEach((m) => document.head.appendChild(m));
        return () => {
            document.title = previousTitle;
            metas.forEach((m) => m.remove());
        };
    }, [lang, t.pageTitle]);

    // token_hash links: trade the hash for a session before showing the form.
    useEffect(() => {
        if (link.kind !== 'tokenHash') return;
        let cancelled = false;
        verifyRecoveryToken(link.tokenHash)
            .then((accessToken) => {
                if (cancelled) return;
                setToken(accessToken);
                setView('form');
            })
            .catch(() => !cancelled && setView('invalid'));
        return () => {
            cancelled = true;
        };
    }, [link]);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        if (pw1.length < MIN) return setError(t.tooShort);
        if (pw1 !== pw2) return setError(t.mismatch);
        if (!token) return setView('invalid');

        setSaving(true);
        try {
            await updatePassword(token, pw1);
            signOutLocal(token);
            setToken(null);
            setPw1('');
            setPw2('');
            setView('done');
        } catch (err) {
            if (!isAuthError(err)) setError(t.network);
            else if (err.status === 401 || err.status === 403 || ['session_expired', 'bad_jwt', 'session_not_found'].includes(err.code)) setView('invalid');
            else if (err.code === 'same_password') setError(t.sameAsOld);
            else if (err.code === 'weak_password') setError(t.weak);
            else setError(t.generic);
        } finally {
            setSaving(false);
        }
    };

    const inputClass =
        'w-full rounded-xl border border-[#e6daea] bg-white px-3.5 py-3 text-base text-[var(--sh-ink)] outline-none transition focus:border-[var(--sh-violet)] focus:ring-4 focus:ring-[var(--sh-violet)]/15';

    return (
        <div className="samehere min-h-screen flex items-center justify-center px-4 py-10">
            <main className="w-full max-w-[420px] rounded-3xl bg-white px-7 pt-9 pb-7 text-center shadow-[0_10px_40px_rgba(91,45,130,0.12)]">
                <img src={appIcon} alt="Same Here" className="mx-auto mb-5 h-[88px] w-[88px] rounded-[20px] shadow-sm" />

                {view === 'checking' && (
                    <div className="py-6 flex flex-col items-center gap-3" role="status">
                        <LoaderCircle className="h-8 w-8 animate-spin text-[var(--sh-violet)]" aria-hidden />
                        <p className="text-[15px]">{t.checking}</p>
                    </div>
                )}

                {view === 'form' && (
                    <>
                        <h1 className="text-2xl font-extrabold leading-tight">{t.title}</h1>
                        <p className="mt-2 mb-6 text-[15px] leading-snug">{t.subtitle}</p>

                        <form onSubmit={onSubmit} noValidate className="text-left">
                            <label htmlFor="pw1" className="mb-1.5 block text-[13px] font-bold text-[var(--sh-ink)]">
                                {t.newPassword}
                            </label>
                            <input
                                id="pw1"
                                type={reveal ? 'text' : 'password'}
                                autoComplete="new-password"
                                autoFocus
                                value={pw1}
                                onChange={(e) => setPw1(e.target.value)}
                                aria-describedby="pw-hint"
                                className={inputClass}
                            />
                            <p id="pw-hint" className="mt-1 mb-3.5 text-xs">{t.hint}</p>

                            <label htmlFor="pw2" className="mb-1.5 block text-[13px] font-bold text-[var(--sh-ink)]">
                                {t.confirmPassword}
                            </label>
                            <input
                                id="pw2"
                                type={reveal ? 'text' : 'password'}
                                autoComplete="new-password"
                                value={pw2}
                                onChange={(e) => setPw2(e.target.value)}
                                className={inputClass}
                            />

                            <button
                                type="button"
                                onClick={() => setReveal((r) => !r)}
                                aria-pressed={reveal}
                                className="mt-3 mb-4 inline-flex items-center gap-2 text-[13px] font-semibold hover:text-[var(--sh-ink)]"
                            >
                                {reveal ? <EyeOff className="h-4 w-4" aria-hidden /> : <Eye className="h-4 w-4" aria-hidden />}
                                {t.show}
                            </button>

                            <div role="alert" className="min-h-0 text-sm leading-5 text-[#b3261e] empty:hidden mb-4">
                                {error}
                            </div>

                            <button
                                type="submit"
                                disabled={saving}
                                className="sh-btn-primary w-full px-5 py-3.5 text-base disabled:opacity-60 disabled:cursor-default"
                            >
                                {saving ? t.saving : t.save}
                            </button>
                        </form>
                    </>
                )}

                {view === 'done' && (
                    <div className="py-2">
                        <CircleCheck className="mx-auto mb-3 h-12 w-12 text-[#1e7b4f]" aria-hidden />
                        <h1 className="text-2xl font-extrabold">{t.doneTitle}</h1>
                        <p className="mt-2 text-[15px] leading-snug">{t.doneBody}</p>
                    </div>
                )}

                {view === 'invalid' && (
                    <div className="py-2">
                        <Hourglass className="mx-auto mb-3 h-12 w-12 text-[var(--sh-violet)]" aria-hidden />
                        <h1 className="text-2xl font-extrabold">{t.invalidTitle}</h1>
                        <p className="mt-2 text-[15px] leading-snug">{t.invalidBody}</p>
                    </div>
                )}

                <footer className="mt-6 text-xs">
                    Same Here ·{' '}
                    <a href={`mailto:${SAMEHERE.supportEmail}`} className="underline hover:text-[var(--sh-ink)]">
                        {t.help}
                    </a>
                </footer>
            </main>
        </div>
    );
};
