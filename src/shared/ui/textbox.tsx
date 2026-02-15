interface Props {
  value: string
  placeholder: string
  onChange: (value: string) => void
}

function Textbox({ value, placeholder, onChange }: Props) {
  return (
    <textarea
      className={`bg-wood-10 w-full h-42 rounded-xl p-3 resize-none overflow-hidden`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Textbox
