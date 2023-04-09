import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NotFound from "../../pages/not-found/NotFound";
// import Main from "../../pages/main/main";
// import TableSPM from "../../pages/tableSPM/TableSPM";
// import EquipmentList from "../../pages/equipment-list/EquipmentList";
// import Equipment from "../../pages/equipment/Equipment";
// import RepairList from "../../pages/repairs-list/RepairList";
// import Auth from "../../pages/auth/Auth";
import { routes } from "../../routes";

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes >
        {

          routes.map(({ path, Component }) =>
            <Route key='Component' path={path} element={<Component/>} />
          )
        }

        {/* <Route path={AppRoute.Auth} element={<Auth />} />
        <Route path={AppRoute.TableSPM} element={<TableSPM />} />
        <Route path={AppRoute.EquipmentList} element={<EquipmentList />} />
        <Route path={AppRoute.Equipment} element={<Equipment />} />
        <Route path={AppRoute.Repairs} element={<RepairList />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
