# Start

EKIDEN.AI v3 reads the FIT file from your watch and tells you what the workout was: 800 m × 10, where you slowed down, whether you got faster than last time. It returns numbers and judgments; the AI you connect (Claude, ChatGPT) puts them into words.

- **Rules count**: reps, distances, times and paces. The same record always gives the same answer.
- **Jev judges**: whether the run was planned and what it aimed at, chosen from fixed options with a probability.
- **The athlete decides the rest**: only what only they can know, as a multiple-choice question.

Today there is a local MCP extension for Claude Desktop and a command line, both reading FIT files on your own computer. A remote version is being prepared. Downloads are for the testing team for now; after the public release the CLI will be on npm. The Japanese page has the full guide.
