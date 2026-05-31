import { spawnSync } from "node:child_process";
import ffmpegStatic from "ffmpeg-static";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const input = path.join(root, "public", "images", "RueVideo.mp4");
const output = path.join(root, "public", "images", "RueVideo-poster.jpg");

const result = spawnSync(
  ffmpegStatic,
  ["-y", "-ss", "0.1", "-i", input, "-vframes", "1", "-q:v", "2", output],
  { stdio: "inherit" },
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

console.log(`Poster saved to ${output}`);
