import { Link } from "react-router-dom";
import { FaShoppingCart, FaLink } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { name, slug, price, image } = product;

  return (
<article className="group flex h-full flex-col bg-white shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)]">      {/* Image area: bahar padding, andar halka grey frame */}
      <div className="p-3 pb-0 border-[10px] border-[#f7f7f7]">
        <div className="relative aspect-square overflow-hidden bg-white">
          <img
            src={image}
            alt={name}
            width="400"
            height="400"
            loading="lazy"
            className="h-full w-full object-contain"
          />

          {/* Hover bar */}
          <div className="absolute inset-x-0 bottom-0 flex translate-y-full bg-[#3fa0dc] text-white transition-transform duration-200 group-hover:translate-y-0 group-focus-within:translate-y-0 max-md:translate-y-0">
            <button
              type="button"
              aria-label={`Add ${name} to cart`}
              onClick={() => console.log("Add to cart:", name)}
              className="flex flex-1 cursor-pointer items-center justify-center py-4 transition-colors hover:bg-[#2f8cc6]"
            >
              <FaShoppingCart size={22} aria-hidden="true" />
            </button>
            <Link
              to={`/products/${slug}`}
              aria-label={`View details of ${name}`}
              className="flex flex-1 items-center justify-center border-l border-white/30 py-4 transition-colors hover:bg-[#2f8cc6]"
            >
              <FaLink size={22} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Name + price */}
      <div className="min-h-[135px] px-5 py-5">
        <h3 className="mb-1 line-clamp-2 font-['Bree_Serif',serif] text-[20px] font-bold leading-snug">
  <Link to={`/products/${slug}`} className="text-[#444]">
    {name}
  </Link>
</h3>
        <p className="font-['Roboto',Arial,sans-serif] text-[18px] text-[#e31837]">
          {price.toFixed(2)} <span className="text-[14px]">TTD</span>
        </p>
      </div>
    </article>
  );
}