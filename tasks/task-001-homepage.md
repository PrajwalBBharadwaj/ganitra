# Task 001: Build Homepage

## Route

- `/`

## Source Documents

Before implementation, read:

- `docs/requirements.md`
- `docs/information-architecture.md`
- `docs/content-model.md`
- `docs/design-system.md`

## Goal

Build the Ganitra homepage as the primary introduction to the mathematics understanding platform. The page must lead with sample chapters, establish trust, introduce the book series, and show the broader future platform vision.

## Required Sections

1. Hero.
2. Problem section.
3. Ganitra Method.
4. Featured Learning Series.
5. Sample Chapter Preview.
6. Blog Preview.
7. Parent Trust.
8. Future Platform Vision.
9. Final CTA.

## Required Content

Hero:

- H1: `Mathematics becomes easy when you can see it.`
- Supporting copy: `Ganitra helps students understand mathematics through intuition, patterns, and structured thinking.`
- Primary CTA: `View Sample Chapters`, linking to `/sample-chapters`.
- Secondary CTA: `Request a Book`, linking to `/contact#request-book`.
- Visual: mathematical visualization, not stock photography.

Ganitra Method:

- See.
- Understand.
- Apply.

Featured Learning Series:

- Foundations, grades 1-4.
- Core Math, grades 5-7.
- Advanced Mathematics, grades 8-10.

Future Platform Vision:

- Interactive Practice.
- Visual Mathematics.
- Teacher Resources.
- School Programs.

## Implementation Requirements

- Use structured content data from the content model.
- Use reusable section and card components.
- Use design tokens from `docs/design-system.md`.
- Do not hardcode company name or brand configuration.
- Do not include testimonials or testimonial placeholders.
- Use trust cards for parent confidence.
- Include blog preview linking to `/blog`.
- Keep future products clearly marked as coming soon.

## SEO Requirements

- One H1.
- Page metadata for title, description, canonical path, and Open Graph.
- Semantic section headings.
- Real text, not text embedded in images.

## Acceptance Criteria

- Primary CTA is `View Sample Chapters`.
- Secondary CTA is `Request a Book`.
- The page communicates Ganitra as a platform before presenting books as products.
- The three book collections use `Core Math`.
- No testimonial UI appears.
- Blog preview appears.
- Future products do not include AI tutoring.
- Layout works at 375px, 768px, 1024px, and 1440px.
- Page follows `docs/design-system.md`.
