# Deployment checklist

## Required
- Set contact email, media email, and form endpoint in `assets/js/config.js`.
- Add/verify the production privacy policy.
- Test forms on desktop and mobile.
- Verify DNS/domain configuration.
- Force HTTPS.
- Verify 404 handling.

## Recommended production headers
Use equivalent host settings for:
- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- `Strict-Transport-Security` after HTTPS is stable

## SEO / sharing
Before launch, consider adding:
- Open Graph image (1200×630)
- Open Graph title/description
- Organization JSON-LD
- Google Search Console verification

## Accessibility QA
- Keyboard through every page.
- Test menu and FAQ accordion with a screen reader.
- Check 200% zoom.
- Run Lighthouse + axe/WAVE.
- Confirm color contrast after any brand-color edits.
