import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={`w-full h-10 border-[#7B7B7B] border resize-none px-3`}
        placeholder={placeholder}
      />
    );
  },
);

Input.displayName = 'Input'

export default Input;
