import React from 'react'
import Container from './Container'
import person from '../assets/person.jpg'
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const Customer = () => {

    const testimonials = [
        {
            comment:
                "I learned a lot and the real projects helped me build confidence.",
            name: "John Smith",
            role: "Software Engineer",
            image: person,
        },
        {
            comment:
                "I learned a lot and the real projects helped me build confidence.",
            name: "John Smith",
            role: "Software Engineer",
            image: person,
        },
        {
            comment:
                "I learned a lot and the real projects helped me build confidence.",
            name: "John Smith",
            role: "Software Engineer",
            image: person,
        },
        {
            comment:
                "I learned a lot and the real projects helped me build confidence.",
            name: "John Smith",
            role: "Software Engineer",
            image: person,
        },
        {
            comment:
                "I learned a lot and the real projects helped me build confidence.",
            name: "John Smith",
            role: "Software Engineer",
            image: person,
        },
        {
            comment:
                "I learned a lot and the real projects helped me build confidence.",
            name: "John Smith",
            role: "Software Engineer",
            image: person,
        }
    ];

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: false,
        mode: "snap",
        slides: {
            perView: 4,
            spacing: -120,
        }
    });

        const [sliderRef2, instanceRef2] = useKeenSlider({
        loop: false,
        mode: "snap",
        slides: {
            perView: 1,
            spacing: -120,
        }
    });

    const { ref: view1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });


    return (
        <motion.div
            ref={view1}
            initial={{ opacity: 0, y: 60 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1
            }}
            id='customer'
            className='flex flex-col items-center '>
            <p className='text-5xl mt-10 ps-6 md:ps-0'>
                What our customer say.
            </p>
            <div className="relative mt-12  w-full">


                {/* Carousel */}
                <div className='hidden md:block'>
                    <div ref={sliderRef} className="keen-slider hidden w-screen py-4 h-full px-16">
                        {testimonials.map((item, index) => (
                            <div key={index} className="keen-slider__slide flex">
                                <div className="bg-white p-6 w-[260px] rounded-xl shadow-md space-y-4 flex flex-col h-[300px]">
                                    {/* Komentar */}
                                    <p className="text-gray-700 md:text-md leading-relaxed italic flex-grow">
                                        {item.comment}
                                    </p>

                                    {/* Profil */}
                                    <div className="flex items-center space-x-4 pt-10">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="text-base font-semibold text-gray-900">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-gray-500">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Corousel Mobile */}
                <div className='md:hidden block'>
                    <div ref={sliderRef2} className="keen-slider hidden w-screen py-4 h-full px-16">
                        {testimonials.map((item, index) => (
                            <div key={index} className="keen-slider__slide flex">
                                <div className="bg-white p-6 md:w-[260px] w-[240px] rounded-xl shadow-md space-y-4 flex flex-col md:h-[300px] h-[270px]">
                                    {/* Komentar */}
                                    <p className="text-gray-700 md:text-md leading-relaxed italic flex-grow">
                                        {item.comment}
                                    </p>

                                    {/* Profil */}
                                    <div className="flex items-center space-x-4 pt-10">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="text-base font-semibold text-gray-900">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-gray-500">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className='hidden md:flex mt-6 gap-7'>
                <div onClick={() => instanceRef.current?.prev()}>
                    <ArrowLeft className='text-gray-400 cursor-pointer' size={30} />
                </div>
                <div onClick={() => instanceRef.current?.next()}>
                    <ArrowRight className='text-gray-400 cursor-pointer' size={30} />
                </div>
            </div>

             <div className='flex md:hidden mt-6 gap-7'>
                <div onClick={() => instanceRef2.current?.prev()}>
                    <ArrowLeft className='text-gray-400 cursor-pointer' size={30} />
                </div>
                <div onClick={() => instanceRef2.current?.next()}>
                    <ArrowRight className='text-gray-400 cursor-pointer' size={30} />
                </div>
            </div>
        </motion.div>
    )
}

export default Customer