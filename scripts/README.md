# Image Optimization Tool

Optimize JPG, PNG, and WebP images without quality loss. Uses smart caching to prevent re-optimization.

## Features

- ✅ **Quality Preserved** - Visually lossless compression (85% quality)
- ✅ **Smart Caching** - Never re-optimizes the same file twice
- ✅ **Safe** - SVG files are excluded to prevent breaking icons/fonts
- ✅ **Fast** - Pure JavaScript, no native dependencies
- ✅ **Backup Support** - Optional backup before optimization

## Usage

```bash
# Optimize all images in public/assets
pnpm optimize:images

# Optimize specific folder
pnpm optimize:images public/assets/uploads

# Preview changes without modifying files
pnpm optimize:images:dry

# Create backup before optimization
pnpm optimize:images:backup

# Force re-optimize all images (ignore cache)
pnpm optimize:images:force
```

## How It Works

1. **Scans** for JPG, PNG, WebP files
2. **Checks cache** - skips already optimized images
3. **Optimizes** using MozJPEG, PNGQuant, WebP encoders
4. **Saves cache** - prevents future re-optimization

## Output Indicators

- `[CACHED]` - Already optimized (skipped)
- `[OK]` - Successfully optimized
- `[SKIP]` - No size reduction possible
- `[ERROR]` - Optimization failed

## Cache Management

Cache is stored in `.image-optimization-cache.json` and tracks:
- File hash (detects changes)
- Optimization timestamp
- Bytes saved

To reset cache: `Remove-Item .image-optimization-cache.json`

## Configuration

Edit `scripts/optimize-images.js`:

```javascript
const config = {
  jpg: { quality: 85 },     // 1-100
  png: { quality: [0.8, 0.9] },  // min-max range
  webp: { quality: 85 }     // 1-100
}
```

## Dependencies

- `imagemin` - Core optimization
- `imagemin-mozjpeg` - JPG optimizer
- `imagemin-pngquant` - PNG optimizer  
- `imagemin-webp` - WebP optimizer
- `chalk` - Colored output
- `glob` - File pattern matching
