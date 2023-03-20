// import { Devices } from "../../types/device";
// import DeviceCard from "../../pages/device-card/Device-card";
// import Repairs from "../../pages/repairs/Repairs";
// import { Repair } from "../../types/repair";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import NotFound from "../../pages/not-found/NotFound";
import Main from "../../pages/main/main";
import TableSPM from "../../pages/tableSPM/TableSPM";
import EquipmentList from "../../pages/equipment-list/EquipmentList";
import Equipment from "../../pages/equipment/Equipment";
import Repairs from "../../pages/repairs/Repairs";
// import TableSPM from "../../pages/tableSPM/TableSPM";
// import { TechnicalService } from "../../types/technicServices";
// import DeviceList from "../device-list/Device-list";
// type AppProps = {
//   devices: Devices,
//   repairs: Repair[],
//   techServices: TechnicalService[]
// }
function App(/* { devices, techServices }: AppProps */): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.TableSPM} element={<TableSPM />} />
        <Route path={AppRoute.Equipments} element={<EquipmentList />} />
        <Route path={AppRoute.Equipment} element={<Equipment />} />
        <Route path={AppRoute.Repairs} element={<Repairs />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    // <TableSPM /* devices={devices} techServices={techServices} */ />
    // <Repairs repairs={repairs}/>
    // <DeviceCard device={devices[0]} />
    // <DeviceList devices={devices}/>
  )
}

export default App;

//commit
