# Ganitra Documentation Review Report

## Review Scope

Reviewed current files under:

- `docs/`
- `tasks/`
- `decisions/`

This review reflects the documentation package after the addition of implementation-ready requirements, information architecture, content model, forms/data, and expanded design system documents.

## Executive Summary

The documentation package is now much closer to implementation-ready. The strongest documents are `docs/requirements.md`, `docs/information-architecture.md`, `docs/content-model.md`, `docs/forms-and-data.md`, and `docs/design-system.md`. Together, they define Phase 1 scope, routes, CTAs, content structures, forms, visual tokens, component behavior, accessibility, SEO metadata expectations, and future-product boundaries.

The main remaining issue is no longer scope contradiction; the major V1 decisions have been reconciled. Future coding agents should treat `docs/requirements.md`, `docs/information-architecture.md`, `docs/content-model.md`, `docs/forms-and-data.md`, `docs/design-system.md`, and `tasks/` as the strongest implementation sources.

## Strengths

- The core company vision is consistent: Ganitra is a mathematics understanding platform, not just a textbook seller.
- Phase 1 is now clearly framed as a marketing and lead-generation website centered on textbook discovery, sample chapters, and book requests.
- The long-term platform vision is represented: interactive practice, visual mathematics, teacher resources, and school programs.
- `docs/requirements.md` provides route-level acceptance criteria, non-goals, SEO, accessibility, performance, and responsive expectations.
- `docs/information-architecture.md` defines required routes, navigation order, CTA hierarchy, future route strategy, and indexability rules.
- `docs/content-model.md` strongly reduces implementation ambiguity by defining structured data for site config, navigation, metadata, book collections, books, samples, future products, trust content, inquiries, and assets.
- `docs/forms-and-data.md` clarifies form fields, validation, submission behavior, privacy, spam protection, success/error states, and future payment readiness.
- `docs/design-system.md` now includes concrete color values, typography scale, layout rules, spacing, radius, shadows, component specs, motion, accessibility, and Tailwind mapping guidance.
- The new docs explicitly prevent risky assumptions such as testimonials in V1, fake pricing, checkout simulation, and unlabeled placeholder sample pages.

## Weaknesses

- The documentation now has two layers: detailed implementation docs and older high-level docs. These layers are not fully reconciled.
- `docs/product-spec.md` is still a broad all-in-one prompt-style document and overlaps with newer docs without clearly deferring to them.
- `docs/sitemap.md` is aligned on major routes, but it is still less detailed than `docs/information-architecture.md`.
- `docs/content-strategy.md` marks blog as V1 and paid resources as future-only, but it still needs a fuller editorial strategy.
- `docs/roadmap.md` does not include visual mathematics as its own roadmap area and lacks milestones, dependencies, and success criteria.
- `docs/user-personas.md` is still too thin compared with the level of UX specificity needed for parent, student, teacher, and school audiences.
- `tasks/` files are too vague to function as implementation tickets; they should be rewritten to reference the new requirements and acceptance criteria.
- `decisions/decision-log.md` lacks ADR-style structure and does not capture newer decisions such as App Router preference, content modeling, form handling, future route treatment, and placeholder rules.
- SEO strategy is distributed across multiple docs, but there is still no dedicated keyword/page mapping document.
- There is no dedicated testing checklist document covering build, typecheck, lint, responsive verification, accessibility, form testing, and SEO validation.

## Missing Requirements

### Product and Content

- Final real book titles, if individual books exist at launch.
- Real sample chapter PDFs or confirmation that placeholder concept samples are acceptable.
- Real contact email, domain, and social links for site configuration.
- Approved brand tagline and final mission statement text for centralized config.
- Final V1 blog categories and starter article topics.
- Decision on whether future product pages remain only on `/future` or get standalone noindex pages.

### UX and Content Strategy

- Expanded personas with anxieties, objections, decision triggers, device context, and conversion paths.
- Parent journey from landing page to sample chapter to request book.
- Student journey from curiosity or frustration to sample preview.
- Teacher journey from evaluating quality to inquiry.
- School administrator journey from future vision to partnership inquiry.
- Exact homepage, about page, and book page final copy beyond the hero language.
- Empty states and fallback copy for unavailable samples, missing cover art, and form submission failure.

