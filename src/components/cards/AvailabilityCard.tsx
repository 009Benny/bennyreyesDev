import { BentoCard } from './BentoCard';
import { WorkModeBadge, type WorkMode } from "../subviews/WorkModeBadge";

type AvailabilityStatus = 'open' | 'limited' | 'unavailable';

// const workModes: WorkMode[] = ['Remote', 'Hybrid', 'On-site'];
const workModes: WorkMode[] = [];

interface ServiceAvailability {
  title: string;
  label: string;
  status: AvailabilityStatus;
}

const STATUS_CONFIG: Record<AvailabilityStatus, { text: string; dot: string }> = {
  open: {
    text: "text-emerald-400",
    dot: "bg-emerald-500 shadow-emerald-500/50",
  },
  limited: {
    text: "text-amber-400",
    dot: "bg-amber-400 shadow-amber-400/50",
  },
  unavailable: {
    text: "text-red-400",
    dot: "bg-red-500 shadow-red-500/50",
  },
};

export const AvailabilityCard = () => {
  const services: ServiceAvailability[] = [
    { title: "New project", label: "Open", status: "open" },
    { title: "Consulting", label: "Open", status: "open" },
    { title: "Full-time", label: "Open", status: "open" },
  ];

  return (
    <BentoCard className="md:col-span-1">
      <div className="flex flex-col justify-between h-full space-y-4">
        
        {/* Title */}
        <h3 className="text-sm font-bold text-white tracking-tight">
          Availability & Services
        </h3>
        
        {/* List of Services */}
        <div className="space-y-3">
          {services.map((item, index) => {
            const config = STATUS_CONFIG[item.status];

            return (
              <div 
                key={index} 
                className="flex items-center justify-between text-xs py-1"
              >
                <div className="flex items-center gap-2.5">
                  <span 
                    className={`w-3 h-3 rounded-full shrink-0 shadow-sm ${config.dot}`} 
                  />
                  <span className="text-gray-400 font-medium">
                    {item.title}
                  </span>
                </div>

                <span className={`font-semibold ${config.text}`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Badges de Modalidad (Remote, Hybrid, On-site) */}
        <div className="flex flex-wrap gap-1.5">
            {workModes.map((mode) => (
            <WorkModeBadge key={mode} mode={mode} />
            ))}
        </div>

      </div>
    </BentoCard>
  );
};