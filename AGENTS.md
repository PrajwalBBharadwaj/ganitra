# Agent Rules

# Documentation Priority

When documents overlap, use this priority:

1. docs/requirements.md
2. docs/information-architecture.md
3. docs/content-model.md
4. docs/forms-and-data.md
5. docs/design-system.md
6. docs/product-spec.md
7. All other documents

Before coding, read:

- docs/vision.md
- docs/product-spec.md
- docs/brand-guide.md
- docs/design-system.md
- docs/roadmap.md
- Read all docs before coding
- Follow brand guide
- Follow design system
- Mobile first
- SEO first
- Use reusable components
- Do not introduce random colors
- Do not use stock-photo-heavy designs


- TypeScript only
- Tailwind only
- No hardcoded branding
- Reusable components
- SEO optimized

# Responsive Design Requirements

Ganitra must be fully optimized for:

- Mobile phones
- Tablets
- Laptops
- Desktop monitors
- Large screens (1440p+)

The website should be designed using a mobile-first approach.

Requirements:

## Mobile (Priority 1)

- All pages must be fully usable on mobile devices.
- Navigation should collapse into a mobile menu.
- Buttons must be touch-friendly.
- Text must remain readable without zooming.
- Images must scale properly.
- Forms must be easy to complete using thumbs.

## Tablet

- Layouts should adapt naturally.
- Avoid excessive whitespace.
- Maintain visual hierarchy.

## Laptop/Desktop

- Utilize wider layouts.
- Introduce multi-column sections where appropriate.
- Preserve readability.

## Large Displays

- Content should not stretch excessively.
- Use max-width containers.
- Maintain balanced spacing.

## Performance

Mobile performance is more important than desktop performance.

Target:
- Lighthouse Mobile Score > 90
- Lighthouse Desktop Score > 95

## Testing Requirements

Before marking any feature complete, verify:

- 375px width (small mobile)
- 768px width (tablet)
- 1024px width (laptop)
- 1440px width (desktop)

A feature is not considered complete until it works well on all four breakpoints.

# Branding Rules

The company name must never be hardcoded.

Create a centralized configuration system.

The following values must come from configuration:

- Company Name
- Tagline
- Mission Statement
- Domain
- Contact Information
- Social Media Links

Changing the company name in one file should update the entire website.