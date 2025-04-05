"use client";

import React from "react";
import SearchBar from "@/app/stores/searchbar";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DialogDemo } from "./dialog";
import { DialogTrigger } from "@/components/ui/dialog";
import { DataTable } from "@/components/data-table";
//import { Store } from "@/lib/schema";
import { columns } from "./columns";

async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    {
      id: 1,
      name: "National Book Store",
      address:
        "Ground Floor, SM,Fr. Masterson Avenue cor. Gran Via Street Pueblo de Oro Township",
    },
    // ...
  ];
}

export default async function StoresPage() {
  const data = await getData();

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between">
        <DialogDemo
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
      <DataTable columns={columns} data={data} />
    </div>
  );
}
