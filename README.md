# Kevin Hawkins Portfolio — GitHub Pages

## Files in this zip

```
index.html
about.html
case-monta.html
case-glovo.html
case-amenitiz.html
case-booking.html
case-bookclub.html
assets/
  css/
    main.css            ← Base portfolio styles
    gradient-system.css ← Gradient & animation enhancement layer
  js/
    animations.js       ← Micro-animation engine (scroll reveal, counters, cursor glow, etc.)
  img/                  ← Your existing images (not included — already in your repo)
```

## How to deploy

1. **Unzip** this archive
2. **Copy all files** into your GitHub repo root (alongside your existing `assets/img/` folder)
3. **Commit and push** — GitHub Pages rebuilds in ~60 seconds

```bash
git add .
git commit -m "Add gradient system and micro-animations"
git push
```

## What the gradient system adds

Every page automatically gets:
- Floating ambient gradient orbs (background atmosphere)
- Frosted glass nav with gradient underline on hover links
- Animated gradient text on `<em>` in headlines
- Scroll progress bar (3px gradient stripe at top)
- Cursor glow that follows mouse (desktop only)
- Scroll-triggered reveal animations on all sections
- 3D tilt + gradient spotlight on cards
- Magnetic hover on CTA buttons
- Animated stat counters (count up on scroll into view)
- Gradient numbers on outcome stats
- H2 underline that grows on scroll entry
- Speaking cards with gradient bottom line on hover
- Gradient scrollbar thumb
- Section ambient blobs per section
- Footer gradient glow divider line

## Image paths expected

The HTML files reference these paths — make sure they exist in your repo:

```
assets/img/photo-speaking-uxdx.jpeg   ← Hero photo (index.html)
assets/img/photo-team.jpeg            ← Leadership section
assets/img/photo-stage.jpeg           ← Leadership section
assets/img/photo-street.jpeg          ← Leadership section
assets/img/monta_hub_ai.png           ← Monta case study
assets/img/img_05.jpg                 ← Glovo case study
assets/img/amenitiz-calendar.jpg      ← Amenitiz case study
assets/img/amenitiz-inventory.jpg     ← Amenitiz case study
assets/img/img_15.jpg                 ← Booking case study
assets/img/img_18.jpg                 ← BookClub case study
```

All of these already exist in your current repo — no changes needed.

## Notes

- `gradient-system.css` is a drop-in layer — it never overrides layout, only adds visual enhancement
- All animations respect `prefers-reduced-motion` 
- Gradient orbs are disabled on mobile (performance)
- Cursor glow is desktop-only (skipped on touch devices)
