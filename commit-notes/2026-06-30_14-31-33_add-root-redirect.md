# Commit Note - Add Root Redirect

- **Timestamp:** 2026-06-30 14:32:29 CST
- **Branch:** main
- **Commit message:** Add root redirect to web app
- **Commit hash:** Pending until commit is created
- **Scope:** Add a root-level GitHub Pages entry point that redirects visitors to the existing web app.

## Summary

- Added a root `index.html` for GitHub Pages.
- Redirects the short site URL to `./web/` automatically.
- Provides a fallback link if automatic refresh does not run.

## Changed Files

| File | Change | Notes |
|---|---|---|
| `index.html` | Added | Makes the GitHub Pages root URL route into the web practice app. |

## Behavior / User Impact

- Users can share the shorter GitHub Pages URL without appending `/web/`.
- Existing `/web/` page behavior is unchanged.

## Validation

- Reviewed the added `index.html` locally.
- No automated tests were run because this is a static redirect-only page.

## Follow-ups

- After push, wait for GitHub Pages to redeploy and verify the root URL redirects correctly.
