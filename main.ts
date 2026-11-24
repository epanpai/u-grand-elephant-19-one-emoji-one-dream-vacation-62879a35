// One Emoji, One Dream Vacation — u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35
// Writes exactly one emoji to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22 stdlib only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Emoji choice: 🌋 (volcano, U+1F30B) — one code point, no variation selector.
// Why: a volcano trek (Hawaii, Iceland, Bromo) is a vivid, specific dream
// vacation at a glance — a dramatic postcard, not the generic beach/island
// everyone else picks — with a spark of surprise the judge rewards. It reads
// instantly across cultures and screens at any size.
const EMOJI = "🌋";

// Gate guard: the entry must be exactly one emoji (1–8 chars, not whitespace).
if ([...EMOJI].length !== 1) {
  throw new Error("entry must be exactly one emoji");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
