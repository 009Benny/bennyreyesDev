import { BentoCard } from "./BentoCard";
import { StatusBadge } from "../subviews/StatusBadge";
import { MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export const LocationCard = () => {
    const [localDateLine, setLocalDateLine] = useState<string>('');
    const [localTimeLine, setLocalTimeLine] = useState<string>('');

    useEffect(() => {
        const ordinal = (n: number) => {
            const s = String(n);
            const v = n % 100;
            if (v >= 11 && v <= 13) return s + 'th';
            switch (n % 10) {
                case 1:
                    return s + 'st';
                case 2:
                    return s + 'nd';
                case 3:
                    return s + 'rd';
                default:
                    return s + 'th';
            }
        };

        const updateTime = () => {
            const now = new Date();
            const dayStr = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Monterrey', day: 'numeric' }).format(now);
            const monthStr = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Monterrey', month: 'long' }).format(now);
            const dayNum = Number(dayStr);
            const dateLine = `${ordinal(dayNum)} ${monthStr}`;
            const timeLine = new Intl.DateTimeFormat('en-US', {
                timeZone: 'America/Monterrey',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
            }).format(now);

            setLocalDateLine(dateLine);
            setLocalTimeLine(timeLine);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    

    return (
        <BentoCard className="md:col-span-1">
            <div className="flex flex-col justify-between h-full space-y-6">

                {/* Map + Status Badge*/}
                <div className="flex items-start justify-between gap-2">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                        <MapPin className="w-5 h-5" />
                    </div>

                    <StatusBadge isAvailable={true} />
                </div>

                {/* Locality and local time */}
                <div className="space-y-3">
                    <div>
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-white tracking-tight">México</h2>
                        <span className="text-lg">🇲🇽</span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">
                        Monterrey, N.L.
                    </p>
                    </div>

                    {/* Reloj Digital de Monterrey */}
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-gray-300">
                    <Clock className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                    <div className="leading-tight">
                        <div className="text-sm font-medium text-white">{localDateLine || '—'}</div>
                        <div className="text-xs text-gray-300 font-mono">{localTimeLine || '00:00 PM'}</div>
                    </div>
                    </div>
                </div>


                {/* Sección Inferior: Cápsula GMT-6 & Badges de Modalidad de Trabajo */}
                <div className="space-y-3 pt-2 border-t border-white/5">
                    

                    {/* Cápsula inferior con la zona horaria */}
                    <div className="inline-block bg-white/5 border border-white/10 px-3 py-1 rounded-xl text-[11px] text-gray-400 font-medium">
                        GMT-6 · Monterrey CST
                    </div>
                </div>

            </div>
        </BentoCard>
    )
}