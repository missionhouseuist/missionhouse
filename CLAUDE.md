# Mission House website — context for Claude

> The public site for a live Scottish holiday let. Last updated: 27 Aug 2026.

## ⚠️ Safety rules (mandatory)

- **www.missionhouse.co.uk is LIVE and taking real bookings.** Never push to `main`
  without Joe's explicit approval. Merging to `main` deploys to the live site.
- All changes go to a **branch** first. Vercel builds a preview automatically.
- Describe what you are about to do and **wait for a green light** before anything
  irreversible.
- When in doubt, ask. Do not assume permission to deploy.

## What this is

React + Vite + Tailwind, deployed by Vercel from `main`. One page, no router.
Almost everything lives in `src/App.jsx`.

The site is the front end of a larger booking system. The back end is a Google
Apps Script bound to the **Mission House Booking System** spreadsheet, backed up
at `missionhouseuist/missionhouse-automation` (private). Read that repo's README
before changing anything that touches bookings, pricing or availability.

## Where data comes from

One endpoint — the Apps Script Web App, `BOOKINGS_URL` in `src/App.jsx`:

- `?data=all` → `{ bookings, pricing, localLinks, config }`
- No parameter → a plain array of booked dates (the older contract, still served)

Nothing else. No CSV feeds, no second spreadsheet. **The spreadsheet must never be
made public** — it holds guest names, emails, phone numbers and payment status.

## Things that will bite you

**Dates are strings, and strings have timezones.** Bookings arrive as `yyyy-MM-dd`
and must be parsed as *local* midnight — see `parseSheetDate()`. Using
`new Date("2026-07-03")` reads it as UTC, which under British Summer Time lands on
2 July locally and shifts every booking a day: arrival days show free, checkout days
show blocked. It corrects itself every winter, so it looks intermittent.

**Pricing must match the Apps Script exactly.** Each seven nights is charged at the
rate for the month *that week starts in* — a week running 25 Sep to 2 Oct is a
September week. Rates are year-specific (Jul 2026 £1,350, Jul 2027 £1,400), so look
up year *and* month. `calculateBasePrice()` mirrors `calculatePricing()` in
`booking_automation.gs`; if you change one, change both or a guest sees two figures.

**Never hardcode a rate.** They were hardcoded once, drifted, and the site quoted
£1,000 for weeks the sheet priced at £1,400.

**Friday-to-Friday, minimum seven nights.** Enforced in `handleDateClick()` and
advertised in the meta description. Changing one without the other misleads guests.

**Changeover days are bookable.** A booking's checkout day is free for the next
arrival. The turnover helpers (`isDateTurnoverDay` and friends) model this; treating
the range as inclusive at both ends blocks weeks that are genuinely available.

**Both forms post to the same Formspree endpoint** and are told apart by a
`formType` field (`booking` / `contact`). Without it, the automation treats a
general question as a booking enquiry and replies asking for check-in dates.
Formspree is domain-restricted to `missionhouse.co.uk`, so form submissions fail
from preview URLs — that is expected, not a bug.

**If the availability feed fails, say so.** Do not fall back to an empty booking
list: showing every date as free invites double bookings.

## Conventions

- **UK English** throughout (licence, organise, colour).
- Contact address is `rental@missionhouse.co.uk`. Not `bookings@`.
- `public/handbook.pdf` is built elsewhere — from `GuestHandbook.md` in the Cowork
  project folder via `_tools/build_handbook.py`, then LibreOffice. Don't edit it here;
  it is fetched live by the pre-arrival email, so a stale commit reaches guests.
- `dist/` is committed but stale and unused — Vercel builds from source. Ignore it.

## Checks before pushing

```bash
pnpm run build     # must pass
pnpm run lint      # App.jsx must be clean; vite.config.js has a known pre-existing error
```

## Known issues, not yet fixed

- ~46 shadcn/ui components installed, 3 used; `react-day-picker` is imported by
  `calendar.jsx` but missing from `package.json` — the build survives only because
  nothing imports that component
- `pnpm install --frozen-lockfile` fails; the lockfile is out of sync
- No lazy loading on ~40 gallery images (9 MB)
- Calendar days are `<div onClick>` — not keyboard accessible
- No mobile navigation menu below 768px
- `vite.config.js` lint error: `'__dirname' is not defined`
