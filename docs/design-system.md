# Ganitra Design System

## Purpose

This document defines the visual and interaction system for the Ganitra website.

Ganitra should feel intelligent, visual, modern, trustworthy, optimistic, structured, and friendly. The design should present mathematics as something beautiful and understandable, without becoming childish, generic, or overly academic.

## Design Principles

- Mathematics is the visual identity.
- The first impression should feel like a serious education platform, not a small book shop.
- Mobile readability and trust come before decorative complexity.
- Visual interest should come from geometric structure, diagrams, grids, symmetry, and mathematical patterns.
- Components should be reusable across books, sample chapters, future products, teacher resources, and school partnership pages.
- Use color strategically to organize mathematical domains, not as decoration.

## Visual References

Appropriate inspiration:

- Premium educational technology products.
- Modern startup sites with strong editorial clarity.
- Science museum exhibits.
- Visual learning experiences.
- Mathematical diagrams and structured notebooks.

Avoid:

- Preschool aesthetic.
- Cartoon mascots.
- Clip art.
- Generic stock photos.
- Tuition center visuals.
- Corporate consulting tone.
- Dark, intimidating academic design.

## Color Tokens

Use these color values unless the brand guide is formally updated.

### Core Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `primary` | `#1E3A8A` | Deep indigo — hero, headings, primary actions, footer. |
| `primary-dark` | `#0F0D2E` | Darker indigo for hover states and deep backgrounds. |
| `background` | `#FCFCFA` | Warm off-white page background. |
| `surface` | `#F5F7FB` | Alternate section background, cards. |
| `surface-raised` | `#FFFFFF` | Elevated cards and content blocks. |
| `text` | `#0F172A` | Primary text color. |
| `text-secondary` | `#475569` | Secondary text. |
| `text-muted` | `#64748B` | Helper text, metadata. |
| `border` | `#E2E8F0` | Borders and soft surfaces. |

### Mathematical Domain Accents

| Domain | Token | Hex | Usage |
| --- | --- | --- | --- |
| Discovery | `discovery` | `#06B6D4` | Cyan — visual learning, See method, CTAs. |
| Insight | `insight` | `#7C3AED` | Violet — understanding, conceptual clarity. |
| Application | `application` | `#F59E0B` | Amber — problem solving, Apply method. |
| Curiosity | `curiosity` | `#F97316` | Orange — attention, warnings, highlights. |
| Success | `success` | `#10B981` | Emerald — positive states, confirmations. |

### Semantic Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `success` | `#10B981` | Successful form submission. |
| `warning` | `#F59E0B` | Coming-soon and caution states. |
| `error` | `#B42318` | Form errors. |
| `focus` | `#1E3A8A` | Focus ring. |

### Color Rules

- Primary backgrounds should be `background`, `surface`, `surface-raised`, `primary`, or `primary-dark`.
- Use accent colors for mathematical domains, small highlights, icons, badges, and diagrams.
- Do not create new random colors.
- Do not make the site dominated by a single purple or blue gradient.
- Text on dark backgrounds must be white or very light.
- Text on light backgrounds should usually be `text` or `text-secondary`.
- Accent colors must not be used for long body text.
- Maintain approximately 80% neutral surfaces and 20% accent usage.

## Typography

Primary font:

- Inter.

Fallback stack:

- Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif.

### Type Scale

| Token | Mobile | Desktop | Line Height | Usage |
| --- | --- | --- | --- | --- |
| `display` | 44px | 72px | 1.02 | Homepage hero only. |
| `h1` | 38px | 56px | 1.08 | Page titles. |
| `h2` | 30px | 42px | 1.14 | Major sections. |
| `h3` | 24px | 30px | 1.22 | Cards and subsections. |
| `h4` | 20px | 24px | 1.3 | Small headings. |
| `body-lg` | 18px | 20px | 1.65 | Hero and intro copy. |
| `body` | 16px | 16px | 1.65 | Main content. |
| `body-sm` | 14px | 14px | 1.55 | Metadata and helper text. |
| `caption` | 12px | 12px | 1.45 | Labels and small badges. |

### Typography Rules

- Do not scale font size directly with viewport width.
- Letter spacing should be `0` for normal text.
- Use font weight 700 or 800 for hero and page titles.
- Use font weight 600 or 700 for section headings and card titles.
- Use font weight 400 or 500 for body text.
- Keep paragraph measure between 55 and 75 characters where practical.
- Use sentence case for most headings and CTAs.

