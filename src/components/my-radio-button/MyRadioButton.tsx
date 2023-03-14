import { Fragment } from "react";
import { RadioButton } from "../../const";

type MyRadioButtonProps = {
  options: RadioButton[],
  changed: any,
  isSelected: string,
}

function MyRadioButton({ options, changed, isSelected }: MyRadioButtonProps): JSX.Element {

  return (
    <>
      {
        options.map((option: RadioButton) =>
          <Fragment key={option.idR}>
            <input
              type='radio'
              id={option.idR}
              name={option.name}
              value={option.value}
              onChange={changed}
              checked={isSelected === option.value} />
            <label
              style={{ backgroundColor: option.color }}
              htmlFor={option.idR}>
              {option.label}
            </label>
          </Fragment>
        )
      }
    </>
  )
}


export default MyRadioButton;
