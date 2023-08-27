export type HeaderTable =
  {
    header: string;
    accessorKey: string;
    enableSorting?: boolean;
    enableColumnFilter?: boolean;
  };

export type HeadersTable = HeaderTable[];
