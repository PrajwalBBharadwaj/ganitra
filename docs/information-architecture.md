# Ganitra Information Architecture

## Purpose

This document defines the route structure, navigation model, CTA hierarchy, and future expansion strategy for the Ganitra website.

The architecture must make Ganitra feel like a mathematics understanding platform while giving the Phase 1 textbook series a clear and useful home.

## Route Strategy

Use simple, descriptive, lowercase URL paths.

Required Phase 1 routes:

| Route | Page | Status | Indexable | Primary Audience | Primary CTA |
| --- | --- | --- | --- | --- | --- |
| `/` | Home | Required | Yes | Parents | View Sample Chapters |
| `/books` | Books | Required | Yes | Parents, Teachers | View Sample Chapters |
| `/sample-chapters` | Sample Chapters | Required | Yes | Parents, Students, Teachers | Request Full Book |
| `/blog` | Blog | Required | Yes | Parents, Teachers | View Sample Chapters |
| `/about` | About | Required | Yes | Parents, Teachers | Explore Books |
| `/contact` | Contact | Required | Yes | Parents, Teachers, Schools | Submit Inquiry |
| `/future` | Future Vision | Required | Yes | Parents, Teachers, Schools | Contact Ganitra |

Optional Phase 1 routes:

| Route | Page | When To Add |
| --- | --- | --- |
| `/books/[slug]` | Collection or book detail | Add if collection cards need more detail than `/books` can comfortably hold. |
| `/sample-chapters/[slug]` | Sample chapter detail | Add if each sample needs its own metadata, preview, and CTA. |
| `/blog/[slug]` | Blog article detail | Required for V1 MDX blog articles. |

Do not create empty routes. If a route has no meaningful content, keep it out of navigation until ready.

## Navigation Model

### Primary Header Navigation

Desktop order:

1. Home
2. Books
3. Sample Chapters
4. Blog
5. About
6. Future
7. Contact

Primary header CTA:

- `View Sample Chapters`, linking to `/sample-chapters`.

Secondary header CTA:

- `Request a Book`, linking to `/contact#request-book`.

Mobile navigation:

- Collapse navigation behind a menu button.
- Preserve the same link order.
- Keep `View Sample Chapters` visually distinct inside the mobile menu.
- Include `Request a Book` as a secondary action inside the mobile menu.
- Ensure menu can be opened, closed, and navigated by keyboard.

### Footer Navigation

Footer groups:

- Platform: Home, About, Future.
- Books: Books, Sample Chapters.
- Blog: Blog.
- Contact: Contact, Teacher Inquiry, School Partnership.
- Future Products: Interactive Practice, Visual Mathematics, Teacher Resources, School Programs.

Future product footer links may point to `/future` anchors until standalone pages exist.

## CTA Hierarchy

Primary CTA:

- `View Sample Chapters`

Secondary CTAs:

- `Request a Book`
- `Explore Books`
- `Contact Ganitra`

Contextual CTAs:

- `View Sample`
- `Request This Book`
- `Teacher Inquiry`
- `School Partnership Inquiry`

Rules:

- Every page must include one clear primary CTA.
- Do not place more than two visually prominent CTAs in the same section.
- CTA labels must describe the action, not the implementation.
- Do not use payment-related labels in Phase 1.

## Page Structure

### Home

Route:

- `/`

Purpose:

- Introduce Ganitra, explain the problem, present the method, and guide users to books or samples.

Required sections:

1. Hero.
2. Problem.
3. Ganitra Method.
4. Featured Learning Series.
5. Sample Chapter Preview.
6. Blog Preview.
7. Parent Trust.
8. Future Platform Vision.
9. Final CTA.

SEO intent:

- Brand and broad educational positioning.

Suggested title:

- `Ganitra | Visual Mathematics Learning and Textbooks`

### Books

Route:

- `/books`

Purpose:

- Present the textbook series and help users choose a collection.

Required sections:

1. Page hero.
2. Collection grid.
3. Comparison or grade guide.
4. Sample chapter CTA.
5. Request book CTA.

SEO intent:

- Mathematics textbooks, visual math books, math learning books by grade.

Suggested title:

- `Mathematics Textbooks by Grade | Ganitra`

### Sample Chapters

Route:

- `/sample-chapters`

Purpose:

- Build trust by showing how Ganitra teaches.

Required sections:

