"use client";

import React from "react";
import { useGetStores } from "@/generated/store/store";
import SearchBar from "@/components/searchbar";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { FormDialog } from "./form-dialog";

export default function StoresPage() {
  const { data, isLoading, isError } = useGetStores();

  if (isError) return <p className="p-4 text-red-500">Failed to load stores</p>;

  const stores = data || [];

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between">
        <FormDialog
          trigger={
            <DialogTrigger asChild>
              <Button>
                <Plus /> New Store
              </Button>
            </DialogTrigger>
          }
        />
        <SearchBar onSearch={(data) => console.log(data)} />
      </div>
      <DataTable columns={columns} data={stores} loading={isLoading} />
    </div>
  );
}
