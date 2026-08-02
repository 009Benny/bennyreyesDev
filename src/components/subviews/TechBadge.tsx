import { 
  Code2, 
  Layers, 
  FileCode, 
  Atom, 
  Terminal, 
  Cpu 
} from 'lucide-react';

export type TechName = 
  | 'Swift' 
  | 'SwiftUI' 
  | 'Objective-C' 
  | 'Kotlin' 
  | 'Java' 
  | 'Python' 
  | 'React' 
  | 'TypeScript';

interface TechConfig {
  styles: string;
  icon: React.ElementType;
}

const TECH_MAP: Record<TechName, TechConfig> = {
  Swift: {
    styles: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    icon: Code2,
  },
  SwiftUI: {
    styles: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    icon: Layers,
  },
  'Objective-C': {
    styles: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    icon: Cpu,
  },
  Kotlin: {
    styles: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    icon: Code2,
  },
  Java: {
    styles: "text-red-400 bg-red-500/10 border-red-500/20",
    icon: FileCode,
  },
  Python: {
    styles: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    icon: Terminal,
  },
  React: {
    styles: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    icon: Atom,
  },
  TypeScript: {
    styles: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    icon: FileCode,
  },
};

interface TechBadgeProps {
  name: TechName;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  const config = TECH_MAP[name];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border transition-all hover:scale-105 cursor-default ${config.styles}`}>
      <Icon className="w-3.5 h-3.5" />
      {name}
    </span>
  );
};