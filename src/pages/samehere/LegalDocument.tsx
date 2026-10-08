import { useEffect, type ReactNode } from 'react';
import { SAMEHERE, type Lang } from './i18n';

export type LegalSection = { id: string; heading: string; body: ReactNode };

type Props = {
    lang: Lang;
    title: string;
    documentTitle: string;
    intro: ReactNode;
    sections: LegalSection[];
};

/** Readable long-form layout shared by the Terms and Privacy pages. */
export const LegalDocument = ({ lang, title, documentTitle, intro, sections }: Props) => {
    useEffect(() => {
        document.title = documentTitle;
    }, [documentTitle]);

    const updated = lang === 'es' ? 'Última actualización' : 'Last updated';
    const contents = lang === 'es' ? 'Contenido' : 'Contents';

    return (
        <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
            <article className="sh-card sh-legal p-6 sm:p-10">
                <header className="pb-6 border-b border-[var(--sh-ink)]/10">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--sh-violet)]">Same Here</p>
                    <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h1>
                    <p className="mt-2 text-sm">
                        {updated}: {SAMEHERE.lastUpdated[lang]}
                    </p>
                </header>

                <div className="mt-6">{intro}</div>

                <nav aria-label={contents} className="mt-6 rounded-2xl bg-white/50 p-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--sh-ink)]">{contents}</p>
                    <ol className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm list-decimal pl-5">
                        {sections.map((s) => (
                            <li key={s.id}>
                                <a href={`#${s.id}`} className="!font-semibold !no-underline hover:!underline">{s.heading}</a>
                            </li>
                        ))}
                    </ol>
                </nav>

                {sections.map((s, i) => (
                    <section key={s.id} id={s.id}>
                        <h2>
                            {i + 1}. {s.heading}
                        </h2>
                        {s.body}
                    </section>
                ))}
            </article>
        </main>
    );
};
