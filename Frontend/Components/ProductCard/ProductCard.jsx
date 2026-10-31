import { Link } from "react-router-dom";
import { FaShoppingCart, FaLink } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { name, slug, price, image } = product;

  return (
    <article className="group flex h-full flex-col bg-white shadow-md transition-shadow duration-200 hover:shadow-xl">
      {/* Image + hover bar */}
      <div className="relative aspect-square overflow-hidden p-3">
        <img
          src={image}
          alt={name}
          width="400"
          height="400"
          loading="lazy"
          className="h-full w-full object-contain"
        />

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

      {/* Name + price */}
      <div className="p-5">
        <h3 className="line-clamp-2 font-heading text-[20px] font-semibold leading-snug text-[#444]">
          <Link to={`/products/${slug}`} className="hover:text-brand-red">
            {name}
          </Link>
        </h3>
        <p className="mt-1 text-lg text-brand-red">
          {price.toFixed(2)} <span className="text-sm">TTD</span>
        </p>
      </div>
    </article>
  );
}