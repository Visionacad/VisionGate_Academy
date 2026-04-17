```markdown
# Design System Document: Academic Luxury & Serious Minimalism

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Dean’s Office"**

This design system is engineered to evoke the gravitas of a centuries-old institution filtered through a modern, high-performance lens. We are moving away from the "educational SaaS" aesthetic of rounded buttons and bright accents. Instead, we embrace **Academic Luxury**: a philosophy rooted in stability, precision, and exclusivity. 

To break the "template" look, we utilize **Intentional Asymmetry**. Hero sections should feature off-center typography balanced by heavy negative space. Elements should overlap—such as a gold-tinted image breaking the bounds of its container—to suggest a layered, editorial layout rather than a rigid digital grid. This is a space for serious scholars; the UI must feel like a leather-bound folio, not a plastic dashboard.

---

## 2. Colors & Surface Philosophy

The palette is anchored in high-contrast prestige. We use deep charcoals to represent authority and warm gold for achievement, set against cream marble backgrounds that provide "visual breath."

### Surface Hierarchy & Nesting
We reject the flat web. Depth is achieved through **Tonal Layering**:
- **Base Layer:** `surface` (#faf9f5) or `background` (#faf9f5) – The "Cream Marble" foundation.
- **Structural Sections:** `surface-container-low` (#f4f4f0) – Use this for distinct content blocks to create a soft separation from the base.
- **Active Cards/Focus Areas:** `surface-container-lowest` (#ffffff) – Pure white surfaces nested within darker containers to create a natural "pop" without shadows.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit 1px solid borders for sectioning. Traditional "boxes" are forbidden. Boundaries must be defined solely through background color shifts. A `surface-container-high` section should sit flush against a `surface` background, creating a clean, architectural break.

### Signature Textures & Glassmorphism
- **The Metallic Glimmer:** Use linear gradients for primary CTAs, transitioning from `primary` (#735b24) to `primary-container` (#c8a96a) at a 135-degree angle to mimic the 3D gold finish of the institutional logo.
- **Glassmorphism:** For floating navigation or modal overlays, use `surface` at 80% opacity with a `24px` backdrop-blur. This ensures the "Cream Marble" texture bleeds through, maintaining the material integrity of the brand.

---

## 3. Typography: The Editorial Voice

Our typography is a dialogue between the timeless (Serif) and the technical (Sans-Serif).

*   **Display & Headlines (Noto Serif / Playfair):** Used for "The Hook." High-contrast, elegant, and authoritative. Headlines should use `tight` letter-spacing and `relaxed` line heights to feel like a premium journal.
*   **Body & Titles (Inter):** Used for "The Intel." These must be sharp and professional. Use `body-md` for standard reading to ensure the exam-heavy content remains legible during long study sessions.
*   **The Hierarchy Goal:** By pairing a large `display-lg` headline with a significantly smaller `title-sm` subtitle, we create a "Scale Shock" that feels intentional and high-end.

---

## 4. Elevation & Depth

### The Layering Principle
Forget Z-index shadows by default. Use the **Surface Scale** to stack importance. 
1. `surface` (Base)
2. `surface-container-low` (Sub-section)
3. `surface-container-lowest` (Interactive Element)

### Ambient Shadows
When an element must float (e.g., a prestigious "Enroll Now" card), use **Ambient Shadows**:
- **Color:** A tinted version of `on-surface` at 5% opacity.
- **Blur:** `40px` to `60px`. 
- **Offset:** `Y: 10px`. 
The goal is a soft, natural glow that suggests the card is hovering millimeters above parchment.

### The "Ghost Border" Fallback
If a border is required for accessibility, use a **Ghost Border**: `outline-variant` (#d0c5b5) at **15% opacity**. It should be barely perceptible, serving as a suggestion of a boundary rather than a hard constraint.

---

## 5. Components

### Radius Scale: The "Sharp Corner" Mandate
To maintain "Serious Minimalism," the roundedness scale is set to **0px (none)**. Sharp corners denote precision, discipline, and architectural permanence. No rounded buttons. No rounded cards.

### Buttons
- **Primary:** `primary` background, `on-primary` text. No border. Sharp 90-degree corners. On hover, transition to the "Gold Metallic" gradient.
- **Secondary:** `outline` ghost button. Use the "Ghost Border" rule (15% opacity). On hover, fill with `surface-container-highest`.
- **Tertiary/Text:** `on-surface` text with a `primary` (Gold) 1px underline that sits 4px below the baseline.

### Input Fields
Input fields should not be boxes. Use a single bottom border (`outline-variant`) at 40% opacity. When focused, the border transitions to `primary` (Gold) and the label (using `label-md`) shifts upwards in `primary` color.

### Cards & Lists
- **Rule:** Forbid divider lines between list items. Use `24px` of vertical white space or a subtle shift to `surface-container-low` on hover.
- **Academy Cards:** Use the 3D metallic logo as a subtle watermark in the corner of course cards to reinforce the institutional stamp of quality.

### Academy-Specific Components
- **The "Curriculum Timeline":** A vertical `primary` gold line (0.5px) connecting nodes. Use `surface-container-highest` for the active node to show progress without using "gamified" bright colors.
- **The Honor Roll Chip:** A `primary-container` background with `on-primary-container` text, used to highlight top scorers.

---

## 6. Do's and Don'ts

### Do:
- **Embrace White Space:** Treat white space as a luxury material. If a section feels crowded, double the padding.
- **Use "Gold" Sparingly:** Gold is for achievement. Use it for CTAs, accents, and the logo. Do not use it for body text or large background blocks.
- **Align to a Baseline Grid:** Precision is key to the "Academic" feel. Ensure all typography sits on a consistent vertical rhythm.

### Don’t:
- **No Rounded Corners:** Never use `border-radius`. It softens the "Serious" tone we are projecting.
- **No Heavy Shadows:** Avoid "Material Design" style drop shadows. Stick to Tonal Layering.
- **No Pure Black:** Always use `Deep Charcoal` (#0F172A) instead of #000000 to maintain the "Midnight Sky" sophisticated depth.
- **No Standard Icons:** Avoid generic, thick-stroke icons. Use ultra-thin (1pt) line icons in `primary` or `on-surface-variant`.```