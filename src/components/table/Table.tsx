import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { Context } from "../..";
import { useContext } from 'react';
import { Device } from "../../types/device";


export const myColumns: MRT_ColumnDef<Device>[] = [
  {
    header: "ID",
    accessorKey: "id",
    // отключаем сортировку и фильтрацию
    enableSorting: false,
    enableColumnFilter: false
  },
  {
    header: "Инв. номер",
    accessorKey: "inventoryNumber"
  },
  {
    header:"Сер. номер",
    accessorKey: "serialNumber"
  },
  {
    header: "Описание",
    accessorKey: "description"
  },
  {
    header: "Название",
    accessorKey: "name"
  },
];

export default function Table():JSX.Element {
  const {devices}= useContext(Context);
  const myData = devices.devices;
  
  return (
    <MaterialReactTable
      columns={myColumns}
      data={myData}
      enableRowSelection
      initialState={{ density: "compact" }}
    />
  );
}


