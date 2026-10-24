import fs from 'node:fs/promises'
import sharp from 'sharp'

// Raster fallbacks are generated from the SVG source, never maintained separately.
const source = 'public/assets/brand/favicon.svg'
const sizes = [16, 32, 48]
const images = await Promise.all(sizes.map(size => sharp(source).resize(size, size).png().toBuffer()))
for (let index = 0; index < sizes.length; index++) {
  await fs.writeFile(`public/assets/brand/favicon-${sizes[index]}.png`, images[index])
}
await sharp(source).resize(180, 180).flatten({ background: '#ffffff' }).png().toFile('public/assets/brand/apple-touch-icon.png')

// ICO directory with one PNG image per size, supported by current browsers/Windows.
const directory = Buffer.alloc(6 + sizes.length * 16)
directory.writeUInt16LE(1, 2)
directory.writeUInt16LE(sizes.length, 4)
let offset = directory.length
sizes.forEach((size, index) => {
  const entry = 6 + index * 16
  directory[entry] = size
  directory[entry + 1] = size
  directory.writeUInt16LE(1, entry + 4)
  directory.writeUInt16LE(32, entry + 6)
  directory.writeUInt32LE(images[index].length, entry + 8)
  directory.writeUInt32LE(offset, entry + 12)
  offset += images[index].length
})
await fs.writeFile('public/favicon.ico', Buffer.concat([directory, ...images]))
console.log('Generated SVG-derived PNG favicons, multi-size ICO and Apple touch icon.')
