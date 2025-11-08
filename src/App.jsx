import React from 'react';

// Importar componentes
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ProjectModal } from './components/ProjectModal';

// Importar datos y hooks
import { projects, skills } from './data/projectsData';
import { certificates } from './data/certificatesData';
import { useActiveSection, useProjectSlider, useCertificateSlider, useProjectModal } from './hooks/usePortfolio';
import Particles from './react-bits-components/Particles';

export default function App() {
    // Hooks personalizados para manejar el estado
    const { activeSection, scrollToSection } = useActiveSection();
    const { currentSlide, nextSlide, prevSlide, goToSlide } = useProjectSlider(projects.length);
    const { 
        currentSlide: certificateSlide, 
        nextSlide: nextCertificate, 
        prevSlide: prevCertificate, 
        goToSlide: goToCertificate 
    } = useCertificateSlider(certificates.length);
    const {
        selectedProject,
        modalActiveTab,
        currentImageIndex,
        setModalActiveTab,
        openModal,
        closeModal,
        navigateProject,
        nextImage,
        prevImage,
        goToImage
    } = useProjectModal();

    return (
        <div className="h-screen bg-gray-950 text-gray-100 overflow-hidden">
            {/* Navigation */}
            <Navigation
                activeSection={activeSection}
                scrollToSection={scrollToSection}
            />
            <div className='h-[73px] md:h-[70px]'></div>
            <div className='h-[calc(100vh-73px)] md:h-[calc(100vh-70px)] not-md:px-4 overflow-y-auto scroll-smooth relative z-0'>
                <div className='w-full fixed top-[60px] h-[calc(100vh-73px)] md:h-[calc(100vh-70px)] pointer-events-none -z-10'>
                    <Particles
                        particleColors={['#B8D9FF', '#51a2ff']}
                        particleCount={100}
                        particleSpread={5}
                        speed={0.1}
                        particleBaseSize={80}
                        moveParticlesOnHover={true}
                        alphaParticles={true}
                        disableRotation={false}
                    />
                </div>

                {/* Hero Section */}
                <Hero />

                {/* Projects Section */}
                <Projects
                    projects={projects}
                    currentSlide={currentSlide}
                    nextSlide={nextSlide}
                    prevSlide={prevSlide}
                    goToSlide={goToSlide}
                    onProjectSelect={openModal}
                />

                {/* Certificates Section */}
                <Certificates
                    certificates={certificates}
                    currentSlide={certificateSlide}
                    nextSlide={nextCertificate}
                    prevSlide={prevCertificate}
                    goToSlide={goToCertificate}
                />

                {/* Skills Section */}
                <Skills skills={skills} />

                {/* Contact Section */}
                <Contact />


            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                projects={projects}
                activeTab={modalActiveTab}
                setActiveTab={setModalActiveTab}
                onClose={closeModal}
                onNavigate={navigateProject}
                currentImageIndex={currentImageIndex}
                nextImage={nextImage}
                prevImage={prevImage}
                goToImage={goToImage}
            />
        </div>
    );
}