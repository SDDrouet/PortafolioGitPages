import { useState, useEffect } from 'react';

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('sobre-mi');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['sobre-mi', 'proyectos', 'certificados', 'habilidades', 'contacto'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return { activeSection, scrollToSection };
};

export const useProjectSlider = (projectsLength) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projectsLength);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projectsLength) % projectsLength);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return {
        currentSlide,
        nextSlide,
        prevSlide,
        goToSlide
    };
};

export const useCertificateSlider = (certificatesLength) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % certificatesLength);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + certificatesLength) % certificatesLength);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return {
        currentSlide,
        nextSlide,
        prevSlide,
        goToSlide
    };
};

export const useProjectModal = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalActiveTab, setModalActiveTab] = useState('overview');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalActiveTab('overview');
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalActiveTab('overview');
        setCurrentImageIndex(0);
        document.body.style.overflow = 'unset';
    };

    const navigateProject = (projects, direction) => {
        if (!selectedProject) return;
        
        const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
        let newIndex;
        
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % projects.length;
        } else {
            newIndex = (currentIndex - 1 + projects.length) % projects.length;
        }
        
        setSelectedProject(projects[newIndex]);
        setModalActiveTab('overview');
        setCurrentImageIndex(0);
    };

    const nextImage = (imagesLength) => {
        setCurrentImageIndex((prev) => (prev + 1) % imagesLength);
    };

    const prevImage = (imagesLength) => {
        setCurrentImageIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return {
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
    };
};