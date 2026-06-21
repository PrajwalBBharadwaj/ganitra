# Ganitra Website Requirements

## Purpose

This document defines the Phase 1 requirements for the Ganitra website. It is the implementation contract for future coding agents.

Ganitra is a mathematics understanding platform. The first product is a mathematics textbook series. The website must present books as the first expression of a broader learning vision that will later include interactive learning, visual mathematics, practice systems, teacher resources, and school partnerships.

## Phase 1 Goal

Build a production-ready marketing and lead-generation website that:

- Establishes Ganitra as a serious mathematics education company.
- Explains the philosophy of visual and intuitive mathematics.
- Presents the textbook series as the first major product.
- Lets users explore book collections and sample chapters.
- Lets users request a book or contact Ganitra.
- Creates a scalable foundation for future product areas.

## Primary Conversion

The primary Phase 1 conversion is `View Sample Chapters`.

Secondary conversions:

- `Request a Book`
- `Explore Books`
- `Contact Ganitra`

Do not integrate payments in Phase 1.

## Target Users

Primary:

- Parents of students in grades 1-10 who want better mathematics resources and more confidence for their children.

Secondary:

- Students who feel confused or frustrated by mathematics and need visual, structured explanations.

Tertiary:

- Teachers and educators looking for conceptually clear teaching resources.

Future:

- School administrators evaluating school partnerships.

## Required Routes

Phase 1 must include:

- `/`
- `/books`
- `/sample-chapters`
- `/blog`
- `/blog/[slug]`
- `/about`
- `/contact`
- `/future`

Optional dynamic routes may be added if useful:

- `/books/[slug]`
- `/sample-chapters/[slug]`

Do not create authenticated user areas in Phase 1.

## Required Global Elements

Every public page must include:

- Responsive header.
- Mobile navigation.
- Footer.
- Clear primary CTA.
- SEO metadata.
- Accessible semantic page structure.

Header requirements:

- Logo or wordmark sourced from centralized site configuration.
- Navigation links: Home, Books, Sample Chapters, Blog, About, Future, Contact.
- Primary CTA: View Sample Chapters.
- Secondary CTA: Request a Book.
- Mobile menu at small widths.

Footer requirements:

- Brand summary.
- Primary navigation links.
- Blog link.
- Future product links or labels.
- Contact link.
- Social links only if configured.
- Copyright text using centralized company name.

## Page Requirements

### Home Page

Purpose:

- Introduce Ganitra's core belief and guide visitors toward books and samples.

Required sections:

- Hero.
- Problem section.
- Ganitra Method section.
- Featured Learning Series.
- Sample Chapters preview.
- Blog preview.
- Why Parents Choose Ganitra.
- Future Platform Vision.
- Final CTA.

Hero requirements:

- H1: `Mathematics becomes easy when you can see it.`
- Supporting copy: `Ganitra helps students understand mathematics through intuition, patterns, and structured thinking.`
- Primary CTA: `View Sample Chapters`, linking to `/sample-chapters`.
- Secondary CTA: `Request a Book`, linking to `/contact#request-book`.
- Visual: mathematical visualization, not stock photography.

Problem section:

- Explain memorization, confusion, fear, and lack of confidence.
- The tone must be empathetic, not alarmist.

Ganitra Method:

- Three concepts: See, Understand, Apply.
- Each concept must have an icon or visual cue, short explanation, and consistent card pattern.

Featured Learning Series:

- Show Foundations, Core Math, and Advanced Mathematics.
- Each collection must include grade range, focus, description, visual identity, and CTAs.

Why Parents Choose Ganitra:

- Include trust points: structured learning, conceptual understanding, reduced math anxiety, better confidence.
- Do not include testimonials or testimonial cards in Phase 1.
- Use trust cards only.

Future Platform Vision:

- Show Interactive Practice, Visual Mathematics, Teacher Resources, and School Programs as coming-soon product areas.
- Do not imply these products are currently available.

Acceptance criteria:

- The page communicates platform vision before book sales details.
- Primary CTAs are visible on mobile without excessive scrolling.
- The page works at 375px, 768px, 1024px, and 1440px widths.
- No brand value is hardcoded outside centralized configuration or content data.

### Books Page

Purpose:

- Present all textbook collections and route users toward samples or book requests.

Required sections:

- Page hero.
- Collection overview.
- Book or collection cards.
- Sample chapter CTA.
- Request book CTA.

Required collections:

- Foundations, grades 1-4, focus: numbers, arithmetic, patterns.
- Core Math, grades 5-7, focus: fractions, algebra introduction, geometry.
- Advanced Mathematics, grades 8-10, focus: algebra, trigonometry, reasoning, problem solving.

Naming rule:

- Use `Core Math` consistently in all user-facing copy.

Each collection card must include:

- Title.
- Grade range.
- Focus topics.
- Short description.
- Visual accent color.
- `View Sample` action.
- `Request Book` action.

Acceptance criteria:

- Users can understand the difference between the three collections without opening another page.
- The page supports future addition of individual book titles and pricing.
- The page does not imply instant purchase or payment.

### Sample Chapters Page

Purpose:

- Let users inspect the learning style before requesting a book.

Required sections:

- Page hero.
- Sample chapter list or gallery.
- Preview area.
- Download or view sample action.
- Request full book CTA.

Phase 1 content rule:

- If real sample PDFs or images are unavailable, use clearly labeled placeholder sample pages.
- Placeholder pages must demonstrate visual mathematics concepts without pretending to be final textbook pages.

Preview requirements:

