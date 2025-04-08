"use client";

import { useState } from "react";
import { StoreForm } from "./form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type FormDialogProps = {
  trigger: React.ReactElement; // ✅ use ReactElement instead of ReactNode
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
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="p-0">
        <DialogHeader className="p-6 border-b">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <StoreForm storeId={storeId} onSuccessClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
