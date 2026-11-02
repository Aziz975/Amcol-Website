import { Link } from "react-router-dom";
import SectionHeading from "../Home/SectionHeading";
import ProductSlider from "../ProductSlider/ProductSlider";
import { featuredProducts } from "./featuredProducts";
import DepartmentSlider from "../DepartmentSlider/DepartmentSlider";
import { departments } from "./departmentData";

export default function Home() {
    return (
        <main>
            {/* 1. Hero section */}
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

            {/* 2. Featured Industrial Products */}
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



                {/* 3. Shop by Department */}
                <section
                    aria-labelledby="departments-heading"
                    className="bg-[linear-gradient(to_bottom,#fdecee,#ffffff_240px)] py-12"
                >
                    <div className="mx-auto max-w-3xl px-5 text-center">
                        <h2
                            id="departments-heading"
                            className="font-heading text-3xl font-bold text-[#1c2f6b] md:text-5xl"
                        >
                            Shop by Department
                        </h2>
                        <p className="mt-4 text-lg text-gray-800">
                            Browse popular AMCOL Hardware departments for tools,{" "}
                            <Link to="/products" className="text-[#d71920] hover:underline">
                                building supplies
                            </Link>
                            , plumbing, electrical products and home improvement essentials.
                        </p>
                    </div>

                    <div className="mt-10">
                        <DepartmentSlider
                            departments={departments}
                            label="Shop by department"
                        />
                    </div>
                </section>

            </section>
        </main>
    );
}