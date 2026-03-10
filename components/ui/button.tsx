import { twMerge } from "tailwind-merge";

type ButtonVariant = "ROUNDED" | "SQUARE" | "ESTIMATE" | "WORKTYPE";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}

function Button({
  variant = "ROUNDED",
  className = "",
  children,
  ...rest
}: Props) {
  const variantStyles = () => {
    switch (variant) {
      case "ROUNDED":
        return "w-[180px] h-[50px] bg-primary text-white rounded-4xl";
      case "SQUARE":
        return "w-full h-[50px] bg-wood-30 text-white rounded-lg";
      case "ESTIMATE":
        return "w-40 h-full bg-primary text-white";
      default:
        return "";
    }
  };

  return (
    <button
      className={twMerge(
        "cursor-pointer hover:font-semibold transition-all",
        variantStyles(),
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
