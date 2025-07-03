import React from 'react'
import Container from './Container'
import { Facebook, Github, Linkedin } from "lucide-react";
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <Container bg>
            <footer className=" text-gray-800 pb-12 px-6 pt-28">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo (Kiri) */}
                    <div className="md:text-4xl">
                        <img src={logo} alt="" className='hidden md:block' width={190} />
                        <img className="md:hidden translate-x-[-12px]" src={logo} alt="" width={160} />
                    </div>

                    {/* Links (Tengah) */}
                    <div className="grid grid-cols-2 col-span-2">
                        <div>
                            <ul className="space-y-10 text-lg text-gray-600">
                                <li><a >Courses</a></li>
                                <li><a >Mentors</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-10 text-lg text-gray-600">
                                <li><a >Pricing</a></li>
                                <li><a >Community</a></li>
                            </ul>
                        </div>
                    </div>


                    {/* Join Community (Kanan) */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">Join our community</h4>
                        <div className="hidden md:flex w-64 shadow-lg overflow-hidden">
                            <input
                                type="text"
                                placeholder="Find Your Passion"
                                className="flex-1 px-2 py-3 archia bg-white text-md border-[1px] border-transparent text-black
                 focus:outline-none focus:ring-[2px] focus:border-green-400 
                 transition-all duration-300 ease-in-out"
                            />
                            <button
                                className="relative px-3 py-2 text-lg font-semibold text-blue-950 bg-green-400
                 transition-all duration-500 group flex items-center justify-center"
                            >
                                <span className="absolute inset-0 bg-red-300 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />
                                <span className="relative z-10 archia">Go</span>
                            </button>
                        </div>

                        <div className="md:hidden w-[300px] pt-6">
                            <div className="w-full flex shadow-lg overflow-hidden bg-white/10">
                                <input
                                    type="text"
                                    placeholder="Find Your Passion"
                                    className=" px-6 py-4 w-full text-xl text-black
        border-[1px] border-transparent 
                 focus:outline-none focus:ring-[2px] focus:border-green-400 
        transition-all duration-300"
                                />
                                <button
                                    className="w-[rem] shrink-0 px-6 relative py-4 text-xl font-semibold text-blue-950 bg-green-400
        transition-all duration-500 group flex items-center justify-center overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-red-300 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />
                                    <span className="relative z-10 archia">Go</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
            <div className="border-t  border-gray-200 mt-12 pt-6 pb-7">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-2">
                    {/* Copyright */}
                    <p className="md:text-xl text-gray-500 ">
                        &copy; {new Date().getFullYear()} Skillvoy. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <a aria-label="Facebook" className="text-gray-500 hover:text-blue-700">
                            <Facebook size={21} />
                        </a>
                        <a aria-label="GitHub" className="text-gray-500 hover:text-gray-800">
                            <Github size={21} />
                        </a>
                        <a aria-label="LinkedIn" className="text-gray-500 hover:text-blue-600">
                            <Linkedin size={21} />
                        </a>
                    </div>
                </div>
            </div>


        </Container>
    )
}

export default Footer