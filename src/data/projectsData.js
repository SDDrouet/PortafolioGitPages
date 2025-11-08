export const projects = [
    {
        id: 1,
        title: "Odontolab",
        brief: "Plataforma de gestión para el laboratorio dental Odontolab.",
        description: "Sistema para la gestión de doctores, ordenes de trabajo, estados de cuenta y facturación.",
        fullDescription: "Desarrollo de una plataforma integral para la gestión de un laboratorio dental, permitiendo registrar ordenes de trabajo, gestionar estados de cuenta, registrar pagos, facturas y generar reportes.",
        technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
        image: "projects/odontolab/logo.png",
        images: [
            "projects/odontolab/img1.png",
            "projects/odontolab/img2.png",
            "projects/odontolab/img3.png",
            "projects/odontolab/img4.png",
            "projects/odontolab/img5.png",
            "projects/odontolab/img6.png",
            "projects/odontolab/img7.png",
            "projects/odontolab/img8.png",
        ],
        features: [
            "Gestión de doctores y pacientes",
            "Registro de ordenes de trabajo",
            "Generación de estados de cuenta",
            "Registro de facturas y pagos",
            "Reportes personalizados"            
        ],
        challenges: [
            "Diseño de una interfaz intuitiva para usuarios no técnicos",
            "Optimización de consultas a la base de datos para reportes",
            "Implementación de un sistema de roles y permisos",
            "Optimización de imágenes para mejorar el espacio de almacenamiento",
            "Reportes dinámicos y exportables"
        ],
        results: [
            "Mejora en la eficiencia de la gestión del laboratorio",
            "Reducción de errores en la facturación y pagos",
            "Aumento en la satisfacción de los doctores y pacientes",
            "Optimización del tiempo de generación de reportes"
        ],
        duration: "8 meses",
        category: "Aplicación Web - Full Stack",
        status: "Completado"
    },
    {
        id: 2,
        title: "Ruta Móvil",
        brief: "Aplicación móvil de servicio de transporte con cooperativas locales.",
        description: "Esta plataforma fue desarrollada para facilitar el transporte de personas a través de cooperativas locales.",
        fullDescription: "Desarrollo de una plataforma de servicio de transporte que conecta a usuarios con cooperativas locales. Incluye funcionalidades como geolocalización en tiempo real, gestión de rutas y seguridad de viajes.",
        technologies: ["Flutter", "Express", "Google Maps", "Firebase"],
        image: "projects/rutaMovil/logo.png",
        images: [
            "projects/rutaMovil/img1.jpeg",
            "projects/rutaMovil/img2.jpeg",
            "projects/rutaMovil/img3.jpeg",
            "projects/rutaMovil/img4.jpeg",
            "projects/rutaMovil/img5.jpeg",
            "projects/rutaMovil/img6.jpeg",
        ],
        features: [
            "Registro de clientes y conductores",
            "Administración de cooperativas",
            "Geolocalización en tiempo real",
            "Gestión de rutas y viajes",
            "Solicitud y asignación de viajes",
            "Seguridad mediante códigos únicos"        
        ],
        challenges: [
            "Geolocalización precisa y bajo consumo del API de Google Maps",
            "Optimización del rendimiento en dispositivos móviles",
            "Diseño de una interfaz intuitiva para usuarios y conductores"                        
        ],
        results: [
            "Mejora en la eficiencia del transporte local",
            "Reducción de tiempos de espera para los usuarios",
            "Incremento en la satisfacción de clientes y conductores",
            "Mejora en la gestión para las cooperativas de transporte"

        ],        
        githubUrl: "https://github.com/leodlc/app-transporte-rural",
        duration: "5 meses",
        category: "Aplicación Móvil - Full Stack",
        status: "Completado"
    },
    {
        id: 3,
        title: "Start Blog",
        brief: "Blog para compartir conocimientos y experiencias.",
        description: "Plataforma de blogging diseñada para que los usuarios puedan compartir artículos y experiencias.",
        fullDescription: "Desarrollo de una plataforma de blogging que permite a los usuarios crear, editar y publicar artículos. Incluye funcionalidades como comentarios, categorías, roles y permisos.",
        technologies: ["React", "Laravel", "MySql", "Tailwind CSS"],
        image: "projects/startBlog/logo.png",
        images: [
            "projects/startBlog/img1.png",
            "projects/startBlog/img2.png",
            "projects/startBlog/img3.png",
            "projects/startBlog/img4.png",
            "projects/startBlog/img5.png",
        ],
        features: [
            "Creación y edición de artículos",
            "Sistema de comentarios y calificaciones",
            "Categorías y etiquetas",
            "Roles y permisos de usuario",
        ],
        challenges: [
            "Diseño de una interfaz amigable para la creación de contenido",
            "Implementación de un sistema de comentarios",
            "Crear editor de texto enriquecido",
            "Seguridad y gestión de roles"
        ],
        results: [
            "Aumento en la participación de la comunidad",
            "Facilidad para compartir conocimientos",
            "Crecimiento constante de usuarios activos"
        ],
        githubUrl: "https://github.com/SDDrouet/Blog_Laravel",
        duration: "1 meses",
        category: "Aplicación Web - Full Stack",
        status: "Completado"
    },
    {
        id: 4,
        title: "Solo Música",
        brief: "Aplicación para escuchar música en línea.",
        description: "Plataforma de streaming de música que permite a los usuarios escuchar sus canciones favoritas en línea.",
        fullDescription: "Desarrollo de una aplicación de streaming de música que ofrece a los usuarios la posibilidad de buscar y reproducir con sus canciones favoritas.",
        technologies: ["React", "Express", "Firebase", "MongoDB"],
        image: "projects/soloMusica/logo.png",
        images: [
            "projects/soloMusica/img1.png",
            "projects/soloMusica/img2.png",
            "projects/soloMusica/img3.png",
            "projects/soloMusica/img4.png",
        ],
        features: [
            "Búsqueda y reproducción de canciones",
            "Listas de reproducción personalizadas",
            "Interfaz intuitiva y atractiva",
            "Panel de administración de usuarios, canciones, álbumes y artistas",
        ],
        challenges: [
            "Optimización del rendimiento para la reproducción de música",
            "Diseño de una interfaz atractiva y fácil de usar",
            "Implementación de un sistema de gestión de contenido para el panel de administración"
        ],
        results: [
            "Mejora en la experiencia de escucha de música",
            "Facilidad para encontrar y reproducir canciones",            
        ],
        githubUrl: "https://github.com/SDDrouet/SoloMusica-AppWeb",
        duration: "2 meses",
        category: "Aplicación Web - Full Stack",
        status: "Completado"
    }
];

export const skills = [
    { 
        category: "Frontend", 
        items: ["React", "Flutter", "Angular", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"] 
    },
    { 
        category: "Backend", 
        items: ["Java", "C#", "Python", "PHP", "Laravel", ".Net", "Express", "Spring Boot", "REST APIs", "GraphQL", "SOAP"] 
    },
    { 
        category: "Database", 
        items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] 
    },
    { 
        category: "Otros", 
        items: ["Inglés B1", "Git", "Docker", "Azure", "Agile", "Testing", "CI/CD", "SCRUM", "UML"]
    }
];