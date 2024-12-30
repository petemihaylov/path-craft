import { Point } from '../types';

export function formatPointsForExport(points: Point[]): string {
  const pointsString = points
    .map((point, index) => {
      const comment = index === 0 ? ' // Start' : 
                     index === points.length - 1 ? ' // Destination' : '';
      return `  [${point[0].toFixed(7)}, ${point[1].toFixed(7)}],${comment}`;
    })
    .join('\n');

  return `const routePoints: LatLngTuple[] = [\n${pointsString}\n];`;
}

export function copyToClipboard(text: string): void {
  navigator.clipboard.writeText(text);
  alert('Points copied to clipboard!');
}