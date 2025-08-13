import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaSchoolFlag } from 'react-icons/fa6';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineData = [
    {
        title: "Web Developer",
        subtitle: "Austin, TX",
        description: "PHP/MySQL/JS/CSS/HTML development",
        description2: "WordPress | WPEngine | Tailwind | TwigPHP | Figma",
        date: "2024 - 2025",
        icon: <FaStar />,
        color: "bg-blue-500",
    },
    {
        title: "Software Developer",
        subtitle: "McKinney, TX",
        description: "ASP.NET/C#/SQL/JS development",
        description2: "NextJS | React | .NET",
        date: "2024",
        icon: <FaStar />,
        color: "bg-blue-500",
    },
    {
        title: "Software Engineer II ",
        subtitle: "Washington D.C.",
        description: "PHP/MySQL/JS/HTML/CSS development",
        description2: "WordPress | Docker | NextJS | React | Typescript| NodeJS | Storybook | Figma",
        date: "2021 - 2023",
        icon: <FaStar />,
        color: "bg-blue-500",
    },
    {
        title: "Software Engineer I ",
        subtitle: "Washington D.C.",
        description: "PHP/MySQL/JS/SCSS/HTML development",
        description2: "WordPress | Docker | React | Highcharts | Figma",
        date: "2020 - 2021",
        icon: <FaStar />,
        color: "bg-blue-500",
    },
    {
        title: "Web Developer ",
        subtitle: "Lubbock, TX",
        description: "PHP/MySQL/JS/HTML/CSS development",
        description2: "WordPress  | Google Ads SEO/PPC",
        date: "2018 - 2020",
        icon: <FaStar />,
        color: "bg-blue-500",
    },
    {
        title: "Full Stack Web Development Certification ",
        subtitle: "Remote",
        description: "Full Stack Web Development using React, Node, Express, Axios, SQL DBs",
        description2: "",
        date: "2020",
        icon: <FaSchoolFlag />,
        color: "bg-blue-500",
    },
];

const TimelineItem = ({ item }: { item: typeof timelineData[0] }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex relative"
        >
            {/* Vertical line and icon */}
            <div className="flex flex-col items-center">
                {/*<div className="w-1 bg-gray-300 h-full absolute left-6 top-0"></div>*/}
                <motion.div
                    className={`z-10 p-3 rounded-full ${item.color} text-white shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
                >
                    {item.icon}
                </motion.div>
            </div>

            {/* Content */}
            <div className="ml-14 mb-16 bg-white rounded-xl shadow-lg p-6 w-full max-w-xl">
                <p className="text-sm text-gray-400">{item.date}</p>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <h4 className="text-md text-gray-600">{item.subtitle}</h4>
                <p className="mt-2 text-gray-700">{item.description}<br/>{item.description2}</p>
            </div>
        </motion.div>
    );
};

const ExperienceTimeline = () => {
    return (
        <div className="relative max-w-3xl mx-auto px-6 py-20">
            {/* Timeline vertical line */}
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-gray-200"></div>

            {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} />
            ))}
        </div>
    );
};

export default ExperienceTimeline;