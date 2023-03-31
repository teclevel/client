// import { Devices } from "../../types/device";

import { useState } from 'react';
import ModalAddEquipment from '../../components/ModalAddEquipment/ModalAddEquipment';
import { devices } from '../../mocks/devices'
// type EquipmentListProps = {
//   devices: Devices
// }

function EquipmentList(): JSX.Element {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button onClick={() => setModal(true)}>
        Добавить
      </button>
      <ModalAddEquipment
        visible={modal}
        setVisible={setModal}
      >
        <p>Modal</p>
      </ModalAddEquipment>
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
