export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 mt-auto py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        
                {/* Lado Izquierdo: Copyright & Detalle */}
                <p className="flex items-center gap-1 font-medium text-center sm:text-left">
                    © {currentYear} Benny Reyes · Hecho con Swift, React & ☕
                </p>

                {/* Lado Derecho: Enlaces de Navegación del Footer */}
                <nav className="flex items-center gap-6 font-medium">
                    <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">About</a>
                    {/* <a href="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">Projects</a> */}
                    <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
                    <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy</a>
                </nav>
            </div>
            
        </footer>
    );
}