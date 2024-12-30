import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a location..."
        className="w-full px-4 py-2 pr-12 text-sm bg-white/90 rounded-md border border-gray-200 
                   focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
      />
      <Button 
        type="submit"
        variant="ghost" 
        size="icon"
        className="absolute right-1 top-1/2 -translate-y-1/2"
      >
        <Search className="h-4 w-4" />
      </Button>
    </form>
  );
}