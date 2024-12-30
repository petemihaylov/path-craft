import React from 'react';
import { Button } from './ui/button';
import { Download, Trash2 } from 'lucide-react';
import { PointList } from './PointList';
import { SearchBar } from './SearchBar';
import { Point } from '../types';

interface MapControlsProps {
  points: Point[];
  onExport: () => void;
  onClear: () => void;
  onRemovePoint: (index: number) => void;
  onSearch: (query: string) => void;
}

export function MapControls({ points, onExport, onClear, onRemovePoint, onSearch }: MapControlsProps) {
  return (
    <div className="p-6 bg-white/80 backdrop-blur-sm shadow-lg w-96 space-y-6 animate-in slide-in-from-left">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">PathCraft</h1>
        <p className="text-sm text-gray-600 mt-2">
          Click on the map to add points or search for locations. Points will be connected in order.
        </p>
      </div>

      <SearchBar onSearch={onSearch} />

      <div className="flex gap-4">
        <Button
          onClick={onExport}
          className="flex-1 gap-2"
          title="Export all points as a route"
        >
          <Download className="h-4 w-4" />
          Export Route
        </Button>
        <Button
          variant="destructive"
          onClick={onClear}
          className="flex-1 gap-2"
          title="Clear all points"
        >
          <Trash2 className="h-4 w-4" />
          Clear All
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="font-semibold text-gray-900">Route Points ({points.length})</h2>
        <PointList points={points} onRemovePoint={onRemovePoint} />
      </div>
    </div>
  );
}