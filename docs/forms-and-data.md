# Ganitra Forms and Data Requirements

## Purpose

This document defines Phase 1 form behavior, validation, data handling, privacy expectations, and future payment readiness.

Phase 1 forms are lead-generation forms. They must not collect payment information.

## Required Forms

Phase 1 requires:

- Contact form.
- Request book form.

These may be implemented as:

- Separate forms on `/contact`.
- One adaptive inquiry form that changes fields based on inquiry type.

The implementation must make the selected inquiry type explicit in submitted data.

## Inquiry Types

Supported inquiry types:

| Value | Label | Purpose |
| --- | --- | --- |
| `book-request` | Book Request | Parent, student, or teacher requests a book or sample follow-up. |
| `school-partnership` | School Partnership | School or administrator asks about partnership possibilities. |
| `teacher-inquiry` | Teacher Inquiry | Teacher asks about classroom resources or future teacher tools. |
| `general-inquiry` | General Inquiry | General contact message. |

## Contact Form Fields

Required fields:

| Field | Type | Required | Validation |
| --- | --- | --- | --- |
| `name` | text | Yes | 2-100 characters. |
| `email` | email | Yes | Valid email format. |
| `inquiryType` | select | Yes | One supported inquiry type. |
| `message` | textarea | Yes | 10-2000 characters. |

Optional fields:

| Field | Type | Required | Validation |
| --- | --- | --- | --- |
| `phone` | tel | No | Allow common phone formats. |
| `country` | text/select | No | 2-100 characters. |

## Request Book Form Fields

Required fields:

| Field | Type | Required | Validation |
| --- | --- | --- | --- |
| `name` | text | Yes | 2-100 characters. |
| `email` | email | Yes | Valid email format. |
| `country` | text/select | Yes | 2-100 characters. |
| `gradeLevel` | select | Yes | Grade 1 through Grade 10, Teacher, Parent, or Other. |
| `bookInterestedIn` | select | Yes | Foundations, Core Math, Advanced Mathematics, or Not Sure. |

Optional fields:

| Field | Type | Required | Validation |
| --- | --- | --- | --- |
| `phone` | tel | No | Allow common phone formats. |
| `message` | textarea | No | Maximum 2000 characters. |
| `role` | select | No | Parent, Student, Teacher, School Administrator, Other. |

## Shared Hidden Metadata

Each submission should include:

- `sourcePage`, current page path.
- `sourceSection`, optional CTA section identifier.
- `submittedAt`, ISO timestamp.
- `userAgent`, optional.
- `utmSource`, if present.
- `utmMedium`, if present.
- `utmCampaign`, if present.
- `utmTerm`, if present.
- `utmContent`, if present.

Do not rely on hidden metadata for security.

## Validation Rules

Client-side validation:

- Provide immediate feedback for missing required fields.
- Validate email format before submission.
- Keep error messages clear and human.
- Do not clear user-entered fields after a validation error.

Server-side validation:

- Repeat all required-field and type validation.
- Reject unsupported inquiry types.
- Trim string fields.
- Limit maximum field lengths.
- Reject submissions that fail spam checks.

Accessibility:

- Every input must have a visible label.
- Error messages must be associated with the relevant field.
- Success and error summaries must be announced to assistive technology.
- Required fields must be indicated in text, not by color alone.

## Submission Behavior

Preferred Phase 1 behavior:

- Submit to Formspree endpoint `https://formspree.io/f/mrewzvoz`.
- Validate the payload.
- Store or forward the inquiry through Formspree.
- Return a clear success or error state.

Production requirement:

- A production deployment must use the configured Formspree endpoint unless a later decision replaces it.

## Storage and Notification

The implementation should abstract submission handling behind a replaceable boundary.

Acceptable Phase 1 destinations:

- Formspree endpoint `https://formspree.io/f/mrewzvoz`.

Required stored or forwarded fields:

- Inquiry type.
- Name.
- Email.
- Message or book interest details.
- Submitted timestamp.
- Source page.
- Consent status if consent checkbox is used.

Do not store:

- Payment card data.
- Passwords.
- Sensitive student data.
- Unnecessary personal information.

## Success States

Contact form success message:

- `Thank you for contacting Ganitra. We received your message and will respond as soon as possible.`

Request book success message:

- `Thank you for your book request. We received your details and will follow up with availability and next steps.`

School partnership success message:

- `Thank you for your interest in school partnerships. We received your inquiry and will follow up with more information.`

Success state requirements:

- Show confirmation without navigating unexpectedly.
- Keep a visible next step.
- Do not imply immediate book delivery or purchase.
- Do not mention payment collection.

## Error States

Error state requirements:

- Preserve entered data.
- Explain what failed.
- Identify field-level errors when possible.
- Provide a retry path.
- Provide a fallback contact email if configured.

Generic error message:

- `Something went wrong while sending your message. Please try again, or contact us directly by email.`

## Spam Protection

Use at least one spam-reduction method in production:

- Honeypot field.
- Rate limiting.
- CAPTCHA or turnstile service.
- Server-side bot detection from the form provider.

Rules:

- Honeypot fields must be hidden from users and assistive technology.
- CAPTCHA must not block accessibility.
- Rate limiting must not expose private implementation details.

## Privacy and Consent

Phase 1 must:

- Link to a privacy policy if personal data is collected on a public deployment.
- Explain that submitted information is used to respond to the inquiry.
- Avoid collecting student age, school records, grades, or sensitive student data.

Recommended consent copy:

- `Ganitra will use this information to respond to your inquiry.`

For users under 13:

- Do not ask children to submit personal information directly.
- Prefer parent or teacher contact paths.

## Future Payment Readiness

Phase 1 does not integrate payments.

Future payment readiness means:

- Request records should include book interest and grade level.
- Book data should support future fields for price, currency, SKU, format, and availability.
- Form submission logic should be separate from future checkout logic.
- User-facing CTAs should avoid purchase wording until checkout exists.

Do not:

- Collect payment details.
- Simulate checkout.
- Display fake pricing.
- Create order records unless a real order flow exists.

## Data Shape

Submission records should support this conceptual shape:

```text
InquirySubmission
  id
  inquiryType
  name
  email
  phone
  country
  role
  gradeLevel
  bookInterestedIn
  message
  sourcePage
  sourceSection
  utm
  consent
  submittedAt
  status
```

Status values:

- `new`
- `sent`
- `failed`
- `spam`
- `archived`

## Testing Checklist

Before a form is complete:

- Required fields validate.
- Invalid email shows a clear error.
- Unsupported inquiry type is rejected.
- Success state appears after valid submission.
- Error state appears after failed submission.
- Keyboard-only users can complete the form.
- Screen readers receive field labels and errors.
- Mobile users can complete the form at 375px width.
- Duplicate rapid submissions are prevented or handled.
- No payment language appears.
