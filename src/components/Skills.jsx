import React from 'react';
import { 
    IconCode, 
    IconDatabase, 
    IconPalette, 
    IconServer 
} from '@tabler/icons-react';

const skillIcons = {
    "Frontend": <IconCode className="w-6 h-6" />,
    "Backend": <IconServer className="w-6 h-6" />,
    "Database": <IconDatabase className="w-6 h-6" />,
    "Otros": <IconPalette className="w-6 h-6" />
};

export const Skills = ({ skills }) => {
    return (
        <section id="habilidades" className="pt-6 mb-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-white">Habilidades</h3>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="bg-gray-900/85 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-blue-400">{skillIcons[skillGroup.category]}</div>
                                <h4 className="text-lg sm:text-xl font-semibold text-white">{skillGroup.category}</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-700 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};