# Commit Note - Add Mindfulness Practice Path

- **Timestamp:** 2026-06-30 16:35:15 Asia/Shanghai
- **Branch:** main
- **Commit message:** Add mindfulness practice path
- **Commit hash:** Pending until commit is created
- **Scope:** Add the mindfulness path web experience, 21-day recording flow, supporting course materials, and a practice-focused PPT.

## Summary

- Added switchable `意义之路` / `正念之路` web paths with path-specific introductions, 21-day practices, journals, declarations, and export data.
- Restyled the web experience with a bright mindfulness visual system and added an original mindfulness hero illustration.
- Added a 90-minute Practice-focused mindfulness course deck and supporting Markdown course design.
- Expanded the mindfulness notes and updated README files to describe the new dual-path MVP and export shape.

## Changed Files

| File | Change | Notes |
|---|---|---|
| `web/index.html` | Changed | Reworked page sections to support multiple practice path types. |
| `web/app.js` | Changed | Added dual-path state, mindfulness 21-day plan, path-specific journals/declarations, and all-path JSON export. |
| `web/styles.css` | Changed | Updated the visual style and added mindfulness-specific hero styling. |
| `web/zhengnian-hero.png` | Added | Original mindfulness illustration used by the web page. |
| `outputs/正念之路-90分钟Practice课程版.pptx` | Added | New 90-minute mindfulness Practice course deck. |
| `幸福福祉/02-正念之路.md` | Changed | Expanded the mindfulness learning article with PPT, video summary, and research-backed notes. |
| `幸福福祉/02-正念之路课程设计-Practice版.md` | Added | Practice-first course planning document. |
| `README.md` | Changed | Documents the new meaning + mindfulness MVP and export shape. |
| `README_CN.md` | Changed | Chinese README aligned with the new dual-path MVP. |

## Behavior / User Impact

- Users can now switch between meaning and mindfulness paths in the same static web page.
- Mindfulness participants can record 21 days of practice and write a mindfulness declaration.
- Exported JSON now includes all open paths under one participant name key.
- Facilitators get a ready-to-use 90-minute mindfulness Practice PPT.

## Validation

- Ran `node --check web/app.js`.
- Rendered and visually reviewed the PPT slide contact sheet.
- Re-imported the generated PPTX with the presentation tooling and inspected slide metadata.

## Follow-ups

- Deploy/push to GitHub Pages so the public site reflects the new mindfulness path.
- Consider adding batch import/merge tooling for multi-participant JSON exports.
