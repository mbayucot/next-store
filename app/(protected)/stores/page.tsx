"use client";

import React, { useState } from "react";
import { useGetStores } from "@/generated/store/store";
import SearchBar from "@/components/searchbar";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { FormDialog } from "./form-dialog";

export default function StoresPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [search, setSearch] = useState("");

  const { pageIndex, pageSize } = pagination;

  const { data, isLoading, isError } = useGetStores({
    page: pageIndex + 1,
    limit: pageSize,
    search: search || undefined, // avoid sending empty string
  });

  if (isError) return <p className="p-4 text-red-500">Failed to load stores</p>;

  const stores = data?.data ?? [];
  const totalCount = data?.meta?.totalCount ?? 0;

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between">
        <FormDialog
          trigger={
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Store
              </Button>
            </DialogTrigger>
          }
        />
        <SearchBar
          onSearch={(value: string) => {
            setSearch(value.trim());
            setPagination((prev) => ({
              ...prev,
              pageIndex: 0, // reset to first page on new search
            }));
          }}
        />
      </div>

      <DataTable
        columns={columns}
        data={stores}
        loading={isLoading}
        pageCount={Math.ceil(totalCount / pageSize)}
        pageIndex={pageIndex}
        pageSize={pageSize}
        onPaginationChange={setPagination}
        totalCount={totalCount}
      />
    </div>
  );
}
