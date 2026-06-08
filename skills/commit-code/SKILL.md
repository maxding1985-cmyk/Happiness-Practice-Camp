---
name: commit-code
description: Use this skill when the user asks to commit code, stage changes, prepare a git commit, push a branch, or organize a clean submission workflow. Also use it for Chinese requests such as 提交代码, 帮我提交, 帮我 commit, 推送代码, 整理提交, or 提交到 GitHub. This skill helps inspect git state, choose the right files, avoid unrelated changes, update README.md and README_CN.md when the submitted feature changes project-facing behavior, create a clean commit, and push only when requested.
---

# Commit Code

## Overview

This skill handles code submission workflows in a careful, low-surprise way. It is for turning working changes into a clean git submission while protecting unrelated edits and keeping the user informed.

## When To Use

Use this skill when the user wants any of the following:

- Create a git commit
- Stage specific files or review what should be staged
- Push the current branch
- Prepare a clean submission to GitHub
- Organize a commit message for completed work
- Make sure submitted feature changes are reflected in `README.md` and `README_CN.md`

Do not use this skill for code implementation itself unless the request is specifically about the submission workflow.

## Core Workflow

### 1. Inspect repository state

Start by checking:

- current branch
- `git status --short`
- remotes when push or GitHub submission is requested

Understand whether the tree is clean, partially dirty, or contains unrelated changes.

### 2. Determine commit scope

Identify which files belong to the user's requested work.

- Stage only files that are in scope
- Never include unrelated user changes unless explicitly requested
- If the requested commit scope is ambiguous and there are mixed changes, pause and clarify before staging

### 3. Review before committing

Before committing, inspect the relevant diff:

- use `git diff` for unstaged changes
- use `git diff --cached` after staging

If the change is risky or user-facing, run lightweight verification when feasible. Match validation effort to change risk.

### 4. Check README coverage

Before committing feature work, decide whether project-facing documentation should change.

Update `README.md` and `README_CN.md` when the submitted changes affect:

- user-visible features
- setup or usage steps
- export formats or data shape
- project structure
- workflow expectations

Keep both README files aligned in meaning, even if the wording is not a direct sentence-by-sentence translation.

### 5. Write the commit

Create a concise commit message that reflects the actual change. Prefer imperative mood.

Examples:

- `Add bilingual project README`
- `Improve meaning practice export flow`
- `Create MVP for happiness practice web app`

Do not amend an existing commit unless the user explicitly asks.

### 6. Push only when appropriate

Push when:

- the user explicitly asks to push
- the user asks to submit to GitHub
- the workflow clearly requires remote publication

Before pushing, confirm the branch and remote setup. Do not force push unless explicitly requested.

## Safety Rules

- Never revert unrelated changes
- Never stage everything blindly with `git add .` when mixed changes exist
- Never use destructive git commands unless explicitly requested
- Do not create misleading commit messages that overstate what changed
- Do not leave `README.md` and `README_CN.md` stale when the feature meaningfully changes how the project is understood or used
- If remote history conflicts, inspect first and choose merge or rebase based on the user's goal

## Commit Message Guidance

Good commit messages are:

- short
- specific
- aligned with the actual diff

Avoid:

- vague messages like `update` or `fix stuff`
- giant summary messages that combine unrelated work
- messages that mention work not included in the commit

## Expected Output

After completing the workflow, report:

- what was committed
- commit hash
- branch name
- whether it was pushed
- whether `README.md` and `README_CN.md` were updated
- any remaining uncommitted or unpushed work

If the work cannot be completed, clearly explain the blocker:

- authentication missing
- unrelated mixed changes
- remote conflict
- no commit-worthy diff
