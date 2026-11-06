import { brandsData } from "./brandsData";
import React from "react";

export default function Brands() {
  // Seamless loop ke liye same set 2 baar
  const loopItems = [...brandsData, ...brandsData];

  return (
    <section
      className="w-full overflow-hidden border-y border-[#e7e9ef] bg-white py-7"
      aria-label="Featured hardware brands"
    >
      <div className="flex w-max items-center animate-[marquee_34s_linear_infinite] hover:[animation-play-state:paused]">
        {loopItems.map((brand, i) => {
          const isDuplicate = i >= brandsData.length;
          return (
            <a
              key={i}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={isDuplicate || undefined}
              tabIndex={isDuplicate ? -1 : undefined}
              className="flex h-[190px] w-[380px] shrink-0 grow-0 items-center justify-center border-x border-[#e8ebf1] bg-white px-[34px] py-[26px] transition-[background-color,transform] duration-[220ms] ease-in-out hover:-translate-y-1 hover:bg-[#f7f8fc]"
             >
              <img
                src={brand.img}
                alt={isDuplicate ? "" : brand.alt}
                loading="lazy"
                decoding="async"
                className="block max-h-[120px] object-contain"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}