import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mx-auto max-w-[1200px]"
    >
      <h1 id="hero-heading" className="sr-only">
        Build. Repair. Get It Done. Hardware, Tools and Building Supplies
        for Trinidad and Tobago
      </h1>

      <img
        src="/images/hero.jpeg"
        alt="AMCOL Hardware banner showing power tools, pipes and fittings"
        width="1471"
        height="485"
        fetchpriority="high"
        className="block h-auto w-full"
      />

      <Link
        to="/products"
        className="absolute left-[7.3%] top-[76%] inline-flex min-h-[44px] min-w-[150px] items-center justify-center rounded-md border-2 border-[#d71920] bg-[#d71920] px-[22px] py-3 text-center text-[14px] font-bold uppercase leading-none tracking-[0.4px] text-white no-underline shadow-[0_8px_18px_rgba(215,25,32,0.24)] transition duration-200 ease-in-out hover:-translate-y-0.5 hover:border-[#a8121a] hover:bg-[#a8121a] hover:shadow-[0_12px_24px_rgba(168,18,26,0.35)]"
      >
        Shop Products
      </Link>
    </section>
  );
}
