import { Link } from "react-router-dom";

export default function DepartmentCard({ department }) {
  const { title, slug, description, image } = department;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white transition-all duration-300 ease-out hover:-translate-y-2 shadow-[0_10px_30px_rgba(31,47,107,0.12)]">
      {/* Upar ki red-to-navy patti */}
      <div className="h-1.5 bg-[linear-gradient(to_right,#d71920,#1c2f6b)]" />

      <img
        src={image}
        alt={`${title} department`}
        width="800"
        height="440"
        loading="lazy"
        className="aspect-[16/9] w-full object-cover"
      />

      <div className="flex flex-1 flex-col gap-3 p-7">
        <h3 className="font-heading text-2xl font-bold text-[#1c2f6b]">
          {title}
        </h3>
        <p className="flex-1 text-[17px] leading-relaxed text-gray-600">
          {description}
        </p>
        <Link
          to={`/departments/${slug}`}
          className="font-bold text-[#d71920]"
        >
          Shop {title}
        </Link>
      </div>
    </article>
  );
}