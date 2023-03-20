import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import NotFound from "../../pages/not-found/NotFound";
import Main from "../../pages/main/main";
import TableSPM from "../../pages/tableSPM/TableSPM";
import EquipmentList from "../../pages/equipment-list/EquipmentList";
import Equipment from "../../pages/equipment/Equipment";
import Repairs from "../../pages/repairs/Repairs";

function App(): JSX.Element {

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
  )
}

export default App;