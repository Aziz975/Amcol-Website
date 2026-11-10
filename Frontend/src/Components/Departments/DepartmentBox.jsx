import { Link } from "react-router-dom";

// Same URL pattern as the live site: /search?department=...&category=...
const departmentLink = (department) =>
  `/search?page=1&department=${encodeURIComponent(department)}`;

const categoryLink = (category) =>
  `/search?page=1&category=${encodeURIComponent(category)}`;

export default function DepartmentBox({ title, items }) {
  return (
    <section className="bg-[#f2f2f2] p-2.5">
      <h2 className="text-left text-[13px] font-bold leading-snug text-[#d9183b] underline decoration-[#626262]">
        <Link to={departmentLink(title)}
        className="transition-colors hover:text-[#1a3c6e]"
        >{title}</Link>
      </h2>

      <ul>
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="border-b border-gray-300 mt-[15px] text-right text-[13px] leading-snug text-[#626262]"
          >
            <Link
              to={categoryLink(item)}
              className="hover:underline"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}