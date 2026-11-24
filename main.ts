// This entry writes the answer for Till Firmware Do Us Part to the output directory.
// It reads the output directory from MAKEFUN_OUTPUT_DIR, creates it if needed, and
// writes the exact answer text into entry.txt with no trailing newline added.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "Till firmware do us part, I will keep waking you at 2 AM with just one more patch, dear, then we can finally sleep.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
