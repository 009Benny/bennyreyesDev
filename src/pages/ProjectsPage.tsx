import { useEffect, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import sameHereIcon from '../assets/samehere/app-icon.jpg';
import { SAMEHERE } from './samehere/i18n';

// The wordmark is styled inline (not with the .samehere CSS classes) so this
// page doesn't depend on Same Here's own stylesheet scope.
const SAME_HERE_INK = '#35194f';
const SAME_HERE_INK_SOFT = '#5d4a73';
const SAME_HERE_VIOLET = '#6a3a96';

const wordmarkStyle: CSSProperties = {
    fontFamily: "'Yellowtail', 'Brush Script MT', cursive",
    color: SAME_HERE_VIOLET,
    paintOrder: 'stroke fill',
    WebkitTextStroke: '0.14em #fdf1d0',
    filter: 'drop-shadow(0.035em 0.05em 0 #e9a7c0) drop-shadow(0 0.08em 0.12em rgba(53, 25, 79, 0.25))',
    lineHeight: 1.05,
};

type Project = {
    id: string;
    to: string;
    name: string;
    kind: string;
    tagline: string;
    description: string;
    stack: string[];
};

// Add the next project here and it shows up on the page.
const PROJECTS: Project[] = [
    {
        id: 'samehere',
        to: '/samehere',
        name: 'Same Here',
        kind: 'iOS app',
        tagline: 'Share a thought. Find out who thinks the same.',
        description:
            "An iPhone app to ask anything with a few possible answers, answer what other people are wondering and see where you stand. Available in English and Spanish.",
        stack: ['SwiftUI', 'Supabase'],
    },
];

const ProjectBanner = ({ project }: { project: Project }) => {
    const status = SAMEHERE.appStoreUrl ? 'Available on the App Store' : 'Coming soon to the App Store';

    return (
        <Link
            to={project.to}
            aria-label={`${project.name} — ${project.tagline}`}
            className="group relative block overflow-hidden rounded-3xl border border-white/10 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            style={{ background: 'linear-gradient(135deg, #7da6da 0%, #c7bedb 34%, #f2b8cc 68%, #fbe7a6 100%)' }}
        >
            {/* Soft light so the gradient doesn't feel flat */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(60% 80% at 100% 0%, rgba(255,255,255,0.45), transparent 70%)' }}
            />

            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center p-7 sm:p-10">
                <div className="order-2 md:order-1">
                    <span
                        className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider"
                        style={{ color: SAME_HERE_VIOLET }}
                    >
                        {project.kind} · {status}
                    </span>

                    <h2 className="mt-4 text-6xl sm:text-7xl font-normal tracking-normal" style={wordmarkStyle}>
                        {project.name}
                    </h2>

                    <p className="mt-4 text-xl sm:text-2xl font-extrabold leading-snug" style={{ color: SAME_HERE_INK }}>
                        {project.tagline}
                    </p>
                    <p className="mt-2 max-w-xl text-sm sm:text-base leading-relaxed" style={{ color: SAME_HERE_INK_SOFT }}>
                        {project.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <li
                                key={tech}
                                className="rounded-full bg-white/55 px-3 py-1 text-xs font-bold"
                                style={{ color: SAME_HERE_INK }}
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>

                    <span
                        className="mt-7 inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-colors group-hover:!bg-[#6a3a96]"
                        style={{ background: SAME_HERE_INK }}
                    >
                        Explore {project.name}
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <img
                        src={sameHereIcon}
                        alt={`${project.name} app icon`}
                        className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-[28%] shadow-2xl shadow-[#35194f]/30 rotate-3 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105"
                    />
                </div>
            </div>
        </Link>
    );
};

export const ProjectsPage = () => {
    useEffect(() => {
        const previous = document.title;
        document.title = 'Projects — Benny Reyes';
        return () => {
            document.title = previous;
        };
    }, []);

    return (
        <main className="max-w-5xl mx-auto px-4 lg:px-0 py-10 sm:py-14">
            <header className="max-w-xl">
                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Projects</h1>
                <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                    Apps and products I design, build and ship.
                </p>
            </header>

            <section aria-label="Projects" className="mt-8 flex flex-col gap-6">
                {PROJECTS.map((project) => (
                    <ProjectBanner key={project.id} project={project} />
                ))}
            </section>
        </main>
    );
};
