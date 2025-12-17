export function Logo({ className }: { className?: string }) {
    return (
        <span className={`font-extrabold tracking-tight ${className}`}>
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                Logos
            </span>
        </span>
    );
}
