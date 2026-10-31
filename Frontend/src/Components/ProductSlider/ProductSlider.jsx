import { useRef, useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard";

const AUTOPLAY_MS = 1000; // 3 second me ek card aage

export default function ProductSlider({ products, label }) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // direction: 1 = aage, -1 = peeche
  const scroll = useCallback((direction) => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = track.firstElementChild.getBoundingClientRect().width + gap;

    const atStart = track.scrollLeft <= 5;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 5;

    if (direction === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" }); // aakhir se wapas shuru
    } else if (direction === -1 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    } else {
      track.scrollBy({ left: direction * step, behavior: "smooth" });
    }
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const id = setInterval(() => scroll(1), AUTOPLAY_MS);
    return () => clearInterval(id); // cleanup
  }, [paused, scroll]);

  const arrowClass =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-[#444] shadow-lg transition-colors hover:bg-brand-red hover:text-white";

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <button
        type="button"
        aria-label="Previous products"
        onClick={() => scroll(-1)}
        className={`${arrowClass} left-1 md:-left-5`}
      >
        <FaChevronLeft aria-hidden="true" />
      </button>

      <ul
        ref={trackRef}
        aria-label={label}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <li
            key={product.id}
            className="w-[calc((100%_-_20px)/2)] shrink-0 snap-start md:w-[calc((100%_-_60px)/4)]"
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="Next products"
        onClick={() => scroll(1)}
        className={`${arrowClass} right-1 md:-right-5`}
      >
        <FaChevronRight aria-hidden="true" />
      </button>
    </div>
  );
}