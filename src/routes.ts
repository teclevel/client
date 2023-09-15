import { LOGIN_ROUTE, REGISTRATION_ROUTE, EQUIPMENT_ROUTE, MAIN_ROUTE, NOT_FOUND, REPAIR_LIST_ROUTE, TABLE_SPM_ROUTE } from "./const"
import Auth from "./pages/auth/Auth"
import EquipmentList from "./pages/equipment-list/EquipmentList"
import Equipment from "./pages/equipment/Equipment"
import Main from "./pages/main/main"
import NotFound from "./pages/not-found/NotFound"
import RepairList from "./pages/repairs-list/RepairList"
import TableSPM from "./pages/tableSPM/TableSPM"


export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  }
]

export const authRoutes = [
    {
      path: MAIN_ROUTE,
      Component: Main
    },
    {
      path: TABLE_SPM_ROUTE,
      Component: TableSPM
    },
    {
      path: EQUIPMENT_ROUTE,
      Component: EquipmentList
    },
    {
      path: REPAIR_LIST_ROUTE,
      Component: RepairList
    },
    {
      path: EQUIPMENT_ROUTE + '/:id',
      Component: Equipment
    },
    {
      path: NOT_FOUND,
      Component: NotFound
    }
  ]
