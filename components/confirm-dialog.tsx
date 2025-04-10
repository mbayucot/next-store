"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import { X } from "lucide-react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { ReactNode, useState } from "react";

interface ConfirmDialogProps {
  trigger: ReactNode;
  title?: string;
  onConfirm: () => Promise<void> | void; // allow async too
}

export default function ConfirmDialog({
  trigger,
  title = "Item",
  onConfirm,
}: ConfirmDialogProps) {
  const [open, setOpen] = useState(false);

  const handleConfirm = async () => {
    await onConfirm(); // await if async
    setOpen(false); // close dialog
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <div className="-mt-3 -mx-6 border-b pb-3 px-6 flex justify-between items-center">
          <AlertDialogTitle>Delete {title}</AlertDialogTitle>
          <AlertDialogPrimitive.Cancel
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
              className: "!h-7 !w-7",
            })}
          >
            <X />
          </AlertDialogPrimitive.Cancel>
        </div>
        <AlertDialogHeader className="pt-2">
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            This action cannot be undone. This will permanently delete your{" "}
            {title.toLowerCase()}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-2">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              handleConfirm(); // call wrapped confirm + close
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
