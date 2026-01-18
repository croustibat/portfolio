import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const inputPath = path.resolve("public/images/me.jpg");
const outputPath = path.resolve("src/assets/me.ascii.txt");
const width = 90;
const charset = " .:-=+*#%@";

const image = sharp(inputPath);
const meta = await image.metadata();

if (!meta.width || !meta.height) {
  throw new Error("Could not read image dimensions.");
}

const aspectRatio = meta.height / meta.width;
const height = Math.max(1, Math.round(width * aspectRatio * 0.55));

const { data, info } = await image
  .resize(width, height, { fit: "fill" })
  .grayscale()
  .raw()
  .toBuffer({ resolveWithObject: true });

const rows = [];
for (let y = 0; y < info.height; y += 1) {
  let row = "";
  for (let x = 0; x < info.width; x += 1) {
    const idx = y * info.width + x;
    const value = data[idx];
    const charIndex = Math.round((1 - value / 255) * (charset.length - 1));
    row += charset[charIndex];
  }
  rows.push(row);
}

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, rows.join("\n"), "utf-8");
console.log(`ASCII portrait generated: ${outputPath}`);
