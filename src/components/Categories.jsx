import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import digitalMarketing from '../assets/digital-marketing.jpg'
import copywriting from '../assets/copywriting.jpg'
import illustrator from '../assets/illustrator.jpg'
import dataAnalyst from '../assets/data-analyst.jpg'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


function Categories() {
    const [selected, setSelected] = useState("All Categories");
    const sectionRef2 = useRef(null);
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
    const { ref: view4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });


    const [generalCourses, setGeneralCourses] = useState([
        {
            name: "Marketing",
            description: "6 weeks",
            height: 180,
            moveDistance: 0,
            image: digitalMarketing
        },
        {
            name: "Copywriting",
            description: "4 weeks",
            height: 200,
            moveDistance: 0,
            image: copywriting
        },
        {
            name: "Design Art",
            description: "1.5 months",
            height: 250,
            moveDistance: 0,
            image: illustrator
        },
        {
            name: "Data Analysis",
            description: "2 months",
            height: 220,
            moveDistance: 0,
            image: dataAnalyst
        },
    ]);

    const containerRefs = useRef([]);
    const itemRefs = useRef([]);
    const [maxTranslateY, setMaxTranslateY] = useState([]);
    const lastScrollY = useRef(0);



    // Menghitung maxTranslateY berdasarkan tinggi parent
    useEffect(() => {
        const newMaxYs = itemRefs.current.map((item, i) => {
            const container = containerRefs.current[i];
            if (!item || !container) return 0;

            const itemHeight = item.offsetHeight;
            const containerHeight = container.offsetHeight;

            const maxY = containerHeight - itemHeight;
            return maxY < 0 ? 0 : maxY;
        });

        setMaxTranslateY(newMaxYs); // ✅ simpan array hasil maxY
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            console.log(window.scrollY);

            if (window.scrollY < 522) {
                setGeneralCourses((prevCourses) =>
                    prevCourses.map((course, index) => {
                        return {
                            ...course,
                            moveDistance: 0,
                        };
                    })
                );
            }

            if (window.scrollY > 820) {
                setGeneralCourses((prevCourses) =>
                    prevCourses.map((course, index) => {
                        return {
                            ...course,
                            moveDistance: maxTranslateY[index],
                        };
                    })
                );
            }

            // Cek apakah scroll ke bawah
            if (currentScrollY >= 524 && currentScrollY <= 820) {
                if (currentScrollY > lastScrollY.current) {
                    console.log("test gerak");
                    
                    setGeneralCourses((prevCourses) =>
                        prevCourses.map((course, index) => {
                            const newMove = course.moveDistance + 3;
                            const maxY = maxTranslateY[index];
                            
                            console.log("the move is : " + course.moveDistance);
                            return {
                                ...course,
                                moveDistance: newMove > maxY ? maxY : newMove,
                            };
                        })
                    );
                } else {
                    setGeneralCourses((prevCourses) =>
                        prevCourses.map((course, index) => {
                            const newMove = course.moveDistance - 3;
                            const maxY = maxTranslateY[index];

                            console.log("the move is : " + newMove);
                            return {
                                ...course,
                                moveDistance: newMove < 0 ? 0 : newMove,
                            };
                        })
                    );
                }
            }

            // if (currentScrollY >= 524) {
            //     const relativeScroll = currentScrollY - 524;

            //     setGeneralCourses((prevCourses) =>
            //         prevCourses.map((course, index) => {
            //             const maxY = maxTranslateY[index];
            //             const newMove = Math.min(relativeScroll, maxY);
            //             return {
            //                 ...course,
            //                 moveDistance: newMove,
            //             };
            //         })
            //     );
            // }


            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [maxTranslateY]);


    const categories = [
        "All Categories",
        "Design",
        "Development",
        "Business",
        "Copywriting",
        "Data Analysis",
    ];

    return (
        <Container bg>
            <section id="categories" className="w-full md:py-12 md:pt-24 pt-16 flex flex-col items-center">
                <motion.div
                    ref={view1}
                    initial={{ opacity: 0, y: 60 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.1
                    }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center lg:text-left">
                        Unlimited access to 100+ instructors.
                    </h2>
                </motion.div>

                <motion.div
                    ref={view2}
                    initial={{ opacity: 0, y: 60 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.1
                    }}
                >
                    <div ref={sectionRef2} className="flex gap-6 mb-10 whitespace-nowrap scrollbar-hide w-screen overflow-scroll px-8 md:w-auto md:overflow-visible md:px-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelected(cat)}
                                className={`relative group text-base font-medium transition-all duration-300 ${selected === cat ? "text-green-600" : "text-gray-500 hover:text-black"
                                    }`}
                            >
                                {cat}
                                <span
                                    className={`absolute left-0 w-full h-[2px] transition-all duration-300 ${selected === cat
                                        ? "bg-green-500 bottom-0"
                                        : "bg-gray-300 bottom-[-10px] opacity-0 group-hover:bottom-0 group-hover:opacity-100"
                                        }`}
                                ></span>
                            </button>
                        ))}
                    </div>
                </motion.div>


                <motion.div
                    ref={view3}
                    initial={{ opacity: 0, y: 60 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.1
                    }} className="relative overflow-hidden hidden md:block"
                >
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {generalCourses.map((item, index) => (
                                <div key={index} className="w-full">
                                    <div
                                        ref={(el) => (containerRefs.current[index] = el)}
                                        className="h-[350px] flex flex-col  relative overflow-hidden rounded"
                                    >
                                        <div
                                            ref={(el) => (itemRefs.current[index] = el)}
                                            style={{
                                                transform: `translateY(${item.moveDistance}px)`,
                                                transition: "transform 0.2s ease-out",
                                            }}
                                            className="flex flex-col space-y-4"
                                        >
                                            <img
                                                src={item.image}
                                                className="w-[250px]  rounded-lg "
                                                style={{ height: `${item.height}px` }}
                                                alt={item.name}
                                            />
                                            <h3 className="text-2xl font-semibold text-gray-800">
                                                {item.name}
                                            </h3>
                                            <p className="mt-2 text-xl text-gray-500">
                                                {item.description ||
                                                    `Explore deeper insights about ${item.name}.`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* mobile grid */}
                <motion.div
                    ref={view4}
                    initial={{ opacity: 0, y: 60 }}
                    animate={inView4 ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.1
                    }} className="relative overflow-hidden block md:hidden"
                >
                    <div className="flex items-center justify-center mt-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
                            {generalCourses.map((item, index) => (
                                <div key={index} className="w-full">
                                    <div
                                        className="h-[350px] flex flex-col  relative overflow-hidden rounded"
                                    >
                                        <div
                                            className="flex flex-col space-y-4"
                                        >
                                            <img
                                                src={item.image}
                                                className="w-[250px] bg-gray-200 rounded-lg "
                                                style={{ height: `200px` }}
                                                alt={item.name}
                                            />
                                            <h3 className="text-2xl font-semibold text-gray-800">
                                                {item.name}
                                            </h3>
                                            <p className="mt-2 text-xl text-gray-500">
                                                {item.description ||
                                                    `Explore deeper insights about ${item.name}.`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
        </Container >
    );
}

export default Categories;