import Container from "./Container";
import React, { useEffect, useRef } from 'react'
import onlineClass from '../assets/online-class.jpg'
import { Brain, BadgeCheck, Lightbulb, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const Skill = () => {
    const items = [
        {
            title: "Leadership",
            description: "Fully committed to the success company",
            icon: <BadgeCheck className="text-orange-600" />
        },
        {
            title: "Responsibility",
            description: "Employees will always be my top priority",
            icon: <Brain className="text-purple-600" />
        },
        {
            title: "Flexibility",
            description: "The ability to switch is an important skill",
            icon: <Lightbulb className="text-blue-600" />
        },
        {
            title: "Integrity",
            description: "We do what’s right, not what’s easy",
            icon: <Handshake className="text-red-600" />
        },
    ];




    const { ref: view1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });

    const { ref: view2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });

    const { ref: view3, inView: inView3 } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });

    const [sliderRef, slider] = useKeenSlider({
        vertical: true,
        drag : false,
        loop: true,
        slides: {
            perView: 1,
            spacing: 0,
        },
    })

    const timerRef = useRef(null)

    useEffect(() => {
        if (!slider.current) return

        timerRef.current = setInterval(() => {
            slider.current?.next()
        }, 2500)

        return () => clearInterval(timerRef.current)
    }, [slider])




    return (
        <Container bg>
            <section id="skills" className="py-16">
                <div className="max-w-7xl">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                        {/* Kiri */}
                        <motion.div
                            ref={view1}
                            initial={{ opacity: 0, y: 60 }}
                            animate={inView1 ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: 0.1
                            }}
                            className="w-full lg:w-[40%]">
                            <h2 className="md:text-5xl px-2 md:px-0 text-4xl md:w-auto w-80 font-bold text-gray-900 mb-4">
                                Get the skills you
                                need for a job that
                                is in demand.
                            </h2>
                        </motion.div>

                        {/* Kanan */}
                        <div className="relative w-full  md:w-[60%] flex flex-col md:items-center h-full">
                            <motion.div
                                className="md:w-[70%] w-80 text-lg px-2 md:px-0"
                                ref={view1}
                                initial={{ opacity: 0, y: 60 }}
                                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.1
                                }}>
                                <p>
                                    The modern labor market dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                                </p>
                            </motion.div>
                            <motion.div
                                ref={view3}
                                initial={{ opacity: 0, y: -60 }}
                                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                    delay: 0.5
                                }}
                                className="bg-green-300 p-8 absolute bottom-[-200px] rounded-lg z-40 hidden md:block">
                                <div className="flex items-center justify-center">
                                    {/* Kiri */}
                                    <div className="flex-1 flex items-center gap-4">
                                        <span className="text-5xl font-bold text-gray-900">10</span>
                                        <span className="text-xl text-gray-700 w-10">years Experience</span>
                                    </div>

                                    {/* Garis vertical */}
                                    <div className="w-px h-10 bg-gray-600 mx-4" />

                                    {/* Kanan */}
                                    <div className="flex-1 flex  items-center gap-4">
                                        <span className="text-5xl font-bold text-gray-900">250</span>
                                        <span className="text-xl text-gray-700">Types of Courses</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        ref={view2}
                        initial={{ opacity: 0, y: 60 }}
                        animate={inView2 ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.1
                        }}
                        className="mt-10 flex md:flex-row flex-col-reverse justify-between items-center gap-8">
                        {/* Kiri */}
                        <div className="relative mt-10">
                            {items.map((item, index) => (
                                <div key={index} className="relative flex items-start  md:ps-10 mb-10">
                                    {/* Garis vertikal di tengah badge (kecuali terakhir) */}

                                    {/* Badge bulat putih */}
                                    <div className="relative w-16 h-16 flex justify-center rounded-full items-center bg-white shadow-md flex-shrink-0 z-10">
                                        {item.icon}
                                        {index < items.length - 1 && (
                                            <div className="absolute top-full left-1/2 w-[2px] h-[100px] bg-gray-300 -translate-x-1/2 z-10" />
                                        )}
                                    </div>

                                    {/* Teks */}
                                    <div className="ps-4">
                                        <h4 className="text-2xl font-semibold text-gray-800">
                                            {item.title}
                                        </h4>
                                        <p className="text-lg text-gray-500 mt-2 w-48 leading-tight">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Kanan */}
                        <div className="w-full lg:w-[65%] flex justify-center mt-7">
                            <div className="w-full h-full relative md:static">
                                <div className="md:hidden absolute top-[-2rem] right-3 w-[200px]">
                                    <div
                                        ref={sliderRef}
                                        className="keen-slider bg-green-400 rounded-lg h-[60px] w-full overflow-hidden"
                                    >
                                        <div className="keen-slider__slide flex items-center gap-2 ps-7">
                                            <div className="text-4xl tracking-tighter font-bold text-gray-900">10</div>
                                            <div className="text-md text-gray-700 w-10 leading-4">YEARS EXPERIENCE</div>
                                        </div>
                                        <div className="keen-slider__slide flex items-center gap-2 ps-7">
                                            <div className="text-4xl tracking-tighter font-bold text-gray-900">250</div>
                                            <div className="text-md text-gray-700 w-10 leading-4">
                                                <span className="whitespace-nowrap">TYPE OF <br /> COURSES</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img className="overflow-hidden rounded-3xl" src={onlineClass} alt="" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </Container >
    )
}

export default Skill