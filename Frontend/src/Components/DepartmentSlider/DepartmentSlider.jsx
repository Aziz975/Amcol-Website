import DepartmentCard from "../DepartmentCard/DepartmentCard";

export default function DepartmentSlider({ departments, label }) {
  // Seamless loop ke liye cards dohraye
  const duplicated = [...departments, ...departments];

  return (
    <div
      role="region"
      aria-label={label}
      className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
    >
      <div
        style={{ animationDuration: "70s" }}
        className="flex w-max animate-marquee gap-[30px] pr-[30px] hover:[animation-play-state:paused]"
      >
        {duplicated.map((department, index) => (
          <div
            key={`${department.id}-${index}`}
            aria-hidden={index >= departments.length ? "true" : undefined}
            className="w-[280px] shrink-0 md:w-[400px]"
          >
            <DepartmentCard department={department} />
          </div>
        ))}
      </div>
    </div>
  );
}