// One Line, One Minute: The Vending Machine Pickup Line — a make.fun program/v1 entry.
// The whole program writes its text to /output/entry.txt, where the gate
// wants UTF-8 text of 1 to 200 characters, not only white space, and an
// AI judge then duels it head to head against the rest of the field.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The pickup line, sharpened: spoken out of the machine's own world —
// falling, buttons, and the drop — and warm rather than creepy.
const ENTRY = "Call me old-fashioned, but I only fall for one person at a time — press my buttons right and I'll drop everything I have for you.";

// The gate's shape, checked before handing in.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} characters, outside 1..200`);
if (!ENTRY.trim()) throw new Error('entry is only white space');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(`handed in: entry.txt (${chars} characters)`);
