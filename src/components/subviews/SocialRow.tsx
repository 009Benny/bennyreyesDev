import { SOCIAL_CONFIG, type SocialCardProps } from '../helpers/SocialOptions.tsx';

export const SocialRow = ({ platform, url }: SocialCardProps) => {
  const config = SOCIAL_CONFIG[platform];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group block bg-[#161618] border border-white/10 hover:border-white/20 rounded-2xl p-4 transition-all duration-300 focus:outline-none"
    >
      <div className="flex items-center gap-4">
        
        {/* Icon container */}
        <div
          className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${config.iconBg} ${config.iconColor}`}
        >
          <Icon className="w-5 h-5" />
        </div>

        {/* Texts */}
        <div className="overflow-hidden">
          <h4 className="text-sm font-semibold text-white tracking-tight">
            {config.title}
          </h4>
          <p className="text-xs text-gray-400 font-medium mt-0.5 truncate group-hover:text-gray-300 transition-colors">
            {config.subtitle}
          </p>
        </div>

      </div>
    </a>
  );
};