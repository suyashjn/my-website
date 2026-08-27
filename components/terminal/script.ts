import { profile, skillCategories } from "@/data/content";

export type TerminalBlock = {
  command: string;
  output: string[];
};

export const terminalScript: TerminalBlock[] = [
  { command: "whoami", output: [profile.name] },
  { command: "cat role.txt", output: [profile.role] },
  {
    command: "ls skills/",
    output: skillCategories.map(
      (category) => `${category.category}: ${category.items.join(", ")}`
    ),
  },
  { command: "cat status.txt", output: ["Available for work"] },
];
