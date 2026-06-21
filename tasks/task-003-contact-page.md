# Task 003: Build Contact Page

## Route

- `/contact`
- Include anchor: `/contact#request-book`

## Source Documents

Before implementation, read:

- `docs/requirements.md`
- `docs/forms-and-data.md`
- `docs/information-architecture.md`
- `docs/content-model.md`
- `docs/design-system.md`

## Goal

Build the contact page with real Formspree submission for general inquiries, book requests, teacher inquiries, and school partnership inquiries.

## Required Sections

1. Contact hero.
2. Inquiry form.
3. Request book section or request-book fields.
4. What happens next.
5. No-payment reassurance.

## Form Backend

Use Formspree:

- `https://formspree.io/f/mrewzvoz`

Forms must be real submissions, not mock submissions.

## Required Inquiry Types

- Book Request.
- School Partnership.
- Teacher Inquiry.
- General Inquiry.

## Required Contact Fields

- Name.
- Email.
- Inquiry Type.
- Message.

Optional:

- Phone.
- Country.

## Required Book Request Fields

- Name.
- Email.
- Country.
- Grade Level.
- Book Interested In.

Book options:

- Foundations.
- Core Math.
- Advanced Mathematics.
- Not Sure.

## Implementation Requirements

- Use accessible labels for every field.
- Validate required fields.
- Validate email format.
- Preserve user input after validation errors.
- Show success and error states.
- Include spam protection if practical, such as a honeypot field.
- Do not collect payment information.
- Do not imply payment or checkout.
- Do not collect sensitive student data.

## Success Messages

Contact form:

- `Thank you for contacting Ganitra. We received your message and will respond as soon as possible.`

Book request:

- `Thank you for your book request. We received your details and will follow up with availability and next steps.`

School partnership:

- `Thank you for your interest in school partnerships. We received your inquiry and will follow up with more information.`

## SEO Requirements

- Page metadata for title, description, canonical path, and Open Graph.
- SEO intent: Ganitra contact, book request, teacher inquiry, school partnership.

## Acceptance Criteria

- `/contact#request-book` lands at the request-book section or relevant form state.
- Submissions post to Formspree endpoint `https://formspree.io/f/mrewzvoz`.
- Required fields validate.
- Success and error states are visible and accessible.
- No payment fields or payment language appear.
- Form works on mobile at 375px width.
- Page follows `docs/forms-and-data.md` and `docs/design-system.md`.
