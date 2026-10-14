# Bellevue Live! Pass

Interactive named concept demonstration for a proposed Bellevue arena district and proposed Tulalip entertainment destination. React + TypeScript + Vite; responsive, installable, browser-local state. All events, bookings, availability and AI responses are simulated. No actual transactions or messages are sent.

## GitHub Pages

See [the GitHub Pages setup guide](GITHUB-PAGES.md) for the `printrune` account. The included workflow automatically builds for your configured repository path.

## Run

Node 24 and pnpm 11.25.0:

```sh
pnpm install
pnpm dev
pnpm test
pnpm build
pnpm preview
```

`dist/` is a static deployable build. The final build script pre-caches the app shell and local imagery for saved-plan offline access. Use localhost or HTTPS. No secret API keys are required. The test command uses Node's TypeScript stripping.

## Explore

The default Premium Entertainment theme follows the supplied navy, gold, blue-light imagery. App simulator in the top strip opens the interactive phone preview. The three design concepts remain available in the footer. Query parameters: `?concept=a` (premium), `b` (connected), `c` (personal), and `&screen=home|menu|event|plans|rewards|vip|live|navigate`.

Try 3 basketball tickets to unlock a complimentary sample water-park admission. Cancel the paid booking to see reward review. In AI planning, choose October 23, 2026 and four people to compare a complete weekend with two rooms, dinner, admission, water park, rail and a separate return coach. Review is always required. Sample participant switching and voting are in My Plans. Reset demonstration is in the account menu.

## Architecture

- `src/App.tsx`: shared responsive screens and local interaction state.
- `src/domain.ts`: typed offers, prices, booking inventory, promotions, rewards and itinerary checks.
- `src/providers.ts`: boundaries for events, availability, booking, payments, promotions, rewards, transit, AI and media.
- `src/styles.css` and `src/cinematic.css`: three visual directions and the cinematic premium refresh.
- `public/assets`: selected concept images and purpose-built illustrations. Confidential planning PDFs are excluded.
- `public/deliverables`: report, visual comparison and commercial workbook.
- `docs`: research evidence and validation results.
- `tests`: deterministic business-logic tests.

State is stored under `blp-v1` in localStorage. It contains sample names, votes, preferences, alerts and itineraries. Privacy controls export data; Reset demonstration clears it. The one-time `blp-visual-v2` preference migrates the earlier preview to the requested premium theme without clearing bookings.

## Validation and limits

Domain tests cover pricing, premium requests, paid and reward inventory, cancellations, attendance, offer expiry, nonstacking, family discounts, package math and timing conflicts. Browser checks cover ticket purchase, reward redemption, group voting, AI proposal, coordinated purchase, and disruption/alert controls. Screens are captured at mobile, tablet and desktop dimensions. See `docs/browser-checks.json` for actual results and limits.

The demo clock for rewards is October 13, 2026; expiry can be injected in domain tests. No live timetable, availability monitor, LLM, push notifications, real seat chart, payment processor, licensed replay, or multi-user backend is active. Video controls demonstrate UI using a still image. WCAG 2.2 AA-informed implementation is not a compliance certification. Tests with screen readers, disabled visitors, real devices, and supplier integrations remain pilot gates.

## Operational pilot

1. Confirm partner participation, Tulalip governance, cultural publishing authority, consent and data rights; agree inventory, refund and revenue arrangements.
2. Add authenticated server-side accounts, provider inventory holds, idempotent checkout, payment authorization, supplier ledgers and reconciliation.
3. Connect verified transit feeds and accessible routing; preserve a separate onward Tulalip connection; contract any funded fare bundle.
4. Connect AI through the provider interface with tools for authoritative availability and quotations. Require purchase confirmation, log outcomes and evaluate failures.
5. Pilot limited inventory with support, accessibility review, monitoring, privacy retention/deletion and incident handling before expanding.

Selected renderings may contain existing brands and cultural motifs. They are supplied concept material and imply no endorsement, permissions, license, league affiliation or actual venue. Production imagery and media require the relevant rights and cultural approvals.
