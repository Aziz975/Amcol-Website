import { perks } from "./perkData";

export default function PerksSection() {
  return (
    <section
      aria-label="Store services"
      className="relative isolate flex min-h-[430px] items-center overflow-hidden bg-[#0A0C32] pb-[60px] pt-20"
    >
      {/* Poore section ki ek background image */}
      <img
        src="/images/amcolbackground.png"
        alt=""
        aria-hidden="true"
        width="1920"
        height="700"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />

      {/* Left se right gradient overlay (original site wala) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,14,32,0.70)_0%,rgba(8,25,58,0.54)_45%,rgba(5,14,32,0.70)_100%)]" />

      {/* Do cards */}
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-6 px-5 md:grid-cols-2">
        {perks.map((perk) => (
          <div
            key={perk.id}
            className="flex min-h-[367px] w-full flex-col items-center rounded-[18px] border border-white/20 bg-white/[0.08] px-6 pt-[34px] pb-[30px] text-center"
          >
            <img
              src={perk.image}
              alt={perk.imageAlt}
              loading="lazy"
              className="h-[200px] w-[200px] shrink-0 rounded-full border-[5px] border-white bg-white object-cover shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            />

            <h2 className="mt-4 font-heading text-2xl font-bold text-white md:text-3xl">
              {perk.title}
            </h2>

            <p className="mt-3 text-lg font-medium text-white">
              {perk.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}