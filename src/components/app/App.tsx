import { Devices } from "../../types/device";
import DeviceCard from "../../pages/device-card/Device-card";
// import DeviceList from "../device-list/Device-list";

type AppProps={
  devices:Devices
}
function App({devices}:AppProps):JSX.Element {

  return (
    <DeviceCard device={devices[0]} />
    // <DeviceList devices={devices}/>
    )
}

export default App;
