import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import logo from '../assets/logo.png'
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    // 786, 1370, 2307
    const navLinks = ['Find Passion', 'Categories', 'Skills', 'Customer'];

    return (
        <header className="bg-[#ffffff] top-0 z-50">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.4
                    }}
                >
                    <div className="max-w-7xl py-4 md:grid grid-cols-3 items-center hidden">
                        {/* Logo kiri */}
                        <div className="text-2xl md:text-3xl text-slate-800 tracking-tight">
                            <img src={logo} alt="" width={190} />
                        </div>

                        {/* Navlinks tengah */}
                        <nav className="hidden md:flex justify-center w-80 gap-5">
                            {navLinks.map(link => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className={` text-slate-700 font-medium group px-2 py-1`}
                                >
                                    <span className="relative inline-block">
                                        {/* Underline */}
                                        <span className="absolute left-0 bottom-[.2rem] h-0 w-full bg-emerald-400 group-hover:h-[7px] transition-all duration-300 ease-in-out z-0" />

                                        {/* Teks */}
                                        <span className="relative archia z-10 whitespace-nowrap text-md md:text-md transition-colors duration-300">
                                            {link}
                                        </span>
                                    </span>
                                </a>
                            ))}
                        </nav>

                        {/* Button kanan */}
                        <div className="hidden md:flex justify-end">
                            <a
                                href="#login"
                                className="relative inline-block px-12 py-3 text-base font-semibold text-white bg-[#1e1e2f] overflow-hidden rounded-full group"
                            >
                                {/* Layer hijau naik dari bawah */}
                                <span className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />

                                {/* Text tetap di atas */}
                                <span className="relative z-10 archia font-thin">Get Started</span>
                            </a>

                        </div>


                    </div>
                </motion.div>


              
            </Container>
              {/* Mobile */}
                <motion.div
                className='fixed top-0 px-2 md:px-0 bg-white w-full z-[100]'
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.4
                    }}
                >
                    <div className="grid grid-cols-2 py-3 items-center md:hidden">
                        {/* Logo kiri */}
                        <div className="text-2xl md:text-3xl text-slate-800 tracking-tight">
                            <img src={logo} alt="" width={190} />
                        </div>


                        {/* Button kanan */}
                        <div className="hidden md:flex justify-end">
                            <a
                                href="#login"
                                className="relative inline-block px-12 py-3 text-base font-semibold text-white bg-[#1e1e2f] overflow-hidden rounded-full group"
                            >
                                {/* Layer hijau naik dari bawah */}
                                <span className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />

                                {/* Text tetap di atas */}
                                <span className="relative z-10 archia font-thin">Get Started</span>
                            </a>

                        </div>


                        <div className="md:hidden flex justify-end pr-6">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-slate-800"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute bg-white px-4 pb-4 top-14 space-y-10 z-[100] pt-9 w-full left-0">
                        {navLinks.map(link => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="block text-slate-700 hover:text-emerald-600 transition"
                            >
                                {link}
                            </a>
                        ))}
                        <a
                            href="#login"
                            className="block w-full text-center mt-2 px-6 py-3 text-base bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition font-semibold"
                        >
                            Get Started
                        </a>
                    </div>
                )}
                </motion.div>

        </header>
    );
};

export default Navbar;
