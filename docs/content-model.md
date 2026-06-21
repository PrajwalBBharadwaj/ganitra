# Ganitra Content Model

## Purpose

This document defines implementation-ready content structures for the Ganitra website.

Future coding agents should model website content as typed data instead of scattering hardcoded strings through components. The exact file names may vary, but the same concepts and fields must exist.

## Content Principles

- Centralize brand and contact values.
- Keep page content separate from reusable components.
- Treat books, sample chapters, future products, trust points, blog posts, and inquiries as structured data.
- Do not invent factual claims such as pricing, availability, or school partnerships.
- Allow placeholder content only when clearly labeled.

## Recommended Content Files

Recommended structure:

```text
src/
  config/
    site.ts
  content/
    navigation.ts
    pages.ts
    books.ts
    samples.ts
    future-products.ts
    trust-points.ts
    blog.ts
    seo.ts
```

This is guidance, not application code. Any implementation must preserve the same data separation.

## Site Configuration

Required fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `companyName` | string | Yes | `Ganitra` |
| `pronunciation` | string | Yes | `Ga-ni-tra` |
| `origin` | string | Yes | Derived from Ganita, mathematics. |
| `tagline` | string | Yes | Short brand line. |
| `missionStatement` | string | Yes | Must reflect visual and intuitive math understanding. |
| `domain` | string | Yes | Use configured production domain when known. |
| `defaultTitle` | string | Yes | Used for fallback metadata. |
| `defaultDescription` | string | Yes | Used for fallback metadata. |
| `contactEmail` | string | Yes | May use placeholder until real email is provided. |
| `socialLinks` | array | Yes | Empty array is allowed. |

Rule:

- Company name, tagline, mission, domain, contact info, and social links must come from configuration.

## Navigation Item

Required fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `label` | string | Yes | User-facing navigation label. |
| `href` | string | Yes | Internal path or configured external URL. |
| `description` | string | No | Useful for mobile menu or footer. |
| `isPrimary` | boolean | No | Marks primary CTA. |
| `isExternal` | boolean | No | True only for external links. |
| `status` | enum | Yes | `active`, `coming-soon`, or `hidden`. |

Status rules:

- `active` links can appear in header and footer.
- `coming-soon` links should point to `/future` anchors unless standalone content exists.
- `hidden` items must not appear in navigation.

## Page Metadata

Required fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `route` | string | Yes | Example: `/books`. |
| `title` | string | Yes | Unique SEO title. |
| `description` | string | Yes | 140-160 character target where practical. |
| `canonicalPath` | string | Yes | Usually same as route. |
| `ogTitle` | string | Yes | Can match title. |
| `ogDescription` | string | Yes | Can match description. |
| `ogImage` | string | No | Use default if absent. |
| `indexable` | boolean | Yes | False for placeholder-only future pages. |
| `keywords` | array | No | Intent-focused keyword themes. |

Every public route must have metadata.

## Book Collection

Required fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable identifier. |
| `slug` | string | Yes | URL-safe slug. |
| `title` | string | Yes | User-facing title. |
| `gradeRange` | string | Yes | Example: `Grades 1-4`. |
| `grades` | array | Yes | Numeric grade values. |
| `focus` | array | Yes | Main topic areas. |
| `description` | string | Yes | 1-3 sentences. |
| `shortDescription` | string | Yes | Card-sized summary. |
| `accent` | enum | Yes | `numbers`, `algebra`, `geometry`, `patterns`, or `logic`. |
| `primaryCtaLabel` | string | Yes | Usually `Request Book`. |
| `sampleCtaLabel` | string | Yes | Usually `View Sample`. |
| `sampleId` | string | No | Links to sample chapter content. |
| `status` | enum | Yes | `available`, `preview`, `coming-soon`. |

Required Phase 1 collections:

| ID | Title | Slug | Grades | Focus | Accent |
| --- | --- | --- | --- | --- | --- |
| `foundations` | Foundations | `foundations` | 1-4 | Numbers, arithmetic, patterns | `numbers` |
| `core-math` | Core Math | `core-math` | 5-7 | Fractions, algebra introduction, geometry | `algebra` |
| `advanced-mathematics` | Advanced Mathematics | `advanced-mathematics` | 8-10 | Algebra, trigonometry, reasoning, problem solving | `logic` |

Naming rule:

- Use `Core Math` consistently in all user-facing content.

## Book

Individual book records are optional in Phase 1. Add them when real titles exist.

