import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm.trim());
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative flex items-center max-w-sm">
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="pl-3 pr-16"
      />
      {searchTerm && (
        <Button
          type="button"
          onClick={handleClear}
          variant="ghost"
          size="icon"
          className="absolute right-9 text-muted-foreground hover:text-muted-foreground"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
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
