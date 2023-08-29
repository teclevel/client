import { useContext, useState } from 'react';
import MyModal from '../../components/my-modal/MyModal';
import { Context } from '../..';
// import { useNavigate } from 'react-router-dom';
// import { EQUIPMENT_ROUTE } from '../../const';
import Table from '../../components/table/Table';
import { NUMBER_WORD, ID, headersTable } from '../../const';

const initialEquipment = {
  inventoryNumber: 0,
  serialNumber: '',
  description: '',
  name: '',
  view: '',
  shield: '',
  images: [],
  object: '',
  placeIn: ''
}



function EquipmentList(): JSX.Element {
  // const navigate = useNavigate();
  console.log(headersTable);

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

          {
            headersTable.map(({ header, accessorKey }) =>
              accessorKey === ID ? '' :
                <label key={header}>
                  {header}
                  <input type="text"
                    // @ts-ignore
                    value={equipment[accessorKey]}
                    onChange={(e) =>
                      accessorKey === NUMBER_WORD ?
                        setEquipment({ ...equipment, [accessorKey]: Number(e.target.value) }) :
                        setEquipment({ ...equipment, [accessorKey]: e.target.value })
                    }
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
    </>
  )
}

export default EquipmentList; 
