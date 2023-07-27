// import { Devices } from "../../types/device";

import { useContext, useState } from 'react';
import MyModal from '../../components/my-modal/MyModal';
// import { devices } from '../../mocks/devices'
import { Devices } from '../../types/device';
import { Context } from '../..';
import { useNavigate } from 'react-router-dom';
import { EQUIPMENT_ROUTE } from '../../const';
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
  const navigate = useNavigate();
  const { devices } = useContext(Context)

  const userDevices = devices.devices

  const [equipments, setEquipments] = useState<Devices>(userDevices);
  // setEquipments(devices);
  // console.log(equipments)
  const [equipment, setEquipment] = useState({ inventoryNumber: 0, serialNumber: '', description: '', name: '', view: '', shield: '', images: [], place: {object:'',place:''} });
  const [modal, setModal] = useState(false);


  const addEquipment = (e: any) => {
    e.preventDefault()

    const newEquipment = {
      ...equipment, id: Date.now()
    }
    console.log('equipments:', equipments);
    console.log('newEquipment:',newEquipment);
    setEquipments([...equipments, newEquipment])
    // create(newEquipment)
    setModal(false)
    setEquipment({ inventoryNumber: 0, serialNumber: '', description: '', name: '', view: '', shield: '', images: [], place: {object:'',place:''} })//обнуление, для след. заполнения
  };
// console.log('log', userDevices);
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
              onChange={(e) => setEquipment({ ...equipment, inventoryNumber: Number(e.target.value) })}
            />
          </label>

          <label>
          S/N
            <input type="text"
              value={equipment.serialNumber}
              onChange={(e) => setEquipment({ ...equipment, serialNumber: e.target.value })}
            />
          </label>
          {/*
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
          </label> */}
          <button onClick={addEquipment}>
            Добавить оборудование
          </button>

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
            equipments.map((device, index) => {
              const { id, inventoryNumber, serialNumber, description, name, place } = device;
              return (
                <tr key={id} onClick={() => navigate(`${EQUIPMENT_ROUTE}/${id}`)}>
                  <td>{index + 1}</td>
                  <td>{inventoryNumber}</td>
                  <td>{serialNumber}</td>
                  <td>{description}</td>
                  <td>{name}</td>
                  {/* <td>{brand}</td> */}
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
