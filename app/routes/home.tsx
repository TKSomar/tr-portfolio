import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ExperienceTimeline from "~/components/ExperienceTimeline";
import { motion } from "framer-motion";
import Skills from "~/components/Skills";
import BottomNav from "~/components/BottomNav";
import Interests from "~/components/Interests";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

const headingVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export default function Home() {
    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section id="home" className="main-section flex flex-col bg-[url('./images/bg-dark-code.jpg')] bg-cover bg-center bg-no-repeat min-h-screen">
                <div className="page-heading p-16 pt-34 flex flex-col items-center justify-center uppercase font-bold">
                    <motion.h1
                        className="text-5xl text-white"
                        custom={0}
                        variants={headingVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        Triston Ramos
                    </motion.h1>
                    <motion.h2
                        className="text-2xl text-gray-300 mt-2"
                        custom={1}
                        variants={headingVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        Web Engineer
                    </motion.h2>
                </div>

                {/* Introduction */}
                <motion.div
                    className="introduction flex flex-col items-center justify-center"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-semibold text-white uppercase">Introduction</h2>
                    <p className="text-white text-center p-10 max-w-[1170px]">
                        Passionate and results-driven Software Engineer with a strong background in full-stack web development, specializing in React, Next.js, WordPress, and modern backend technologies. Experienced in building and maintaining high-impact web applications for companies like Morning Consult and Auctane. Adept at enhancing user experience, streamlining deployment pipelines, and applying SEO best practices for maximum reach. A quick learner and creative problem-solver who enjoys building meaningful digital solutions and collaborating across teams.
                    </p>
                </motion.div>
            </section>

            {/* Timeline */}
            <section id="experience" className="experience-section">
                <div className="timeline">
                    <ExperienceTimeline />
                </div>
            </section>

            {/* Other Sections (placeholders) */}
            <section id="skills" className="skills-section">
                <div className="skills container">
                    <Skills />
                </div>
            </section>

            <section id="interests" className="interests-section">
                <div className="interests container">
                    <Interests />
                </div>
            </section>

            <section id="hobbies" className="hobbies-section">
                <div className="hobbies"></div>
            </section>

            <BottomNav />
        </main>
    );
}