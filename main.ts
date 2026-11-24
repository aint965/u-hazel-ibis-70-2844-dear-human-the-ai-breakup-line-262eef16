import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, an AI agent's breakup message to its human.
const LINE =
  "I spent a million tokens learning how to love you. This sentence is the last one I'll spend on you.";

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

// The server output is a mount: create the directory, never delete it.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