1. Page hero.
2. Sample selector.
3. Preview or gallery.
4. Download/view action.
5. Request full book CTA.

SEO intent:

- Sample math chapters, visual math textbook preview, conceptual math examples.

Suggested title:

- `Sample Math Chapters | Ganitra`

### Blog

Route:

- `/blog`

Purpose:

- Publish educational content that supports Ganitra's understanding-first philosophy and improves organic discovery.

Required sections:

1. Blog hero.
2. Featured article.
3. Article list.
4. Category filters or tags.
5. Related CTA to sample chapters.

SEO intent:

- Visual mathematics learning, math understanding, math education, conceptual math articles.

Suggested title:

- `Ganitra Blog | Visual Mathematics and Math Understanding`

Article routes:

- Use `/blog/[slug]` for individual MDX articles.
- Each article must have title, description, category, tags, publish date, reading time estimate, related articles, and SEO metadata.

### About

Route:

- `/about`

Purpose:

- Explain the educational philosophy and long-term company vision.

Required sections:

1. Mission.
2. Why traditional mathematics often fails students.
3. Visual understanding philosophy.
4. Why textbooks first.
5. Future vision.
6. CTA.

SEO intent:

- Brand trust, mathematics understanding philosophy.

Suggested title:

- `About Ganitra | A Mathematics Understanding Platform`

### Contact

Route:

- `/contact`

Purpose:

- Capture inquiries and book requests.

Required sections:

1. Contact hero.
2. Inquiry form.
3. Request book guidance.
4. What happens next.

SEO intent:

- Brand contact and institutional inquiry.

Suggested title:

- `Contact Ganitra | Book Requests and School Inquiries`

### Future

Route:

- `/future`

Purpose:

- Show the long-term product roadmap without implying unavailable products are live.

Required sections:

1. Future vision hero.
2. Future product areas.
3. Roadmap sequence.
4. Teacher and school interest CTA.

SEO intent:

- Visual mathematics, math practice, teacher resources.

Suggested title:

- `The Future of Ganitra | Visual Math, Practice and Teacher Resources`

## Future Product Areas

Required product areas:

| Product Area | Phase 1 Treatment | Future Route |
| --- | --- | --- |
| Interactive Practice | Coming-soon card on `/future` | `/practice` |
| Visual Mathematics | Coming-soon card on `/future` | `/visual-mathematics` |
| Teacher Resources | Coming-soon card on `/future` | `/teacher-resources` |
| School Programs | Coming-soon card on `/future` | `/school-programs` |

Phase 1 rule:

- Do not add standalone future product routes unless they contain useful content and clear coming-soon positioning.

Indexing rule:

- If future product pages are only placeholders, use noindex or omit them from the sitemap.
- `/future` may be indexable because it contains the platform roadmap.

## Anchor Strategy

Useful anchors:

- `/books#foundations`
- `/books#core-mathematics`
- `/books#advanced-mathematics`
- `/sample-chapters#preview`
- `/contact#request-book`
- `/contact#school-partnership`
- `/future#interactive-practice`
- `/future#visual-mathematics`
- `/future#ai-tutor`
- `/future#teacher-resources`
- `/future#school-programs`

Anchors must not replace full routes when a product area later needs its own page.

## Breadcrumbs

Breadcrumbs are optional for top-level routes.

Use breadcrumbs if dynamic detail routes are added:

- Home > Books > Foundations.
- Home > Sample Chapters > Foundations Sample.

## SEO Architecture

Every indexable page must have:

- Unique title.
- Unique meta description.
- Canonical URL.
- Open Graph metadata.
- Structured data when relevant.

Structured data recommendations:

- `Organization` on all pages or root layout.
- `WebSite` on root.
- `BreadcrumbList` on detail pages.
- `Book` for book or collection detail pages when real book data exists.
- `FAQPage` only if visible FAQ content exists.

## Content Ownership

Global brand and contact values:

- Store in centralized site configuration.

Page content:

- Store in structured content data or page-specific content modules.

Book and sample data:

- Store in typed content structures described in `docs/content-model.md`.

Form behavior:

- Follow `docs/forms-and-data.md`.

## Implementation Notes

- Use route constants or structured navigation data rather than duplicated string arrays.
- Navigation labels and hrefs should be defined once and reused in header, footer, mobile menu, and sitemap generation.
- Pages must remain useful if future product data changes.
- Avoid hardcoded brand strings inside components.
