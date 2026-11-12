// import React from "react";
// import { FaShoppingCart, FaLink } from "react-icons/fa";

// const formatPrice = (n) =>
//   `$ ${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// export default function ConstructionCard({ product }) {
//   const { name, price, img, href } = product;

//   return (
//     <div className="group bg-[#fafafa] p-2">
//       {/* Image + hover overlay */}
//       <div className="relative aspect-square overflow-hidden bg-white">
//         <img
//           src={img}
//           alt={name}
//           loading="lazy"
//           className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-70"
//         />

//         {/* Cart + link buttons (hover par neeche se upar aate hain) */}
//         <div className="absolute inset-x-0 bottom-0 flex translate-y-full transition-transform duration-300 group-hover:translate-y-0">
//           <a
//             href={href}
//             aria-label={`Add ${name} to cart`}
//             className="flex h-[76px] flex-1 items-center justify-center border-r border-white/30 bg-[#54a5dd] text-white transition-colors hover:bg-white hover:text-[#d9234a]"
//           >
//             <FaShoppingCart className="h-6 w-6" />
//           </a>
//           <a
//             href={href}
//             aria-label={`View ${name}`}
//             className="flex h-[76px] flex-1 items-center justify-center bg-[#54a5dd] text-white transition-colors hover:bg-white hover:text-[#d9234a]"
//           >
//             <FaLink className="h-5 w-5" />
//           </a>
//         </div>
//       </div>

//       {/* Name + price */}
//       <div className="bg-white px-6 py-4">
//         <h3 className="line-clamp-2 font-heading text-[18px] font-bold leading-snug text-[#333]">
//           {name}
//         </h3>
//         {price != null && (
//           <p className="mt-1 text-[18px] text-[#d9234a]">{formatPrice(price)}</p>
//         )}
//       </div>
//     </div>
//   );
// }









import React from "react";
import { FaShoppingCart, FaLink } from "react-icons/fa";

const formatPrice = (n) =>
  `$ ${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export default function ConstructionCard({ product }) {
  const { name, price, img, href } = product;

  return (
    <div className="group">
      {/* Image box: the border lives ONLY here */}
      <div className="relative aspect-square overflow-hidden border-[10px] border-[#f8f8f8] bg-white">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-70"
        />

        <div className="absolute inset-x-0 bottom-0 flex translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <a
            href={href}
            aria-label={`Add ${name} to cart`}
            className="flex h-[76px] flex-1 items-center justify-center border-r border-white/30 bg-[#54a5dd] text-white transition-colors hover:bg-white hover:text-[#d9234a]"
          >
            <FaShoppingCart className="h-6 w-6" />
          </a>
          <a
            href={href}
            aria-label={`View ${name}`}
            className="flex h-[76px] flex-1 items-center justify-center bg-[#54a5dd] text-white transition-colors hover:bg-white hover:text-[#d9234a]"
          >
            <FaLink className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Name + price: outside the border, on the light background */}
      <div className="px-6 py-4">
        <h3 className="line-clamp-2 font-heading text-[18px] font-bold leading-snug text-[#333]">
          {name}
        </h3>
        {price != null && (
          <p className="mt-1 text-[18px] text-[#d9234a]">{formatPrice(price)}</p>
        )}
      </div>
    </div>
  );
}