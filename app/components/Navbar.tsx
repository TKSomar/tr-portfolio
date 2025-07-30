import { useState } from 'react'
import { EnvelopeIcon, HomeIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-800/70 text-gray-100 shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                    <a href="#home" className="flex items-center space-x-2 hover:text-white">
                        <HomeIcon className="h-6 w-6" />
                        <span className="font-semibold">Home</span>
                    </a>

                    <div className="flex items-center space-x-5">
                        <a
                            href="https://www.linkedin.com/in/triston-ramos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a
                            href="https://github.com/TKSomar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            <FaGithub className="h-6 w-6" />
                        </a>
                        <button
                            onClick={() => setShowModal(true)}
                            className="flex items-center space-x-1 border border-gray-500 px-3 py-1 rounded-md text-sm hover:bg-gray-700 transition"
                        >
                            <EnvelopeIcon className="h-5 w-5" />
                            <span>Contact</span>
                        </button>
                    </div>
                </div>
            </nav>

            {showModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-xl font-bold mb-4">Contact Me</h2>
                        <p>Email: <a className="text-blue-300 underline" href="mailto:tksomar@gmail.com">tksomar@gmail.com</a></p>
                        <p>Phone: <a className="text-blue-300" href="tel:+17373413222">(737) 341-3222</a></p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-6 w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}