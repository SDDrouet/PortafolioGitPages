import React from 'react';
import { 
    IconX, 
    IconChevronLeft, 
    IconChevronRight, 
    IconBrandGithub,
    IconClock,
    IconCheck,
    IconStar,
    IconTarget,
    IconTrendingUp
} from '@tabler/icons-react';

export const ProjectModal = ({ 
    project, 
    projects,
    activeTab, 
    setActiveTab, 
    onClose, 
    onNavigate,
    currentImageIndex,
    nextImage,
    prevImage,
    goToImage
}) => {
    if (!project) return null;

    const tabs = [
        { id: 'overview', label: 'Resumen', icon: <IconStar className="w-4 h-4" /> },
        { id: 'features', label: 'Características', icon: <IconCheck className="w-4 h-4" /> },
        { id: 'challenges', label: 'Desafíos', icon: <IconTarget className="w-4 h-4" /> },
        { id: 'results', label: 'Resultados', icon: <IconTrendingUp className="w-4 h-4" /> }
    ];

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className="space-y-4">
                        {/* Image Gallery */}
                        <div className="relative mx-auto max-w-[600px]">
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <div
                                    className="flex transition-transform duration-300 ease-in-out"
                                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                                >
                                    {project.images?.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${project.title} - Imagen ${index + 1}`}
                                            className="h-full w-full aspect-video m-auto object-contain flex-shrink-0"
                                        />
                                    ))}
                                </div>
                            </div>
                            
                            {/* Navigation Arrows */}
                            {project.images && project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => prevImage(project.images.length)}
                                        className="absolute left-2 top-1/2 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                                        title="Imagen anterior"
                                    >
                                        <IconChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => nextImage(project.images.length)}
                                        className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                                        title="Siguiente imagen"
                                    >
                                        <IconChevronRight className="w-4 h-4" />
                                    </button>
                                </>
                            )}
                            
                            {/* Image Dots */}
                            {project.images && project.images.length > 1 && (
                                <div className="flex justify-center gap-1 mt-3">
                                    {project.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToImage(index)}
                                            className={`transition-all ${
                                                index === currentImageIndex
                                                    ? 'w-6 bg-blue-500'
                                                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                                            } h-2 rounded-full cursor-pointer`}
                                            title={`Ir a imagen ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        <div>
                            <h5 className="text-base font-semibold mb-2 text-white">Descripción del Proyecto</h5>
                            <p className="text-gray-400 leading-relaxed text-sm mb-3">{project.description}</p>
                            <p className="text-gray-300 leading-relaxed text-sm">{project.fullDescription}</p>
                        </div>
                        <div>
                            <h5 className="text-base font-semibold mb-2 text-white">Tecnologías Utilizadas</h5>
                            <div className="flex flex-wrap gap-1.5">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <h5 className="text-base font-semibold mb-2 text-white flex items-center gap-2">
                                    <IconClock className="w-4 h-4" />
                                    Duración
                                </h5>
                                <p className="text-gray-400 text-sm">{project.duration}</p>
                            </div>
                            <div>
                                <h5 className="text-base font-semibold mb-2 text-white">Estado</h5>
                                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">
                                    {project.status}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            case 'features':
                return (
                    <div className="space-y-3">
                        <h5 className="text-base font-semibold text-white mb-3">Características Principales</h5>
                        <div className="grid gap-2">
                            {project.features?.map((feature, index) => (
                                <div key={index} className="flex items-start gap-2 p-2.5 bg-gray-800/50 rounded-md border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                                    <IconCheck className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'challenges':
                return (
                    <div className="space-y-3">
                        <h5 className="text-base font-semibold text-white mb-3">Desafíos Técnicos Superados</h5>
                        <div className="grid gap-3">
                            {project.challenges?.map((challenge, index) => (
                                <div key={index} className="p-3 bg-orange-500/10 rounded-md border border-orange-500/20 hover:border-orange-500/30 transition-colors">
                                    <div className="flex items-start gap-2">
                                        <IconTarget className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{challenge}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'results':
                return (
                    <div className="space-y-3">
                        <h5 className="text-base font-semibold text-white mb-3">Resultados Obtenidos</h5>
                        <div className="grid gap-3">
                            {project.results?.map((result, index) => (
                                <div key={index} className="p-3 bg-green-500/10 rounded-md border border-green-500/20 hover:border-green-500/30 transition-colors">
                                    <div className="flex items-start gap-2">
                                        <IconTrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{result}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-gray-900 rounded-xl max-w-4xl w-full h-[95vh] flex flex-col border border-gray-800 shadow-2xl overflow-hidden">
                {/* Header - Más compacto */}
                <div className="flex-shrink-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-3 sm:p-4">
                    <div className="flex justify-between items-center gap-3">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-lg sm:text-xl font-bold text-white truncate">{project.title}</h4>
                                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30 flex-shrink-0">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                            {/* Navigation Arrows */}
                            <button
                                onClick={() => onNavigate(projects, 'prev')}
                                className="p-1.5 text-gray-400 cursor-pointer hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                                title="Proyecto anterior"
                            >
                                <IconChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => onNavigate(projects, 'next')}
                                className="p-1.5 text-gray-400 cursor-pointer hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                                title="Siguiente proyecto"
                            >
                                <IconChevronRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={onClose}
                                className="p-1.5 text-gray-400 cursor-pointer hover:text-white hover:bg-gray-800 rounded-md transition-colors ml-1"
                                title="Cerrar modal"
                            >
                                <IconX className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Tabs - Más compactos */}
                    <div className="flex gap-1 mt-3 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                                    activeTab === tab.id
                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                                }`}
                            >
                                {tab.icon}
                                <span className="hidden sm:inline">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content - Mejor gestión del espacio */}
                <div className="flex-1 overflow-y-auto p-4 sm:py-6 sm:px-12">
                    {renderTabContent()}
                </div>

                {/* Footer with Links - Solo GitHub */}
                <div className="flex-shrink-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 p-3 sm:p-4">
                    <div className="flex justify-center">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium"
                            >
                                <IconBrandGithub className="w-4 h-4" />
                                Ver en GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};