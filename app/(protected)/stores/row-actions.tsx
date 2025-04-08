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
import { DialogTrigger } from "@/components/ui/dialog";
import { FormDialog } from "./form-dialog";
import {
  useDeleteStoresId,
  getGetStoresQueryKey,
} from "@/generated/store/store";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

interface RowActionsProps {
  row?: any;
}

export function RowActions(row: RowActionsProps) {
  const { isPending, mutate } = useDeleteStoresId();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    return new Promise<void>((resolve) => {
      mutate(
        { id: row.row.id },
        {
          onSuccess: () => {
            toast({
              title: "Store deleted",
              description: "The store was successfully deleted.",
            });

            // Invalidate the stores query
            queryClient.invalidateQueries({ queryKey: getGetStoresQueryKey() });

            resolve();
          },
          onError: (error: any) => {
            toast({
              variant: "destructive",
              title: "Something went wrong",
              description: error?.message || "Delete failed.",
            });
            resolve();
          },
        },
      );
    });
  };

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

        <DropdownMenuItem asChild>
          <FormDialog
            storeId={row.row.id}
            title="Edit Store"
            trigger={
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full px-2 py-1.5 justify-start"
                >
                  Edit
                </Button>
              </DialogTrigger>
            }
          />
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <ConfirmDialog
            title="Store"
            trigger={
              <Button
                variant="ghost"
                className="w-full px-2 py-1.5 justify-start"
              >
                Delete
              </Button>
            }
            onConfirm={handleDelete}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
