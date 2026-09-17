<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Base44 Dev Environment

- **Stack**: Next.js 16.3.3 (Turbopack) + React 19 + Tailwind CSS 4, pnpm 12.3.4. Frontend-only — no backend, no database, no external services.
- **Run**: `docker compose -f docker-compose.base44.yml up -d` — uses `node:22-slim`, bind-mounts source, installs deps via corepack/pnpm, runs `next dev` on port 3000.
- **Preview origin**: `next.config.mjs` sets `allowedDevOrigins` from `BASE44_PUBLIC_HOST_SUFFIX` so the preview proxy can access dev assets/HMR.
- **Verify**: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000` → 200. The page is an Arabic RTL mobile-app prototype with a splash/loading screen.