- Provide a smooth reading experience.
- Support image or PDF preview depending on available assets.
- Support mobile-friendly navigation between sample pages.
- Fullscreen and zoom are preferred if practical, but a stable accessible preview is more important than complex controls.

Acceptance criteria:

- The preview works on mobile.
- Users can request the related book from the sample page.
- Placeholder content is clearly distinguishable from final book content.

### About Page

Purpose:

- Explain why Ganitra exists and build trust in the educational philosophy.

Required sections:

- Mission.
- Problem with memorization-first mathematics.
- Visual understanding philosophy.
- Why books are the first product.
- Long-term vision.
- CTA to books and contact.

Tone:

- Founder-style and sincere.
- Avoid inflated claims and generic EdTech language.

Acceptance criteria:

- Visitors should understand Ganitra's philosophy even if they never visit the homepage.
- The page supports parent trust and educator credibility.

### Contact Page

Purpose:

- Let users submit inquiries and book requests.

Required sections:

- Contact intro.
- Contact form.
- Request book path or embedded request-book form.
- What happens next.

Inquiry types:

- Book Request.
- School Partnership.
- Teacher Inquiry.
- General Inquiry.

Acceptance criteria:

- Forms have validation, accessible labels, success states, and error states.
- The page explains that payment is not collected in Phase 1.
- Submission behavior follows `docs/forms-and-data.md`.

### Future Page

Purpose:

- Show the broader platform roadmap without overpromising available products.

Required future product areas:

- Interactive Practice.
- Visual Mathematics.
- Teacher Resources.
- School Programs.

Requirements:

- Mark all areas as `Coming Soon`.
- Explain how each future area relates to the same understanding-first philosophy.
- Include a CTA to contact Ganitra for teacher or school interest.

Acceptance criteria:

- The page strengthens platform credibility without making unavailable features seem live.
- Future product cards are data-driven so they can later become product pages.

## Content Rules

- Do not invent real customer testimonials.
- Do not include testimonials or testimonial cards in Phase 1.
- Do not invent book availability, pricing, or purchase claims.
- Placeholder content is allowed only when clearly labeled as placeholder or preview content.
- Use the brand positioning consistently: mathematics understanding platform first, textbook series second.
- Avoid cartoonish, preschool, generic tutoring, and corporate consulting tone.

## Technical Requirements

Implementation must use:

- Next.js.
- TypeScript.
- Tailwind CSS.
- Vercel-ready project structure.
- Mobile-first responsive design.

Preferred architecture:

- Next.js App Router.
- Centralized site configuration.
- Structured content data files.
- Reusable components.
- Page-specific metadata.

No application code should hardcode:

- Company name.
- Tagline.
- Mission statement.
- Domain.
- Contact information.
- Social media links.

## SEO Requirements

Each route must define:

- Page title.
- Meta description.
- Canonical path.
- Open Graph title.
- Open Graph description.
- Open Graph image strategy.

Generate or support:

- Sitemap.
- Robots.txt.
- Structured data where relevant.

Primary keyword themes:

- Mathematics learning.
- Math education.
- Understanding mathematics.
- Mathematics textbooks.
- Visual mathematics.
- Math practice.
- Educational books.
- Learning mathematics intuitively.

## Accessibility Requirements

The site must include:

- Semantic headings in logical order.
- Keyboard-accessible navigation and controls.
- Visible focus states.
- Accessible form labels and error messages.
- Sufficient color contrast.
- Reduced-motion support for animations.
- Descriptive alt text for meaningful visuals.
- Empty alt text for decorative visuals.

## Blog

The website shall include a blog section.

Features:
- Blog listing page
- Individual article pages
- Category tags
- SEO metadata
- Reading time estimate
- Related articles

Implementation:
- MDX-based content
- Static generation

Acceptance criteria:
- Blog index exists at `/blog`.
- Individual article pages are statically generated.
- Blog content supports title, slug, description, category tags, publish date, reading time estimate, related article references, and SEO metadata.
- Blog is educational and aligned with Ganitra's understanding-first philosophy.
- Blog does not require a CMS in Phase 1.

## Performance Requirements

Targets:

- Lighthouse Mobile Performance: greater than 90.
- Lighthouse Desktop Performance: greater than 95.
- Lighthouse Accessibility: greater than 95.
- Lighthouse SEO: greater than 95.
- Lighthouse Best Practices: greater than 95.

Performance priorities:

- Mobile performance is more important than desktop polish.
- Avoid heavy animation libraries unless needed.
- Optimize images and visual assets.
- Avoid loading unavailable future product code.

## Responsive Requirements

Verify layouts at:

- 375px, small mobile.
- 768px, tablet.
- 1024px, laptop.
- 1440px, desktop.

All pages, forms, navigation menus, book previews, and sample chapter experiences must work at all four widths.

## Non-Goals For Phase 1

Do not build:

- Payment checkout.
- User accounts.
- Student dashboards.
- Teacher dashboards.
- Interactive practice engine.
- School admin portal.
- CMS admin interface.
- Real analytics dashboard.

Phase 1 may prepare content structures for these future systems.

## Completion Checklist

A Phase 1 implementation is complete only when:

- All required routes exist.
- All required global elements exist.
- All page acceptance criteria are satisfied.
- Forms follow `docs/forms-and-data.md`.
- Content follows `docs/content-model.md`.
- Navigation follows `docs/information-architecture.md`.
- Visual design follows `docs/design-system.md`.
- The site builds successfully.
- TypeScript passes.
- Responsive checks pass at required widths.
- SEO metadata exists for every public route.
