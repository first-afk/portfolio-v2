/* eslint-disable react-hooks/set-state-in-effect */
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { testimonial } from "../../data";

export function Carousel() {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const visibleCount = isLargeScreen ? 3 : 1;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [visibleCount]);

  useEffect(() => {
    if (testimonial.length <= visibleCount) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % testimonial.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [visibleCount]);

  const visibleTestimonials = Array.from(
    { length: visibleCount },
    (_, offset) => testimonial[(activeIndex + offset) % testimonial.length],
  );

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${visibleCount}-${activeIndex}`}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 w-fit md:w-2/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "linear" }}
        >
          {visibleTestimonials.map(({ id, message, name, title }) => (
            <div key={id}>
              <p className="line-clamp-2 text-[12px] italic leading-[1.33] text-gray-400  first-letter:capitalize">{`"${message}"`}</p>
              <p className="capitalize text-[11px] leading-[1.33] text-gray-500">{`— ${name}, ${title}`}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