### Engineering and Architecture

- ADR for Next.js App Router versus Pages Router.
- Optional ADR for Formspree integration details and failure handling.
- ADR for content storage: local TypeScript data files, MDX, CMS, or another approach.
- ADR for analytics and conversion tracking.
- ADR for deployment domain and environment variable strategy.
- Decision on whether individual dynamic routes such as `/books/[slug]` and `/sample-chapters/[slug]` are in Phase 1.

### Legal, Privacy, and Trust

- Privacy policy requirements for form submissions.
- Terms or disclaimer requirements for educational content.
- Child privacy posture, especially since students may browse the site.
- Data retention expectations for inquiries.
- Consent language approval.

### SEO and Measurement

- Dedicated SEO strategy with target keywords by route and persona.
- Structured data implementation rules by page type.
- Open Graph image content requirements.
- Robots and sitemap rules for optional/future routes.
- Conversion event names for `Request a Book`, `View Sample Chapters`, and form submissions.

## Implementation Risks

- Future coding agents may be unsure which document is authoritative when `product-spec.md`, `requirements.md`, and `information-architecture.md` overlap.
- Older docs are less detailed than the implementation docs, so future agents should follow the source-of-truth hierarchy above.
- The content strategy could still cause agents to overbuild paid resources unless future-only status is respected.
- The task files may lead to underspecified implementations if agents read them without cross-referencing the new docs.
- Without real sample assets, agents may create placeholder previews that look too final or too generic.
- Without a real form destination, the site could appear production-ready while silently failing to deliver inquiries.
- Without a dedicated privacy/compliance document, form collection could launch without enough trust and policy support.
- Without expanded personas, copy and UX may skew too parent-heavy and under-serve teachers, students, and schools.
- Without ADRs, future implementation decisions may be inconsistent across agents.

## Per-Document Review

### `docs/vision.md`

- Missing information: product pillars, explicit mention of visual mathematics, practice systems, and school programs.
- Contradictions: omits several long-term areas now included elsewhere.
- Too vague: "mathematics understanding platform" needs brief operational meaning.
- Suggested improvements: update with a platform thesis, Phase 1 role of books, and future pillars.
- Additional docs suggested: keep as concise vision, but link to roadmap and requirements.
- Architecture improvements: state that products should share common platform/content foundations.
- UX improvements: define the desired emotional shift from fear/confusion to clarity/confidence.
- SEO improvements: include core positioning phrases in natural language.
- Scalability improvements: show how books lead into practice, visuals, teachers, and schools.

### `docs/product-spec.md`

- Missing information: source-of-truth hierarchy and links to newer detailed specs.
- Contradictions: older preview instructions emphasize zoom/fullscreen while newer docs make stable accessible preview the priority.
- Too vague: still contains terms like "premium", "elegant", and "production-ready" without relying on newer precise definitions.
- Suggested improvements: refactor into a short overview that points to `requirements.md`, `information-architecture.md`, `content-model.md`, `forms-and-data.md`, and `design-system.md`.
- Additional docs suggested: no new overview doc needed if this becomes the overview.
- Architecture improvements: remove duplicated architecture requirements and defer to dedicated docs.
- UX improvements: keep trust cards and avoid testimonial UI in V1.
- SEO improvements: defer route-level SEO to IA and a future SEO strategy doc.
- Scalability improvements: align future products with the fuller roadmap and data model.

### `docs/requirements.md`

- Missing information: final real content values such as domain, contact email, book titles, and sample assets.
- Contradictions: no major contradictions; it supersedes older vague docs in practice.
- Too vague: optional dynamic routes are left to implementer judgment; this is acceptable but should become a decision before build.
- Suggested improvements: add a "source of truth" note and explicit dependency on future ADRs.
- Additional docs suggested: testing checklist, SEO strategy, privacy/compliance.
- Architecture improvements: add clearer decision requirement for dynamic routes before implementation.
- UX improvements: add more page-specific copy requirements once final messaging is approved.
- SEO improvements: link to a dedicated SEO strategy when created.
- Scalability improvements: add phase gate for when auth, database, CMS, and payments become necessary.

