import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { House, FolderOpen } from 'lucide-react';

export const NotFoundPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const previousTitle = document.title;
        document.title = 'Page not found — bennyreyes.dev';

        // The server answers every unknown URL with the app (status 200), so tell
        // search engines not to index these as real pages.
        const robots = document.createElement('meta');
        robots.name = 'robots';
        robots.content = 'noindex';
        document.head.appendChild(robots);

        return () => {
            document.title = previousTitle;
            robots.remove();
        };
    }, []);

    return (
        <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
            <div className="max-w-md w-full text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Error 404</p>

                <h1 className="mt-3 text-8xl sm:text-9xl font-bold tracking-tighter bg-gradient-to-b from-white to-white/15 bg-clip-text text-transparent">
                    404
                </h1>

                <h2 className="mt-2 text-2xl font-semibold text-white tracking-tight">This page doesn't exist</h2>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    The link may be broken, or the page may have moved.
                </p>

                <p className="mt-5 mx-auto max-w-full break-all rounded-xl border border-white/10 bg-[#161618] px-4 py-2 font-mono text-xs text-gray-500">
                    bennyreyes.dev{pathname}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-blue-500"
                    >
                        <House className="w-3.5 h-3.5" aria-hidden="true" />
                        Back to home
                    </Link>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold text-gray-300 transition-all hover:bg-white/10"
                    >
                        <FolderOpen className="w-3.5 h-3.5" aria-hidden="true" />
                        See my projects
                    </Link>
                </div>
            </div>
        </main>
    );
};
