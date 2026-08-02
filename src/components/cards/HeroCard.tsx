import { BentoCard } from "./BentoCard";
import { StatusBadge } from "../subviews/StatusBadge";
import avatar from "../../assets/profile/BennyAI.png";
import { TechBadge, type TechName } from "../subviews/TechBadge";

interface HeroCardProps {
    name:string;
    role:string;
    description:string;
    isAvailable:boolean;
    stack:Array<TechName>;
}

export const HeroCard = ({
    name = "Benny Reyes",
    role = "Software Engineer",
    description = "",
    isAvailable = true,
    stack = []
}: HeroCardProps) => {
    return (
        <BentoCard className=" md:col-span-3">

            {/* Top Container */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">

                {/* Avatar */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="relative w-40 h-40 shrink-0">
                        <img 
                            src = {avatar}
                            alt = "Benny Reyes"
                            className = "w-full h-full rounded-2xl object-cover border border-white/10"
                        />
                    </div>
                </div>

                {/* Titles and description */}
                <div>
                    <StatusBadge isAvailable={isAvailable} />
                    <h1 className="text-2xl font-bold text-white tracking-tight">{name}</h1>
                    <p className="text-xs text-blue-400 font-medium mt-1">{role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>                
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2 mb-4">
                {stack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
                <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all text-center">
                    View my work →
                </a>
                <a href="/cv.pdf" target="_blank" rel="noreferrer" className="bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 text-xs font-semibold px-5 py-2.5 rounded-full transition-all text-center">
                    Download CV
                </a>
            </div>
        </BentoCard>
    );
}