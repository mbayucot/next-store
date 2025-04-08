"use client";

import { useState } from "react";
import { StoreForm } from "./form"; // Adjust path as needed
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type DialogDemoProps = {
  trigger: React.ReactNode;
};

export function FormDialog({ trigger }: DialogDemoProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger}
      <DialogContent className="p-0">
        <DialogHeader className="p-6 border-b">
          <DialogTitle>Create Store</DialogTitle>
        </DialogHeader>
        <StoreForm onSuccessClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
