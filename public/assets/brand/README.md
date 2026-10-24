# Srapsware vector wordmark

Recreated from public/assets/img/logo.png (572 x 150). This is a manually redrawn vector interpretation of the existing custom lettering, not the recovered original design source. Rounded letterforms and two-colour split are preserved; curve geometry is regularised, so small differences from the raster remain.

- srapsware-wordmark.svg: tightly framed transparent master, viewBox 0 0 520 54.
- srapsware-wordmark-padded.svg: original-style 572:150 framing for existing image slots.
- Colours sampled from fully opaque original pixels: #1C5489 and #4780C7.
- Nine named editable paths; rounded 5-unit strokes; no fonts, external dependencies, scripts or embedded raster.
- Original PNG files remain intact. Header and footer now use the tight SVG through components/ui/brand-logo.tsx, retaining the same two colours in both themes.

Preview: docs/srapsware-logo-preview.html and docs/srapsware-logo-preview.png.

## Browser icons

favicon.svg is the editable master for the SW monogram, using the same blues on a white rounded tile for visibility on light and dark browser tabs. Generate the 16/32/48 PNGs, root favicon.ico and opaque 180px Apple touch icon with `node scripts/generate-brand-icons.mjs`. The website metadata references these new assets. The previous favicon PNG is preserved.

The ICO contains three PNG-backed sizes. The SVG is 456 bytes and the wordmark is approximately 1.4 KB, with no new runtime dependencies. `scripts/brand-assets-review.mjs` verifies the rendered header/footer, responsive dimensions, themes, icon metadata, image dimensions and HTTP responses. Favicon preview: docs/srapsware-favicon-preview.png.
