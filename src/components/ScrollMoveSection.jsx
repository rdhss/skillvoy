import { useEffect, useRef, useState } from "react";
// import digitalMarketing from '../'

const ScrollMoveSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const itemRef = useRef(null);

  const [moveDistance, setMoveDistance] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const moveRef = useRef(0); // Real-time tracker
  const lastScrollY = useRef(0); // Track previous scrollY

  // Sync moveRef ke state
  useEffect(() => {
    moveRef.current = moveDistance;
  }, [moveDistance]);

  const handleMoveScroll = () => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY.current ? "down" : "up";
    lastScrollY.current = currentScrollY;

    const item = itemRef.current;
    const container = containerRef.current;

    if (!item || !container) return;

    const itemHeight = item.offsetHeight;
    const containerHeight = container.offsetHeight;
    const maxMove = containerHeight - itemHeight;

    let nextDistance =
      direction === "down"
        ? moveRef.current + 7
        : moveRef.current - 7;

    if (nextDistance >= maxMove) {
      nextDistance = maxMove;
      setDisabled(true);
    } else if (nextDistance <= 0) {
      nextDistance = 0;
      setDisabled(false);
    }

    setMoveDistance(nextDistance);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleMoveScroll);
        } else {
          window.removeEventListener("scroll", handleMoveScroll);
        }
      },
      { root: null, threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleMoveScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-red-300 h-[700px] py-12">
      <div ref={containerRef} className="px-4 h-full flex items-start gap-6 justify-center">
        <img
          src={digitalMarketing}
          ref={itemRef}
          className="bg-gray-300 h-[300px] w-[200px] rounded-lg transition-transform duration-200"
          style={{ transform: `translateY(${moveDistance}px)` }}
        ></img>
        <div className="bg-gray-300 h-[500px] w-[200px] rounded-lg"></div>
      </div>
    </section>
  );
};

export default ScrollMoveSection;
