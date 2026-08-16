# Redwood Horizon Redesign — v2 Changes

This pass incorporates the visual review of the staging deployment.

## Updated

- Replaced placeholder Unicode symbols with a consistent custom SVG line-icon system.
- Changed the homepage secondary hero action to **Explore Our Services**.
- Reduced the visual weight of the homepage “What We Do” heading so it does not compete with the positioning statement above it.
- Redesigned the Services **Who We Serve** section as a six-item visual needs grid.
- Added a strong closing CTA to Services: **Not sure which service fits?**
- Improved the Get Support contact pathway. If a public email is configured, the block becomes **Email us** and displays the address. If no email is configured, it correctly falls back to **Contact us / Use our contact form**.
- Elevated the provider/caseworker referral path into a dedicated callout with an anchor directly to the support form.
- Added responsive styling for all new components.

## Production configuration still required

Edit `assets/js/config.js` and supply:

- `contactEmail`
- `mediaEmail` (if used)
- `formEndpoint`

The privacy-policy placeholder should also be replaced with the organization's reviewed production policy before launch.
