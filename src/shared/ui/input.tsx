interface Props {
  value: string
  placeholder: string
  onChange: (value: string) => void
}

function Input({ value, placeholder, onChange }: Props) {
  return (
    <input
      className={`bg-wood-10 w-full h-10 rounded-xl resize-none px-3`}
      placeholder={placeholder}
      value={value}
      onChange={(e)=> onChange(e.target.value)}
    />
  )
}

export default Input