### `docs/information-architecture.md`

- Missing information: final footer legal links, exact anchor behavior for request-book form, and decision on optional dynamic routes.
- Contradictions: no major internal contradictions; conflicts with older sitemap.
- Too vague: "with book request context or directly to a request-book section" should become one chosen behavior.
- Suggested improvements: choose a single request-book destination and update sitemap to match.
- Additional docs suggested: route-level SEO/content matrix.
- Architecture improvements: define whether route constants should also power sitemap generation.
- UX improvements: add mobile nav interaction acceptance criteria.
- SEO improvements: add final meta descriptions, not only suggested titles.
- Scalability improvements: define when future product cards graduate to standalone routes.

### `docs/content-model.md`

- Missing information: exact sample records, actual collection descriptions, final default metadata, and real asset paths.
- Contradictions: no major contradictions.
- Too vague: "typed content structures" is clear conceptually, but no exact schema language is mandated.
- Suggested improvements: add example records for one collection, one sample, one future product, and one trust card.
- Additional docs suggested: content inventory or copy deck.
- Architecture improvements: decide whether content lives in TypeScript, JSON, MDX, or CMS.
- UX improvements: include content length limits for cards and descriptions.
- SEO improvements: add field-level guidance for metadata descriptions and slugs.
- Scalability improvements: add future lesson/practice module models later.

### `docs/forms-and-data.md`

- Missing information: actual backend destination, real fallback email, privacy policy URL, and rate-limit thresholds.
- Contradictions: no major contradictions; it resolves earlier "future payment ready" vagueness.
- Too vague: acceptable destinations are listed, but no chosen destination exists.
- Suggested improvements: add an ADR choosing the Phase 1 submission mechanism.
- Additional docs suggested: privacy/compliance and deployment/environment docs.
- Architecture improvements: define environment variable names once backend is chosen.
- UX improvements: add exact field order for adaptive versus separate forms.
- SEO improvements: low direct SEO impact, but contact page metadata should be finalized elsewhere.
- Scalability improvements: add lifecycle states for CRM follow-up if school partnerships become active.

### `docs/design-system.md`

- Missing information: logo/wordmark rules, exact Open Graph image style, and examples for math visuals.
- Contradictions: no major contradictions; it resolves the old color ambiguity.
- Too vague: "mathematical visual signal" could benefit from example asset directions.
- Suggested improvements: add asset examples, logo usage, and sample page visual guidance.
- Additional docs suggested: asset guidelines, component spec can remain embedded unless the design system grows larger.
- Architecture improvements: add exact Tailwind token naming if desired.
- UX improvements: add modal/fullscreen preview interaction details if preview becomes complex.
- SEO improvements: include OG image composition rules.
- Scalability improvements: note future dashboard/product UI extensions separately from marketing components.

### `docs/brand-guide.md`

- Missing information: voice rules, tone examples, tagline, mission statement, CTA style, logo usage, and brand messaging hierarchy.
- Contradictions: less complete than product spec and design system, but not directly contradictory.
- Too vague: personality words are not implementation-ready.
- Suggested improvements: expand into brand voice and messaging guide or merge into product overview plus design system.
- Additional docs suggested: brand/messaging guide or copy deck.
- Architecture improvements: tie all brand strings to site config.
- UX improvements: define microcopy tone for forms and coming-soon products.
- SEO improvements: define approved brand descriptions for metadata.
- Scalability improvements: define naming conventions for future products.

### `docs/content-strategy.md`

- Missing information: funnel stages, blog editorial categories, starter article topics, paid-resource timing, and persona mapping.
- Contradictions: no major current contradiction, but the paid section needs clearer future-only framing.
- Too vague: "Premium resources" and "visual math concepts" lack format and timing.
- Suggested improvements: rewrite as a Phase 1 and Future content strategy.
- Additional docs suggested: SEO strategy and content inventory.
- Architecture improvements: define whether resources use static pages, MDX, CMS, or future content database.
- UX improvements: map each content type to a user journey and CTA.
- SEO improvements: create keyword clusters and article topics for future resources.
- Scalability improvements: define how free content can evolve into visual lessons and practice modules.

### `docs/sitemap.md`

