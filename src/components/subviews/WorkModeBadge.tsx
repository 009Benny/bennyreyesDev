import { Laptop, Building2, MapPin } from 'lucide-react';

export type WorkMode = 'Remote' | 'Hybrid' | 'On-site';

interface WorkModeConfig {
  styles: string;
  icon: React.ElementType;
}

const WORK_MODE_MAP: Record<WorkMode, WorkModeConfig> = {
  Remote: {
    styles: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    icon: Laptop,
  },
  Hybrid: {
    styles: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    icon: Building2,
  },
  'On-site': {
    styles: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    icon: MapPin,
  },
};

interface WorkModeBadgeProps {
  mode: WorkMode;
}

export const WorkModeBadge = ({ mode }: WorkModeBadgeProps) => {
  const config = WORK_MODE_MAP[mode];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border transition-all ${config.styles}`}>
      <Icon className="w-3.5 h-3.5" />
      {mode}
    </span>
  );
};