"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getStores } from "@/generated/store/store";
import SearchBar from "@/app/(protected)/stores/searchbar";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

export default function StoresPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["stores"],
    queryFn: getStores,
  });

  if (isError) return <p className="p-4 text-red-500">Failed to load stores</p>;

  const stores = data || [];

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between">
        <SearchBar onSearch={(data) => console.log(data)} />
      </div>
      <DataTable columns={columns} data={stores} loading={isLoading} />
    </div>
  );
}