## Layout

### Breakpoints

Required verification widths:

- 375px, small mobile.
- 768px, tablet.
- 1024px, laptop.
- 1440px, desktop.

Suggested Tailwind breakpoint alignment:

- `sm`: 640px.
- `md`: 768px.
- `lg`: 1024px.
- `xl`: 1280px.
- `2xl`: 1536px.

### Containers

| Token | Max Width | Usage |
| --- | --- | --- |
| `container-narrow` | 760px | Text-heavy content. |
| `container-content` | 1120px | Standard page sections. |
| `container-wide` | 1280px | Hero and complex grids. |

Page padding:

- Mobile: 20px.
- Tablet: 32px.
- Desktop: 48px.

Section spacing:

- Mobile vertical spacing: 64px.
- Desktop vertical spacing: 96px.
- Use tighter spacing only inside cards or compact repeated lists.

### Grid Rules

- Mobile: single column by default.
- Tablet: two columns where content naturally pairs.
- Desktop: two or three columns for cards and collections.
- Never let text stretch full width on large screens.
- Large display layouts should keep max-width containers and balanced whitespace.

## Spacing Tokens

Use a consistent spacing scale:

| Token | Value |
| --- | --- |
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |
| `space-24` | 96px |

## Radius and Borders

| Token | Value | Usage |
| --- | --- | --- |
| `radius-sm` | 6px | Inputs and small controls. |
| `radius-md` | 8px | Cards and buttons. |
| `radius-lg` | 12px | Large preview surfaces only. |
| `radius-full` | 999px | Pills and circular icons only. |

Rules:

- Cards should use 8px radius unless a preview surface needs 12px.
- Do not use overly rounded cards for the main visual language.
- Use 1px borders with `border` for light surfaces.

## Shadows

Use shadows sparingly.

| Token | Value | Usage |
| --- | --- | --- |
| `shadow-soft` | `0 12px 30px rgba(23, 19, 63, 0.08)` | Elevated cards. |
| `shadow-medium` | `0 20px 50px rgba(23, 19, 63, 0.14)` | Modals or fullscreen previews. |

Avoid heavy drop shadows and floating-card page sections.

## Iconography

Preferred icon style:

- Clean line icons.
- Consistent stroke width.
- Geometric and educational where possible.

Rules:

- Use icons for navigation actions, form support, cards, and feature concepts.
- Icons should support meaning, not decorate randomly.
- Provide accessible labels for icon-only buttons.
- Use mathematical visual symbols sparingly and legibly.

Suggested method icons:

- See: eye, grid, or diagram icon.
- Understand: nodes, layers, or lightbulb icon.
- Apply: check, target, or puzzle/strategy icon.

## Mathematical Visual Language

### Background Patterns

Use low-opacity (3–5%) mathematical patterns as global backgrounds:

- **Coordinate Grid**: Light blue strokes with axes and tick marks.
- **Dot Matrix**: Violet dots in regular grid pattern.
- **Geometry Lines**: Faint construction lines and geometric meshes.

Rules:

- Must be subtle (never competes with text).
- Must scale responsively.
- Must repeat consistently across all pages.
- Opacity should never exceed 5%.

### Mathematical Elements

Use these SVG elements throughout the experience:

- Circles and arcs (intersecting circles, concentric circles)
- Coordinate grids
- Geometric shapes (triangles, hexagons, polygons)
- Number patterns and spirals
- Dot matrices
- Geometric meshes and tessellations
- Construction lines and compass marks

Rules:

- Appear in ALL major sections.
- Opacity 3–20%.
- Always decorative, never dominant.
- Must feel like geometry notebook sketches.
- No human illustrations or stock graphics.

### Educational Callout System

Five reusable callout styles for chapter content:

| Callout | Border Color | Background | Icon |
| --- | --- | --- | --- |
| Key Idea | `primary` (indigo) | `#EFF6FF` (blue tint) | Lightbulb |
| Did You Notice? | `discovery` (cyan) | `#ECFEFF` (cyan tint) | Eye |
| Example | `application` (amber) | `#FFFBEB` (amber tint) | Pencil |
| Insight | `insight` (violet) | `#F5F3FF` (violet tint) | Spark |
| Common Mistake | `curiosity` (orange) | `#FFF7ED` (orange tint) | Warning |

Rules:

- Must be reusable components.
- Must be consistent system-wide.
- Left border 4px.
- Rounded corners.
- Clear title and body text hierarchy.

