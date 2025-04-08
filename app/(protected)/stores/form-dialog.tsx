"use client";

import { useState } from "react";
import { StoreForm } from "./form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type FormDialogProps = {
  trigger: React.ReactNode;
  storeId?: number;
  title?: string;
};

export function FormDialog({
  trigger,
  storeId,
  title = "Create Store",
}: FormDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger}
      <DialogContent className="p-0">
        <DialogHeader className="p-6 border-b">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <StoreForm storeId={storeId} onSuccessClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
