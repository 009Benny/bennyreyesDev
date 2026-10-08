import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import appIcon from '../../assets/samehere/app-icon.jpg';
import { initialLang, saveLang, SAMEHERE, type Lang, type Localized } from './i18n';
import './samehere.css';

const NAV: Localized<{ home: string; terms: string; privacy: string; support: string; madeBy: string }> = {
    en: { home: 'The app', terms: 'Terms', privacy: 'Privacy', support: 'Support', madeBy: 'Made by' },
    es: { home: 'La app', terms: 'Términos', privacy: 'Privacidad', support: 'Soporte', madeBy: 'Hecho por' },
};

/**
 * Shell for every /samehere page. It deliberately drops the dark portfolio
 * chrome: these pages open inside the app's in-app browser too, and they should
 * feel like Same Here — the same pastel gradient as the app's BackgroundView.
 */
export const SameHereLayout = () => {
    const [lang, setLang] = useState<Lang>(initialLang);
    const { pathname } = useLocation();
    const t = NAV[lang];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    }, [lang]);

    const choose = (next: Lang) => {
        setLang(next);
        saveLang(next);
    };

    const navClass = ({ isActive }: { isActive: boolean }) =>
        `px-2 sm:px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${isActive ? 'bg-white/70 text-[var(--sh-ink)]' : 'text-[var(--sh-ink-soft)] hover:bg-white/40'}`;

    return (
        <div className="samehere min-h-screen flex flex-col">
            <header className="sticky top-0 z-40 sh-glass-bar">
                <div className="max-w-5xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-3">
                    <Link to="/samehere" className="flex items-center gap-2.5 shrink-0" aria-label="Same Here">
                        <img src={appIcon} alt="" className="w-9 h-9 rounded-[10px] shadow-sm" />
                        <span className="sh-wordmark text-2xl leading-none hidden sm:inline">Same Here</span>
                    </Link>

                    <nav className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm font-semibold">
                        <NavLink to="/samehere" end className={navClass}>{t.home}</NavLink>
                        <NavLink to="/samehere/terms" className={navClass}>{t.terms}</NavLink>
                        <NavLink to="/samehere/privacy" className={navClass}>{t.privacy}</NavLink>

                        <div className="ml-1 sm:ml-2 flex rounded-full bg-white/50 p-0.5 text-xs" role="group" aria-label="Language">
                            {(['en', 'es'] as const).map((code) => (
                                <button
                                    key={code}
                                    type="button"
                                    onClick={() => choose(code)}
                                    aria-pressed={lang === code}
                                    className={`px-2 sm:px-2.5 py-1 rounded-full uppercase transition-colors ${lang === code ? 'bg-[var(--sh-ink)] text-white' : 'text-[var(--sh-ink-soft)]'}`}
                                >
                                    {code}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>
            </header>

            <div className="flex-1">
                <Outlet context={{ lang }} />
            </div>

            <footer className="mt-16 border-t border-white/50 bg-white/30 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--sh-ink-soft)]">
                    <p>
                        © {new Date().getFullYear()} Same Here · {t.madeBy}{' '}
                        <a href="/" className="font-semibold text-[var(--sh-ink)] hover:underline">bennyreyes.dev</a>
                    </p>
                    <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-semibold">
                        <Link to="/samehere/terms" className="hover:text-[var(--sh-ink)]">{t.terms}</Link>
                        <Link to="/samehere/privacy" className="hover:text-[var(--sh-ink)]">{t.privacy}</Link>
                        <a href={`mailto:${SAMEHERE.supportEmail}`} className="hover:text-[var(--sh-ink)]">{t.support}</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};