## Visual Assets

Use:

- Geometric patterns.
- Mathematical structures.
- Symmetry.
- Tessellations.
- Number grids.
- Coordinate-like visuals.
- Elegant diagrams.
- Book covers or sample pages when available.

Avoid:

- Generic stock photos.
- Cartoon mascots.
- Clip art.
- Overly abstract gradients with no math meaning.

Hero visual:

- Must clearly signal mathematics in the first viewport.
- Should include mathematical structure such as shapes, grids, numbers, patterns, or diagrams.
- Should not be a decorative gradient alone.
- Two-column layout: 60% text, 40% mathematical SVG visualization.
- SVG must include: coordinate grid, intersecting circles, triangle construction, dot nodes.

Placeholder assets:

- Must be easy to replace.
- Must be named clearly.
- Must not be presented as final textbook content unless approved.

## Component Specifications

### Header

Requirements:

- Uses centralized company name or logo data.
- Includes primary navigation.
- Includes `View Sample Chapters` as the primary CTA on desktop.
- Includes `Request a Book` as the secondary CTA where space allows.
- Collapses to mobile menu.
- Stays readable on light backgrounds.
- Keyboard accessible.

States:

- Default.
- Hover.
- Focus.
- Mobile menu open.
- Current page active.

### Footer

Requirements:

- Dark navy background (`primary-dark`).
- Faint geometric line pattern overlay.
- Includes brand summary.
- Includes grouped links.
- Includes contact link.
- Includes future product labels or links.
- Uses centralized company name and contact data.
- Must feel like "mathematical night sky / blueprint".

### Button

Variants:

- Primary: `discovery` (cyan) background with `primary-dark` text.
- Secondary: white or transparent background with dark text and border.
- Accent: domain accent background only for contextual actions.
- Text: inline navigation-style action.

States:

- Default.
- Hover.
- Focus.
- Active.
- Disabled.
- Loading.

Rules:

- Buttons must have at least 44px touch height on mobile.
- Use clear action labels.
- Do not use payment wording in Phase 1.
- Hover: `scale(1.02)` with 200ms transition.

### Hero Section

Requirements:

- Strong H1 with `leading-[1.1]`.
- Short supporting copy.
- One primary CTA and one secondary CTA.
- Mathematical visual signal on right side (desktop only).
- Overline label above H1.
- Hint of next section visible where practical.

Homepage hero:

- H1 must be `Mathematics becomes easy when you can see it.`
- Background: `primary` (deep indigo) with subtle dot grid pattern.
- Right side: SVG composition with coordinate grid, intersecting circles, triangle construction.

### Section Header

Requirements:

- Optional eyebrow label.
- Section heading.
- Supporting paragraph.
- Max width for text readability.

### Book Collection Card

Required content:

- Title.
- Grade range.
- Focus topics.
- Short description.
- Accent visual (colored top bar).
- Chapter count badge.
- `View Sample` CTA.
- `Request Book` CTA.

States:

- Default.
- Hover (lift + shadow increase).
- Focus within.

Rules:

- Cards must be equal-height within a row on desktop where practical.
- Cards must stack cleanly on mobile.
- Each book has unique mathematical background pattern:
  - Foundations: cyan dot matrix.
  - Core Math: blue coordinate grid.
  - Advanced: violet geometric mesh.
- Hover: `translateY(-4px)` with shadow increase.

### Method Card (Ganitra Method)

Required content:

- Icon (geometric SVG).
- Title (See / Understand / Apply).
- Description.
- Colored accent underline.

Visual design:

- SEE: cyan gradient background + dot grid + eye icon.
- UNDERSTAND: violet gradient background + network lines + node graph icon.
- APPLY: amber gradient background + construction marks + compass icon.

Rules:

- Each card must feel visually unique.
- Must not be uniform UI components.
- Must feel like 3 stages of cognition.
- Hover: `translateY(-4px)` with shadow increase.

### Sample Preview

Requirements:

- Learning header block before PDF:
  - Book title.
  - Chapter title.
  - Concept description.
  - Concept chips (colored pills).
- Shows sample page, PDF, or placeholder preview.
- Provides navigation between preview pages if multiple pages exist.
- Provides request-book CTA.
- Labels placeholder content clearly.

Preferred controls:

- Previous.
- Next.
- Zoom.
- Fullscreen.

Phase 1 priority:

- Stable, accessible mobile preview is more important than advanced controls.

