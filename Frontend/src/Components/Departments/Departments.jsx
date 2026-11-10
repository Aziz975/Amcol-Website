import DepartmentBox from "./DepartmentBox";
import { departmentColumns } from "./departmentsData";

export default function Departments() {
  return (
    <section className="mx-auto max-w-[1150px] px-4 py-10">
      <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {departmentColumns.map((column, index) => (
          <div key={index} className="flex flex-col gap-6">
            {column.map((group) => (
              <DepartmentBox
                key={group.title}
                title={group.title}
                items={group.items}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}