# Task 004: Build Blog

## Routes

- `/blog`
- `/blog/[slug]`

## Source Documents

Before implementation, read:

- `docs/requirements.md`
- `docs/information-architecture.md`
- `docs/content-model.md`
- `docs/design-system.md`

## Goal

Build the V1 Ganitra blog as an educational content section that supports search discovery and reinforces the understanding-first mathematics philosophy.

## Required Blog Index Sections

1. Blog hero.
2. Featured article.
3. Article list.
4. Category tags or filters.
5. CTA to sample chapters.

## Required Article Fields

Each article must support:

- Title.
- Slug.
- Excerpt or description.
- Author.
- Publish date.
- Category.
- Tags.
- Cover image, optional.
- MDX content.
- Reading time estimate.
- Related articles.
- SEO title.
- SEO description.

## Implementation Requirements

- Use MDX-based content.
- Use static generation.
- Do not require a CMS in Phase 1.
- Blog content must be educational, not sales-heavy.
- Include clear links to `/sample-chapters` as the primary CTA path.
- Keep article pages readable on mobile.

## SEO Requirements

- Blog index metadata.
- Article-specific metadata.
- Canonical paths.
- Open Graph metadata.
- Semantic article structure.

## Acceptance Criteria

- `/blog` lists available articles.
- `/blog/[slug]` renders individual MDX articles.
- Articles show reading time estimate and category/tags.
- Related articles appear when configured.
- Primary CTA points to sample chapters.
- Layout works at 375px, 768px, 1024px, and 1440px.
- Blog follows `docs/design-system.md`.
