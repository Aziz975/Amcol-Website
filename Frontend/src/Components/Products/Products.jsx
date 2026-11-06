
import React, { useState, useMemo, useEffect } from "react";
import { ShoppingCart, Link as LinkIcon } from "lucide-react";

const products = [


  // Original 18 Products
  { id: 1, name: 'Parker#6a-b6lj2-ssp 3/8" Tubing B/valve Ss', price: "1,343.40", image: "images/01-padlock-valve.png" },
  { id: 2, name: "Rock Hard Cement 425", price: "64.00", image: "images/02-rock-hard-cement.png" },
  { id: 3, name: "Tcl Cement Bag 425 KG/95.5lbs", price: "74.00", image: "images/03-tcl-cement.png" },
  { id: 4, name: "Crc 130 Zinc-It Instant Cold Galvanize", price: "122.61", image: "images/04-crc-zinc-spray.png", sale: true },
  { id: 5, name: "Nomad 80 Power Flo Air Pump 250-2656", price: "25,721.67", image: "images/05-nomad-air-pump.png" },
  { id: 6, name: "95 Gallon Spill Kit", price: "6,932.81", image: "images/06-spill-kit.png" },
  { id: 7, name: "Eagle 2 Drum Plastic Spill Kit With Drain", price: "2,857.72", image: "images/07-eagle-drum-spill-kit.png" },
  { id: 8, name: "US TAPE 1/2 x 3/8 STAINLESS STEEL", price: "1,896.44", image: "images/08-stainless-steel-tape.png" },
  { id: 9, name: "US Tape Double Duty Oil Gauging Tape 75 ft", price: "2,611.60", image: "images/09-oil-gauging-tape.png" },
  { id: 10, name: "Band It Band, 1/2 X 100 20lbs", price: "1,249.01", image: "images/10-band-it-band.png", sale: true },
  { id: 11, name: "Band It Buckles, 1/2 Earlock 20lbs", price: "677.64", image: "images/11-band-it-buckles.png" },
  { id: 12, name: 'Parker 6J/6m-316 3/8" Tube x 1/4" Mpt', price: "3,787.60", image: "images/12-parker-fitting.png" },
  { id: 13, name: "RIDGID 14 In. Heavy-duty Chain Wrench", price: "994.01", image: "images/13-ridgid-chain-wrench.png", sale: true },
  { id: 14, name: "RIDGID 8 In. Heavy-duty End Pipe Wrench", price: "405.00", image: "images/14-ridgid-pipe-wrench.png", sale: true },
  { id: 15, name: "Nomad NO8 Air Pump Repair Kit", price: "1,612.81", image: "images/15-loctite-anti-seize.png" },
  { id: 16, name: "Nomad 250 Power Flo Air Pump 250-1646", price: "7,840.87", image: "images/16-nomad-power-flo-pump.png", sale: true },
  { id: 17, name: "Salusbury Class2 Red & Black Rubber Insulating Gloves", price: "8,850.38", image: "images/17-insulating-gloves.png", sale: true },
  { id: 18, name: "Loctite LB 8150 Silver Grade Anti-seize", price: "281.25", image: "images/18-loctite-silver-grade.png", sale: true },

  // Additional 32 Products

  // Plumbing & Fittings
  { id: 19, name: "Parker Stainless Steel Hydraulic Hose Fitting", price: "856.40", image: "images/19-hydraulic-hose-fitting.png" },
  { id: 20, name: "Brass Ball Valve 1 Inch Heavy Duty", price: "425.00", image: "images/20-brass-ball-valve.png" },
  { id: 21, name: "Stainless Steel Pipe Connector 3/4 Inch", price: "312.50", image: "images/21-pipe-connector.png" },
  { id: 22, name: "Industrial Pressure Control Valve", price: "2,450.00", image: "images/22-pressure-control-valve.png", sale: true },
  { id: 23, name: "Heavy Duty PVC Pipe 2 Inch", price: "185.75", image: "images/23-pvc-pipe.png" },
  { id: 24, name: "Parker Hydraulic Quick Connect Coupling", price: "1,275.90", image: "images/24-quick-connect-coupling.png" },

  // Tools & Hardware
  { id: 25, name: "RIDGID Heavy Duty Adjustable Pipe Wrench", price: "785.00", image: "images/25-adjustable-pipe-wrench.png" },
  { id: 26, name: "Industrial Stainless Steel Measuring Tape 50 ft", price: "345.00", image: "images/26-measuring-tape.png" },
  { id: 27, name: "Heavy Duty Combination Spanner Set", price: "1,150.00", image: "images/27-spanner-set.png", sale: true },
  { id: 28, name: "Professional Steel Pipe Cutter", price: "925.50", image: "images/28-pipe-cutter.png" },
  { id: 29, name: "Industrial Metal Cutting Blade 14 Inch", price: "275.00", image: "images/29-cutting-blade.png" },
  { id: 30, name: "Heavy Duty Adjustable Torque Wrench", price: "1,875.00", image: "images/30-torque-wrench.png" },

  // Safety Equipment
  { id: 31, name: "Industrial Safety Helmet Yellow", price: "185.00", image: "images/31-safety-helmet.png" },
  { id: 32, name: "Protective Safety Goggles Clear Lens", price: "95.50", image: "images/32-safety-goggles.png" },
  { id: 33, name: "Heavy Duty Industrial Work Gloves", price: "145.00", image: "images/33-work-gloves.png" },
  { id: 34, name: "High Visibility Reflective Safety Vest", price: "225.00", image: "images/34-safety-vest.png", sale: true },
  { id: 35, name: "Industrial Steel Toe Safety Boots", price: "1,250.00", image: "images/35-safety-boots.png" },
  { id: 36, name: "Heavy Duty Fire Extinguisher 10LB", price: "1,875.00", image: "images/36-fire-extinguisher.png" },

  // Construction & Building Materials
  { id: 37, name: "Portland General Purpose Cement 50KG", price: "92.00", image: "images/37-portland-cement.png" },
  { id: 38, name: "Galvanized Steel Wire Mesh Roll", price: "1,450.00", image: "images/38-steel-wire-mesh.png" },
  { id: 39, name: "Heavy Duty Construction Steel Nails", price: "165.00", image: "images/39-steel-nails.png" },
  { id: 40, name: "Industrial Epoxy Adhesive 500ML", price: "325.00", image: "images/40-epoxy-adhesive.png", sale: true },

  // Industrial & Maintenance Equipment
  { id: 41, name: "Heavy Duty Industrial Air Compressor", price: "18,750.00", image: "images/41-air-compressor.png" },
  { id: 42, name: "Portable Electric Water Pump", price: "5,250.00", image: "images/42-water-pump.png" },
  { id: 43, name: "Industrial Hydraulic Oil Filter", price: "685.00", image: "images/43-hydraulic-oil-filter.png" },
  { id: 44, name: "Heavy Duty Industrial Extension Cable", price: "875.00", image: "images/44-extension-cable.png" },
  { id: 45, name: "CRC Multi Purpose Lubricant Spray", price: "98.75", image: "images/45-lubricant-spray.png" },
  { id: 46, name: "Industrial Electric Pressure Washer", price: "8,950.00", image: "images/46-pressure-washer.png", sale: true },

  // Storage & Cleaning Supplies
  { id: 47, name: "Heavy Duty Industrial Storage Toolbox", price: "1,875.00", image: "images/47-storage-toolbox.png" },
  { id: 48, name: "Industrial Spill Absorbent Powder 20KG", price: "750.00", image: "images/48-absorbent-powder.png" },
  { id: 49, name: "Heavy Duty Plastic Storage Container", price: "425.00", image: "images/49-storage-container.png" },
  { id: 50, name: "Industrial Degreaser Cleaning Solution 5L", price: "385.00", image: "images/50-industrial-degreaser.png" },
];



