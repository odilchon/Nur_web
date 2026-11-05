"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const target = Number(value.replace(/[^\d]/g, ""));
    if (!Number.isFinite(target)) return;
    const separator = value.match(/\d([., ])\d{3}/)?.[1] ?? "";
    const suffix = value.endsWith("+") ? "+" : "";
    let frame = 0;
    let played = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || played) return;
      played = true;
      observer.disconnect();
      const start = performance.now();
      const duration = 1050;
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(target * eased);
        const formatted = separator
          ? String(current).replace(/\B(?=(\d{3})+(?!\d))/g, separator)
          : String(current);
        setDisplay(formatted + suffix);
        if (t < 1) frame = requestAnimationFrame(tick);
        else setDisplay(value);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref} aria-label={value}>{display}</span>;
}
