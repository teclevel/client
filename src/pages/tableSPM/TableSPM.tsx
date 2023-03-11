// import { Device } from "../../types/device";

import { useState } from "react";
import MySelect from "../../components/mySelect/MySelect";
import { emptySellsWeeks, weeksInYear } from "../../utilities/util";

// const period = 3;


type ColorProps = {
  color: string,
  cb: any
}

function ColorSell({ color, cb }: ColorProps): JSX.Element {
  switch (color) {
    case '1':
      return <button onClick={cb} style={{ backgroundColor: 'red' }}></button>
    case '2':
      return <button onClick={cb} style={{ backgroundColor: 'blue' }}></button>
    default:
      return <button onClick={cb}></button>
  }
}

function TableSPM() {
  // function TableSPM({ devices, techService }:TableSPM_Props): JSX.Element {
  // const { name } = devices;
  // const { date, period } = techService;
  const [datesRepair, setDateRepairs] = useState(emptySellsWeeks);
  const [colorNumber, setColorNumber] = useState('0')
  const [period, setPeriod] = useState(1)

  const changeColor = (position: number) => {
    datesRepair.splice(position, 1, colorNumber);
    setDateRepairs([...datesRepair])

    if (colorNumber === '1') {
      const half1 = datesRepair.slice(0, position)
      const half2 = datesRepair
        .slice(position + 1, datesRepair.length + 1)
        .map((i, index) => (index + 1) % period === 0 ? '1' : '0')
      setDateRepairs([...half1, colorNumber, ...half2]);
    }
  }


  // const onPeriodRepair = (position: number) => {
  //   // const newDates = datesRepair.slice().map((i, ind) => ind < position ? i : ind % period === 0 ? '1' : '0')
  //   // newDates.splice(position, 1, colorNumber);
  //   // // console.log(newDates);

  //   // setDateRepairs([...newDates])
  //   datesRepair.splice(position, 1, '3');
  //   setDateRepairs([...datesRepair])

  // }

  return (
    <>
      <h2>ППР</h2>
      <input type='radio' id='transparent' name='color' onChange={() => { setColorNumber('0') }} checked={colorNumber === '0'} />
      <label htmlFor='transparent'>снять</label>

      <input type='radio' id='red' name='color' onChange={() => { setColorNumber('1') }} checked={colorNumber === '1'} />
      <label htmlFor='red' style={{ backgroundColor: 'red' }}>проставить</label>

      <input type='radio' id='blue' name='color' onChange={() => { setColorNumber('2') }} checked={colorNumber === '2'} />
      <label htmlFor='blue' style={{ backgroundColor: 'blue' }}>завершить</label>

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
                value={period}
                onChange={(value:number) => setPeriod(value)}
                defaultValue='период ТО'
                options={[
                    {value: 1, name: '1/неделю'},
                    {value: 4, name: '1/месяц'},
                    {value: 12, name: '1/квартал'},
                    {value: 26, name: '1/полгода'},
                    {value: 52, name: '1/год'},

                ]}
            />
            </td>
            {
              datesRepair.map((color, index) =>
                <td key={index}>
                  <ColorSell
                    cb={() => changeColor(index)}
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
