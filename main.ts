// The One-Line Exit — make.fun entry program.
//
// Writes one single-line resignation letter to /output/entry.txt.
// The letter quits by imitation: the office printer jammed, the Wi-Fi
// died, and the employee, inspired, follows their example out the door.
// One sentence, one concrete image, 89 characters.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER =
  "I resign as a hearse driver: after twenty years of delivering people to their final rest, today the cargo is me.";

// The competition gate: /output/entry.txt must be UTF-8 text of
// 1 to 140 characters, not only whitespace, on a single line.
const MIN_CHARS = 1;
const MAX_CHARS = 140;

function guard(text: string): void {
  // Enforce the gate before anything reaches disk: length in range,
  // not blank, and strictly one line.
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} chars, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  guard(LETTER);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, LETTER + "\n", "utf8");

  // Confirm the bytes on disk are exactly the guarded letter.
  const onDisk = readFileSync(outPath, "utf8").replace(/\n$/, "");
  if (onDisk !== LETTER) {
    throw new Error("round-trip mismatch: entry.txt differs from the letter");
  }
  console.log(`wrote ${LETTER.length} chars to ${outPath}`);
}

main();
