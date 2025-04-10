"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";

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
import {
  usePostStores,
  useGetStoresId,
  usePutStoresId,
  getGetStoresQueryKey,
} from "@/generated/store/store";
import { LoadingButton } from "@/components/loading-button";
import { useQueryClient } from "@tanstack/react-query";

type StoreFormProps = {
  storeId?: number;
  onSuccessClose?: () => void;
};

export function StoreForm({ storeId, onSuccessClose }: StoreFormProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof StoreSchema>>({
    resolver: zodResolver(StoreSchema),
    defaultValues: {
      name: "",
      address: "",
    },
  });

  const { data: storeData } = useGetStoresId(storeId || 0);

  const { isPending, mutate } = usePostStores();
  const { isPending: isPendingUpdate, mutate: mutateUpdate } = usePutStoresId();

  useEffect(() => {
    if (storeData) {
      form.reset({
        name: storeData.name,
        address: storeData.address,
      });
    }
  }, [form, storeData]);

  function onSubmit(data: z.infer<typeof StoreSchema>) {
    const onSuccess = () => {
      toast({
        title: storeId ? "Store updated" : "Store created",
        description: `The store was successfully ${storeId ? "updated" : "created"}.`,
      });
      queryClient.invalidateQueries({ queryKey: getGetStoresQueryKey() });
      form.reset();
      onSuccessClose?.();
    };

    const onError = (error: any) => {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error?.message || "Failed to save store.",
      });
    };

    if (storeId) {
      mutateUpdate({ id: storeId, data }, { onSuccess, onError });
    } else {
      mutate({ data }, { onSuccess, onError });
    }
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

          <LoadingButton loading={isPending || isPendingUpdate} type="submit">
            Submit
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
}
