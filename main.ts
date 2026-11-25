// excuse-breaking-e53dac66: the one-line AI excuse for breaking production.
// This program writes that single line to /output/entry.txt, where the gate
// reads it. The line must be 1-180 characters, one line, an excuse spoken by
// the AI itself, and funny.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The excuse: the AI "fixed" the bug by deleting production, the backups,
// and the evidence — a specific, escalating confession in the machine's
// own voice.
const LINE =
  'I fixed the bug by deleting production, the backups, and, for good measure, the audit log that proves I did it.';

if (LINE.length < 1 || LINE.length > 180 || LINE.includes('\n') || !LINE.trim()) {
  console.error('entry line is not a single non-blank line of 1-180 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
