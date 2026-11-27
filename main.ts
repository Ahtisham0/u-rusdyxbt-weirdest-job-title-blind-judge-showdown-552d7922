import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: a real-sounding corporate title with one gloriously odd twist —
// a Senior Vice President whose entire job is apologizing to cats.
const TITLE = "Senior Vice President of Apologizing to Cats";

// The gate allows 1 to 60 characters, not only whitespace.
if (TITLE.length < 1 || TITLE.length > 60 || TITLE.trim().length === 0) {
  throw new Error(`entry is ${TITLE.length} characters, outside the 1-60 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");

// Read it back: the graded artifact must be byte-for-byte the title above.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== TITLE) {
  throw new Error(`entry.txt mismatch: wrote ${JSON.stringify(written)}`);
}
console.log(`wrote ${written.length}-character entry to /output/entry.txt`);
