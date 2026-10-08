import { useState } from 'react';
import { ChevronRight, User } from 'lucide-react';
import type { Lang, Localized } from './i18n';

type DemoThought = {
    topic: string;
    message: string;
    options: { title: string; votes: number }[];
};

// Sample questions for the demo only — the numbers are illustrative.
const THOUGHTS: Localized<DemoThought[]> = {
    en: [
        { topic: 'Food', message: 'Pineapple on pizza?', options: [{ title: 'Yes, always', votes: 38 }, { title: 'Absolutely not', votes: 47 }, { title: "Only when no one's looking", votes: 15 }] },
        { topic: 'Work', message: 'Where do you get your best work done?', options: [{ title: 'At home', votes: 52 }, { title: 'At the office', votes: 21 }, { title: 'In a café', votes: 27 }] },
        { topic: 'Travel', message: 'Beach or mountains?', options: [{ title: 'Beach', votes: 56 }, { title: 'Mountains', votes: 44 }] },
        { topic: 'Technology', message: 'How many unread notifications do you have right now?', options: [{ title: 'Zero, always', votes: 18 }, { title: 'A few', votes: 41 }, { title: "I've stopped counting", votes: 41 }] },
    ],
    es: [
        { topic: 'Comida', message: '¿Piña en la pizza?', options: [{ title: 'Sí, siempre', votes: 38 }, { title: 'Jamás', votes: 47 }, { title: 'Solo si nadie me ve', votes: 15 }] },
        { topic: 'Trabajo', message: '¿Dónde trabajas mejor?', options: [{ title: 'En casa', votes: 52 }, { title: 'En la oficina', votes: 21 }, { title: 'En un café', votes: 27 }] },
        { topic: 'Viajes', message: '¿Playa o montaña?', options: [{ title: 'Playa', votes: 56 }, { title: 'Montaña', votes: 44 }] },
        { topic: 'Tecnología', message: '¿Cuántas notificaciones sin leer tienes ahora mismo?', options: [{ title: 'Cero, siempre', votes: 18 }, { title: 'Unas cuantas', votes: 41 }, { title: 'Ya perdí la cuenta', votes: 41 }] },
    ],
};

const COPY: Localized<{ tap: string; next: string; same: (n: number) => string; demo: string }> = {
    en: { tap: 'Tap an answer', next: 'Next', same: (n) => `${n}% think the same as you`, demo: 'Demo' },
    es: { tap: 'Toca una respuesta', next: 'Siguiente', same: (n) => `El ${n}% piensa lo mismo que tú`, demo: 'Demo' },
};

/** A clickable phone that behaves like the app's thought card. */
export const ThoughtDemo = ({ lang }: { lang: Lang }) => {
    const [index, setIndex] = useState(0);
    const [picked, setPicked] = useState<number | null>(null);

    const thoughts = THOUGHTS[lang];
    const thought = thoughts[index % thoughts.length];
    const t = COPY[lang];

    // Your own vote counts too, like in the app.
    const counts = thought.options.map((o, i) => o.votes + (picked === i ? 1 : 0));
    const total = counts.reduce((a, b) => a + b, 0);
    const pct = (i: number) => Math.round((counts[i] / total) * 100);

    const next = () => {
        setPicked(null);
        setIndex((i) => i + 1);
    };

    return (
        <div className="sh-phone mx-auto" aria-label={lang === 'es' ? 'Demostración interactiva de la app' : 'Interactive app demo'}>
            <div className="sh-phone-island" />
            <div className="sh-phone-screen flex flex-col px-4 pt-14 pb-5">
                <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-[13px] font-extrabold text-[var(--sh-ink)]">Same Here</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--sh-ink-soft)]/80">{t.demo}</span>
                </div>

                {/* The card underneath, peeking out like the swipe stack in the app */}
                <div className="relative flex-1">
                    <div className="absolute inset-x-3 top-3 bottom-0 sh-card opacity-60" aria-hidden="true" />

                    <div key={`${lang}-${index}`} className="sh-card sh-card-enter absolute inset-0 p-4 flex flex-col">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-full bg-white/70 text-[var(--sh-violet)]">
                                {thought.topic}
                            </span>
                            <User className="w-3.5 h-3.5 text-[var(--sh-ink-soft)]" aria-hidden="true" />
                        </div>

                        <p className="mt-4 text-[19px] leading-snug font-extrabold text-[var(--sh-ink)]">
                            {thought.message}
                        </p>

                        <div className="mt-auto space-y-2">
                            {thought.options.map((o, i) => {
                                const chosen = picked === i;
                                return (
                                    <button
                                        key={o.title}
                                        type="button"
                                        disabled={picked !== null}
                                        onClick={() => setPicked(i)}
                                        className={`relative w-full overflow-hidden rounded-xl text-left text-[13px] font-bold px-3 py-2.5 transition-colors ${chosen ? 'ring-2 ring-[var(--sh-violet)]' : ''} ${picked === null ? 'bg-white/70 hover:bg-white' : 'bg-white/50'}`}
                                    >
                                        {picked !== null && (
                                            <span
                                                className="sh-bar-fill absolute inset-y-0 left-0"
                                                style={{
                                                    width: `${pct(i)}%`,
                                                    background: chosen ? 'rgba(106,58,150,0.28)' : 'rgba(125,166,218,0.30)',
                                                }}
                                                aria-hidden="true"
                                            />
                                        )}
                                        <span className="relative flex justify-between gap-2 text-[var(--sh-ink)]">
                                            <span>{o.title}</span>
                                            {picked !== null && <span className="tabular-nums">{pct(i)}%</span>}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="mt-3 h-8 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-[var(--sh-ink-soft)]" aria-live="polite">
                                {picked === null ? t.tap : t.same(pct(picked))}
                            </span>
                            {picked !== null && (
                                <button type="button" onClick={next} className="sh-btn-primary text-[11px] px-3 py-1.5 flex items-center gap-0.5">
                                    {t.next}
                                    <ChevronRight className="w-3 h-3" aria-hidden="true" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