- Missing information: `/future`, future-product anchors, optional dynamic routes, legal pages, and route status/indexing.
- Contradictions: no major current contradiction; it still has less route metadata than the IA.
- Too vague: no URL paths, route status, or nav priority.
- Suggested improvements: replace with or point to `docs/information-architecture.md`.
- Additional docs suggested: none if IA remains source of truth.
- Architecture improvements: define sitemap generation from route metadata.
- UX improvements: align header/footer navigation with IA.
- SEO improvements: add indexable/noindex route rules.
- Scalability improvements: include future route strategy.

### `docs/roadmap.md`

- Missing information: timelines, dependencies, success criteria, ownership, and architecture triggers.
- Contradictions: lacks Visual Mathematics and School Programs as distinct future areas; compresses teacher platform and school partnerships together.
- Too vague: phases do not define deliverables.
- Suggested improvements: expand to phase goals, deliverables, technical prerequisites, and metrics.
- Additional docs suggested: future platform architecture.
- Architecture improvements: identify when auth, database, CMS, payments, and analytics are introduced.
- UX improvements: define how much of each future phase appears on the Phase 1 website.
- SEO improvements: plan content clusters per phase.
- Scalability improvements: define migration from static marketing site to product platform.

### `docs/user-personas.md`

- Missing information: pain points, objections, context, journeys, decision criteria, device behavior, and school administrator persona.
- Contradictions: no direct contradiction, but less complete than requirements.
- Too vague: each persona only has goals.
- Suggested improvements: expand into journey-driven personas.
- Additional docs suggested: user journeys or conversion strategy.
- Architecture improvements: map personas to routes, CTAs, and inquiry types.
- UX improvements: define above-the-fold needs for each audience.
- SEO improvements: map search intent by persona.
- Scalability improvements: include future student accounts, teacher tools, and school partnerships.

### `tasks/task-001-homepage.md`

- Missing information: required sections, CTAs, assets, SEO, responsive criteria, and acceptance criteria.
- Contradictions: none direct, but too sparse compared with requirements.
- Too vague: "premium hero" is subjective.
- Suggested improvements: rewrite to reference homepage requirements and design-system components.
- Additional docs suggested: detailed page specs if tasks remain short.
- Architecture improvements: specify content source and reusable sections.
- UX improvements: include full section order and CTA behavior.
- SEO improvements: include title, description, H1, and structured data expectations.
- Scalability improvements: ensure future product sections are data-driven.

### `tasks/task-002-books-page.md`

- Missing information: card fields, route links, data model, sample behavior, SEO, and acceptance criteria.
- Contradictions: no current contradiction; it should use `Core Math`.
- Too vague: "Sample chapter previews" needs behavior and asset rules.
- Suggested improvements: rewrite to reference book collection model and books page requirements.
- Additional docs suggested: page specs if needed.
- Architecture improvements: require typed collection data.
- UX improvements: define grade comparison and request-book CTA.
- SEO improvements: include collection metadata expectations.
- Scalability improvements: prepare for individual books, pricing, bundles, and downloads later.

### `tasks/task-003-contact-page.md`

- Missing information: field validation, inquiry types, backend destination, spam protection, privacy, success/error states.
- Contradictions: combines contact and book request without specifying adaptive versus separate forms; newer forms doc allows either but no final decision.
- Too vague: "Future payment integration ready" is broad, though `forms-and-data.md` now defines it.
- Suggested improvements: rewrite to reference `forms-and-data.md` and choose adaptive or separate form UI.
- Additional docs suggested: form backend ADR.
- Architecture improvements: define submission adapter.
- UX improvements: include "what happens next" and no-payment reassurance.
- SEO improvements: include contact page metadata.
- Scalability improvements: preserve inquiry types for CRM and future school partnership workflows.

### `decisions/decision-log.md`

- Missing information: decision IDs, context, alternatives, consequences, owner, status, and links.
- Contradictions: no direct contradiction.
- Too vague: stack decision lacks router choice, version expectations, content strategy, form backend, and deployment details.
- Suggested improvements: convert to ADR-style entries.
- Additional docs suggested: `decisions/adr-template.md`.
- Architecture improvements: add ADRs for App Router, content files, forms backend, sitemap/metadata, placeholder content, and future routes.
- UX improvements: add decisions for navigation model and sample preview behavior.
- SEO improvements: add decisions for structured data and indexability.
- Scalability improvements: document future platform boundaries before building product features.

