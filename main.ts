import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh — one office joke, one line.
// True observation (bad office coffee) with a surprising last word:
// the coffee itself goes to HR.
const joke = "The office coffee is so weak it filed its own HR complaint.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
