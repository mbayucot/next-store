import { Table } from "@tanstack/react-table";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import React from "react";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const { pageIndex, pageSize } = table.getState().pagination;
  const totalItems = table.options?.pageCount
    ? (table.options?.meta?.totalCount ?? 0)
    : table.getRowModel().rows.length;

  const pageCount = table.getPageCount();
  const canPrevious = pageIndex > 0;
  const canNext = pageIndex < pageCount - 1;

  const startItem = totalItems === 0 ? 0 : pageIndex * pageSize + 1;
  const endItem = Math.min(totalItems, (pageIndex + 1) * pageSize);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 mt-4">
      <span className="text-sm text-muted-foreground">
        Showing {startItem}–{endItem} of {totalItems}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          Page {pageIndex + 1} of {pageCount}
        </span>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                aria-label="Go to previous page"
                size="icon"
                variant="ghost"
                onClick={() => table.setPageIndex(pageIndex - 1)}
                disabled={!canPrevious}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                aria-label="Go to next page"
                size="icon"
                variant="ghost"
                onClick={() => table.setPageIndex(pageIndex + 1)}
                disabled={!canNext}
              >
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
