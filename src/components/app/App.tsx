// import { Devices } from "../../types/device";
// import DeviceCard from "../../pages/device-card/Device-card";
// import Repairs from "../../pages/repairs/Repairs";
// import { Repair } from "../../types/repair";
import TableSPM from "../../pages/tableSPM/TableSPM";
// import { TechnicalService } from "../../types/technicServices";
// import DeviceList from "../device-list/Device-list";

// type AppProps = {
//   devices: Devices,
//   repairs: Repair[],
//   techServices: TechnicalService[]
// }
function App(/* { devices, techServices }: AppProps */): JSX.Element {

  return (
    <TableSPM /* devices={devices} techServices={techServices} */ />
    // <Repairs repairs={repairs}/>
    // <DeviceCard device={devices[0]} />
    // <DeviceList devices={devices}/>
  )
}

export default App;

//commit
