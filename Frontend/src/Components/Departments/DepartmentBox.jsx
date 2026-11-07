import { Link } from "react-router-dom";

// Same URL pattern as the live site: /search?department=...&category=...
const departmentLink = (department) =>
  `/search?page=1&department=${encodeURIComponent(department)}`;

const categoryLink = (category) =>
  `/search?page=1&category=${encodeURIComponent(category)}`;

export default function DepartmentBox({ title, items }) {
  return (
    <section className="bg-[#f2f2f2] p-2.5">
      <h2 className="text-left text-[15px] font-bold leading-snug text-[#d9183b] underline">
        <Link to={departmentLink(title)}>{title}</Link>
      </h2>

      <ul>
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="border-b border-gray-300 py-3 text-right text-[15px] leading-snug text-[#626262]"
          >
            <Link
              to={categoryLink(item)}
              className="transition-colors hover:text-[#d9183b]"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}