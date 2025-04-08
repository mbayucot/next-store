"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { StoreSchema } from "@/generated/zod";
import { usePostStores } from "@/generated/store/store";
import { LoadingButton } from "@/components/loading-button";

type StoreFormProps = {
  onSuccessClose?: () => void;
};

export function StoreForm({ onSuccessClose }: StoreFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof StoreSchema>>({
    resolver: zodResolver(StoreSchema),
    defaultValues: {
      name: "",
      address: "",
    },
  });

  const { isPending, mutate } = usePostStores();

  function onSubmit(data: z.infer<typeof StoreSchema>) {
    mutate(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Store created",
            description: "The store was successfully created.",
          });
          form.reset();
          onSuccessClose?.(); // Close dialog on success
        },
        onError: (error: any) => {
          toast({
            variant: "destructive",
            title: "Something went wrong",
            description: error?.message || "Failed to create store.",
          });
        },
      },
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-6 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>This is the name of your store.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                The physical or mailing address of the store.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4 items-center justify-end py-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => onSuccessClose?.()}
          >
            Cancel
          </Button>

          <LoadingButton loading={isPending} type="submit">
            Submit
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
}
