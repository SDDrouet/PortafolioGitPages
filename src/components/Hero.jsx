import React from 'react';
import TextType from '../react-bits-components/TextType';

export const Hero = () => {
    return (
        <section id="sobre-mi" className="min-h-[calc(100vh-140px)] flex items-center pt-6 mb-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto w-full">
                <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
                        Ingeniero de
                        <span className="text-blue-400"> Software</span>                        
                    </h2>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 min-h-[3rem]'>                        
                        <TextType
                            text={["🙌 ¡Bienvenido!", "👀 Descubre mi trabajo", "⏱️ Tómate tu tiempo"]}
                            typingSpeed={50}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </h3>
                    <p className="text-base sm:text-xl text-gray-400 max-w-2xl">
                        Hola soy <span className="text-blue-300 font-semibold">Stephen Drouet</span>, desarrollador full-stack apasionado por crear experiencias excepcionales.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                        <a href="#contacto" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors text-center">
                            Contáctame
                        </a>
                        
                        <a href="#proyectos" className="px-6 py-3 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors text-center">
                            Ver Proyectos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};