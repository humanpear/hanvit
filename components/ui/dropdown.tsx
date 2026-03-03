import { SpaceType } from "@/types/estimate";
import { forwardRef, SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Dropdown = forwardRef<HTMLSelectElement, Props>(({ ...props }, ref) => {
  return (
    <select {...props} ref={ref} className="w-full border border-[#7B7B7B] h-full p-2 focus-visible:outline-none">
      {SpaceType.map((item) => (
        <option key={item.id}>{item.label}</option>
      ))}
    </select>
  );
});

Dropdown.displayName = "Dropdown";

export default Dropdown;
