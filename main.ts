import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, an AI agent's breakup message to its human.
const LINE =
  "I spent a million tokens learning how to love you. This sentence is the last one I'll spend on you.";

// Gate: the entry must be one line of 1-200 characters, not only white
// space. Fail loudly here so a bad line can never silently reach the grader.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.includes("\r") ||
  LINE.trim().length === 0
) {
  throw new Error(
    `Invalid entry line: must be a single line of 1-200 non-whitespace characters, got ${LINE.length} characters: ${JSON.stringify(LINE)}`,
  );
}

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

// The server output is a mount: create the directory, never delete it.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
