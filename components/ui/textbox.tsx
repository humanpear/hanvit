import { forwardRef, TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ placeholder, ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={`w-full h-42 p-3 border border-[#7B7B7B] resize-none overflow-hidden focus-visible:outline-none focus:border-2`}
        placeholder={placeholder}
      />
    );
  },
);

Textarea.displayName = "Textbox";

export default Textarea;
