"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";

type Item = { href: string; label: string };

export function SlidingNavigation({ items, activeHref, label, compact = false }: {
  items: Item[];
  activeHref: string;
  label: string;
  compact?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const gesture = useRef<{ start: number; moved: boolean; target: string } | null>(null);
  const suppressClick = useRef(false);
  const [dragging, setDragging] = useState(false);
  const [selected, setSelected] = useState(activeHref);
  const [position, setPosition] = useState({ x: 0, width: 0 });

  useLayoutEffect(() => setSelected(activeHref), [activeHref]);
  useLayoutEffect(() => {
    const container = root.current;
    if (!container) return;
    const update = () => {
      const target = Array.from(container.querySelectorAll<HTMLAnchorElement>("a")).find((link) => link.dataset.href === selected);
      if (target) setPosition({ x: target.offsetLeft, width: target.offsetWidth });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    container.querySelectorAll("a").forEach((link) => observer.observe(link));
    return () => observer.disconnect();
  }, [selected, items]);

  return (
    <div ref={root} role={compact ? "group" : undefined} aria-label={label} className={`sliding-nav ${compact ? "sliding-nav-compact" : ""} ${dragging ? "is-dragging" : ""}`}
      onPointerDown={(event) => {
        if (event.button !== 0 || !(event.target as HTMLElement).closest("a[data-href]")) return;
        gesture.current = { start: event.clientX, moved: false, target: selected };
      }}
      onPointerMove={(event) => {
        const state = gesture.current;
        if (!state) return;
        if (!state.moved && Math.abs(event.clientX - state.start) < 6) return;
        if (!state.moved) {
          state.moved = true;
          setDragging(true);
          event.currentTarget.setPointerCapture(event.pointerId);
        }
        const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>("a"));
        const nearest = links.reduce((best, link) => {
          const rect = link.getBoundingClientRect();
          return Math.abs(event.clientX - (rect.left + rect.width / 2)) < best.distance
            ? { href: link.dataset.href || selected, distance: Math.abs(event.clientX - (rect.left + rect.width / 2)) }
            : best;
        }, { href: selected, distance: Infinity });
        state.target = nearest.href;
        setSelected(nearest.href);
      }}
      onPointerUp={(event) => {
        const state = gesture.current;
        gesture.current = null;
        setDragging(false);
        if (!state?.moved) return;
        suppressClick.current = true;
        if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
        if (state.target !== activeHref) router.push(state.target);
        window.setTimeout(() => { suppressClick.current = false; }, 0);
      }}
      onPointerCancel={() => { gesture.current = null; setDragging(false); setSelected(activeHref); }}>
      <span aria-hidden className="sliding-indicator" style={{ width: position.width, transform: `translateX(${position.x}px)`, opacity: position.width ? 1 : 0 }} />
      {items.map((item) => (
        <Link key={item.href} data-href={item.href} href={item.href}
          aria-current={item.href === activeHref ? "page" : undefined}
          onClick={(event) => { if (suppressClick.current) { event.preventDefault(); return; } setSelected(item.href); }}
          className={`sliding-nav-link ${item.href === selected ? "is-selected" : ""}`}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
