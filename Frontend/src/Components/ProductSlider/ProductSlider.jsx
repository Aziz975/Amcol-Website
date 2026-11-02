import ProductCard from "../ProductCard/ProductCard";

export default function ProductSlider({ products, label }) {
  // Seamless loop ke liye products ko dohraya
  const duplicatedProducts = [...products, ...products];

  return (
    <div
      role="region"
      aria-label={label}
      className="relative w-full overflow-hidden py-2"
    >
      <div className="flex w-max animate-marquee gap-5 pr-5 hover:[animation-play-state:paused]">
        {duplicatedProducts.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="w-[260px] shrink-0 sm:w-[275px] md:w-[280px]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}