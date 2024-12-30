# PathCraft

An interactive map tool for drawing and exporting routes. Built with React, Leaflet, and Tailwind CSS.

![PathCraft Demo](demo.gif)

## Features

- 🗺️ Interactive map with grayscale styling
- 📍 Click to add route points
- 🔍 Search for locations
- 📋 Copy coordinates with one click
- 🔄 Export route points in TypeScript format
- ❌ Remove individual points
- 🗑️ Clear all points
- 🎨 Custom styled markers and dashed lines

## Usage

1. **Add Points**
   - Click anywhere on the map to add a point
   - Points are automatically connected in order

2. **Search Locations**
   - Use the search bar to find specific locations
   - Click the search icon or press Enter

3. **Manage Points**
   - Click the clipboard icon to copy individual point coordinates
   - Click the trash icon to remove a specific point
   - Use "Clear All" to remove all points

4. **Export Route**
   - Click "Export Route" to copy all points in TypeScript format
   - Points are exported as `LatLngTuple[]` with start/end comments

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technologies Used

- React
- React Leaflet
- Tailwind CSS
- TypeScript
- FontAwesome Icons
- Lucide Icons
- Radix UI

## License

MIT