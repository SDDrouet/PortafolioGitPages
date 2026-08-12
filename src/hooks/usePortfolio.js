import { useState, useEffect, useCallback  } from 'react';

const SECTION_IDS = ['sobre-mi', 'proyectos', 'certificados', 'habilidades', 'contacto'];

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('sobre-mi');

    useEffect(() => {
        const scrollContainer = document.querySelector('[data-scroll-container]');

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                root: scrollContainer || null,
                rootMargin: '-20% 0px -60% 0px',
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );

        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = useCallback((sectionId) => {
        setActiveSection(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, []);

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