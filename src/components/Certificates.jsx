import React from 'react';
import {
    IconChevronLeft,
    IconChevronRight
} from '@tabler/icons-react';

export const Certificates = ({
    certificates,
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide
}) => {
    return (
        <section id="certificados" className="min-h-screen py-4 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-white">Certificados</h3>

                {/* Slider Container */}
                <div className='max-w-xl mx-auto'>
                    <div className="relative">
                        {/* Slider */}
                        <div className="overflow-hidden rounded-xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {certificates.map((certificate) => (
                                    <div
                                        key={certificate.id}
                                        className="w-full flex-shrink-0 px-2"
                                    >
                                        <div className="bg-gray-900/85 rounded-xl overflow-hidden border border-gray-800">
                                            {/* Certificate Image */}
                                            <div className="aspect-[4/3] bg-gray-800 overflow-hidden">
                                                <img
                                                    src={certificate.image}
                                                    alt={certificate.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            
                                            {/* Certificate Info - Simplified */}
                                            <div className="p-4 sm:p-6 text-center">
                                                <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                                                    {certificate.title}
                                                </h4>
                                                <span className="text-blue-400 font-medium text-base sm:text-lg">
                                                    {certificate.institution}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-gray-900/90 hover:bg-gray-800 border border-gray-700 hover:border-blue-500/50 rounded-full p-2 sm:p-3 transition-all duration-300 ease-out z-10 group hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                            aria-label="Certificado anterior"
                        >
                            <IconChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-gray-900/90 hover:bg-gray-800 border border-gray-700 hover:border-blue-500/50 rounded-full p-2 sm:p-3 transition-all duration-300 ease-out z-10 group hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                            aria-label="Siguiente certificado"
                        >
                            <IconChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                            {certificates.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`transition-all duration-300 ease-out hover:scale-125 ${index === currentSlide
                                            ? 'w-8 bg-blue-500 shadow-lg shadow-blue-500/30'
                                            : 'w-2 bg-gray-600 hover:bg-blue-400 hover:shadow-md hover:shadow-blue-400/20'
                                        } h-2 rounded-full`}
                                    aria-label={`Ir al certificado ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};