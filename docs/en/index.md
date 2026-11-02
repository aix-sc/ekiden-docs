---
outline: [2, 3]
---

# EKIDEN.AI v3

## Start {#start}

EKIDEN.AI v3 is an analysis layer that reads the FIT file from your watch and works out what the workout actually was: 800 m × 10, where you slowed down, whether you got faster than last time. It returns numbers and judgments; the AI you connect (Claude or ChatGPT) puts them into words.

- **Rules count**: reps, distances, times and paces. The same record always gives the same answer.
- **Jev judges**: whether the run was planned and what it aimed at, chosen from fixed options with a probability.
- **The athlete decides the rest**: only what only they can know, asked as a multiple-choice question.

### Two ways to use it {#usage}

| | What you need | Your data |
| --- | --- | --- |
| [MCP (Claude Desktop extension)](#mcp) | Claude Desktop | Stays on your computer |
| [CLI](#cli) | Node.js 20 or later | Stays on your computer |

A remote version (add it to Claude or ChatGPT by entering a URL) is in preparation.

::: info Testing in progress
Downloads are at v3.ekiden.ai/cli/ and are for the testing team only (password). After the public release, the CLI will be published on npm.
:::

## MCP (Claude Desktop extension) {#mcp}

1. Download `ekiden-v3-local.mcpb`.
2. Double-click it. Claude Desktop shows an install screen; click "Install".
3. Choose your **FIT folder**: the folder with `.fit` files exported from your watch, or `.zip` exports from Garmin Connect or COROS (subfolders are read too).
4. Optionally, fill in the following.

| Setting | Example | Used for |
| --- | --- | --- |
| Recent race | `marathon:2:58:40`, `10k:38:42` | Pace zones and predicted times |
| Max and resting heart rate | `190`, `48` | Heart rate zones |
| Language | `ja` / `en` | Result text |

5. Ask Claude.

> List my interval sessions from last month
> Show me the July 15 workout segment by segment
> Am I getting faster at 1000 m × 5?

The available tools are listed under [Tools](#tools). Supported: macOS and Windows.

## Tools {#tools}

All tools are read-only. Results come back as a one-sentence summary plus JSON, with no location data (no GPS coordinates). Large results are paged with `offset`.

| Tool | What it does |
| --- | --- |
| `list_activities` | List workouts, filtered by period, sport and shape |
| `get_activity` | One workout in detail: summary, laps and segments |
| `get_splits` | First and second half, per km, or per segment |
| `compare_activities` | Compare 2 to 5 workouts |
| `get_activity_window` | Zoom into part of a workout, such as "the last 5 minutes" or "the 3rd rep" |
| `get_training_summary` | Training volume by week or month |
| `get_athlete_profile` | VDOT and predicted times for each distance |
| `get_athlete_zones` | Pace zones and heart rate zones |
| `get_menu_history` | How the same session has progressed, and whether you are getting faster |

## CLI {#cli}

You need Node.js 20 or later (check with `node --version`). In the folder where you downloaded `ekiden.mjs`:

```sh
node ekiden.mjs --help
node ekiden.mjs analyze ~/fit --race marathon:2:58:40
node ekiden.mjs list-activities --local ~/fit
node ekiden.mjs get-splits --activityId <ID> --mode segments --local ~/fit
node ekiden.mjs compare-activities --activityIds <ID1>,<ID2> --local ~/fit
```

Replace `~/fit` with your FIT folder. Add `--json` for JSON output and `--lang en` for English. `node ekiden.mjs features` lists the available features.

Pass thresholds with `--vdot 54`, `--race <mile|5k|10k|half|marathon>:<time>`, or `--t 4:00 --i 3:40 --m 4:14 --e 5:06`. Heart rate zones use `--max-hr 190 --resting-hr 48`.

After the public release, the CLI will be published on npm (so that it can be run with `npx`).

## Training Catalog {#catalog}

Sessions are identified using the Training Catalog by **Arata Fujiwara**. Arata built it from his own experience and what he learned from books and other sources; it is his work.

| | Count |
| --- | --- |
| Sessions | 191 (11 categories) |
| Session types | 8: recovery, easy, threshold, vo2max, marathon, canova, long, workout |
| Training plan styles | Daniels, Canova |

When the catalog has no exact match, the session is named from the structure the rules counted (for example, 800 m × 10) combined with the aim Jev chose (for example, vo2max).

## Your data {#privacy}

- **Read only**: it never writes to your training records.
- **No location data**: results passed to the AI contain no GPS coordinates.
- **Local versions stay on your computer**: the MCP extension and the CLI read your FIT files on your own machine.
- **No conversation**: v3 only returns numbers and judgments. The AI you connect writes the text.
