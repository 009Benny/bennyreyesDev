import type { ReactNode } from "react";

interface BentoCardProps {
    children?: ReactNode;
    className?: string;
}

export const BentoCard = ({ children, className = '' }: BentoCardProps) => {
    return (
       <div className={`bg-[#161618] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden h-full ${className}`}>
            {children}
       </div>
    );
}