const categories = [
  { name: "Automotive", children: ["Automotive Tools", "Automotive Parts"] },
  { name: "Building Materials", children: ["Cement", "Steel", "Construction Supplies"] },
  { name: "CERTIFICATION", children: ["Safety Certification", "Industrial Certification"] },
  { name: "Cleaning Supplies", children: ["Cleaning Chemicals", "Cleaning Equipment"] },
  { name: "Clothing & Apparel", children: ["Workwear", "Protective Clothing"] },
  { name: "Doors & Windows", children: ["Doors", "Windows", "Accessories"] },
  { name: "Electrical", children: ["Electrical Tools", "Electrical Supplies"] },
  { name: "Electronics", children: ["Electronic Equipment"] },
  { name: "Farm & Ranch", children: ["Agricultural Equipment"] },
  { name: "Food & Beverages", children: ["Food Products"] },
  { name: "Hand Tools", children: ["Wrenches", "Cutting Tools", "Measuring Tools"] },
  { name: "Hardware", children: ["Fasteners", "Fittings", "Hardware Accessories"] },
  { name: "Heating, Ventilation & Air Conditioning", children: ["Air Pumps", "HVAC Equipment"] },
  { name: "Industrial Equipment & Supplies", children: ["Industrial Tools", "Machinery"] },
  { name: "Maintenance", children: ["Maintenance Tools", "Repair Supplies"] },
  { name: "Lawn & Garden", children: ["Garden Equipment"] },
  { name: "Medical", children: ["Medical Supplies"] },
  { name: "Office Supplies", children: ["Office Equipment"] },
  { name: "Outdoor Sports", children: ["Outdoor Equipment"] },
  { name: "Paint & Painting Supplies", children: ["Paint", "Painting Tools"] },
  { name: "Pet Supplies", children: ["Pet Accessories"] },
  { name: "Plumbing Supplies", children: ["Pipes", "Plumbing Tools", "Valves"] },
  { name: "Power Tools & Accessories", children: ["Power Tools", "Tool Accessories"] },
  { name: "Safety", children: ["Safety Equipment", "Protective Gear"] },
  { name: "Sporting Goods", children: ["Sports Equipment"] },
  { name: "Storage & Organization", children: ["Storage Equipment"] },
  { name: "Water Supplies", children: ["Water Equipment"] },
  { name: "Toys & Games", children: ["Games", "Toys"] },
];

