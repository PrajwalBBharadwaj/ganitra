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
| `indigo-950` | `#17133F` | Deep brand foundation, dark text on light backgrounds, dark sections. |
| `navy-900` | `#0B2341` | Secondary brand foundation, headers, footer, trust sections. |
| `off-white` | `#FAF8F2` | Warm page background. |
| `gray-50` | `#F7F8FA` | Alternate section background. |
| `gray-100` | `#ECEFF3` | Borders, soft surfaces. |
| `gray-500` | `#667085` | Secondary text. |
| `gray-800` | `#1F2937` | Body text when not using indigo. |
| `white` | `#FFFFFF` | Cards and high-contrast text on dark sections. |

### Mathematical Domain Accents

| Domain | Token | Hex | Usage |
| --- | --- | --- | --- |
| Numbers | `accent-blue` | `#2563EB` | Foundations, arithmetic, number sense. |
| Algebra | `accent-purple` | `#7C3AED` | Core Math, variables, structure. |
| Geometry | `accent-green` | `#16A34A` | Shapes, space, diagrams. |
| Patterns | `accent-orange` | `#F97316` | Sequences, patterns, visual rhythm. |
| Logic | `accent-teal` | `#0D9488` | Reasoning, proof, problem solving. |

### Semantic Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `success` | `#15803D` | Successful form submission. |
| `warning` | `#B45309` | Coming-soon and caution states. |
| `error` | `#B42318` | Form errors. |
| `focus` | `#2563EB` | Focus ring. |

### Color Rules

- Primary backgrounds should be `off-white`, `gray-50`, `white`, `indigo-950`, or `navy-900`.
- Use accent colors for mathematical domains, small highlights, icons, badges, and diagrams.
- Do not create new random colors.
- Do not make the site dominated by a single purple or blue gradient.
- Text on dark backgrounds must be white or very light.
- Text on light backgrounds should usually be `indigo-950` or `gray-800`.
- Accent colors must not be used for long body text.

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
- Use 1px borders with `gray-100` for light surfaces.

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

- Includes brand summary.
- Includes grouped links.
- Includes contact link.
- Includes future product labels or links.
- Uses centralized company name and contact data.

### Button

Variants:

- Primary: dark indigo or navy background with white text.
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

### Hero Section

Requirements:

- Strong H1.
- Short supporting copy.
- One primary CTA and one secondary CTA.
- Mathematical visual signal.
- Hint of next section visible where practical.

Homepage hero:

- H1 must be `Mathematics becomes easy when you can see it.`

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
- Accent visual.
- `View Sample` CTA.
- `Request Book` CTA.

States:

- Default.
- Hover.
- Focus within.

Rules:

- Cards must be equal-height within a row on desktop where practical.
- Cards must stack cleanly on mobile.

### Sample Preview

Requirements:

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
- Borders use `gray-100` or accessible equivalent.
- Focus ring uses `focus`.
- Error text uses `error`.

## Motion

Allowed:

- Fade-ins.
- Subtle scroll reveals.
- Hover lifts.
- Smooth menu transitions.
- Preview navigation transitions.

Avoid:

- Flashy animation.
- Constant motion.
- Motion that distracts from reading.
- Animation required to understand content.

Rules:

- Respect reduced-motion preferences.
- Keep transitions between 150ms and 300ms.
- Do not animate large text blocks in ways that harm readability.

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
- Touch-friendly controls.
- Navigation collapses.
- Forms are thumb-friendly.
- Preview controls remain reachable.

Tablet:

- Use two-column layouts where natural.
- Avoid excessive whitespace.

Desktop:

- Use richer layouts and multi-column grids.
- Keep text readable and constrained.

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

- Colors from this document.
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
