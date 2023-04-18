// import { devices } from "../../mocks/devices";
// import { Device } from "../../types/device";
// import { Link } from 'react-router-dom';

import { useContext } from "react";
import { Context } from "../..";

// type EquipmentProps = {
//   device: Device
// }

function Equipment(): JSX.Element {
const {devices}=useContext(Context)
  const { id, inventoryNumber, serialNumber, description, name, view, shield, images } = devices.devices[0];
  return (
    <>
      <h2>{description}<br />{name}</h2>
      <iframe src={view} width="300" height="100" title="IMG_20221026_095348.jpg"></iframe>
      <dl>
        <dd>Производитель</dd>
        {/* <dt>{brand}</dt> */}
        <dd>Шильдик</dd>
        <dt><img src={shield} width="100" height="75" alt="шильдик" /></dt>
        <dd>S/N</dd><dt>{serialNumber}</dt>
        <dd>Инвентарный номер</dd><dt>{inventoryNumber}</dt>
        {/* <dd>Тип оборудования</dd><dt>{type}</dt> */}
      </dl>
      <ul>
        {images.map(image => (
          <li key={id}>
            <img src={image} width="100" height="75" alt="вид объекта" />
          </li>
        ))}
      </ul>
      <p>Ремонты</p>
      {/* <Link to="/">Ремонты</Link> */}

    </>
  )
}

export default Equipment;

