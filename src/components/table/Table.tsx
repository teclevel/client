import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { Context } from "../..";
import { useContext } from 'react';
import { Device } from "../../types/device";
import { headersTable } from "../../const";


// @ts-ignore
export const myColumns: MRT_ColumnDef<Device>[] = headersTable;

export default function Table(): JSX.Element {
  const { devices } = useContext(Context);
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


