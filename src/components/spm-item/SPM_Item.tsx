import { getEmptyWeeksArr } from "../../utilities/util";
import ColorSell from "../color-sell/ColorSell";
import { useState } from "react";
import { Repair, SPM_PERIODS } from "../../const";
import MySelect from "../my-select/MySelect";

const PERIOD = 4;

const emptySellsWeeks = getEmptyWeeksArr();

type SpmItemProps = {
  color: string;
}

function SpmItem({ color }: SpmItemProps): JSX.Element {
  const [period, setPeriod] = useState(PERIOD)
  const [datesRepair, setDateRepairs] = useState(emptySellsWeeks);

  const putPeriod = (position: number) => {
    datesRepair.splice(position, 1, color);
    setDateRepairs([...datesRepair])

    if (color === Repair.REPAIR) {
      const half1 = datesRepair.slice(0, position)
      const half2 = datesRepair
        .slice(position + 1, datesRepair.length + 1)
        .map((i, index) => (index + 1) % period === 0 ? Repair.REPAIR : Repair.NOT_REPAIR)
      setDateRepairs([...half1, color, ...half2]);
    }
  }
  return (
    <tr>
      <td>oven2</td>
      <td>
        <MySelect
          options={SPM_PERIODS}
          defaultValue='период ТО'
          value={period}
          changed={(value: number) => setPeriod(value)}
        />
      </td>
      {
        datesRepair.map((color, index) =>
          <td key={index}>
            <ColorSell
              cb={() => putPeriod(index)}
              color={color} />
          </td>
        )
      }
    </tr>
  )
}

export default SpmItem;