Required fields when used:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable identifier. |
| `collectionId` | string | Yes | Links to a book collection. |
| `slug` | string | Yes | URL-safe slug. |
| `title` | string | Yes | Real or clearly placeholder title. |
| `subtitle` | string | No | Optional. |
| `grade` | number | Yes | Target grade. |
| `topics` | array | Yes | Topic list. |
| `description` | string | Yes | Book summary. |
| `coverImage` | asset | No | Placeholder allowed if labeled. |
| `sampleId` | string | No | Related sample. |
| `availabilityStatus` | enum | Yes | `preview`, `available-by-request`, `coming-soon`. |
| `priceStatus` | enum | Yes | `not-for-sale`, `price-pending`, `paid`. |

Phase 1 rule:

- Do not display prices unless real pricing is approved.

## Sample Chapter

Required fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable identifier. |
| `collectionId` | string | Yes | Related collection. |
| `bookId` | string | No | Related book if individual books exist. |
| `title` | string | Yes | User-facing sample title. |
| `slug` | string | Yes | URL-safe slug. |
| `gradeRange` | string | Yes | Example: `Grades 1-4`. |
| `description` | string | Yes | What the sample demonstrates. |
| `topics` | array | Yes | Topic list. |
| `previewType` | enum | Yes | `pdf`, `images`, or `placeholder`. |
| `previewAssets` | array | Yes | Asset references. |
| `downloadUrl` | string | No | Only if download exists. |
| `isPlaceholder` | boolean | Yes | True for generated placeholder samples. |
| `replacementNote` | string | No | Explain how to replace placeholder content. |

Placeholder rule:

- If `isPlaceholder` is true, the UI must clearly label the preview as a concept sample or placeholder sample.

## Future Product

Required fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable identifier. |
| `title` | string | Yes | Product area name. |
| `slug` | string | Yes | Future route slug. |
| `summary` | string | Yes | 1-2 sentence explanation. |
| `audience` | array | Yes | Parent, student, teacher, school. |
| `phase` | string | Yes | Roadmap phase. |
| `status` | enum | Yes | `coming-soon`, `planned`, or `active`. |
| `accent` | enum | Yes | Domain accent. |
| `route` | string | No | Future route when active. |

Required Phase 1 future products:

- Interactive Practice.
- Visual Mathematics.
- Teacher Resources.
- School Programs.

Rule:

- Coming-soon product areas may appear on `/future`, but should not appear as active products.

## Trust Item

Ganitra V1 must not include testimonials. Use trust cards only.

Required fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable identifier. |
| `title` | string | Yes | Trust point title. |
| `description` | string | Yes | Trust point supporting copy. |
| `icon` | string | No | Optional icon identifier. |
| `accent` | enum | No | Optional domain accent. |

V1 rule:

- Do not create testimonial content, testimonial UI, quoted user reviews, names, roles, or ratings.

## Inquiry Type

Required values:

- `book-request`
- `school-partnership`
- `teacher-inquiry`
- `general-inquiry`

Each inquiry type must define:

- Label.
- Description.
- Required fields.
- Optional fields.
- Success message.
- Internal routing category.

Detailed form requirements live in `docs/forms-and-data.md`.

## Asset Model

Required fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `src` | string | Yes | Local or remote asset path. |
| `alt` | string | Yes | Empty string allowed for decorative assets. |
| `width` | number | Conditional | Required for raster images when known. |
| `height` | number | Conditional | Required for raster images when known. |
| `kind` | enum | Yes | `illustration`, `cover`, `sample-page`, `og-image`, `decorative`. |
| `isPlaceholder` | boolean | Yes | True for generated or temporary assets. |

Asset rules:

- Avoid generic stock photography.
- Use mathematical visual identity: diagrams, geometric patterns, number grids, symmetry, tessellations, and visual concepts.
- Meaningful images need descriptive alt text.
- Decorative images use empty alt text.

## Content Validation Checklist

Before implementation is complete:

- All public routes have page metadata.
- All navigation links map to valid routes or anchors.
- All book collections have consistent IDs, slugs, titles, grades, and CTAs.
- Placeholder samples are clearly labeled.
- No testimonial content is present in V1.
- No payment or purchase flow is implied.
- Brand and contact values come from site configuration.
- Future products are clearly marked as coming soon.

## Blog Post

Fields:

- title
- slug
- excerpt
- author
- publishDate
- category
- tags
- coverImage
- content
- readingTime
- seoTitle
- seoDescription
