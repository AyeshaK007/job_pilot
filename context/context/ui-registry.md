# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Components

- `Homepage` — `app/page.tsx`
  - Layout: `bg-background`, `bg-surface`, `border-border`, `text-text-primary`, `text-text-secondary`
  - Hero CTA buttons: `bg-text-primary`, `text-surface`, `border-border`, `hover:border-text-primary`
  - Cards: `rounded-[24px]`, `rounded-[28px]`, `shadow-xl`, `shadow-sm`
  - Images: `object-cover`, `rounded-[20px]`, `w-full`, `h-auto`
  - Accent elements: `bg-accent-light`, `bg-info-light`

