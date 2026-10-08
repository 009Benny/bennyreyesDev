import { useOutletContext } from 'react-router-dom';

/** The two languages the app ships in (en + es-419), so the site matches. */
export type Lang = 'en' | 'es';

export type Localized<T> = Record<Lang, T>;

const STORAGE_KEY = 'samehere.lang';

/**
 * Picks the starting language: `?lang=es` wins (handy for linking from the
 * Spanish build of the app), then the visitor's last choice, then the browser.
 */
export function initialLang(): Lang {
    if (typeof window === 'undefined') return 'en';

    const fromQuery = new URLSearchParams(window.location.search).get('lang');
    if (fromQuery === 'es' || fromQuery === 'en') return fromQuery;

    try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === 'es' || saved === 'en') return saved;
    } catch {
        // Storage can be blocked (private mode, in-app browsers). Fall through.
    }

    return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function saveLang(lang: Lang) {
    try {
        window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
        // Not critical — the toggle still works for this visit.
    }
}

export type SameHereContext = { lang: Lang };

export const useSameHereLang = () => useOutletContext<SameHereContext>().lang;

/** Shared facts, so the pages never disagree with each other or with the app. */
export const SAMEHERE = {
    supportEmail: 'bennyreyesdev@gmail.com',
    developer: 'Benny Reyes',
    lastUpdated: { en: 'October 8, 2026', es: '8 de octubre de 2026' } as Localized<string>,
    // Set this once the App Store listing is live; the page switches from
    // "Coming soon" to a real download button.
    appStoreUrl: null as string | null,
};
