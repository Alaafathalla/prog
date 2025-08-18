import React, { useEffect, useMemo, useRef, useState } from "react";

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isIntersecting;
}

function useCountUp(targetValue, durationMs, start) {
  const [currentValue, setCurrentValue] = useState(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    let animationFrameId = 0;

    const step = (timestamp) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCurrentValue(Math.floor(eased * targetValue));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [start, targetValue, durationMs]);

  const formatted = useMemo(() => currentValue.toLocaleString(), [currentValue]);
  return formatted;
}

export default function WhyChoose() {
  const sectionRef = useRef(null);
  const inView = useOnScreen(sectionRef, "-100px");

  const clients = useCountUp(9999, 1800, inView);
  const projects = useCountUp(9999, 1800, inView);

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-16">
      <div className="mx-auto w-11/12 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          WHY YOU SHOULD CHOOSE OUR WELDING SERVICES
        </h2>
        <p className="mt-5 max-w-3xl text-neutral-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue,
          iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor,
          malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded border-2 border-yellow-600 p-8 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-white">
              {clients}
            </div>
            <div className="mt-3 tracking-widest text-sm text-neutral-300">
              SATISFIED CLIENTS
            </div>
          </div>
          <div className="rounded border-2 border-yellow-600 p-8 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-white">
              {projects}
            </div>
            <div className="mt-3 tracking-widest text-sm text-neutral-300">
              COMPLETE PROJECTS
            </div>
          </div>
        </div>

        <div className="mt-10 rounded border-2 border-yellow-600 p-8">
          <Progress label="EXPERIENCE" value={90} active={inView} />
          <div className="mt-6" />
          <Progress label="WORK DONE" value={95} active={inView} />
        </div>
      </div>
    </section>
  );
}

function Progress({ label, value, active }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-neutral-200">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded bg-neutral-800">
        <div
          className="h-full bg-yellow-500 transition-[width] duration-1000 ease-out"
          style={{ width: active ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

