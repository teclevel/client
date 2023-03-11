import { Repair } from "../../types/repair";

type RepairsProps = {
  repairs: Repair[]
}

function Repairs({ repairs }: RepairsProps): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Проведенные работы</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        {
          repairs.map(({ id, date, price, description}) => (

            <tr key={id}>
              <td>{date}</td>
              <td>{description.join(', ')}</td>
              <td>{price}</td>
            </tr>
          ))
        }
      </tbody>
    </table>

  )
}

export default Repairs;