## Recommended Improvements

### Highest Priority

- Reconcile old docs with new implementation docs so there is one clear source of truth.
- Update or replace `docs/sitemap.md` with the route table from `docs/information-architecture.md`.
- Refactor `docs/product-spec.md` into a concise overview that points to the newer detailed specs.
- Rewrite the three task files as implementation-ready tickets with acceptance criteria and links to the relevant docs.
- Convert `decisions/decision-log.md` into ADR format and add missing architecture decisions.
- Expand `docs/user-personas.md` into persona journeys.

### Architecture Improvements

- Add ADR: Next.js App Router as default route architecture.
- Add ADR: local typed content files for Phase 1 content, with future CMS migration optional.
- Add optional ADR: Formspree integration and adapter boundary.
- Add ADR: route metadata powers navigation, sitemap, and robots rules.
- Add ADR: future products remain `/future` cards until standalone content exists.
- Add ADR: no testimonials in V1, no fake pricing, and placeholder samples must be labeled.

### UX Improvements

- Define one request-book flow: separate form, adaptive contact form, or anchored section on `/contact`.
- Add user journeys for parent, student, teacher, and school administrator.
- Add copy deck for core pages so coding agents do not invent final marketing copy.
- Add sample preview behavior details if zoom/fullscreen remains a hard requirement.
- Add explicit mobile menu interaction expectations.
- Add fallback states for missing samples, missing covers, and form backend failure.

### SEO Improvements

- Create `docs/seo-strategy.md` with route-specific keywords, titles, descriptions, canonical paths, structured data, and indexability.
- Define V1 blog categories and starter article topics.
- Define Open Graph image requirements and fallback image behavior.
- Add route metadata records to the content model once final copy is approved.
- Define sitemap and robots generation rules.

### Scalability Improvements

- Create `docs/future-platform-architecture.md` describing when the project evolves from static marketing to accounts, dashboards, practice systems, teacher resources, and school partnerships.
- Add roadmap milestones with technical prerequisites.
- Add future models for lessons, practice items, visual explorations, teacher resources, and school leads when those phases begin.
- Keep all Phase 1 book/sample/future product content data-driven.
- Keep form submission handling abstract so it can later connect to CRM, payments, and school workflows.

## Suggested Additional Documentation Files

- `docs/seo-strategy.md`
- `docs/user-journeys.md`
- `docs/page-specs.md`
- `docs/copy-deck.md`
- `docs/testing-checklist.md`
- `docs/privacy-and-compliance.md`
- `docs/analytics-and-conversion.md`
- `docs/asset-guidelines.md`
- `docs/future-platform-architecture.md`
- `decisions/adr-template.md`

## Proposed Documentation Change Plan

After approval, update the documentation in this order:

1. Add `decisions/adr-template.md` and convert `decisions/decision-log.md` to ADR-style decisions.
2. Reconcile `docs/sitemap.md` with `docs/information-architecture.md`, including `Core Math` and all future product areas.
3. Refactor `docs/product-spec.md` into a short overview that names the newer implementation docs as authoritative.
4. Expand `docs/user-personas.md` or create `docs/user-journeys.md` for parent, student, teacher, and school administrator flows.
5. Rewrite `tasks/task-001-homepage.md`, `tasks/task-002-books-page.md`, and `tasks/task-003-contact-page.md` with acceptance criteria.
6. Create `docs/seo-strategy.md` and `docs/testing-checklist.md`.
7. Document Formspree behavior, real contact values, real sample asset strategy, and request-book flow.

## Clarifying Questions

- Should `docs/product-spec.md` remain as a master overview, or should it be split and mostly replaced by the newer implementation docs?
- Should the request-book experience be a separate form, an adaptive contact form, or a dedicated anchored section on `/contact`?
- Are real sample chapter PDFs/images available, or should Phase 1 use labeled concept placeholders?
- What starter blog articles should ship with V1?
- Should future product pages stay only on `/future` until real content exists?
