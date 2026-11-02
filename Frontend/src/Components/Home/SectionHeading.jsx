import { FaStar } from "react-icons/fa";

export default function SectionHeading({ title, id }) {
  return (
    <div className="relative z-[3] mt-2.5 text-center">
      <span className="inline-block text-brand-red">
        <FaStar size={56} aria-hidden="true" style={{ color: "#DB1F40" }} />
      </span>
      <h2
        id={id}
        className="mt-2 font-heading text-[30px] font-semibold text-[#444] md:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}