# Gridiron League App (MVP)

This is the MVP Next.js + Tailwind project for **50 Shades of Gridiron** league (Sleeper League ID: `1268851297860202496`).

## What this contains
- Basic Next.js project scaffold with Tailwind-ready config.
- Pages: Dashboard (index), Roster, Available, Opponent, Power Rankings, Playoff Picture.
- A small `lib/sleeper.js` client to call the Sleeper API (no API keys required).
- Supabase auth wiring placeholder (magic link) — you must create a Supabase project and add env vars in Vercel.
- Live data only (no demo data).

## Getting started (local)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local` with the variables below (or use Vercel environment variables):
   ```env
   NEXT_PUBLIC_LEAGUE_ID=1268851297860202496
   NEXT_PUBLIC_LEAGUE_NAME="50 Shades of Gridiron"
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```

## Deploying on Vercel
1. Push this repo to GitHub.
2. Import to Vercel (New Project → Import GitHub Repo).
3. Add environment variables in Vercel dashboard (same keys as `.env.local`).
4. Deploy — the app will pull live data from Sleeper automatically.

## Notes
- This is an MVP scaffold. To enable auth & admin features, set up Supabase and add keys.
- The Sleeper integration is read-only and uses public endpoints.

If you want, I can help deploy this to Vercel or extend features (optimizer, playoff sim, etc.).