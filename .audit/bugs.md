# Bug and Root-Cause Report

## BUG-001 — Search control had no behavior
- Severity: Medium
- Location: `app/page.tsx`, Home search
- Reproduction: type into the search field; news list did not change.
- Root cause: input was uncontrolled and not connected to derived results.
- Impact: visible feature appeared functional but produced no result.
- Fix: added controlled `query` state and filtered news with an empty-result state.
- Verification: build pass; browser verification should cover typing and no-results state.
- Rollback: remove `query`, `setQuery`, and `filteredNews` usage.

## BUG-002 — Menu button was dead
- Severity: Medium
- Location: `app/page.tsx`, Home header
- Reproduction: click the menu button; no UI changed.
- Root cause: no click handler or menu state.
- Impact: primary navigation affordance was misleading.
- Fix: added `menuOpen`, `aria-expanded`, and a small quick menu.
- Verification: build pass; browser click verification.
- Rollback: remove menu state and quick-menu block.

## BUG-003 — Category and hero actions were dead
- Severity: Low
- Location: `app/page.tsx`, category grid and hero card
- Reproduction: click category or “عرض الأسعار”; active state did not update.
- Root cause: buttons had no handlers.
- Impact: reduced discoverability and interaction fidelity.
- Fix: active category state and hero action now select the prices tab and query.
- Verification: build pass; browser click verification.
- Rollback: remove handlers and selected class.

## BUG-004 — Authentication accepted empty form
- Severity: High for production, Medium for prototype
- Location: Login and Signup submit handlers
- Reproduction: submit empty forms.
- Root cause: submit handlers navigated without validation.
- Fix: added required-field and password-match checks with Arabic alert messages.
- Caveat: this is client-side validation only; real authentication/backend remains unimplemented.
