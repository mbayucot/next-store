import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="relative flex items-center max-w-sm">
      <Input
        placeholder="Search.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-3 pr-10"
      />
      <Button
        type="button"
        onClick={handleSearch}
        variant="ghost"
        size="icon"
        className="absolute right-1 text-muted-foreground hover:text-muted-foreground"
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
}
