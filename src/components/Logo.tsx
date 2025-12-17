export function Logo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 ring-1 ring-white/10">
                <svg
                    className="h-5 w-5 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 4V20M8 8V16M16 8V16M4 11V13M20 11V13"
                        stroke="url(#logo-gradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <defs>
                        <linearGradient id="logo-gradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3B82F6" />
                            <stop offset="1" stopColor="#F97316" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <span className="font-extrabold tracking-tight text-xl">
                <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                    Logos
                </span>
            </span>
        </div>
    );
}
