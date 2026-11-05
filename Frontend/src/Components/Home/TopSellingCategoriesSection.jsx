// import React from 'react';
// import SectionHeading from './SectionHeading';
// import { topSellingCategories } from './topSellingData';

// export default function TopSellingCategoriesSection() {
//   return (
//     <section id="portfoliogrid" className="w-full bg-white py-8">
//       <div className="mx-auto max-w-7xl px-4">
//         {/* Reusing your project's SectionHeading component */}
//         <SectionHeading title="Top Selling Categories" icon="flag" />

//         {/* 4-Column Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//           {topSellingCategories.map((item) => (
//             <a
//               key={item.id}
//               href={item.href}
//               className="group relative block overflow-hidden"
//             >
//               <div className="aspect-[576/450] w-full overflow-hidden object-cover">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   loading="lazy"
//                   decoding="async"
//                   className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import { topSellingCategories } from './topSellingData';

export default function TopSellingCategoriesSection() {
    return (
        <section id="portfoliogrid" className="w-full bg-white py-12">
            <div className="mx-auto max-w-[1200px] px-4">

                {/* Section Fancy Heading with Red Flag */}
                <div className="mb-10 text-center">
                    <div className="mb-2 inline-block text-[#d9534f]">
                        <svg
                            className="mx-auto h-8 w-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-[#333333] md:text-3xl">
                        Top Selling Categories
                    </h2>
                </div>

                {/* 4-Column Seamless Grid Layout */}
                <ul className="m-0 grid grid-cols-1 list-none p-0 sm:grid-cols-2 lg:grid-cols-4">
                    {topSellingCategories.map((item) => (
                        <li key={item.id} className="m-0 overflow-hidden p-0">
                            <a
                                href={item.href}
                                className="group relative block overflow-hidden"
                            >
                                {/* Clean Image Container without text overlay */}
                                <div className="relative w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"

                                        className="max-h-full max-w-full object-contain transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-105 group-hover:opacity-80 group-hover:brightness-110" />
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
}