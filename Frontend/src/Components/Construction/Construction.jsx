import React from "react";
import { constructionData } from "./constructionData";
import ConstructionCard from "./ConstructionCard";

export default function Construction() {
  const { title, subtitle, icon, categories } = constructionData;

  return (
    <section className="w-full bg-[#fcfcfc] pb-16 pt-8">
      <div className="mx-auto max-w-[1280px] px-4">
        {/* Page header */}
        <div className="mb-8 text-center">
          <img src={icon} alt="" className="mx-auto mb-4 h-20 w-auto" />
          <h1 className="font-heading text-4xl font-bold text-[#333]">{title}</h1>
          <p className="mt-3 text-base text-gray-500">{subtitle}</p>
        </div>

        {/* Categories */}
        {categories.map((cat) => (
          <div key={cat.id} id={cat.id} className="mb-10">
            {/* Grey gradient category bar */}
            <h2 className="mb-5 bg-gradient-to-r from-[#f5f5f5] to-[#cfcfcf] px-2 py-1 font-heading text-2xl font-bold text-[#333] shadow-md">
              {cat.title}
            </h2>

            {/* Product grid */}
            <div className="mx-auto grid max-w-[1260px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cat.products.map((p, i) => (
                <ConstructionCard key={i} product={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}