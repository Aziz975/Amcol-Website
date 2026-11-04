import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import ProductSlider from "../ProductSlider/ProductSlider";
import { featuredProducts } from "./featuredProducts";

export default function FeaturedProductsSection() {
  return (
    <section
      aria-labelledby="featured-industrial"
      className="mx-auto max-w-[1200px] px-5"
    >
      <SectionHeading
        id="featured-industrial"
        title="Featured Industrial Products"
      />
      <div className="mt-8">
        <ProductSlider
          products={featuredProducts}
          label="Featured industrial products"
        />
      </div>

      {/* Ready to order */}
      <div className="mt-8 flex flex-col items-center gap-2 pb-10 text-center">
        <p className="text-gray-600">Ready to order?</p>
        <Link
          to="/login"
          className="inline-flex items-center justify-center rounded-md bg-[#DB1F40] px-6 py-3 text-[15px] font-bold text-white shadow-[0_8px_18px_rgba(219,31,64,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#B3193A] hover:shadow-[0_12px_24px_rgba(179,25,58,0.35)]"
        >
          Click Here to Log In or Sign Up
        </Link>
      </div>
    </section>
  );
}