import React from 'react';
import { Button } from './ui/button';
import { Clipboard, Trash2 } from 'lucide-react';
import { Point } from '../types';

interface PointListProps {
  points: Point[];
  onRemovePoint: (index: number) => void;
}

export function PointList({ points, onRemovePoint }: PointListProps) {
  const copyPoint = (point: Point) => {
    navigator.clipboard.writeText(`[${point[0].toFixed(7)}, ${point[1].toFixed(7)}]`);
  };

  return (
    <div className="space-y-2">
      {points.map((point, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm animate-in fade-in-0 duration-200"
        >
          <input
            type="text"
            readOnly
            value={`[${point[0].toFixed(7)}, ${point[1].toFixed(7)}]`}
            className="flex-1 px-3 py-1 text-sm bg-gray-50 rounded border border-gray-200 focus:outline-none"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => copyPoint(point)}
            className="hover:bg-gray-100"
          >
            <Clipboard className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemovePoint(index)}
            className="hover:bg-red-100 text-red-500"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}