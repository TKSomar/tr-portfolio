import React from "react";
import { FaHome, FaUser, FaCode, FaBriefcase } from "react-icons/fa";

const navItems = [
    { href: "home", icon: <FaHome />, label: "Home" },
    { href: "experience", icon: <FaUser />, label: "Experience" },
    { href: "skills", icon: <FaCode />, label: "Skills" },
    { href: "interests", icon: <FaBriefcase />, label: "Interests" },
];

const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
};

const BottomNav = () => {
    return (
        <nav className="fixed bottom-0 inset-x-0 bg-gray-900 text-white border-t border-gray-800 z-50">
            <div className="flex justify-around items-center h-14">
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToSection(item.href)}
                        className="flex flex-col items-center justify-center hover:text-cyan-400 transition-colors text-sm focus:outline-none"
                    >
                        <div className="text-lg">{item.icon}</div>
                        <span className="text-xs">{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default BottomNav;