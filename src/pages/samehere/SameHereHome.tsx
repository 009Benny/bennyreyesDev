import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    MessageCircleHeart,
    Hand,
    BarChart3,
    UserRoundCheck,
    ShieldCheck,
    EyeOff,
    Languages,
    Trash2,
    Smartphone,
} from 'lucide-react';
import appIcon from '../../assets/samehere/app-icon.jpg';
import { ThoughtDemo } from './ThoughtDemo';
import { SAMEHERE, useSameHereLang, type Localized } from './i18n';

const TOPICS: Localized<string[]> = {
    en: ['General', 'Technology', 'Entertainment', 'Sports', 'Food', 'Travel', 'Relationships', 'Work'],
    es: ['General', 'Tecnología', 'Entretenimiento', 'Deportes', 'Comida', 'Viajes', 'Relaciones', 'Trabajo'],
};

const COPY = {
    en: {
        title: 'Same Here — Share a thought, find who thinks the same',
        eyebrow: 'For iPhone',
        tagline: 'Share a thought. Find out who thinks the same.',
        intro: 'Ask anything with a few possible answers, answer what other people are wondering, and see where you stand — no followers, no feed to keep up with, no pressure.',
        soon: 'Coming soon to the App Store',
        download: 'Download on the App Store',
        tryIt: 'Try it right here →',
        howTitle: 'How it works',
        steps: [
            { title: 'Share a thought', body: 'Write a question, add the answers people can pick and file it under a topic.' },
            { title: 'Answer others', body: 'Swipe through what other people are thinking and tap the answer that fits you.' },
            { title: 'See who thinks the same', body: 'Results appear the moment you answer, so you know if you are with the majority — or the brave few.' },
        ],
        topicsTitle: 'Something for every mood',
        topicsBody: 'Thoughts live in topics, so you can jump between a hot take about food and a real question about work.',
        featuresTitle: 'Made to feel light',
        features: [
            { title: 'Start in one tap', body: 'Try it as a guest with no sign-up. Add an email later to keep your account if you change phones.' },
            { title: 'Your answers, not your profile', body: 'Same Here is about what people think, not who has the most followers. There are none.' },
            { title: 'A friendly community', body: 'Clear community rules, a filter for offensive words, and you can report any thought or block anyone.' },
            { title: 'No ads, no tracking', body: 'No advertising, no analytics SDKs and nothing sold to data brokers.' },
            { title: 'English & Spanish', body: 'The whole app is available in English and Latin American Spanish.' },
            { title: 'Leave whenever you want', body: 'Delete your account from your profile and your thoughts and answers go with it.' },
        ],
        rulesTitle: 'The only rules',
        rules: ['No hate, harassment or bullying.', 'No sexual or violent content.', 'No spam or ads.', "Respect other people's privacy."],
        rulesLink: 'Read the full Terms of Use',
        ctaTitle: 'Got a thought?',
        ctaBody: 'Someone out there is thinking the same thing.',
        contact: 'Questions or feedback?',
    },
    es: {
        title: 'Same Here — Comparte lo que piensas y descubre quién piensa igual',
        eyebrow: 'Para iPhone',
        tagline: 'Comparte lo que piensas. Descubre quién piensa igual.',
        intro: 'Pregunta lo que quieras con algunas respuestas posibles, responde lo que otros se preguntan y ve dónde estás tú — sin seguidores, sin feed que perseguir, sin presión.',
        soon: 'Muy pronto en el App Store',
        download: 'Descárgala en el App Store',
        tryIt: 'Pruébala aquí mismo →',
        howTitle: 'Cómo funciona',
        steps: [
            { title: 'Comparte un pensamiento', body: 'Escribe una pregunta, agrega las respuestas que la gente puede elegir y ponle un tema.' },
            { title: 'Responde a otros', body: 'Desliza entre lo que otras personas están pensando y toca la respuesta que va contigo.' },
            { title: 'Ve quién piensa igual', body: 'Los resultados aparecen en cuanto respondes: sabrás si estás con la mayoría o con los valientes.' },
        ],
        topicsTitle: 'Algo para cada momento',
        topicsBody: 'Los pensamientos se organizan por temas: pasa de una opinión polémica sobre comida a una pregunta seria sobre trabajo.',
        featuresTitle: 'Hecha para sentirse ligera',
        features: [
            { title: 'Empieza con un toque', body: 'Pruébala como invitado sin registrarte. Agrega un correo después para conservar tu cuenta si cambias de teléfono.' },
            { title: 'Tus respuestas, no tu perfil', body: 'Same Here se trata de lo que la gente piensa, no de quién tiene más seguidores. Aquí no hay.' },
            { title: 'Una comunidad amable', body: 'Reglas claras, un filtro de palabras ofensivas y puedes reportar cualquier pensamiento o bloquear a quien sea.' },
            { title: 'Sin anuncios ni rastreo', body: 'Sin publicidad, sin SDKs de analítica y nada se vende a terceros.' },
            { title: 'Inglés y español', body: 'Toda la app está disponible en inglés y en español latinoamericano.' },
            { title: 'Vete cuando quieras', body: 'Borra tu cuenta desde tu perfil y tus pensamientos y respuestas se van con ella.' },
        ],
        rulesTitle: 'Las únicas reglas',
        rules: ['Nada de odio, acoso ni bullying.', 'Nada de contenido sexual o violento.', 'Nada de spam ni anuncios.', 'Respeta la privacidad de los demás.'],
        rulesLink: 'Lee los Términos de uso completos',
        ctaTitle: '¿Tienes algo en mente?',
        ctaBody: 'Alguien allá afuera está pensando lo mismo.',
        contact: '¿Dudas o comentarios?',
    },
};

