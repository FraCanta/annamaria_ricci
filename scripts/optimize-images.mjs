import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const assetsDir = path.join(root, "public", "assets");
const outputDir = path.join(assetsDir, "optimized");

const images = [
  {
    input: "trova_il_lavoro_che_desideri.jpg",
    output: "trova-il-lavoro-che-desideri.webp",
    width: 1200,
    quality: 76,
  },
  {
    input: "banner.jpg",
    output: "banner.webp",
    width: 1200,
    quality: 76,
  },
  {
    input: "respiro.jpg",
    output: "respiro.webp",
    width: 1400,
    quality: 76,
  },
  {
    input: "cambia_e_trova_la_tua_strada_nel_lavoro2.jpg",
    output: "cambia-e-trova-la-tua-strada-nel-lavoro.webp",
    width: 1200,
    quality: 76,
  },
  {
    input: "cambia_e_trova_la_tua_strada_nel_lavoro_2.jpg",
    output: "cambia-e-trova-la-tua-strada-nel-lavoro-card.webp",
    width: 1200,
    quality: 76,
  },
  {
    input: "cerca_le_tue_radici.jpg",
    output: "cerca-le-tue-radici.webp",
    width: 1200,
    quality: 76,
  },
  {
    input: "trova_la_tua_direzione2.jpg",
    output: "trova-la-tua-direzione.webp",
    width: 1200,
    quality: 76,
  },
  {
    input: "avvia_la_tua_attività_con_consapevolezza.jpg",
    output: "avvia-la-tua-attivita-con-consapevolezza.webp",
    width: 1200,
    quality: 76,
  },
  {
    input: "soluzioni_su_misura_per_crescere.jpg",
    output: "soluzioni-su-misura-per-crescere.webp",
    width: 1200,
    quality: 76,
  },
];

await fs.mkdir(outputDir, { recursive: true });

for (const image of images) {
  const inputPath = path.join(assetsDir, image.input);
  const outputPath = path.join(outputDir, image.output);

  await sharp(inputPath)
    .rotate()
    .resize({
      width: image.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: image.quality,
      effort: 6,
    })
    .toFile(outputPath);

  const [source, output] = await Promise.all([
    fs.stat(inputPath),
    fs.stat(outputPath),
  ]);
  const saved = Math.round((1 - output.size / source.size) * 100);
  console.log(
    `${image.input} -> optimized/${image.output} (${formatBytes(
      source.size
    )} -> ${formatBytes(output.size)}, -${saved}%)`
  );
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KiB`;
}
