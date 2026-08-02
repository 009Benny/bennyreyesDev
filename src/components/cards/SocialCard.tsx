import { BentoCard } from './BentoCard';
import { ArrowUpRight } from 'lucide-react';
import { SOCIAL_CONFIG, type SocialCardProps } from '../helpers/SocialOptions.tsx';

export const SocialCard = ({ platform, url }: SocialCardProps) => {
  const config = SOCIAL_CONFIG[platform];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group block h-full focus:outline-none"
    >
      <BentoCard className="md:col-span-1 hover:border-white/20 transition-all duration-300">
        <div className="flex flex-col justify-between h-full min-h-[140px] space-y-4">
          
          {/* Icon social media */}
          <div
            className={`w-10 h-10 rounded-2xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${config.iconBg} ${config.iconColor}`}
          >
            <Icon className="w-5 h-5" />
          </div>

          {/* Titles */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight">
              {config.title}
            </h4>
            <p className="text-xs text-gray-500 font-medium mt-0.5">
              {config.subtitle}
            </p>
          </div>

          {/* Link */}
          <div className="pt-1">
            <ArrowUpRight
              className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${config.arrowColor}`}
            />
          </div>

        </div>
      </BentoCard>
    </a>
  );
};