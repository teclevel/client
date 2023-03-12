
type MyRadioButtonProps = {
  id: string,
  name: string,
  value: string,
  color: string,
  changed: any,
  isSelected: boolean,
  label: string,
}

function MyRadioButton({ id, name, value, color, changed, isSelected, label }: MyRadioButtonProps): JSX.Element {

  return (
    <>
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        onChange={changed}
        checked={isSelected} />
      <label
        style={{ backgroundColor: color }}
        htmlFor={id}>{label}</label>
    </>
  )
}


export default MyRadioButton;
