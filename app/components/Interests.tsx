import React from "react";
import { FaHiking, FaCampground, FaGamepad, FaBook, FaAtom } from "react-icons/fa";

const interests = [
    {
        name: "Hiking",
        description: "I love exploring and experiencing natural wonders whenever I can.",
        icon: <FaHiking className="text-4xl text-cyan-400" />,
        color: "bg-cyan-100",
    },
    {
        name: "Camping",
        description: "Camping is one of the best ways for me to relax and unwind.",
        icon: <FaCampground className="text-4xl text-indigo-500" />,
        color: "bg-indigo-100",
    },
    {
        name: "Gaming",
        description:
            "I’ve played video games for as long as I can remember, and I love the rich storylines and multiplayer experiences with friends and family.",
        icon: <FaGamepad className="text-4xl text-yellow-400" />,
        color: "bg-yellow-100",
    },
    {
        name: "Ancient History",
        description:
            "Learning about ancient cultures and their traditions has greatly enhanced my understanding of our past and present.",
        icon: <FaBook className="text-4xl text-blue-500" />,
        color: "bg-blue-100",
    },
    {
        name: "Science",
        description:
            "The world of science is never-ending, and I find myself truly enthralled by new discoveries.",
        icon: <FaAtom className="text-4xl text-cyan-400" />,
        color: "bg-cyan-100",
    },
];

const Interests = () => {
    return (
        <section id="interests" className="px-6 py-12 bg-gray-950 ">
                <h2 className="text-2xl font-bold uppercase mb-8  text-center">Interests</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-2xl shadow-md ${interest.color} flex flex-col gap-3`}
                        >
                            <div>{interest.icon}</div>
                            <h3 className="text-lg font-semibold">{interest.name}</h3>
                            <p className="text-sm text-gray-700">{interest.description}</p>
                        </div>
                    ))}
                </div>
        </section>
    );
};

export default Interests;