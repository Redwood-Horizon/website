# Photo Specifications — Redwood Horizon website

The v3 redesign uses **5 photographic placeholder images**. Replace each with an authentic
Redwood Horizon photo matching the specs below. Photos are rendered with `object-fit: cover`,
so images are **cropped to fill the frame** — match the recommended aspect ratio and subject
placement to avoid losing important content.

Formats: web/source recommendations and the exact dimensions currently required by the layout.
Files live in `assets/img/` as `.webp`.

---

## 1. Homepage hero — `hero-people.webp`
- **Where:** full-bleed hero, right column (desktop); full-width above headline (mobile)
- **Rendered (CSS) box:** min-height 670px, aspect ~ 1.5:1 landscape, **object-position 55% center**
- **Current placeholder:** 1800×1200 (3:2), ~549 KB
- **Subject:** people together (per CHANGELOG: human-centered). Faces/crops near **center-ish (55% from left)** survive; avoid critical content at far left edge (the cream "photo-wash" overlay cuts the left edge).
- **Recommended source spec:** landscape, **~1800×1200 (3:2) or wider**, focus subject centered, high-res.

## 2. Homepage "Who We're For" — `who-for.webp`
- **Display:** content + photo split; photo ~3:2, object-fit cover.
- **Current placeholder:** 1400×933 (3:2), ~119 KB
- **Recommended source spec:** landscape **≥1400×933 (3:2)**, warm human connection tone.

---

## 3. Services story break — `services-support.webp`
- **Display:** Services page story-break image, ~3:2, object-fit cover.
- **Current placeholder:** 1600×1067 (3:2), ~89 KB.
- **Recommended source spec:** landscape **≥1600×1067 (3:2)** or 4:3, supportive/interaction scene.

---

## 4. About — `about-connection.webp`
- **Display:** About "photo story" split, box height 500px, object-fit cover center.
- **Current placeholder:** 1400×933 (3:2), ~128 KB.
- **Recommended source spec:** landscape **≥1400×933 (3:2)**, warm conversational scene.

---

## 5. Get Support — `get-support.webp`
- **Display:** tall **portrait** hero photo beside the form (rounded card). **object-fit cover center.**
- **Current placeholder:** **1200×1800 (2:3 portrait)**, ~121 KB.
- **Recommended source spec:** **portrait ≥1200×1800 (2:3)**, one–two people, approachable/warm.

---

## General delivery notes
- **Format:** deliver photos as high-quality originals (JPG/PNG/TIFF) and export a **WebP**
  for the site (see below). WebP gives the best balance of quality vs. file size.
- **File size target:** keep the site-light — aim for ~100–500 KB per photo WebP; compress if a
  placeholder exceeds ~500 KB.
- **Aspect ratio click:** shoot/crop to the dimensions above **before** exporting so the
  object-fit crop behaves predictably.
- **Faces/faces:** if people appear in frame, make sure they are **Redwood Horizon-affiliated**
  (consented) or use org-approved imagery — the current placeholders are stock models and must not
  be presented as clients/staff.

### Converting to WebP (suggested)
```bash
# cwebp (or imageoptim/webp CLI). Example: portrait for Get Support
cwebp -q 82 source.jpg -o assets/img/get-support.webp
```
Keep the exact same filenames so no HTML edits are needed:
`hero-people.webp`, `who-for.webp`, `services-support.webp`, `about-connection.webp`, `get-support.webp`.