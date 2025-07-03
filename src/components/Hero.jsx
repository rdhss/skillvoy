import { useState } from "react";
import Container from "./Container";
import personOne from '../assets/personOne.jpg';
import personTwo from '../assets/personTwo.jpg';
import personThree from '../assets/personThree.jpg';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
    const images = [
        personOne,
        personTwo,
        personThree
    ];

    const skill = [
        "Writing",
        "Bussiness",
        "Design"
    ]


    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(null);

    const getFlexValue = (index) => {
        if (hoverIndex !== null) {
            return hoverIndex === index ? 'flex-[2.3]' : 'flex-[0.8]';
        } else {
            return activeIndex === index ? 'flex-[2.3]' : 'flex-[0.8]';
        }
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });

    return (
        <section id="find passion" className="w-full bg-gradient-to-b from-white md:mt-10 to-orange-200/15 h-screen flex flex-col md:flex-row  ">
            {/* Left side - 35% */}
            <div className="w-[35%] md:pl-20 px-4 relative flex flex-col md:mt-16 mt-16">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay : 0.2
                    }}
                >
                    <h1 className="md:text-7xl text-5xl px-2 md:px-0 archia font-extrabold leading-tight flex flex-col ">
                        <span>Watch.</span>
                        <span>Learn.</span>
                        <span>Grow.</span>
                    </h1>
                </motion.div>
                
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 60 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.4,
                        ease: "easeOut"
                    }} 
                    className="md:pl-20 hidden md:block absolute bottom-20 left-0 w-[120%] z-50">
                    <div className="flex w-full shadow-lg overflow-hidden">
                        <input
                            type="text"
                            placeholder="Find Your Passion"
                            className="flex-1 px-6 py-6 archia bg-white text-2xl border-[1px] border-transparent text-black
                 focus:outline-none focus:ring-[2px] focus:border-green-400 
                 transition-all duration-300 ease-in-out"
                        />
                        <button
                            className="relative px-8 py-6 text-2xl font-semibold text-blue-950 bg-green-400
                 transition-all duration-500 group flex items-center justify-center"
                        >
                            <span className="absolute inset-0 bg-red-300 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />
                            <span className="relative z-10 archia">Go</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Right side - 65% */}
            {/* MOBILE CAROUSEL */}
            <div className="flex lg:hidden w-full items-center justify-center z-50 mt-10">
                <div className="flex gap-6 w-[110vw] -ml-[5vw] pl-10 pr-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative snap-center shrink-0 w-[220px] h-[400px] transition-all duration-500 overflow-hidden shadow-xl rounded-2xl"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index}`}
                                className="object-cover w-full h-full rounded-2xl"
                            />

                            {/* Gradient bawah */}
                            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none rounded-b-2xl" />

                            {/* Tulisan bawah */}
                            <div className="absolute bottom-6 left-0 w-full z-30 px-6 flex items-center justify-between">
                                <h1 className="text-xl text-white flex flex-col">
                                    <span>{skill[index]}</span>
                                    <span>Course</span>
                                </h1>
                                <h1 className="text-3xl text-white flex flex-col text-center">
                                    <span>100</span>
                                    <span className="text-sm">Topic</span>
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:hidden px-6 pt-6">
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


            {/* DESKTOP GRID */}
            
            <div className="hidden md:flex pr-20 w-[70%] items-center justify-center px-4">    
                {/* <div className="flex w-full h-full gap-4"> */}
                    <motion.div
                    className="flex w-full h-full gap-4"
                    initial={{ opacity: 0, x: -160 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeOut",
                    }}
                >
                    {images.map((src, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => {
                                setHoverIndex(null);
                                setActiveIndex(0);
                            }}
                            className={`relative transition-all duration-500 overflow-hidden shadow-lg ${getFlexValue(index)}`}
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index}`}
                                className="object-cover w-full h-full rounded-2xl transition-all duration-200"
                            />

                            {/* Gradient bawah */}
                            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none rounded-b-2xl" />

                            {/* Kotak Vertikal */}
                            {index !== 0 && (
                                <div className={`
            absolute bottom-14 left-0 w-[160px] h-[110px] bg-blue-950 z-20
            flex items-center justify-center
            transition-opacity duration-500 ease-in-out
            ${((hoverIndex !== null && hoverIndex !== index) ||
                                        (hoverIndex === null && activeIndex !== index))
                                        ? 'opacity-100'
                                        : 'opacity-0 pointer-events-none'}
          `}>
                                    <h1 className="text-4xl archia relative bottom-16 mr-2 z-30 text-white [writing-mode:vertical-rl] rotate-180">
                                        {skill[index]}
                                    </h1>
                                </div>
                            )}

                            {/* Tulisan Bawah */}
                            <div className={`
          ${index === 0 ? 'px-8 pl-24' : 'px-8'}                                    
          absolute bottom-16 left-0 w-full z-30
          flex items-center justify-between
          transition-opacity duration-500 ease-in-out
          ${hoverIndex === index || (hoverIndex === null && activeIndex === index)
                                    ? 'opacity-100'
                                    : 'opacity-0 pointer-events-none'}
        `}>
                                <h1 className="text-4xl archia text-white flex flex-col">
                                    <span>{skill[index]}</span>
                                    <span>Course</span>
                                </h1>
                                <h1 className="text-6xl archia text-white flex flex-col text-center">
                                    <span>100</span>
                                    <span className="text-lg">Topic</span>
                                </h1>
                            </div>
                        </div>
                    ))}
                    </motion.div>
                {/* </div> */}
            </div>
        </section>
    );
};

export default Hero;
