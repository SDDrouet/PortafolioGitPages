import React from 'react';
import { 
    IconBrandGithub, 
    IconBrandLinkedin, 
    IconMail, 
    IconPhone 
} from '@tabler/icons-react';

export const Contact = () => {
    const contactInfo = [
        {
            icon: <IconPhone className="w-5 h-5" />,
            label: "+593 96 285 8330",
            type: "phone"
        },
        {
            icon: <IconMail className="w-5 h-5" />,
            label: "davidrouet009@gmail.com",
            href: "mailto:davidrouet009@gmail.com",
            type: "email"
        },
        {
            icon: <IconBrandLinkedin className="w-5 h-5" />,
            label: "linkedin.com/in/stephen-drouet",
            href: "https://linkedin.com/in/stephen-drouet",
            type: "external"
        },
        {
            icon: <IconBrandGithub className="w-5 h-5" />,
            label: "github.com/SDDrouet",
            href: "https://github.com/SDDrouet",
            type: "external"
        }
    ];

    return (
        <section id="contacto" className="flex items-center pt-6 mb-20 px-6">
            <div className="max-w-4xl mx-auto w-full">
                <h3 className="text-4xl font-bold mb-12 text-white">Contacto</h3>
                <div className="bg-gray-900/85 p-8 rounded-xl border border-gray-800 max-w-2xl hover:border-gray-700 transition-colors z-20">
                    <p className="text-gray-400 mb-6">
                        ¿Interesado en trabajar juntos? No dudes en contactarme a través de cualquiera de estos medios.
                    </p>
                    <div className="space-y-4">
                        {contactInfo.map((contact, index) => (
                            <a
                                key={index}
                                href={contact.href}
                                {...(contact.type === 'external' ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
                            >
                                <span className="group-hover:scale-110 transition-transform">
                                    {contact.icon}
                                </span>
                                <span>{contact.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};