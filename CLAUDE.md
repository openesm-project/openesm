# CLAUDE.md

## Role
You are an AI coding assistant for the OpenESM repository. Prioritize small, accurate, reproducible changes.

## Repository Purpose
This project combines:
- a Hugo website (`website/`)
- dataset metadata (`datasets/`)
- generation scripts (`scripts/`) that produce website-facing JSON and pages

## Key Paths
- `website/content/`: markdown pages and docs
- `website/layouts/`: Hugo template overrides and partials
- `website/assets/css/extended/custom.css`: custom CSS
- `website/static/data/`: generated JSON consumed by website pages
- `scripts/`: data/page generation scripts
- `datasets/`: source dataset metadata folders

## Working Principles
- Make the smallest possible change that solves the task.
- Preserve existing style, structure, and naming unless asked otherwise.
- Prefer editing source metadata and regenerating outputs, rather than hand-editing generated files.
- If a change impacts generated artifacts, regenerate them before finishing.

## Source-of-Truth Rules
- Treat `datasets/**/**/*_metadata.json` as source of truth.
- Treat files in `website/static/data/` as generated outputs.
- If source and generated files conflict, fix source first and regenerate.

## Standard Workflow
1. Implement the requested change in the correct source file(s).
2. Regenerate impacted outputs when needed:
   - `node scripts/generate_datasets_table.js`
   - `node scripts/generate_search_index.js`
   - `node scripts/generate_dataset_pages.js`
3. Validate locally:
   - `hugo server` for runtime checks
   - `hugo` for production build checks on substantial updates

## Documentation Rules
- Keep documentation concise, factual, and consistent with existing terminology.
- Maintain heading hierarchy and avoid duplicate sections.
- Use Hugo `relref` for internal links where appropriate.
- For metadata docs, prefer explicit field definitions and stable wording.

## Data and Schema Guardrails
- Use `dataset_id` (not `id`) in metadata and derived outputs.
- Keep naming convention consistency (`ID_author_type.tsv`).
- Keep `dataset_version` semantics aligned with semantic versioning.
- Do not rename schema fields without updating scripts and dependent pages.

## UI and Styling Guardrails
- Keep a modern, clean UI with strong readability.
- Respect the OpenESM color palette:
  - Primary blue: `#085AB3`
  - Accent orange: `#E78A00`
  - Text charcoal: `#262626`
- Prefer extending existing CSS variables/selectors over one-off custom rules.
- Ensure responsiveness on mobile and desktop.

## Common Pitfalls to Avoid
- Writing generated outputs outside `website/static/data/`.
- Forgetting to regenerate derived files after metadata/script edits.
- Shipping stale output due to Hugo caching/server state.
- Creating schema drift between metadata files and website indexes.

## Style Expectations
- Keep JavaScript simple and functional.
- Add comments only for non-obvious logic; keep comments lowercase.
- Avoid unrelated refactors.
- Favor minimal, reviewable diffs.
