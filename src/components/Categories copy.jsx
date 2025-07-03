import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import digitalMarketing from '../assets/digital-marketing.jpg'
import copywriting from '../assets/copywriting.jpg'
import illustrator from '../assets/illustrator.jpg'
import dataAnalyst from '../assets/data-analyst.jpg'


function Categories() {
    const [selected, setSelected] = useState("All Categories");
    const sectionRef = useRef(null);
    const sectionRef2 = useRef(null);
    const containerRef = useRef(null);
    const itemRefs = useRef([]);
    const moveDistanceRefs = useRef([]);

    const [generalCourses, setGeneralCourses] = useState([
        {
            name: "Digital Marketing",
            description: "6 weeks",
            height: 245,
            moveDistance: 0,
            image: digitalMarketing
        },
        {
            name: "Copywriting",
            description: "4 weeks",
            height: 280,
            moveDistance: 0,
            image: copywriting
        },
        {
            name: "Design Art",
            description: "1.5 months",
            height: 270,
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

    const lastScrollY = useRef(0);

    useEffect(() => {
        moveDistanceRefs.current = generalCourses.map((_, i) => moveDistanceRefs.current[i] || 0);
        itemRefs.current = generalCourses.map((_, i) => itemRefs.current[i] || React.createRef());
    }, [generalCourses]);

    const handleMoveScroll = () => {
        const currentScrollY = window.scrollY;
        console.log(currentScrollY);

        const direction = currentScrollY > lastScrollY.current ? "down" : "up";
        lastScrollY.current = currentScrollY;

        const container = containerRef.current;
        if (!container) return;

        const containerHeight = container.offsetHeight;

        const updatedCourses = generalCourses.map((course, index) => {
            const itemEl = itemRefs.current[index]?.current;
            if (!itemEl) return course;

            const itemHeight = itemEl.offsetHeight;
            const maxMove = containerHeight - itemHeight;

            let currentDistance = moveDistanceRefs.current[index] || 0;

            let nextDistance = direction === "down"
                ? currentDistance + 5
                : currentDistance - 5;

            if (nextDistance >= maxMove) nextDistance = maxMove;
            if (nextDistance <= 0) nextDistance = 0;

            moveDistanceRefs.current[index] = nextDistance;

            return {
                ...course,
                moveDistance: nextDistance
            };
        });

        setGeneralCourses(updatedCourses);
    };

    useEffect(() => {
        const handleScroll = () => {
            console.log('User sedang scroll:', window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup agar tidak memory leak
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const intersectingState = {
            section1: false,
            section2: false,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === sectionRef.current) {
                    intersectingState.section1 = entry.isIntersecting;
                }
                if (entry.target === sectionRef2.current) {
                    intersectingState.section2 = entry.isIntersecting;
                }

                // Cek kalau dua-duanya keliatan
                if (intersectingState.section1 && intersectingState.section2) {
                    window.addEventListener("scroll", handleMoveScroll);
                } else {
                    window.removeEventListener("scroll", handleMoveScroll);
                }
            });
        }, {
            threshold: 0.4,
        });

        if (sectionRef.current) observer.observe(sectionRef.current);
        if (sectionRef2.current) observer.observe(sectionRef2.current);

        return () => {
            window.removeEventListener("scroll", handleMoveScroll);
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            if (sectionRef2.current) observer.unobserve(sectionRef2.current);
        };
    }, []);

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
            <section className="w-full md:py-12 md:pt-24 pt-[-8rem] flex flex-col items-center">
                <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center lg:text-left">
                    Unlimited access to 100+ instructors.
                </h2>

                <div ref={sectionRef2} className="flex gap-6 mb-10 whitespace-nowrap scrollbar-hide">
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

                <section className="relative overflow-hidden">
                    <div className="flex items-center justify-center">
                        <div
                            ref={containerRef}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full h-[350px] "
                        >
                            {generalCourses.map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        transform: `translateY(${item.moveDistance}px)`,
                                        height: `${item.height}px`,
                                    }}
                                    className="w-full flex flex-col transition-transform duration-300 ease-out"
                                >
                                    <img
                                        src={item.image}
                                        className="w-[250px] bg-gray-200 rounded-lg mb-4"
                                        style={{ height: `${item.height}px` }}
                                    />
                                    <h3 className="text-2xl font-semibold text-gray-800">
                                        {item.name}
                                    </h3>
                                    <p className="mt-2 text-xl text-gray-500">
                                        {item.description ||
                                            `Explore deeper insights and practical use cases about ${item.name}.`}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </Container>
    );
}

export default Categories;