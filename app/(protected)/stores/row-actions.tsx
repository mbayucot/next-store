// components/row-actions.tsx
"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import ConfirmDialog from "@/components/confirm-dialog";

interface RowActionsProps {
  row?: any;
}

export function RowActions(row: RowActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem asChild>
          <ConfirmDialog
            title="Account"
            trigger={
              <Button
                variant="ghost"
                className="w-full px-2 py-1.5 justify-start"
              >
                Delete
              </Button>
            }
            onConfirm={() => {
              console.log("Delete action triggered");
            }}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
