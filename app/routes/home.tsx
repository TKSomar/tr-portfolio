import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <main>
        <Navbar />

        <section className="main-section flex flex-col bg-[url('./images/bg-header.jpg')] bg-cover h-[100vh]">
          <div className="page-heading p-16 flex flex-col items-center justify-center">
              <h1>Triston Ramos</h1>
              <h2>Web Engineer</h2>
          </div>
          <div className="introduction flex flex-col items-center justify-center">
              <h2>Introduction</h2>
              <p className="text-white text-center p-10 max-w-[780px]">Passionate and results-driven Software Engineer with a strong background in full-stack web development, specializing in React, Next.js, WordPress, and modern backend technologies. Experienced in building and maintaining high-impact web applications for companies like Morning Consult and Auctane. Adept at enhancing user experience, streamlining deployment pipelines, and applying SEO best practices for maximum reach. A quick learner and creative problem-solver who enjoys building meaningful digital solutions and collaborating across teams.</p>
          </div>
        </section>

        <section className="experience-section">
          <div className="timeline"></div>
        </section>

        <section className="skills-section">
          <div className="skills"></div>
        </section>

        <section className="hobbies-section">
          <div className="hobbies"></div>
        </section>

        <section className="interests-section">
          <div className="interests"></div>
        </section>
      </main>
  );
}
