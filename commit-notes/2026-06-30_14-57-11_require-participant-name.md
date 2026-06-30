# Commit Note - Require Participant Name

- **Timestamp:** 2026-06-30 14:57:11 CST
- **Branch:** main
- **Commit message:** Require participant name for export
- **Commit hash:** Pending until commit is created
- **Scope:** Simplify participant identity collection to one required name field and validate it before JSON export.

## Summary

- Replaced the nickname + name participant form with a single required name field.
- Updated export logic to require a participant name and use that name as the JSON top-level key.
- Kept a migration fallback so older browser data with only a nickname can populate the new name field.
- Updated English and Chinese README documentation to match the new export shape.

## Changed Files

| File | Change | Notes |
|---|---|---|
| `web/index.html` | Changed | Removes nickname input and updates participant/export copy. |
| `web/app.js` | Changed | Uses `name` as the only participant identifier and blocks export when missing. |
| `README.md` | Changed | Documents the required name field and updated JSON structure. |
| `README_CN.md` | Changed | Documents the required name field and updated JSON structure in Chinese. |

## Behavior / User Impact

- Participants only need to fill in their name before practicing/exporting.
- Exported files are named from the participant name and JSON uses the name as the top-level key.
- Export is blocked with an inline prompt if the name is empty.

## Validation

- Ran `node --check web/app.js` successfully.
- Searched web and README files to confirm old nickname-facing copy was removed; one `nickname` reference remains only for backward-compatible migration from old localStorage data.

## Follow-ups

- After push, wait for GitHub Pages to redeploy and verify the live form/export behavior.
