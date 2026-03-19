import { SpaceType } from "@/types/estimate";
import { forwardRef, SelectHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: string;
}

const Dropdown = forwardRef<HTMLSelectElement, Props>(({className = "", ...props }, ref) => {
  return (
    <select {...props} ref={ref} className={twMerge("w-full border border-[#7B7B7B] h-full p-2 focus-visible:outline-none", className,
      )}>
        <option value="">공간 유형을 선택해 주세요</option>
      {SpaceType.map((item) => (
        <option key={item.id} value={item.id}>{item.label}</option>
      ))}
    </select>
  );
});

Dropdown.displayName = "Dropdown";

export default Dropdown;
