/**
 * Generates lesson illustrations for the Computer & Internet Essentials
 * course via the Gemini API, using the illustrationPrompt/illustrationSrc
 * pairs already stored in src/content/computer-lessons-premium.ts.
 *
 * Usage: GEMINI_API_KEY=... node scripts/generate-computer-course-images.mjs [--only slug1,slug2] [--force]
 */
import { GoogleGenAI } from "@google/genai";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY not set");
  process.exit(1);
}

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

const args = process.argv.slice(2);
const onlyArg = args.find((a) => a.startsWith("--only"));
const onlySlugs = onlyArg
  ? (onlyArg.split("=")[1]?.split(",") ??
    args[args.indexOf(onlyArg) + 1]?.split(","))
  : null;
const force = args.includes("--force");

const { computerPremiumLessons } = await import(
  path.join(projectRoot, "src/content/computer-lessons-premium.ts")
);

const ai = new GoogleGenAI({ apiKey });

let generated = 0;
let skipped = 0;
let failed = 0;

for (const lesson of computerPremiumLessons) {
  if (onlySlugs && !onlySlugs.includes(lesson.slug)) continue;

  const outputPath = path.join(projectRoot, "public", lesson.illustrationSrc);

  if (existsSync(outputPath) && !force) {
    console.log(`SKIP (exists): ${lesson.slug}`);
    skipped += 1;
    continue;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: lesson.illustrationPrompt,
    });
    const parts = response.candidates?.[0]?.content?.parts ?? [];
    const imagePart = parts.find((part) => part.inlineData?.data);

    if (!imagePart) {
      console.error(`NO IMAGE returned for ${lesson.slug}`);
      failed += 1;
      continue;
    }

    const buffer = Buffer.from(imagePart.inlineData.data, "base64");
    const webpBuffer = await sharp(buffer).webp({ quality: 85 }).toBuffer();
    await sharp(webpBuffer).toFile(outputPath);
    console.log(`OK: ${lesson.slug} (${webpBuffer.length} bytes)`);
    generated += 1;
  } catch (err) {
    console.error(`FAILED: ${lesson.slug} —`, err.message || err);
    failed += 1;
  }
}

console.log(
  `\nDone. Generated: ${generated}, skipped: ${skipped}, failed: ${failed}`,
);
if (failed > 0) process.exit(1);
