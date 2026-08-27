# Photo Specifications — Redwood Horizon website

The v3 redesign uses **4 photographic placeholder spots** (Homepage hero, Homepage "Who We're For",
Services story break, About) plus **one Get Support photo** = 5 images total. All current files are
**stock/models — not clients, staff, or participants.** Replace with authentic Redwood Horizon
photography over time, and keep a film/sourcing record (see Licensing).

**Most important rule — leave room to crop.** Every photo renders with `object-fit: cover`, so it
is cropped to fill its frame. If the important faces or hands sit right against the edge, they'll
be cut off at some breakpoint. A good permanent image must survive: desktop wide crop, tablet crop,
mobile almost-square crop, and slight zoom changes.

---

## 🎨 Photography style (apply to ALL images)

Natural, documentary, warm, community-based:
- Natural daylight, real environments, genuine interaction
- People moving, talking, walking, helping, or doing ordinary things
- Slightly candid framing; muted/natural colors; Northern California atmosphere
- **Human dignity** — never "service recipient" imagery

**Avoid:** obvious stock smiles, everyone staring at camera, staged handshakes, "social worker with
clipboard" scenes, visibly distressed people used as symbols of homelessness/mental illness,
hospital imagery (unless relevant), corporate conference rooms, advertising-style shallow focus.

**Better (search for connection, not crisis):**
- ✅ Two people talking while walking through a neighborhood — not a distressed person on a curb
- ✅ Support worker and participant reviewing paperwork together at a table — not a case manager pointing at a clipboard
- ✅ An ordinary person in a community setting

## 🎨 Color compatibility
Site palette is **deep green, cream, sage, muted gold.** Prefer images with greens, earth tones,
warm neutrals, denim, wood, natural skin tones, soft daylight. Avoid neon, bright red walls,
saturated blue lighting — they fight the design.

## 👥 Representation
Across the whole library, aim for a natural mix (not checklist-driven): ages, ethnic/racial
backgrounds, gender presentations, individuals/couples/families, visible and non-visible
disabilities where appropriate, urban + small-town + rural/community settings.

---

## Measured image specs

These dimensions are the **source files** you should aim for. Because of `object-fit: cover`,
a source that is larger and correctly composed will crop gracefully at every breakpoint.

### 1. Homepage hero — `hero-people.webp`
- **Layout:** right-hand column, **no text over the photo.** Photo box renders portrait-ish (~0.77:1) inside a tall right column.
- **Subject:** people together (per CHANGELOG, human-centered). Faces/crops must survive a **narrow center-to-right crop** (the photo column is fairly slim). The **far-left ~100px is softened by a cream "photo-wash"** — don't put critical content on that left edge.
- **Recommended source:** large landscape **≈2400×1600+ (3:2) or 3000×2000**, subject weighted **center-to-right**, quiet/soft far-left edge. wider-than-needed is fine since it crops.
- Alt-text idea: *"A group of adults walking together through a green park."*

### 2. Homepage "Who We're For" — `who-for.webp`
- **Layout:** content + photo split; renders **portrait-ish (≈0.85:1)** at desktop.
- **Recommended source:** portrait/4:5 **≥1600×2000**, people in 1–3 warm natural interaction, room around subjects.
- Alt-text idea: *"Three adults sharing a warm conversation together."*

### 3. Services story break — `services-support.webp`
- **Layout:** full-width story-break image, renders ≈**4:3 (1.34:1)**.
- **Recommended source:** wide landscape **≥2200×1400** (4:3/3:2), community activity or support interaction; works well with cropping.
- Alt-text idea: *"Three adults discussing paperwork together at a table."*

### 4. Get Support — `get-support.webp`
- **Layout:** tall rounded card beside the intro; **renders near-square (≈1.09:1)** at desktop.
- **Recommended source:** landscape or 4:3 **≥1600×1500** (a landscape source is fine; it crops to the card). Subject can sit right or slightly off-center; calm, warm, approachable.
- Alt-text idea: *"Two adults talking together at a table."*

### 5. About — `about-connection.webp`
- **Layout:** split "photo story," renders **≈7:5 (1.4)**.
- **Recommended source:** mixed — **≥1610 px on the long edge**, community/staff/partner interaction, local environment.
- Alt-text idea: *"Two women sharing a warm conversation outdoors."*

> Note: **For Partners has no photo** in v3 — no image is needed there.

---

## Resolution & delivery
- **Master/source files:** high-resolution **JPG** is fine; TIFF if from a photographer; **RAW** ideal if you own it. Aim ≥1800 px on the long edge; the hero benefits from **2400–3000 px** wide.
- **Web export:** **AVIF** first choice, **WebP** fallback, JPG only where needed.
- **File-size targets (web):** hero ~150–350 KB after optimization; others lower. A placeholder over ~500 KB should be compressed.
- The originals should be **large and clean** — we optimize at delivery time.

### Converting (suggested)
```bash
# AVIF (preferred) or WebP, same filename so no HTML edits needed
cwebp -q 82 source.jpg -o assets/img/hero-people.webp
```
Keep exact filenames: `hero-people.webp`, `who-for.webp`, `services-support.webp`, `get-support.webp`, `about-connection.webp`.

---

## Licensing & record
Be stricter with permanent imagery than the prototype. Use only:
- Photos Redwood Horizon commissions, or
- Photos Redwood Horizon owns, or
- Licensed stock with clear commercial/web rights
- Reputable free libraries with explicit usage terms

Keep a simple internal record per image: **filename / source / photographer / license / download date / where used.** If real clients or program participants appear, keep documented **photo/media releases.**

> Each photo should not carry essential info by itself — the page must still make sense without it. Provide useful alt text (description) as shown above; decorative photos get empty `alt=""`.