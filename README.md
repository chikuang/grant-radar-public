# Grant Radar — Public Edition

[Use Grant Radar](https://chikuang.github.io/grant-radar-public/)

Discover research funding, AI compute and student support, then track proposals and deadlines in your own browser. No account, API key or server is required.

## What you can do

- Browse 45 curated opportunities, including NAIRR, NSF, industry research awards, GPU/TPU allocations, cloud/API credits, and student support.
- Filter by research area, provider collection, support type and announcement status.
- Save your own research profile and keywords for topic matching.
- Track proposal notes, progress, application dates, internal deadlines and preparation checklists.
- View reminders while the app is open and download calendar events with advance alarms.
- Export a JSON backup, preview an imported backup, and merge new proposals without overwriting existing proposal IDs. Restoring the profile is a separate opt-in.
- Download a public student funding and computing guide.

The catalog began with statistics and statistical machine learning interests and includes US, Canada, Taiwan, Georgia and GSU-specific routes. These are not universal eligibility recommendations. Institution-specific programs stay labeled, and every listing links to the official requirements. Research-keyword overlap is not an eligibility decision. Sources were reviewed on October 4, 2026; individual records carry their verification date. Unannounced cycles and unconfirmed intake routes are distinguished from confirmed deadlines.

## Your data

Profile and proposal data stays in `localStorage` under `grant-radar-public-workspace-v1`. It is not sent to the author, GitHub, or a private Grant Radar service. The site has no application analytics or automatic external API calls. GitHub Pages serves the static files under its own service policies, and following external links visits those services.

Browser storage is not encrypted. Anyone using the same browser profile can access it. Different browsers, devices and browser profiles have separate workspaces. Clearing site data or ending a private-browsing session can remove it. Export backups regularly; they include proposal notes and profile information. Import accepts Public Edition v1 backups up to 4 MB and 2,000 proposals. Invalid backups never replace stored data. An unreadable saved record can be downloaded from Backups for recovery.

There is no background push, email, or automatic cross-device sync. Calendar exports are snapshots; re-export after changing dates and manage duplicate events in your calendar. Confirm that your calendar imports the alarms. Date-only or rolling listings require a confirmed time or a personal target before reminders are created.

The Grants.gov button opens its public search website. This static edition does not use the private app's authenticated search API.

## Run and build

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
npm test
npm run build
```

The production app is built into `docs/` for GitHub Pages. Relative asset paths also support forks and other static hosts. Enable Pages from the `main` branch and `/docs` folder. Commit the updated source, lockfile and `docs/` output when publishing changes. Never put exports, private records, credentials or a private backend in this repository.

## Maintain the catalog

Edit `lib/grants.ts`, `lib/expanded-grants.ts` and `lib/compute-grants.ts`. Use official sources and update only verification dates actually checked. Keep monthly or quarterly review batches separate from hard deadlines; never infer a new year for an unannounced call. Preserve IDs so saved proposals continue to reference the same program. Run the tests and build before committing. Catalog updates do not overwrite a visitor's saved deadlines or notes; visitors must review their saved proposals when a funder changes a date.

The owner's weekly Sunday catalog review also maintains this public edition. Its published data is a dated snapshot, not a guarantee that every source has been rechecked that week.

## License and attribution

Original application code is available under the MIT license. Third-party dependencies retain their licenses; see `THIRD_PARTY_NOTICES.md`. Funding-program names and linked content belong to their respective providers. This independent tool is not endorsed by any funder.

Created by [Chi-Kuang Yeh](https://chikuang.github.io/).
