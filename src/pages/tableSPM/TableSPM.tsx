import { useState } from "react";
import MyRadioButton from "../../components/my-radio-button/MyRadioButton";
import { radioButtons, Repair } from "../../const";
import { weeksInYear } from "../../utilities/util";
import SpmItem from "../../components/spm-item/SpmItem";
import { technicalServices } from "../../mocks/technicServices";

function TableSPM() {
  const [colorNumber, setColorNumber] = useState(Repair.NOT_REPAIR)

  const radioChangeHandler = (evt: any) => {
    setColorNumber(evt.target.value)
  };

  return (
    <>
      <h2>ППР</h2>

      <MyRadioButton
        options={radioButtons}
        changed={radioChangeHandler}
        isSelected={colorNumber}
      />

      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Периодичность</th>
            {
              weeksInYear.map((date, index) => (
                <th key={index}>{date}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>

          {
            technicalServices.map((device) =>

              < SpmItem
                key={device.deviceId}
                deviceId={device.deviceId}
                color={colorNumber}
                periodSpm={device.period}
                weeks={device.weeks}
              />
            )
          }

        </tbody>
      </table>
    </>
  )
}

export default TableSPM;
