import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'Karpós',
        description: 'Personal full-stack project React app for Devmountain.',
        image: '/images/karpos-login.jpg',
        link: 'https://github.com/TKSomar/karpos',
        linkLabel: 'GitHub',
    },
    {
        title: 'Echo',
        description: 'Group project full-stack React app that serves as a Reddit clone for us Reddit-lovers.',
        image: '/images/echo-dashboard.jpg',
        link: 'https://github.com/reddit-clone-wr1/Echo',
        linkLabel: 'GitHub',
    },
    {
        title: 'AI Resume Analyzer',
        description: 'A React app that utilizes AI to analyze an uploaded resume and user-provided job description.',
        image: '/images/resumind-review-pg.PNG',
        link: 'https://github.com/TKSomar/ai-resume-analyzer',
        linkLabel: 'GitHub',
    },
    {
        title: 'Morning Consult Pro',
        description: 'A NextJS headless WordPress app that integrated the SASS product with the public-facing news and marketing site.',
        image: '/images/mc-pro.PNG',
        link: 'https://web.archive.org/web/20240901082708/https://pro.morningconsult.com/',
        linkLabel: 'Live Site',
    },
    {
        title: 'Morning Consult',
        description: 'A custom WordPress site built with TwigPHP and SCSS.',
        image: '/images/mc-site.PNG',
        link: 'https://web.archive.org/web/20220308012236/http://www.morningconsult.com/',
        linkLabel: 'Live Site',
    },
    {
        title: 'Chinchilla Leal PLLC',
        description: 'A simple site for my brother and his colleague built on WordPress and SeedProd.',
        image: '/images/chin-leal-site.PNG',
        link: 'https://chinchillaleal.com/',
        linkLabel: 'Live Site',
    },
];

const Projects = () => {
    return (
        <section className="px-6 py-12 bg-gray-950 text-white">
            <h2 className="text-3xl font-bold mb-8 mt-2 text-center uppercase">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover p-2"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                            {project.link && (
                                <div className="mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {project.linkLabel === 'GitHub' ? (
                                            <>
                                                <FaGithub className="mr-2" />
                                                View on GitHub
                                            </>
                                        ) : (
                                            <>
                                                <FiExternalLink className="mr-2" />
                                                Visit Site
                                            </>
                                        )}
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
