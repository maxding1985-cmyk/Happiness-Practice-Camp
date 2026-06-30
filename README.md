# Happiness Practice Camp

[中文说明](./README_CN.md)

Happiness Practice Camp is a lightweight practice project inspired by Tal Ben-Shahar's happiness studies, adapted into a practical Chinese reflection and training experience.

The current MVP focuses on one path first: `意义之路` (the path of meaning). Instead of only presenting theory, it turns the material into a small web-based practice space that people can actually use day by day.

## Overview

This project currently includes:

- A static web MVP for the 21-day meaning practice flow
- A required participant `name` field
- Local progress saving in the browser
- One-click JSON export for later data collection and analysis
- A set of Chinese Markdown materials for the 10 happiness paths
- A repository-local Codex skill for safe code submission workflows

## Current MVP

The current web MVP includes:

- A 10-path overview page
- A focused introduction to `意义福祉`
- A 21-day daily practice flow
- A personal journal view
- A meaning declaration section
- A participant info section for later data organization
- Exportable JSON data using `name` as the top-level key

## Project Structure

```text
.
├── README.md
├── README_CN.md
├── LICENSE
├── skills/
│   └── commit-code/
│       ├── SKILL.md
│       └── agents/
│           └── openai.yaml
├── web/
│   ├── index.html
│   ├── styles.css
│   └── app.js
└── 幸福福祉/
    ├── README.md
    ├── 01-意义之路.md
    ├── 02-正念之路.md
    ├── 03-运动之路.md
    ├── 04-疗愈之路.md
    ├── 05-失败之路.md
    ├── 06-自愈之路.md
    ├── 07-关系之路.md
    ├── 08-自醒之路.md
    ├── 09-接纳之路.md
    └── 10-感恩之路.md
```

## How to Use

This version is intentionally simple. No build step is required.

1. Open `web/index.html`
2. Fill in `姓名`
3. Start the 21-day meaning practice
4. Use the export button to download one participant's data as JSON

Locally, you can open `web/index.html` directly in a browser.

## Data Export

The export format is designed to make later processing easier.

- `name` is used as both the top-level key and profile field
- Export checks that a name has been entered before downloading JSON
- Practice entries, declaration content, and progress are exported together

Example shape:

```json
{
  "Zhang San": {
    "profile": {
      "name": "Zhang San"
    },
    "progress": {
      "completedDays": 3,
      "totalDays": 21,
      "selectedDay": 4,
      "exportedAt": "2026-06-08T00:00:00.000Z"
    },
    "entries": {},
    "declaration": {}
  }
}
```

## Content Direction

The Chinese content in `幸福福祉/` is organized around 10 happiness paths:

- 意义之路
- 正念之路
- 运动之路
- 疗愈之路
- 失败之路
- 自愈之路
- 关系之路
- 自醒之路
- 接纳之路
- 感恩之路

The framing is inspired by Tal Ben-Shahar's happiness studies and aligned where possible with the broader `SPIRE` wellbeing model.

## Skills

The repository now includes a local Codex skill under `skills/commit-code/`.

This skill is designed for code submission workflows and helps:

- inspect git state before committing
- stage only in-scope changes
- keep `README.md` and `README_CN.md` in sync when features change project-facing behavior
- create clean commit messages
- push safely when requested

## Next Steps

- Add categorized value-word groups for easier selection
- Add a batch import and merge tool for multiple participant JSON files
- Expand the web experience from `意义之路` to the other 9 paths
- Improve product copy and onboarding flow
