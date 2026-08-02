import logo from '../assets/profile/logo.jpg';

export const NavBar = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#161618]/80 backdrop-blur-md border-b border-white/10">
            <div className="flex justify-between items-center py-4 px-2 max-w-5xl mx-auto text-sm">

                {/* Logo */}
                <div className="flex items-center gap-0">
                    <img src={logo} alt="Logo" className="w-8 h-8 rounded-full flex mr-2" />
                    <span className="font-semibold tracking-tight text-white">bennyreyes</span>
                    <span className="text-blue-500">.dev</span>
                </div>

                {/* Sections */}
                <nav className="flex gap-6 items-center text-gray-400">
                    <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">About</a>
                    {/* <a href="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">Projects</a> */}
                    <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
                    <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy</a>
                    <a href="https://calendly.com/009bennyreyes/30min" className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-1.5 rounded-full transition-all text-xs">Agend Call</a>
                </nav>

            </div>
        </header>
    );
};