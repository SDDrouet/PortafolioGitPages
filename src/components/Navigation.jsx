import React, { useState } from 'react';
import { IconHome, IconFolders, IconCertificate, IconCode, IconMail } from '@tabler/icons-react';

const navItems = [
    { id: 'sobre-mi', label: 'Sobre mí', icon: IconHome },
    { id: 'proyectos', label: 'Proyectos', icon: IconFolders },
    { id: 'certificados', label: 'Certificados', icon: IconCertificate },
    { id: 'habilidades', label: 'Habilidades', icon: IconCode },
    { id: 'contacto', label: 'Contacto', icon: IconMail },
];

export const Navigation = ({ activeSection, scrollToSection }) => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <>
            {/* Sidebar Desktop */}
            <nav className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1 py-4 px-3">
                <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gray-700/50 to-transparent -z-10" />

                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    const isHovered = hoveredId === item.id;

                    return (
                        <div key={item.id} className="relative flex items-center">
                            <button
                                onClick={() => scrollToSection(item.id)}
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                aria-label={item.label}
                                className={`group relative flex items-center justify-center w-11 h-11 rounded-full cursor-pointer
                                    transition-all duration-300 ease-out
                                    ${isActive
                                        ? 'text-blue-400 bg-blue-500/10 backdrop-blur-sm ring-1 ring-blue-400/30 shadow-lg shadow-blue-500/10'
                                        : 'text-gray-500 hover:text-gray-200 hover:bg-gray-800/40'
                                    }`}
                            >
                                <Icon
                                    className={`transition-transform duration-300 ease-out ${
                                        isActive ? 'scale-110' : 'group-hover:scale-110'
                                    }`}
                                    size={19}
                                    stroke={1.75}
                                />

                                {isActive && (
                                    <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                                )}
                            </button>

                            {/* Tooltip */}
                            <div
                                className={`absolute left-full ml-3 whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium
                                    bg-gray-900/90 backdrop-blur-sm border border-gray-800/80 text-gray-200 shadow-xl
                                    transition-all duration-200 ease-out pointer-events-none
                                    ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                            >
                                {item.label}
                            </div>
                        </div>
                    );
                })}
            </nav>

            {/* Sidebar Mobile */}
            <nav className="flex md:hidden fixed left-1.5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1.5 py-2">
                <div className="absolute left-1/2 -translate-x-1/2 top-1 bottom-1 w-px bg-gradient-to-b from-transparent via-gray-700/40 to-transparent -z-10" />

                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            aria-label={item.label}
                            className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 active:scale-90
                                ${isActive
                                    ? 'text-blue-400 bg-blue-500/15 ring-1 ring-blue-400/30'
                                    : 'text-gray-500 active:text-gray-200 active:bg-gray-800/50'
                                }`}
                        >
                            <Icon size={16} stroke={1.75} />
                            {isActive && (
                                <span className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue-400" />
                            )}
                        </button>
                    );
                })}
            </nav>
        </>
    );
};