### Blog Card

Required content:

- Category indicator (colored bar).
- Title.
- Excerpt.
- Date.
- Reading time (if available).
- Top border color accent.

Color cycle:

- cyan → violet → amber → repeat.

Rules:

- No generic blog cards.
- Hover: title color change to `discovery`, card lift.

### Future Product Card

Required content:

- Product title.
- Coming-soon label.
- Short explanation.
- Audience or benefit.
- Accent visual.

Rules:

- Must not imply that unavailable features are live.
- May link to `/future` anchors.

### Trust Card

Use trust cards. Do not include testimonials in V1.

Required content:

- Title.
- Short explanation.
- Optional icon or accent.

Rules:

- Do not display testimonial quotes, names, roles, reviews, or ratings in V1.

### Form

Requirements:

- Visible labels.
- Required-field indicators.
- Helpful helper text where needed.
- Field-level errors.
- Submit button loading state.
- Success and error summaries.

Form styling:

- Inputs use `radius-sm`.
- Borders use `border` or accessible equivalent.
- Focus ring uses `focus`.
- Error text uses `error`.

## Motion

Allowed:

- Fade-ins.
- Subtle scroll reveals.
- Hover lifts (`translateY(-4px)`).
- Smooth menu transitions.
- Preview navigation transitions.
- Button scale (`scale(1.02)`).

Avoid:

- Flashy animation.
- Constant motion.
- Motion that distracts from reading.
- Animation required to understand content.

Rules:

- Respect reduced-motion preferences.
- Keep transitions between 150ms and 300ms (standard: 200ms).
- Do not animate large text blocks in ways that harm readability.
- Use `transition-all` for smooth state changes.

## Microinteractions

Standard patterns:

- **Card Hover**: `translateY(-4px)` + shadow increase + 200ms ease.
- **Button Hover**: `scale(1.02)` + 200ms ease.
- **Link Hover**: Color shift to `discovery` + underline.
- **Focus**: Visible focus ring using `focus` color.

Rules:

- Keep transitions between 150ms and 300ms.
- Use standard easing (ease-out).
- Do not overload with motion.

## Accessibility

Required:

- WCAG-friendly contrast.
- Semantic HTML structure.
- Visible focus indicators.
- Keyboard navigation for menus, preview controls, and forms.
- Screen-reader-readable form errors and success states.
- Reduced-motion support.
- Descriptive alt text for meaningful visuals.
- Empty alt text for decorative visuals.

Minimum contrast:

- Body text: 4.5:1.
- Large text: 3:1.
- UI controls: 3:1 against adjacent colors.

## Responsive Behavior

Mobile:

- Single-column layout.
- Touch-friendly controls (minimum 44px touch height).
- Navigation collapses.
- Forms are thumb-friendly.
- Preview controls remain reachable.
- Hero SVG visualization hidden on mobile.

Tablet:

- Use two-column layouts where natural.
- Avoid excessive whitespace.

Desktop:

- Use richer layouts and multi-column grids.
- Keep text readable and constrained.
- Show hero SVG visualization (60% text / 40% visual).

Large displays:

- Do not stretch content.
- Use max-width containers.
- Maintain balanced spacing.

## SEO and Content Readability

Design must support SEO by:

- Keeping real text as text, not images.
- Supporting one clear H1 per page.
- Preserving semantic section hierarchy.
- Making content scannable with headings and lists.
- Avoiding hidden essential content behind interactions only.

## Tailwind Mapping Guidance

Implementation should map design tokens into Tailwind theme values where practical:

- Colors from this document (defined in `app/globals.css` @theme).
- Font family: Inter.
- Spacing scale from this document or Tailwind defaults aligned to it.
- Border radius tokens.
- Box shadow tokens.
- Container max widths.

Do not bypass the design system with one-off color or spacing values unless the docs are updated.

## Quality Checklist

Before marking UI complete:

- The page works at 375px, 768px, 1024px, and 1440px.
- Text does not overflow buttons, cards, or forms.
- The page does not rely on stock-photo-heavy visuals.
- Accent colors are tied to meaning.
- Focus states are visible.
- Forms have labels and error states.
- Future products are clearly marked coming soon.
- Placeholder content is labeled.
- The result feels like a mathematics understanding platform, not only a book storefront.
- Mathematical SVG graphics appear in major sections.
- Callout system is implemented and reusable.
- Microinteractions are consistent (200ms transitions).