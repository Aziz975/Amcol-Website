import React from "react";

const products = [
  {
    name: "Geko Snap Band Clamp",
    image: "images/geko-snap-band-clamp.png",
  },
  {
    name: "Geko 360° Band Clamp",
    image: "images/geko_360_band_clamp.png",
  },
  {
    name: "Geko Single Band Clamp",
    image: "images/geko_360_band_clamp.png",
  },
  {
    name: "Geko Double Band Clamp",
    image: "images/geko_360_band_clamp.png",
  },
  {
    name: "Geko Triple Band Clamp",
    image: "images/geko_360_band_clamp.png",
  },
];

/* Hover overlay used inside every product image box.
   Plain helper function (not a component) – returns JSX only.
   The parent image box must have: "group relative overflow-hidden" */
const renderHoverOverlay = (logo, logoAlt) => (
  <div className="pointer-events-none absolute inset-0 bg-white/60 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
    {/* Brand logo watermark */}
    <img
      src={logo}
      alt={logoAlt}
      className="absolute left-2 top-2 h-[55px] w-[115px] object-contain object-left"
    />

    {/* Bottom buttons */}
    <div className="absolute inset-x-0 bottom-0 flex h-[50px] translate-y-full transition-transform duration-300 group-hover:translate-y-0">
      <a
        href="tel:"
        aria-label="Open product link"
        className="flex w-1/2 items-center justify-center bg-[#4aa3df] text-white transition-colors hover:bg-[#2f8fd0]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      </a>

      <button
        type="button"
        aria-label="Add to enquiry"
        className="flex w-1/2 items-center justify-center bg-[#4aa3df] text-[30px] leading-none text-[white] transition-colors hover:bg-[#f3f3f3] hover:text-[#d71920]"
      >
        +
      </button>
    </div>
  </div>
);

