import { useContext, useState } from 'react';
import MyModal from '../../components/my-modal/MyModal';
import { Context } from '../..';
// import { useNavigate } from 'react-router-dom';
// import { EQUIPMENT_ROUTE } from '../../const';
import Table from '../../components/table/Table';

const initialEquipment = {
  inventoryNumber: 0,
  serialNumber: '',
  description: '',
  name: '',
  view: '',
  shield: '',
  images: [],
  place:
  {
    object: '',
    place: ''
  }
}

const items = [
  {
    name: 'Инвентарный номер',
    value: 'inventoryNumber'
  },
  {
    name: 'S/N',
    value: 'serialNumber'
  }]

function EquipmentList(): JSX.Element {
  // const navigate = useNavigate();
  const { devices } = useContext(Context)
  const userDevices = devices.devices

  const [equipment, setEquipment] = useState(initialEquipment);
  const [modal, setModal] = useState(false);

  const addEquipment = (e: any) => {
    e.preventDefault()
    const newEquipment = {
      ...equipment, id: Date.now()
    }

    devices.setDevices([...userDevices, newEquipment])
    setModal(false)
    setEquipment(initialEquipment)//обнуление, для след. заполнения
  };

  return (
    <>
      <button onClick={() => setModal(true)}>
        Добавить
      </button>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <h2>Добавить оборудование</h2>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          
          {/* <label>
            Инвентарный номер
            <input type="text"
              value={equipment.inventoryNumber}
              onChange={(e) => setEquipment({ ...equipment, inventoryNumber: Number(e.target.value) })}
            />
          </label>

          <label>
            S/N
            <input type="text"
              value={equipment.serialNumber}
              onChange={(e) => setEquipment({ ...equipment, serialNumber: e.target.value })}
            />
          </label> */}


          {
            items.map(({ name, value }) =>
              <label key={name}>
                {name}
                <input type="text"
                  // @ts-ignore
                  value={equipment[value]}
                  onChange={(e) => setEquipment({ ...equipment, [value]: Number(e.target.value) })}
                />
              </label>
            )
          }
          <button onClick={addEquipment}>
            Добавить оборудование
          </button>

        </form>
      </MyModal>
      <Table />
      {/* <table>
        <tbody>
          {
            userDevices.map((device, index) => {
              const { id, inventoryNumber, serialNumber, description, name, place } = device;
              return (
                <tr key={id} >
                  <td>{index + 1}</td>
                  <td>{inventoryNumber}</td>
                  <td>{serialNumber}</td>
                  <td>{description}</td>
                  <td>{name}</td>
                  <td>{place.object}</td>
                  <td>{place.place}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table> */}
    </>
  )
}

export default EquipmentList; 
