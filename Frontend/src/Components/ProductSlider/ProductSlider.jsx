// import { useRef, useState, useEffect, useCallback } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import ProductCard from "../ProductCard/ProductCard";

// const AUTOPLAY_MS = 1000; // 3 second me ek card aage

// export default function ProductSlider({ products, label }) {
//   const trackRef = useRef(null);
//   const [paused, setPaused] = useState(false);

//   // direction: 1 = aage, -1 = peeche
//   const scroll = useCallback((direction) => {
//     const track = trackRef.current;
//     if (!track || !track.firstElementChild) return;

//     const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
//     const step = track.firstElementChild.getBoundingClientRect().width + gap;

//     const atStart = track.scrollLeft <= 5;
//     const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 5;

//     if (direction === 1 && atEnd) {
//       track.scrollTo({ left: 0, behavior: "smooth" }); // aakhir se wapas shuru
//     } else if (direction === -1 && atStart) {
//       track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
//     } else {
//       track.scrollBy({ left: direction * step, behavior: "smooth" });
//     }
//   }, []);

//   // Autoplay
//   useEffect(() => {
//     if (paused) return;

//     const reduceMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;
//     if (reduceMotion) return;

//     const id = setInterval(() => scroll(1), AUTOPLAY_MS);
//     return () => clearInterval(id); // cleanup
//   }, [paused, scroll]);

//   const arrowClass =
//     "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-[#444] shadow-lg transition-colors hover:bg-brand-red hover:text-white";

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//       onFocus={() => setPaused(true)}
//       onBlur={() => setPaused(false)}
//     >
//       <button
//         type="button"
//         aria-label="Previous products"
//         onClick={() => scroll(-1)}
//         className={`${arrowClass} left-1 md:-left-5`}
//       >
//         <FaChevronLeft aria-hidden="true" />
//       </button>

//       <ul
//         ref={trackRef}
//         aria-label={label}
//         className="flex snap-x snap-mandatory gap-5 overflow-x-auto p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//       >
//         {products.map((product) => (
//           <li
//             key={product.id}
//             className="w-[calc((100%_-_20px)/2)] shrink-0 snap-start md:w-[calc((100%_-_60px)/4)]"
//           >
//             <ProductCard product={product} />
//           </li>
//         ))}
//       </ul>

//       <button
//         type="button"
//         aria-label="Next products"
//         onClick={() => scroll(1)}
//         className={`${arrowClass} right-1 md:-right-5`}
//       >
//         <FaChevronRight aria-hidden="true" />
//       </button>
//     </div>
//   );
// }








// import { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required styles
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import ProductCard from "../ProductCard/ProductCard";

// const AUTOPLAY_MS = 3000; // Adjusted to 3 seconds for better viewing

// export default function ProductSlider({ products, label }) {
//   const [paused, setPaused] = useState(false);

//   // Group products into chunks if you want multiple items per slide view, 
//   // or let the carousel handle responsive slides. 
//   // Here we display 4 items per slide on desktop, 2 on mobile.
//   const getChunkedProducts = () => {
//     const chunkSize = window.innerWidth >= 768 ? 4 : 2;
//     const chunks = [];
//     for (let i = 0; i < products.length; i += chunkSize) {
//       chunks.push(products.slice(i, i + chunkSize));
//     }
//     return chunks;
//   };

//   const productChunks = getChunkedProducts();

//   const arrowStyles =
//     "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-[#444] shadow-lg transition-colors hover:bg-brand-red hover:text-white";

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//       onFocus={() => setPaused(true)}
//       onBlur={() => setPaused(false)}
//       aria-label={label}
//     >
//       <Carousel
//         showThumbs={false}
//         showStatus={false}
//         showArrows={false} // Custom arrows are rendered manually
//         infiniteLoop={true}
//         autoPlay={!paused}
//         interval={AUTOPLAY_MS}
//         stopOnHover={false} // Handled manually via wrapper state
//         showIndicators={false}
//         renderArrowPrev={(onClickHandler, hasPrev, label) =>
//           hasPrev && (
//             <button
//               type="button"
//               onClick={onClickHandler}
//               aria-label={label}
//               className={`${arrowStyles} left-1 md:-left-5`}
//             >
//               <FaChevronLeft aria-hidden="true" />
//             </button>
//           )
//         }
//         renderArrowNext={(onClickHandler, hasNext, label) =>
//           hasNext && (
//             <button
//               type="button"
//               onClick={onClickHandler}
//               aria-label={label}
//               className={`${arrowStyles} right-1 md:-right-5`}
//             >
//               <FaChevronRight aria-hidden="true" />
//             </button>
//           )
//         }
//       >
//         {productChunks.map((chunk, index) => (
//           <div key={index} className="flex gap-5 px-1 py-2">
//             {chunk.map((product) => (
//               <div
//                 key={product.id}
//                 className="w-[calc((100%_-_20px)/2)] shrink-0 md:w-[calc((100%_-_60px)/4)]"
//               >
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }






import ProductCard from "../ProductCard/ProductCard";

export default function ProductSlider({ products, label }) {
  // Duplicate the products array to create a seamless infinite loop effect
  const duplicatedProducts = [...products, ...products];

  return (
    <div
      className="relative overflow-hidden w-full py-2 group"
      aria-label={label}
    >
      {/* 
        - flex w-max gap-5: Keeps all cards in a single long row with your 20px gap.
        - animate-marquee: Continuously scrolls the row.
        - group-hover:[animation-play-state:paused]: Pauses when you hover over the slider.
      */}
      <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
        {duplicatedProducts.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="w-[260px] sm:w-[275px] shrink-0 md:w-[280px]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}