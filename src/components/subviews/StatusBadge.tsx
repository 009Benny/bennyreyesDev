interface StatusBadgeProps {
    isAvailable: Boolean;
}

export const StatusBadge = ({
    isAvailable = true
}: StatusBadgeProps) => {
    const containerStyles = isAvailable ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" : "text-amber-400 bg-amber-500/10 border-amber-500/20";
    const dotStyles = isAvailable ? "bg-emerald-400 animate-pulse" : "bg-amber-400";
    const labelText = isAvailable ? "Available" : "Unavailable";
    return (    
        <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-emerald-500/20 mb-2 transition-colors ${containerStyles}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${dotStyles}`} />
            { labelText }
        </span>
    )
}