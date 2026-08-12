import React from 'react';
import {
    IconChevronLeft,
    IconChevronRight
} from '@tabler/icons-react';

// Mosaic gallery for a single project card: always 4 cells in a 2x2 grid.
// The first cell is always the project logo (project.image), shown with
// object-contain on its own tile since logos usually aren't meant to be
// cropped or stretched like a screenshot. The remaining up-to-3 cells are
// screenshots from project.images, shown with object-cover.
const ProjectGallery = ({ logo, images, title }) => {
    const shots = (images ?? []).filter(Boolean).slice(0, 3);
    const cells = [
        { src: logo, isLogo: true },
        ...shots.map((src) => ({ src, isLogo: false })),
    ];
    while (cells.length < 4) cells.push(null);

    return (
        <div className="aspect-video bg-gray-950 overflow-hidden grid grid-cols-2 grid-rows-2 gap-px">
            {cells.map((cell, i) => (
                <div
                    key={i}
                    className="relative overflow-hidden bg-gray-900/60 flex items-center justify-center"
                >
                    {cell?.isLogo && cell.src && (
                        <img
                            src={cell.src}
                            alt={`${title} logo`}
                            className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                        />
                    )}
                    {cell && !cell.isLogo && (
                        <img
                            src={cell.src}
                            alt={`${title} ${i}`}
                            className="w-full h-full object-contain group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export const Projects = ({
    projects,
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    onProjectSelect
}) => {
    return (
        <section id="proyectos" className="min-h-screen pt-6 mb-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-white">Proyectos</h3>

                {/* Slider Container */}
                <div className='max-w-xl mx-auto'>
                    <div className="relative">
                        {/* Slider */}
                        <div className="overflow-hidden rounded-xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {projects.map((project) => {
                                    return (
                                        <div
                                            key={project.id}
                                            className="w-full flex-shrink-0 px-2"
                                        >
                                            <div
                                                onClick={() => onProjectSelect(project)}
                                                className="group cursor-pointer bg-gray-900/85 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors duration-300"
                                            >
                                                <ProjectGallery logo={project.image} images={project.images} title={project.title} />

                                                <div className="p-4 sm:p-6">
                                                    <div className="flex justify-between items-start gap-3 mb-2">
                                                        <h4 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                                            {project.title}
                                                        </h4>
                                                        <span className="shrink-0 px-2 py-1 bg-white/[0.04] text-gray-400 text-xs rounded-full border border-white/10">
                                                            {project.category}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-400 text-sm sm:text-base mb-4">{project.brief}</p>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {project.technologies.slice(0, 3).map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="px-2 sm:px-3 py-1 bg-gray-800/60 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-700/60"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {project.technologies.length > 3 && (
                                                            <span className="px-2 sm:px-3 py-1 bg-gray-800/60 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-700/60">
                                                                +{project.technologies.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                                        <span>{project.duration}</span>
                                                        <span className="text-blue-400/90 group-hover:text-blue-300 transition-colors">Ver detalles →</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-gray-900/90 hover:bg-gray-800 border border-gray-700 hover:border-blue-500/50 rounded-full p-2 sm:p-3 transition-all duration-300 ease-out z-10 group hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                            aria-label="Proyecto anterior"
                        >
                            <IconChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-gray-900/90 hover:bg-gray-800 border border-gray-700 hover:border-blue-500/50 rounded-full p-2 sm:p-3 transition-all duration-300 ease-out z-10 group hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                            aria-label="Siguiente proyecto"
                        >
                            <IconChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`transition-all duration-300 ease-out hover:scale-125 ${index === currentSlide
                                            ? 'w-8 bg-blue-500 shadow-lg shadow-blue-500/30'
                                            : 'w-2 bg-gray-600 hover:bg-blue-400 hover:shadow-md hover:shadow-blue-400/20'
                                        } h-2 rounded-full`}
                                    aria-label={`Ir al proyecto ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};