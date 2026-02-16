type ButtonVariant = 'ROUNDED' | 'SQUARE'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  className?: string
  onClick: () => void
}

function Button({
  variant = 'ROUNDED',
  className = '',
  children,
  onClick,
  ...rest
}: Props) {
  const variantStyles =
    variant === 'ROUNDED'
      ? 'w-[180px] h-[50px] bg-primary text-white rounded-4xl'
      : 'w-[430px] h-[50px] bg-wood-30 text-white rounded-lg'

  return (
    <button className={`cursor-pointer ${variantStyles} ${className}`} {...rest} onClick={() => onClick()}>
      {children}
    </button>
  )
}

export default Button
