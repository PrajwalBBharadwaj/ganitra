# Task 002: Build Books Page

## Route

- `/books`

## Source Documents

Before implementation, read:

- `docs/requirements.md`
- `docs/information-architecture.md`
- `docs/content-model.md`
- `docs/design-system.md`

## Goal

Build the books page for the first Ganitra textbook series. The page must help parents, students, and teachers understand the three learning collections and move toward sample chapters or book requests.

## Required Sections

1. Page hero.
2. Collection overview.
3. Collection cards.
4. Grade comparison or grade guide.
5. Sample chapter CTA.
6. Request book CTA.

## Required Collections

- Foundations, grades 1-4, focus: numbers, arithmetic, patterns.
- Core Math, grades 5-7, focus: fractions, algebra introduction, geometry.
- Advanced Mathematics, grades 8-10, focus: algebra, trigonometry, reasoning, problem solving.

## Required Card Fields

Each collection card must show:

- Title.
- Grade range.
- Focus topics.
- Short description.
- Accent visual.
- `View Sample` action.
- `Request Book` action.

## Implementation Requirements

- Use structured book collection data from `docs/content-model.md`.
- Use `Core Math` everywhere in user-facing copy.
- Do not display prices.
- Do not imply checkout or immediate purchase.
- Do not create dynamic book detail routes in Phase 1.
- Use the sample CTA as the primary path.
- Link request actions to `/contact#request-book`.

## SEO Requirements

- Page metadata for title, description, canonical path, and Open Graph.
- SEO intent: mathematics textbooks, visual math books, math learning books by grade.
- Use semantic headings for each collection.

## Acceptance Criteria

- Users can compare all three collections on one page.
- Primary page CTA points to sample chapters.
- Request-book path is available as secondary action.
- No payment language appears.
- The page is data-driven and can support future individual books.
- Layout works at 375px, 768px, 1024px, and 1440px.
- Page follows `docs/design-system.md`.
