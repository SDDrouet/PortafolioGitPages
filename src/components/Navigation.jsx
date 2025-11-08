import React from 'react';

export const Navigation = ({ activeSection, scrollToSection }) => {
    const navItems = [
        { id: 'sobre-mi', label: 'Sobre mí', shortLabel: 'Inicio' },
        { id: 'proyectos', label: 'Proyectos', shortLabel: 'Proyectos' },
        { id: 'certificados', label: 'Certificados', shortLabel: 'Certificados' },
        { id: 'habilidades', label: 'Habilidades', shortLabel: 'Habilidades' },
        { id: 'contacto', label: 'Contacto', shortLabel: 'Contacto' }
    ];

    return (
        <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-30">
            {/* Desktop and Large Mobile Layout */}
            <div className="hidden md:block">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg sm:text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
                            Stephen Drouet
                        </h1>
                        <div className="flex gap-1 sm:gap-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative cursor-pointer px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 ease-out group overflow-hidden ${
                                        activeSection === item.id 
                                            ? 'text-blue-400 bg-blue-500/10 shadow-lg shadow-blue-500/20' 
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                    }`}
                                >
                                    {/* Background hover effect */}
                                    <div className={`absolute inset-0 transition-all duration-300 ease-out ${
                                        activeSection === item.id
                                            ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 scale-100'
                                            : 'bg-gradient-to-r from-gray-700/0 to-gray-600/0 scale-0 group-hover:scale-100 group-hover:from-gray-700/30 group-hover:to-gray-600/30'
                                    }`}></div>
                                    
                                    {/* Animated underline */}
                                    <div className={`absolute bottom-0 left-1/2 h-0.5 transition-all duration-300 ease-out ${
                                        activeSection === item.id
                                            ? 'w-3/4 bg-blue-400 -translate-x-1/2'
                                            : 'w-0 bg-gray-300 -translate-x-1/2 group-hover:w-1/2'
                                    }`}></div>
                                    
                                    {/* Text with subtle scale animation */}
                                    <span className="relative z-10 transition-transform duration-200 ease-out group-hover:scale-105">
                                        {item.label}
                                    </span>
                                    
                                    {/* Subtle glow effect for active state */}
                                    {activeSection === item.id && (
                                        <div className="absolute inset-0 rounded-lg bg-blue-400/5 animate-pulse"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden">
                
                
                {/* Mobile Navigation - Horizontal Scroll */}
                <div className="px-2 py-2">
                    <div className="flex gap-1 overflow-x-auto scrollbar-hide mobile-nav-scroll pb-1 snap-x snap-mandatory">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative cursor-pointer flex-shrink-0 mobile-nav-button px-4 py-2.5 text-xs font-medium rounded-lg transition-all duration-300 ease-out group overflow-hidden min-w-fit snap-center active:scale-95 ${
                                    activeSection === item.id 
                                        ? 'text-blue-400 bg-blue-500/15 shadow-md shadow-blue-500/25 border border-blue-500/30' 
                                        : 'text-gray-400 active:text-white active:bg-gray-800/60 border border-transparent'
                                }`}
                            >
                                {/* Background active effect for mobile */}
                                <div className={`absolute inset-0 transition-all duration-300 ease-out ${
                                    activeSection === item.id
                                        ? 'bg-gradient-to-r from-blue-500/15 to-blue-600/15 scale-100'
                                        : 'bg-gradient-to-r from-gray-700/0 to-gray-600/0 scale-0 group-active:scale-100 group-active:from-gray-700/40 group-active:to-gray-600/40'
                                }`}></div>
                                
                                {/* Active indicator dot */}
                                {activeSection === item.id && (
                                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                                )}
                                
                                {/* Bottom indicator line for active state */}
                                <div className={`absolute bottom-0 left-1/2 h-0.5 transition-all duration-300 ease-out ${
                                    activeSection === item.id
                                        ? 'w-3/4 bg-blue-400 -translate-x-1/2'
                                        : 'w-0 bg-blue-400 -translate-x-1/2'
                                }`}></div>
                                
                                {/* Text */}
                                <span className="relative z-10 transition-transform duration-200 ease-out">
                                    {item.shortLabel}
                                </span>
                            </button>
                        ))}
                    </div>
                    
                    {/* Scroll hint for mobile */}
                    <div className="flex justify-center mt-1">
                        <div className="flex gap-1">
                            {navItems.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-1 h-1 rounded-full transition-all duration-300 ${
                                        navItems.findIndex(item => item.id === activeSection) === index
                                            ? 'bg-blue-400 w-3'
                                            : 'bg-gray-600'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};