# Engineering Memory

## Architectural decisions
- Keep the current prototype state-based until real backend/auth requirements are approved.
- Use explicit content routes through the History API for readable navigation and browser back support.

## Known constraints
- No database, API, or real authentication is currently connected.
- The app depends on remote blob image URLs.
- Preview can retain stale JavaScript chunks after rapid edits.

## Dangerous areas
- `app/page.tsx` combines screen orchestration, content data, and UI components.
- Changes to route state must be validated with direct deep-link and back navigation.

## Testing gaps
- No unit/E2E test suite.
- Browser validation is environment-dependent.

## Security
- No secrets are stored in source or this memory file.
