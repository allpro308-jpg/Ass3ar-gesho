# System Map

## Runtime
- Next.js 16 App Router, React 19, TypeScript, pnpm.
- Single client entry: `app/page.tsx`.
- Global RTL presentation: `app/layout.tsx` and `app/globals.css`.

## User flow
`/` → splash → login/signup → home → section state → post detail route → back/section.

## Dependency graph
- `app/layout.tsx` → `app/globals.css`
- `app/page.tsx` → `lucide-react`, remote image assets, React state
- `ContentHome` → `posts`, `categories`, `PostDetails`
- `Page` → browser History API and `PostDetails`

## Risks
1. Data/auth are not connected to a backend.
2. Content is static and client-rendered.
3. Remote image availability is an external dependency.
4. No automated test suite exists.

## Safe rollback
Revert only the latest changed file set (`app/page.tsx`, `app/globals.css`, audit artifacts); do not reset unrelated user work.
