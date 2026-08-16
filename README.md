# Redwood Horizon website redesign

> **v2 staging-refinement build:** This package includes the custom SVG icon system, redesigned Services audience section, Services closing CTA, and improved Get Support/provider-referral pathways. See `CHANGELOG-V2.md`.


A dependency-free static website based on the approved visual direction: warm cream surfaces, deep redwood green, restrained nature motifs, large editorial typography, simplified navigation, stronger service hierarchy, and a warmer Get Support flow.

## Included
- Homepage
- About
- Services
- Get Support
- For Partners
- Common Questions / accessible accordion
- Contact
- Careers
- Privacy placeholder
- Accessibility page
- 404 page
- Responsive navigation
- Shared header/footer injected by `assets/js/site.js`
- Locally generated SVG brand mark and forest hero; no stock image licensing needed
- Basic SEO metadata, `robots.txt`, and `sitemap.xml`
- Reduced-motion support and keyboard-accessible interactive controls

## Before publishing
1. Open `assets/js/config.js`.
2. Add the **existing public email address** currently used by Redwood Horizon.
3. Add the endpoint used by the existing site contact form (or your replacement form service).
4. Replace `privacy.html` with the organization's reviewed privacy policy.
5. Confirm all service and eligibility language is current.
6. Test the form end-to-end.

Example configuration:
```js
window.REDWOOD_HORIZON_CONFIG = {
  contactEmail: "your-current-address@redwoodhorizon.org",
  mediaEmail: "your-media-address@redwoodhorizon.org",
  formEndpoint: "https://your-form-processor.example/endpoint"
};
```

The public site's email is protected by Cloudflare email obfuscation, so this package deliberately does not guess it.

## Local preview
Any static server works. For example:
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## Deployment
This can be deployed unchanged to Cloudflare Pages, Netlify, GitHub Pages, Google Cloud Storage static hosting, Amazon S3/CloudFront, or a conventional web server.

For clean URLs such as `/services` instead of `/services.html`, configure redirects/rewrites at the host. The HTML files intentionally work without those rules.

## Form/security note
The front-end does not claim HIPAA compliance. If the Get Support form will collect protected health information, assess the complete hosting/form-processing/storage workflow and any necessary BAA before using it for PHI.
