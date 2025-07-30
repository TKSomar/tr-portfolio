import React from "react";
import { FaReact, FaPhp, FaJs, FaPython } from "react-icons/fa";

const skills = [
    {
        name: "React",
        description: "JavaScript Library",
        icon: <FaReact className="text-4xl text-cyan-400" />,
        color: "bg-cyan-100",
    },
    {
        name: "PHP",
        description: "Server-side Scripting",
        icon: <FaPhp className="text-4xl text-indigo-500" />,
        color: "bg-indigo-100",
    },
    {
        name: "JavaScript",
        description: "Programming Language",
        icon: <FaJs className="text-4xl text-yellow-400" />,
        color: "bg-yellow-100",
    },
    {
        name: "Python",
        description: "General Purpose",
        icon: <FaPython className="text-4xl text-blue-500" />,
        color: "bg-blue-100",
    },
];

const Skills = () => {
    return (
        <section id="skills" className="w-full px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold uppercase mb-8 text-white text-center">Tech Stack</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-2xl shadow-md ${skill.color} flex flex-col gap-3`}
                        >
                            <div>{skill.icon}</div>
                            <h3 className="text-lg font-semibold">{skill.name}</h3>
                            <p className="text-sm text-gray-700">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;