const Product = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 30;

  const toggleCategory = (name) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Convert product price into a number
  const getPrice = (price) => Number(price.replace(/,/g, ""));

  // Search and price filtering
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const price = getPrice(product.price);

      let matchesPrice = true;

      if (priceRange === "0-1000") {
        matchesPrice = price <= 1000;
      } else if (priceRange === "1000-3000") {
        matchesPrice = price > 1000 && price <= 3000;
      } else if (priceRange === "3000-5000") {
        matchesPrice = price > 3000 && price <= 5000;
      } else if (priceRange === "5000-10000") {
        matchesPrice = price > 5000 && price <= 10000;
      } else if (priceRange === "10000+") {
        matchesPrice = price > 10000;
      }

      return matchesSearch && matchesPrice;
    });
  }, [search, priceRange]);

  // Total pages
  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  // Products for current page
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, priceRange]);

  // Keep current page valid if filtering reduces page count
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // Pagination numbers
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <main className="min-h-screen w-full bg-white text-[#333]">

      {/* Header */}
      <header className="border-b border-[#eeeeee] bg-[#fafafa]">
        <div className="flex min-h-[80px] items-center justify-between px-5 sm:px-8 lg:px-[5%]">
          <h1 className="px-[6%] text-[26px] font-normal tracking-tight text-[#444]">
            Products
          </h1>

          <nav aria-label="Breadcrumb" className="px-[6%] text-[13px] text-[#999]">
            <ol className="flex items-center gap-2">
              <li>
                <a href="/" className="hover:text-[#333]">Home</a>
              </li>
              <li><span>&gt;</span></li>
              <li aria-current="page" className="text-[#777]">
                Products
              </li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Products Section */}
      <section className="mx-auto w-full px-3 py-4 sm:px-5 sm:py-6 lg:px-[12%]">

        {/* Mobile Filter Button */}
        <div className="mb-4 flex items-center justify-between lg:hidden">
          <p className="text-xs text-gray-500">
            Showing {filteredProducts.length} products
          </p>

          <button
            onClick={() => setShowFilters(!showFilters)}
            aria-expanded={showFilters}
            className="border border-gray-300 px-4 py-2 text-xs text-gray-700"
          >
            {showFilters ? "Close Filters −" : "Filter Products +"}
          </button>
        </div>

        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_210px] xl:grid-cols-[minmax(0,1fr)_225px]">

          {/* Product Grid */}
          <div className="min-w-0">

            {/* Search */}
            <div className="mb-4">
              <label htmlFor="product-search" className="sr-only">
                Search products
              </label>

              <input
                id="product-search"
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-[#e7e7e7] px-3 py-2 text-xs outline-none transition focus:border-gray-400 sm:max-w-[280px]"
              />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-3">

              {currentProducts.map((product) => (
                <article
                  key={product.id}
                  className="group relative min-w-0 border border-[#ededed] bg-white p-[5px] transition-shadow duration-200 hover:shadow-md sm:p-2"
                >

                  {/* Sale Ribbon */}
                  {product.sale && (
                    <span
                      aria-label="Special offer"
                      className="absolute left-0 top-0 z-10 h-0 w-0 border-r-[60px] border-t-[60px] border-r-transparent border-t-[#13a34a]"
                    >
                      <span className="absolute -left-[-5px] -top-[60px]  rotate-[-45deg] text-[11px] font-black text-black">
                        IN  STOCK
                      </span>
                    </span>
                  )}

                  {/* Product Image */}

                  <div className="group relative w-full overflow-hidden">
                    <a
                      href={`/products/${product.id}`}
                      aria-label={`View ${product.name}`}
                      className="block"
                    >
                      <div className="flex aspect-[1.18/1] w-full items-center justify-center overflow-hidden bg-white">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                      </div>
                    </a>

                    {/* Blue Hover Effect - Added Only */}
                    <div className="absolute bottom-0 left-0 flex h-[50px] w-full translate-y-full items-center bg-[#299bd8]/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                      <button
                        type="button"
                        onClick={() => console.log("Add to cart:", product.id)}
                        aria-label="Add to cart"
                        className="flex h-full flex-1 items-center justify-center border-r border-white/30 text-white hover:bg-[#1685c5]/40"
                      >
                        <ShoppingCart size={27} fill="white" />
                      </button>

                      <a
                        href={`/products/${product.id}`}
                        aria-label={`View ${product.name}`}
                        className="flex h-full flex-1 items-center justify-center text-white hover:bg-[#1685c5]/40"
                      >
                        <LinkIcon size={27} />
                      </a>

                    </div>
                  </div>

                  {/* Product Details - UNCHANGED */}
                  <div className="pt-1">
                    <h2 className="line-clamp-2 min-h-[27px] text-[19px] font-bold leading-[1.3] text-[#333] sm:min-h-[32px] sm:text-[19px]">
                      <a
                        href={`/products/${product.id}`}
                        className="hover:text-[#777]"
                      >
                        {product.name}
                      </a>
                    </h2>

                    <p className="mt-1 text-[12px] font-medium text-[#e33434] sm:text-[15px]">
                      {product.price} TTD
                    </p>
                  </div>

                </article>
              ))}

            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-sm text-gray-500">
                  No products found.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 mb-5 flex w-full items-center justify-center gap-1 overflow-x-auto rounded-md px-2 py-1 sm:gap-2"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #fafafa, #fafafa 5px, #f4f4f4 5px, #f4f4f4 6px)",
                }}
              >

                {/* First Page */}
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  aria-label="First page"
                  className="flex h-10 min-w-8 items-center justify-center px-2 text-sm text-[#999] transition hover:bg-white hover:text-[#e51d43] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <span className="text-base">|◀</span>
                </button>

                {/* Previous Page */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                  className="flex h-10 min-w-8 items-center justify-center px-2 text-sm text-[#999] transition hover:bg-white hover:text-[#e51d43] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <span className="text-base">◂</span>
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) => (
                  page === "..." ? (
                    <span
                      key={`dots-${index}`}
                      className="flex h-10 min-w-7 items-center justify-center text-sm text-[#999]"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      aria-label={`Go to page ${page}`}
                      aria-current={currentPage === page ? "page" : undefined}
                      className={`flex h-10 min-w-10 items-center justify-center rounded-md px-3 text-sm transition-all duration-200 ${currentPage === page
                        ? "bg-[#e51d43] text-white shadow-sm"
                        : "text-[#999] hover:bg-white hover:text-[#e51d43]"
                        }`}
                    >
                      {page}
                    </button>
                  )
                ))}

                {/* Next Page */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.min(prev + 1, totalPages)
                    )
                  }
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                  className="flex h-10 min-w-8 items-center justify-center px-2 text-sm text-[#999] transition hover:bg-white hover:text-[#e51d43] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <span className="text-base">▸</span>
                </button>

                {/* Last Page */}
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  aria-label="Last page"
                  className="flex h-10 min-w-8 items-center justify-center px-2 text-sm text-[#999] transition hover:bg-white hover:text-[#e51d43] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <span className="text-base">▶|</span>
                </button>

              </div>
            )}

            {/* Product Count */}
            <div className="mb-4 text-center text-[11px] text-[#999]">
              Showing {filteredProducts.length === 0 ? 0 : (currentPage - 1) * productsPerPage + 1}
              {" - "}
              {Math.min(currentPage * productsPerPage, filteredProducts.length)}
              {" of "}
              {filteredProducts.length} products
            </div>

          </div>

          {/* Category Sidebar */}
          <aside
            className={`${showFilters ? "block" : "hidden"
              } lg:sticky lg:top-5 lg:block`}
          >

            <h2 className="mb-2 text-[24px] font-bold text-[#222]">
              Filter by
            </h2>

            <h3 className="mb-2 text-[13px] font-medium text-[#555]">
              Category
            </h3>

            <div className="flex flex-col gap-[3px]">

              {categories.map((category) => (
                <div key={category.name}>

                  <button
                    onClick={() => toggleCategory(category.name)}
                    aria-expanded={!!expandedCategories[category.name]}
                    className={`flex min-h-[26px] w-full items-center gap-2 border border-[#dedede] px-2 py-1 text-left text-[9px] transition-colors hover:bg-[#f5f5f5] sm:min-h-[28px] lg:min-h-[50px] sm:text-[10px] ${selectedCategory === category.name
                      ? "bg-[#f2f2f2]"
                      : "bg-white"
                      }`}
                  >

                    <span className="flex h-[13px] w-[13px] shrink-0 items-center justify-center border border-[#ddd] text-[10px] text-[#777]">
                      {expandedCategories[category.name] ? "−" : "+"}
                    </span>

                    <span className="font-bold text-[12px] leading-tight">
                      {category.name}
                    </span>

                  </button>

                  {/* Subcategories */}
                  {expandedCategories[category.name] && (
                    <div className="border-l border-[#e5e5e5] p-3 py-1">

                      {category.children.map((child) => (
                        <button
                          key={child}
                          onClick={() => {
                            setSelectedCategory(category.name);
                            setShowFilters(false);
                          }}
                          className="block w-full py-1 text-left text-[13px] text-[#d80c0c] hover:text-[#222]"
                        >
                          {child}
                        </button>
                      ))}

                    </div>
                  )}

                </div>
              ))}

            </div>

            {/* Filter by Price */}
            <div className="mt-5">

              <h3 className="mb-2 text-[13px] font-semibold text-[#333]">
                Price:
              </h3>

              <div className="border border-[#cfe3f1] bg-[#eaf5fc] px-3 py-3">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full cursor-pointer bg-transparent text-[14px] text-[#0077cc] outline-none"
                  aria-label="Select Price Range"
                >
                  <option value="">Select Price Range</option>
                  <option value="0-25">$25.00 And Under</option>
                  <option value="25-50">$25.00 To $50.00</option>
                  <option value="50-100">$50.00 To $100.00</option>
                  <option value="100-250">$100.00 To $250.00</option>
                  <option value="250-500">$250.00 To $500.00</option>
                  <option value="500-1000">$500.00 To $1,000.00</option>
                  <option value="1000-2000">$1000.00 To $2000.00</option>
                  <option value="2000-3000">$2000.00 To $3000.00</option>
                  <option value="3000-4000">$3000.00 To $4000.00</option>
                  <option value="4000-5000">$4000.00 To $5000.00</option>
                  <option value="5000+">Over $5000.00</option>
                </select>
              </div>

              {priceRange && (
                <button
                  onClick={() => setPriceRange("")}
                  className="mt-2 text-[11px] text-[#d80c0c] hover:underline"
                >
                  Clear price filter ×
                </button>
              )}

            </div>

          </aside>

        </div>
      </section>

    </main>
  );
};

export default Product;
