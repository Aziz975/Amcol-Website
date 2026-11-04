import { Link } from "react-router-dom";
import DepartmentSlider from "../DepartmentSlider/DepartmentSlider";
import { departments } from "./departmentData";

export default function ShopByDepartmentSection() {
  return (
    <section
      aria-labelledby="departments-heading"
      className="bg-[linear-gradient(to_bottom,#fdecee,#ffffff_240px)] w-full py-12"
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
  );
}
