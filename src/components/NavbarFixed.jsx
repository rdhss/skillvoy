import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import logo from '../assets/logo.png'

const NavbarFixed = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [sectionNow, setsectionNow] = useState('')

    const navLinks = ['Find Passion', 'Categories', 'Skills', 'Customer'];


    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY >= 775);

            const scrollY = window.scrollY;
            if (scrollY >= 786 && scrollY < 1370) {
                setsectionNow('Categories')
            } else if (scrollY >= 1338 && scrollY < 2253) {
                setsectionNow('Skills')
            } else if (scrollY >= 2253) {
                setsectionNow('Customer')
            } else {
                setsectionNow('')
            }
        };



        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <header className={`bg-[#ffffff] fixed top-0 z-[100] ${visible ? "translate-y-[0px]" : "translate-y-[-100px]"} hidden md:block transition-transform duration-300`}>
            <Container>
                <div className="max-w-7xl py-4 grid grid-cols-3 items-center">
                    {/* Logo kiri */}
                    <div className="text-2xl md:text-3xl text-slate-800 tracking-tight">
                        <img src={logo} alt="" width={190} />
                    </div>

                    {/* Navlinks tengah */}
                    <nav className="hidden md:flex justify-center space-x-6">
                        {navLinks.map(link => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="inline-block text-slate-700 font-medium group px-2 py-1"
                            >
                                <span className="relative inline-block">
                                    {/* Underline */}
                                    <span className={`absolute left-0 bottom-[.2rem] h-0 w-full bg-emerald-400 group-hover:h-[7px] transition-all duration-300 ease-in-out z-0 ${sectionNow == link ? 'h-[7px]' : ''}`}/>

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


            </Container>
        </header>
    );
};

export default NavbarFixed;
