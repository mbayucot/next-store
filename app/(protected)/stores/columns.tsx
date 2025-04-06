"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RowActions } from "@/app/(protected)/stores/row-actions";

export const columns: ColumnDef<never>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    id: "actions",
    cell: ({ row }) => <RowActions row={row.original} />,
  },
];
