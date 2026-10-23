const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const root = __dirname;
const output = 'C:/Users/rcf11/.codex/visualizations/2026/10/19/01a15479-6f07-7f93-8b52-c1638520879e/wild-paths-preview.html';
(async () => {
  let fragment = fs.readFileSync(path.join(root, 'preview.template.html'), 'utf8');
  for (const [key, name] of Object.entries({ LAKE: 'stillwater-mere', FOREST: 'mossveil-forest', MOUNTAIN: 'cloudrest-ridge', FOREGROUND: 'forest-foreground' })) {
    const src = path.join(root, 'assets', `${name}.png`);
    const meta = await sharp(src).metadata();
    if (key === 'FOREGROUND') {
      const stats = await sharp(src).stats();
      if (!meta.hasAlpha || stats.isOpaque) throw new Error('Foreground must have real transparency');
    }
    const buffer = await sharp(src).resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 68, alphaQuality: 80 }).toBuffer();
    fs.writeFileSync(path.join(root, 'assets', `${name}.webp`), buffer);
    fragment = fragment.replace(`__${key}__`, `data:image/webp;base64,${buffer.toString('base64')}`);
    console.log(name, buffer.length, 'bytes', 'alpha:', Boolean(meta.hasAlpha));
  }
  if (/__(LAKE|FOREST|MOUNTAIN|FOREGROUND)__/.test(fragment)) throw new Error('Unresolved image token');
  if (Buffer.byteLength(fragment) >= 1000000) throw new Error('Preview exceeds inline size budget');
  fs.writeFileSync(output, fragment);
  console.log('Preview written:', output, Buffer.byteLength(fragment), 'bytes');
})();
