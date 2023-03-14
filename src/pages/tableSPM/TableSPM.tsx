// import { Device } from "../../types/device";

import { useState } from "react";
import MyRadioButton from "../../components/my-radio-button/MyRadioButton";
import ColorSell from "../../components/color-sell/ColorSell";
import MySelect from "../../components/my-select/MySelect";
import { radioButtons, Repair, SPM_PERIODS } from "../../const";
// import { technicalServices } from "../../mocks/technicServices";
import { emptySellsWeeks, weeksInYear } from "../../utilities/util";



const PERIOD = 4;


function TableSPM() {
  // function TableSPM({ devices, techService }:TableSPM_Props): JSX.Element {
  // const { name } = devices;
  // const { date, period } = techService;
  const [datesRepair, setDateRepairs] = useState(emptySellsWeeks);
  const [colorNumber, setColorNumber] = useState(Repair.NOT_REPAIR)
  const [period, setPeriod] = useState(PERIOD)

  const setPeriodColor = (position: number) => {
    datesRepair.splice(position, 1, colorNumber);
    setDateRepairs([...datesRepair])

    if (colorNumber === Repair.REPAIR) {
      const half1 = datesRepair.slice(0, position)
      const half2 = datesRepair
        .slice(position + 1, datesRepair.length + 1)
        .map((i, index) => (index + 1) % period === 0 ? Repair.REPAIR : Repair.NOT_REPAIR)
      setDateRepairs([...half1, colorNumber, ...half2]);
    }
  }
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
          <tr>
            <td>oven</td>
            <td>
              <MySelect
                options={SPM_PERIODS}
                defaultValue='период ТО'
                value={period}
                onChange={(value: number) => setPeriod(value)}
              />
            </td>
            {
              datesRepair.map((color, index) =>
                <td key={index}>
                  <ColorSell
                    cb={() => setPeriodColor(index)}
                    color={color} />
                </td>
              )
            }
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default TableSPM;