const DEMO_CAPTION: Localized<string> = {
    en: 'Interactive demo · sample questions and numbers',
    es: 'Demo interactiva · preguntas y números de ejemplo',
};

const STEP_ICONS = [MessageCircleHeart, Hand, BarChart3];
const FEATURE_ICONS = [UserRoundCheck, MessageCircleHeart, ShieldCheck, EyeOff, Languages, Trash2];

const AppStoreButton = ({ soon, download }: { soon: string; download: string }) =>
    SAMEHERE.appStoreUrl ? (
        <a href={SAMEHERE.appStoreUrl} className="sh-btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
            <Smartphone className="w-4 h-4" aria-hidden="true" />
            {download}
        </a>
    ) : (
        <span className="sh-btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm cursor-default opacity-90">
            <Smartphone className="w-4 h-4" aria-hidden="true" />
            {soon}
        </span>
    );

export const SameHereHome = () => {
    const lang = useSameHereLang();
    const t = COPY[lang];

    useEffect(() => {
        document.title = t.title;
    }, [t.title]);

    return (
        <main>
            {/* Hero */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-12 grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
                <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <img src={appIcon} alt="Same Here app icon" className="w-16 h-16 rounded-[18px] shadow-lg" />
                        <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--sh-violet)]">{t.eyebrow}</span>
                    </div>
                    <h1 className="sh-wordmark-hero text-7xl sm:text-8xl">Same Here</h1>
                    <p className="mt-6 text-2xl sm:text-3xl font-extrabold leading-tight text-[var(--sh-ink)]">{t.tagline}</p>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">{t.intro}</p>
                    <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                        <AppStoreButton soon={t.soon} download={t.download} />
                        <a href="#demo" className="sh-btn-ghost inline-flex items-center px-6 py-3 text-sm md:hidden">{t.tryIt}</a>
                    </div>
                </div>

                <figure id="demo" className="scroll-mt-24">
                    <div className="sh-float">
                        <ThoughtDemo lang={lang} />
                    </div>
                    <figcaption className="mt-6 text-center text-xs font-bold text-[var(--sh-ink-soft)]">{DEMO_CAPTION[lang]}</figcaption>
                </figure>
            </section>

            {/* How it works */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center">{t.howTitle}</h2>
                <ol className="mt-10 grid md:grid-cols-3 gap-4">
                    {t.steps.map((step, i) => {
                        const Icon = STEP_ICONS[i];
                        return (
                            <li key={step.title} className="sh-card p-6">
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-[var(--sh-ink)] text-white grid place-items-center font-extrabold">{i + 1}</span>
                                    <Icon className="w-6 h-6 text-[var(--sh-violet)]" aria-hidden="true" />
                                </div>
                                <h3 className="mt-4 text-lg font-extrabold">{step.title}</h3>
                                <p className="mt-1.5 leading-relaxed">{step.body}</p>
                            </li>
                        );
                    })}
                </ol>
            </section>

            {/* Topics */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
                <div className="sh-card p-8 sm:p-10 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">{t.topicsTitle}</h2>
                    <p className="mt-3 max-w-2xl mx-auto leading-relaxed">{t.topicsBody}</p>
                    <ul className="mt-6 flex flex-wrap justify-center gap-2">
                        {TOPICS[lang].map((topic, i) => (
                            <li
                                key={topic}
                                className="px-4 py-2 rounded-full text-sm font-extrabold text-[var(--sh-ink)]"
                                style={{ background: ['#fbe7a6', '#f2b8cc', '#c7bedb', '#b9cfee'][i % 4] }}
                            >
                                {topic}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Features */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center">{t.featuresTitle}</h2>
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {t.features.map((f, i) => {
                        const Icon = FEATURE_ICONS[i];
                        return (
                            <div key={f.title} className="sh-card p-6">
                                <Icon className="w-7 h-7 text-[var(--sh-violet)]" aria-hidden="true" />
                                <h3 className="mt-3 text-lg font-extrabold">{f.title}</h3>
                                <p className="mt-1.5 leading-relaxed">{f.body}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Rules */}
            <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
                <div className="sh-card p-8 sm:p-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold">{t.rulesTitle}</h2>
                    <ul className="mt-5 space-y-3">
                        {t.rules.map((rule) => (
                            <li key={rule} className="flex items-start gap-3 font-semibold text-[var(--sh-ink)]">
                                <ShieldCheck className="w-5 h-5 mt-0.5 shrink-0 text-[var(--sh-violet)]" aria-hidden="true" />
                                {rule}
                            </li>
                        ))}
                    </ul>
                    <Link to="/samehere/terms" className="inline-block mt-6 font-extrabold text-[var(--sh-violet)] hover:underline">
                        {t.rulesLink} →
                    </Link>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold">{t.ctaTitle}</h2>
                <p className="mt-3 text-lg">{t.ctaBody}</p>
                <div className="mt-8 flex justify-center">
                    <AppStoreButton soon={t.soon} download={t.download} />
                </div>
                <p className="mt-6 text-sm">
                    {t.contact}{' '}
                    <a href={`mailto:${SAMEHERE.supportEmail}`} className="font-extrabold text-[var(--sh-violet)] hover:underline">
                        {SAMEHERE.supportEmail}
                    </a>
                </p>
            </section>
        </main>
    );
};
