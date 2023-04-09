// import { Devices } from "../../types/device";

import { useState } from 'react';
import MyModal from '../../components/myModal/MyModal';
import { devices } from '../../mocks/devices'
import { Device } from '../../types/device';
/* export type Device ={
  id: number,
  inventoryNumber: number,
  serialNumber: string|number,
  description: string,
  name: string,//модель
  type: string,  //миксер, печь
  brand: string,
  view:string,
  shield: string,
  images: string[],
 // technicalSpecifications:TechnicalSpecifications,
  place: Place,
}
 */
function EquipmentList(): JSX.Element {
  const [equipments, setEquipments] = useState<Device[]>([]);
  // setEquipments(devices);
  // console.log(equipments)
  const [equipment, setEquipment] = useState({ inventoryNumber: '', serialNumber: '', description: '', name: '', brand: '', view:'', shield:'', images:'', place:'' });
  const [modal, setModal] = useState(false);

  const create = (newEquipment:any) => {
    setEquipments([...equipments, newEquipment])
    setModal(false)
  }

  const addEquipment = (e:any) => {
    e.preventDefault()
    const newEquipment = {
      ...equipment, id: Date.now()
    }
    create(newEquipment)
    setEquipment({ inventoryNumber: '', serialNumber: '', description: '', name: '', brand: '', view:'', shield:'', images:'', place:''})
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
          {/* <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            /> */}
          <label>
            Инвентарный номер
            <input type="text"
              value={equipment.inventoryNumber}
              onChange={(e) => setEquipment({ ...equipment, inventoryNumber: e.target.value })} />
          </label>
          <label>
            S/N
            <input type="text" />
          </label>
          <label>
            Описание
            <input type="text" />
          </label>
          <label>
            Название
            <input type="text" />
          </label>
          <label>
            Бренд
            <input type="text" />
          </label>
          <label>
            Вид
            <input type="text" />
          </label>
          <label>
            Шильдик
            <input type="text" />
          </label>
          <label>
            Фото
            <input type="text" />
          </label>
          <label>
            Объект
            <input type="text" />
          </label>
          <label>
            Место
            <input type="text" />
          </label>
          <button
            onClick={addEquipment}
          >Добавить оборудование</button>

        </form>
      </MyModal>
      <table>
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Инвентарный номер</th>
            <th>S/N</th>
            <th>Описание</th>
            <th>Название</th>
            <th>Бренд</th>
            <th>Объект</th>
            <th>Место</th>
          </tr>
        </thead>
        <tbody>
          {
            devices.map((device, index) => {
              const { id, inventoryNumber, serialNumber, description, name, brand, place } = device;
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{inventoryNumber}</td>
                  <td>{serialNumber}</td>
                  <td>{description}</td>
                  <td>{name}</td>
                  <td>{brand}</td>
                  <td>{place.object}</td>
                  <td>{place.place}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default EquipmentList;