const GekoBandClamps = () => {
  return (
    <main className="min-h-screen w-full bg-[#fdfdfd] px-4 pb-10 sm:px-8">
      {/* Header */}
      <header className="flex flex-col items-center pt-2 text-center">
        <img
          src="images/industrial-pump-icon.png"
          alt="Industrial Supplies"
          className="h-15 w-15 object-contain"
        />

        <h1 className="mt-1 font-serif text-[25px] font-bold leading-tight text-[#263747]">
          Industrial Supplies
        </h1>

        <p className="mt-2 text-[11px] text-[#a4a4a4] sm:text-[13px]">
          Industrial-Grade Products for Industrial-Strength Operations —
          Your Industrial Supply Partner
        </p>
      </header>

      {/* Section Heading */}
      <section className="mx-auto mt-1 max-w-[940px]">
        <div className="flex h-[30px] items-center bg-gradient-to-r from-white via-[#e5e5e5] to-[#c9c9c9] px-2 shadow-[0_3px_7px_rgba(0,0,0,0.15)]">
          <h2 className="font-serif text-[20px] font-bold text-[#23415b]">
            Geko Band Clamps
          </h2>
        </div>
      </section>

      {/* Main Brand Logo */}
      <div className="mt-[10px] flex justify-center">
        <img
          src="images/geko-main-logo.png"
          alt="GEKO Pipe Clamps"
          className="h-[121px] w-[200px] border-black object-contain"
        />
      </div>

      {/* Product Grid */}
      <section className="mx-auto mt-[10px] grid max-w-[925px] grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <article key={index} className="min-w-0 bg-white pb-3">
            {/* Product Image */}
            <div className="group relative flex h-[280px] items-center justify-center overflow-hidden border-[5px] border-[#f7f7f7] bg-white p-2 shadow-[0_0_5px_rgba(0,0,0,0.04)]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-40"
              />

              {renderHoverOverlay("images/geko-main-logo.png", "GEKO Pipe Clamps")}
            </div>

            {/* Product Details */}
            <div className="px-3 pt-5">
              <h3 className="font-serif text-[19px] font-bold leading-[18px] text-[#19334a]">
                {product.name}
              </h3>

              <a
                href="tel:"
                className="mt-[17px] inline-block text-[17px] font-normal text-[#ff1935] transition-colors hover:text-[#c90020]"
              >
                Call/WhatsApp for Price
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* =====================================================
          CHECKPOINT PUMPS SECTION
      ===================================================== */}
      <section className="mx-auto mt-8 max-w-[925px]">
        {/* Section Heading */}
        <div className="flex h-[30px] items-center bg-gradient-to-r from-white via-[#e5e5e5] to-[#c9c9c9] px-2 shadow-[0_3px_7px_rgba(0,0,0,0.15)]">
          <h2 className="font-serif text-[20px] font-bold text-[#23415b]">
            Checkpoint Pumps
          </h2>
        </div>

        {/* Main Brand Logo */}
        <div className="mt-[15px] flex justify-center">
          <img
            src="images/checkpoint.jpg"
            alt="Checkpoint Pumps and Systems"
            className="h-[150px] w-[340px] object-contain"
          />
        </div>

        {/* Product Grid */}
        <div className="mx-auto mt-[10px] grid max-w-[925px] grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Checkpoint ATP Pump */}
          <article className="min-w-0 bg-white pb-3">
            <div className="group relative flex h-[280px] items-center justify-center overflow-hidden border-[5px] border-[#f7f7f7] bg-white p-2 shadow-[0_0_5px_rgba(0,0,0,0.04)]">
              <img
                src="images/checkpointpump.jpg"
                alt="Checkpoint Series ATP Pump"
                className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-40"
              />

              {renderHoverOverlay("images/checkpoint.jpg", "Checkpoint Pumps and Systems")}
            </div>

            <div className="px-3 pt-5">
              <h3 className="font-serif text-[19px] font-bold leading-[24px] text-[#19334a]">
                Checkpoint Series ATP Pump
              </h3>

              <a
                href="tel:"
                className="mt-[17px] inline-block text-[17px] font-normal text-[#ff1935] transition-colors hover:text-[#c90020]"
              >
                Call/WhatsApp for Price
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          DOSIVAC PUMPS SECTION
      ===================================================== */}
      <section className="mx-auto mt-8 max-w-[925px]">
        {/* Section Heading */}
        <div className="flex h-[30px] items-center bg-gradient-to-r from-white via-[#e5e5e5] to-[#c9c9c9] px-2 shadow-[0_3px_7px_rgba(0,0,0,0.15)]">
          <h2 className="font-serif text-[20px] font-bold text-[#23415b]">
            Dosivac Pumps
          </h2>
        </div>

        {/* Brand Logo */}
        <div className="mt-[15px] flex justify-center">
          <img
            src="images/dosivac.png"
            alt="Dosivac Pumps"
            className="h-[230px] w-[380px] object-contain"
          />
        </div>

        {/* Products Grid */}
        <div className="mx-auto mt-[10px] grid max-w-[925px] grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product 1 */}
          <article className="min-w-0 bg-white pb-3">
            <div className="group relative flex h-[280px] items-center justify-center overflow-hidden border-[5px] border-[#f7f7f7] bg-white p-2 shadow-[0_0_5px_rgba(0,0,0,0.04)]">
              <img
                src="images/dosivacpump.jpg"
                alt="Dosivac DES Series Injection Pump"
                className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-40"
              />

              {renderHoverOverlay("images/dosivac.png", "Dosivac Pumps")}
            </div>

            <div className="px-3 pt-5">
              <h3 className="font-serif text-[19px] font-bold leading-[24px] text-[#19334a]">
                Dosivac DES Series Injection Pump
              </h3>

              <a
                href="tel:"
                className="mt-[17px] inline-block text-[17px] text-[#ff1935] transition-colors hover:text-[#c90020]"
              >
                Call/WhatsApp for Price
              </a>
            </div>
          </article>

          {/* Product 2 */}
          <article className="min-w-0 bg-white pb-3">
            <div className="group relative flex h-[280px] items-center justify-center overflow-hidden border-[5px] border-[#f7f7f7] bg-white p-2 shadow-[0_0_5px_rgba(0,0,0,0.04)]">
              <img
                src="images/skid_pump_dosivac.jpg"
                alt="Dosivac Injection Skid Pump"
                className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-40"
              />

              {renderHoverOverlay("images/dosivac.png", "Dosivac Pumps")}
            </div>

            <div className="px-3 pt-5">
              <h3 className="font-serif text-[19px] font-bold leading-[24px] text-[#19334a]">
                Dosivac Injection Skid Pump
              </h3>

              <a
                href="tel:"
                className="mt-[17px] inline-block text-[17px] text-[#ff1935] transition-colors hover:text-[#c90020]"
              >
                Call/WhatsApp for Price
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          MONKEY PUMPS SECTION
      ===================================================== */}
      <section className="mx-auto mt-8 max-w-[925px]">
        {/* Section Heading */}
        <div className="flex h-[30px] items-center bg-gradient-to-r from-white via-[#e5e5e5] to-[#c9c9c9] px-2 shadow-[0_3px_7px_rgba(0,0,0,0.15)]">
          <h2 className="font-serif text-[20px] font-bold text-[#23415b]">
            Monkey Pumps
          </h2>
        </div>

        {/* Brand Logo */}
        <div className="mt-[15px] flex justify-center">
          <img
            src="images/monkey.png"
            alt="Monkey Pumps"
            className="h-[100px] w-[250px] object-contain"
          />
        </div>

        {/* Products Grid */}
        <div className="mx-auto mt-[10px] grid max-w-[925px] grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product 1 */}
          <article className="min-w-0 bg-white pb-3">
            <div className="group relative flex h-[280px] items-center justify-center overflow-hidden border-[5px] border-[#f7f7f7] bg-white p-2 shadow-[0_0_5px_rgba(0,0,0,0.04)]">
              <img
                src="images/monkeypump.jpg"
                alt="Monkey Pumps Model 25 Chimp Series"
                className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-40"
              />

              {renderHoverOverlay("images/monkey.png", "Monkey Pumps")}
            </div>

            <div className="px-3 pt-5">
              <h3 className="font-serif text-[19px] font-bold leading-[24px] text-[#19334a]">
                Monkey Pumps Model 25 Chimp Series
              </h3>

              <a
                href="tel:"
                className="mt-[17px] inline-block text-[17px] text-[#ff1935] transition-colors hover:text-[#c90020]"
              >
                Call/WhatsApp for Price
              </a>
            </div>
          </article>

          {/* Product 2 */}
          <article className="min-w-0 bg-white pb-3">
            <div className="group relative flex h-[280px] items-center justify-center overflow-hidden border-[5px] border-[#f7f7f7] bg-white p-2 shadow-[0_0_5px_rgba(0,0,0,0.04)]">
              <img
                src="images/monkeypbaboon.jpg"
                alt="Monkey Pumps Model D-50 Baboon Series"
                className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-40"
              />

              {renderHoverOverlay("images/monkey.png", "Monkey Pumps")}
            </div>

            <div className="px-3 pt-5">
              <h3 className="font-serif text-[19px] font-bold leading-[24px] text-[#19334a]">
                Monkey Pumps Model D-50 Baboon Series
              </h3>

              <a
                href="tel:"
                className="mt-[17px] inline-block text-[17px] text-[#ff1935] transition-colors hover:text-[#c90020]"
              >
                Call/WhatsApp for Price
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          TECHNOFINK SECTION
      ===================================================== */}
      <section className="mx-auto mt-8 max-w-[925px]">
        {/* Section Heading */}
        <div className="flex h-[30px] items-center bg-gradient-to-r from-white via-[#e5e5e5] to-[#c9c9c9] px-2 shadow-[0_3px_7px_rgba(0,0,0,0.15)]">
          <h2 className="font-serif text-[20px] font-bold text-[#23415b]">
            Technofink
          </h2>
        </div>

        {/* Brand Logo */}
        <div className="mt-[15px] flex justify-center">
          <img
            src="images/technofink.webp"
            alt="Technofink"
            className="h-[150px] w-[300px] object-contain"
          />
        </div>

        {/* Products Grid */}
        <div className="mx-auto mt-[10px] grid max-w-[925px] grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product 1 */}
          <article className="min-w-0 bg-white pb-3">
            <div className="group relative flex h-[280px] items-center justify-center overflow-hidden border-[5px] border-[#f7f7f7] bg-white p-2 shadow-[0_0_5px_rgba(0,0,0,0.04)]">
              <img
                src="images/techno_tapeglass1.jpg"
                alt="Technofink TapeGlass"
                className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-40"
              />

              {renderHoverOverlay("images/technofink.webp", "Technofink")}
            </div>

            <div className="px-3 pt-5">
              <h3 className="font-serif text-[19px] font-bold leading-[24px] text-[#19334a]">
                Technofink TapeGlass
              </h3>

              <a
                href="tel:"
                className="mt-[17px] inline-block text-[17px] text-[#ff1935] transition-colors hover:text-[#c90020]"
              >
                Call/WhatsApp for Price
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          NOMAD PUMPS SECTION
      ===================================================== */}
      <section className="mx-auto mt-8 max-w-[925px]">
        {/* Section Heading */}
        <div className="flex h-[30px] items-center bg-gradient-to-r from-white via-[#e5e5e5] to-[#c9c9c9] px-2 shadow-[0_3px_7px_rgba(0,0,0,0.15)]">
          <h2 className="font-serif text-[20px] font-bold text-[#23415b]">
            Nomad Pumps
          </h2>
        </div>

        {/* Brand Logo */}
        <div className="mt-[10px] flex justify-center">
          <img
            src="images/nomad_pumps.jpg"
            alt="Nomad Pumps"
            className="h-[100px] w-[250px] object-contain"
          />
        </div>

        {/* Products Grid */}
        <div className="mx-auto mt-[10px] grid max-w-[925px] grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "NOMAD® 50 POWER FLO AIR PUMP 50-1646-1...",
              img: "images/nomad_series_pump.jpg",
            },
            {
              title: "NOMAD® 80 POWER FLO AIR PUMP 80-2656...",
              img: "images/nomad_series_pump.jpg",
            },
            {
              title: "NOMAD 250 POWER FLO AIR PUMP 250-1646-1...",
              img: "images/nomad_series_pump.jpg",
            },
            {
              title: "NOMAD N08 AIR PUMP REPAIR KIT N08-9804-52...",
              img: "images/nomad_repair_kit.jpg",
            },
          ].map((product) => (
            <article key={product.title} className="min-w-0 bg-white pb-3">
              <div className="group relative flex h-[280px] items-center justify-center overflow-hidden border-[5px] border-[#f7f7f7] bg-white p-2 shadow-[0_0_5px_rgba(0,0,0,0.04)]">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-40"
                />

                {renderHoverOverlay("images/nomad_pumps.jpg", "Nomad Pumps")}
              </div>

              <div className="px-3 pt-5">
                <h3 className="font-serif text-[19px] font-bold leading-[24px] text-[#19334a]">
                  {product.title}
                </h3>

                <a
                  href="tel:"
                  className="mt-[17px] inline-block text-[17px] text-[#ff1935] transition-colors hover:text-[#c90020]"
                >
                  Call/WhatsApp for Price
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GekoBandClamps;