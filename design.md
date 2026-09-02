# E&W Software Agency --- Website Design System & Page Plan

## 1. Project Overview

The E&W website is a premium software-agency website designed to
communicate three things immediately:

1.  **E&W is professional.**
2.  **E&W can build serious digital products.**
3.  **E&W is modern and technically capable without looking overly
    futuristic.**

The visual direction is:

> **Premium minimalist + dark interface + subtle technology-inspired
> interactions.**

The website should feel sophisticated, calm, confident, and intentional.

The E&W monogram is the visual identity anchor. Its burnt-orange color
should be treated as a **signal color** rather than a color that fills
the entire website.

The design should avoid the common "everything is glowing, animated, and
futuristic" developer-portfolio look. Interactions should be small,
purposeful, and connected to the content.

---

# 2. Core Design Philosophy

The website should follow one simple principle:

> **Dark and calm by default. Orange appears when something matters.**

Orange should indicate:

- Active elements
- Hover states
- Important actions
- Selected items
- Progress
- Small visual highlights
- The E&W logo

The interface should primarily use dark neutrals, off-white typography,
and restrained orange accents.

The goal is for a visitor to feel:

> "These people know how to design and build software."

rather than:

> "This website has lots of animations."

---

# 3. Recommended Color System

## Primary Palette

Role Color Hex

---

Main Background Near Black `#08090B`
Secondary Background Dark Navy `#0E1117`
Card / Surface Charcoal Navy `#151922`
Border Subtle Slate `#252A35`
Primary Text Warm Off-White `#F5F5F2`
Secondary Text Muted Gray `#969BA6`
Brand Orange Burnt Orange `#D65316`
Orange Hover Bright Orange `#F06A27`

## Usage Ratio

A useful starting point is:

- **60%** --- dark backgrounds
- **25%** --- dark surfaces/cards
- **10%** --- white/off-white typography
- **5%** --- orange accents

The exact percentages do not need to be mathematically enforced. They
represent the visual hierarchy.

## Important Rule

Do not use orange for every important element.

If everything is orange, nothing feels important.

Orange should behave like an **indicator light**:

> Something is active → orange.

> Something is selected → orange.

> Something requires attention → orange.

> Something is clickable → orange.

---

# 4. Typography

The typography should contrast with the expressive E&W logo.

## Recommended Fonts

### Primary Option

- **Headings:** Space Grotesk
- **Body:** Inter

### Alternative

- **Headings:** Manrope
- **Body:** Manrope

The typography should be clean, modern, and highly readable.

## Headings

Large headings should be confident rather than decorative.

Example:

> WE BUILD DIGITAL PRODUCTS THAT MOVE BUSINESS.

Use large type, generous spacing, and a limited number of words.

## Body Text

Keep body text relatively short.

Avoid large walls of copy.

The website should communicate through:

- Strong headings
- Short descriptions
- Visual examples
- Interactive elements
- Case studies

---

# 5. Global Layout

The homepage should tell a story.

The visitor should naturally move through these questions:

```text
HERO
↓
Who are you?

SELECTED WORK
↓
Can you actually build?

SERVICES
↓
What can you build for me?

PROCESS
↓
How will we work together?

ABOUT / TRUST
↓
Why should I trust you?

FINAL CTA
↓
How do I start?
```

This is the primary information architecture.

---

# 6. Global Navigation

The navigation should remain simple.

Example:

```text
E&W          WORK    SERVICES    ABOUT    CONTACT       START A PROJECT →
```

## Behavior

At the top:

- Transparent or nearly transparent background
- E&W logo in burnt orange
- Light navigation text

After scrolling:

- Slightly darker translucent background
- Backdrop blur
- Very subtle bottom border
- Navigation remains visible

The navigation should not dominate the screen.

## Mobile Navigation

On mobile, use:

```text
E&W                                      MENU
```

Opening the menu should produce a clean full-screen or large overlay
navigation.

---

# 7. Homepage

The homepage is the primary sales and brand experience.

It should contain:

1.  Hero
2.  Client / company logo marquee
3.  Selected Work
4.  Services
5.  Process
6.  About / Trust
7.  Final CTA
8.  Footer

The client-logo marquee is intentionally included near the top because
it provides social proof without requiring a large testimonial section.

---

# 8. Section 01 --- Hero

## Purpose

The Hero answers:

> **Who are you and what do you do?**

It should not attempt to explain the entire company.

## Recommended Content

Small label:

> SOFTWARE AGENCY

Main heading:

> WE BUILD DIGITAL PRODUCTS THAT MOVE BUSINESS.

Supporting text:

> We design and build modern software for ambitious businesses.

Primary CTA:

> START A PROJECT →

Secondary CTA:

> VIEW OUR WORK →

## Visual Direction

The E&W logo should be the main visual element on the right side of the
Hero.

Do not replace it with a generic stock image.

The logo should sit inside a subtle technical environment:

- Faint grid
- Small points/nodes
- Very soft orange glow
- Generous negative space

The logo should remain recognizable and clean.

---

# 9. Hero Interactions

The Hero should contain only a few subtle interactions.

## 9.1 Logo Parallax

As the mouse moves, the E&W logo moves very slightly in the opposite
direction.

Keep the movement around a few pixels.

The purpose is simply to make the visual feel responsive.

Do not make the logo fly around the screen.

## 9.2 Logo Glow

Place a very soft orange radial glow behind the logo.

When the cursor moves closer to the logo:

- Glow becomes slightly stronger
- It follows the cursor subtly
- It fades when the cursor moves away

The effect should be almost subconscious.

## 9.3 Interactive Grid

Use an extremely faint grid behind the logo.

The grid can respond to the mouse:

- Nearby points brighten slightly
- Lines can shift or illuminate subtly
- Cursor movement creates a small area of interaction

The grid should be low opacity.

It should not compete with the typography.

## 9.4 CTA Hover

For:

> START A PROJECT →

On hover:

- Border/background becomes slightly brighter
- Orange glow increases slightly
- Arrow moves a few pixels
- Optional subtle background fill

The interaction should feel like a polished UI control.

## 9.5 Scroll Indicator

A small indicator can sit near the bottom/right of the Hero:

```text
•
SCROLL
DOWN
```

The dot can gently pulse.

---

# 10. Section 02 --- Client / Company Logo Marquee

This is an important addition to the original structure.

Instead of immediately showing project cards, show a compact
social-proof section containing logos of companies or organizations E&W
has worked with.

## Purpose

It answers:

> **Who has trusted you?**

This creates credibility without requiring a large testimonial section.

## Layout

Example:

```text
TRUSTED BY

Company A     Company B     Company C     Company D     Company E
      ←──────────── moving continuously ────────────→
```

The logos should move horizontally from **right to left** continuously.

## Animation

The marquee should:

- Move slowly
- Loop seamlessly
- Maintain constant speed
- Never visibly jump
- Work on desktop and mobile

The animation should feel like a premium brand ticker rather than a
distracting carousel.

## Interaction

When the user hovers over the marquee:

Option A:

- Pause the movement.

Option B:

- Slow the movement significantly.

Option C:

- Keep moving but brighten the hovered logo.

Recommended approach:

> **Pause on hover.**

This gives the user control and makes the logos easier to inspect.

## Logo Treatment

Do not display every logo in its original loud brand colors.

Use:

- Monochrome white
- Soft gray
- Low-opacity versions

On hover:

- Logo becomes brighter
- Optional subtle orange underline or glow

This keeps the section consistent with the E&W identity.

## Important

Only display companies/organizations that E&W has actually worked with
or is legitimately allowed to represent.

Do not use fictional logos as social proof on the production website.

---

# 11. Section 03 --- Selected Work

## Purpose

The visitor now asks:

> **Can you actually build?**

This section proves it.

Instead of making this section only about company logos, use actual
projects and product interfaces.

## Heading

Example:

> SELECTED WORK

Then:

> Digital products we're proud of.

## Layout

Start with approximately three featured projects.

Each project should contain:

- Product screenshot/mockup
- Project name
- Industry/category
- Short description
- View case study link

Example:

```text
FINTECH PLATFORM

Payment infrastructure
for modern businesses.

VIEW CASE STUDY →
```

## Interaction

On hover:

- Card lifts slightly
- Border becomes subtly orange
- Product image shifts a few pixels
- Arrow moves
- Very subtle orange glow appears

Avoid excessive scaling.

A small movement is enough.

## Project Card Philosophy

The cards should look like miniature software products rather than
generic portfolio boxes.

Use:

- Dashboard previews
- Product UI
- Data visualizations
- App interfaces
- Browser frames where appropriate

This immediately communicates software capability.

---

# 12. Section 04 --- Services

## Purpose

The visitor now asks:

> **What can you build for me?**

Instead of six large cards, use an interactive service selector.

Example:

```text
WHAT WE DO

01  Web Applications
02  Mobile Applications
03  Custom Software
04  Automation & AI
05  UI / UX Design
```

A larger content area sits beside it.

When the user hovers over or selects a service, the content changes.

Example:

```text
WEB APPLICATIONS

We build fast, scalable web
applications designed around
your business.

→ EXPLORE SERVICE
```

## Interaction

Hover/select:

- Selected service becomes orange
- Small indicator line appears
- Description changes
- Supporting visual changes
- Other services remain muted

The effect should feel like navigating a software interface.

## Optional Visual

The right side could show:

- Small product mockup
- Diagram
- Browser preview
- Animated UI component

This makes the section feel alive without requiring a huge animation.

---

# 13. Section 05 --- Our Process

## Purpose

This answers:

> **What will it be like to work with you?**

Keep the process simple.

Recommended four steps:

```text
01 DISCOVER
02 DESIGN
03 BUILD
04 LAUNCH
```

## Content

### 01 --- Discover

Understand the business, users, goals, and challenges.

### 02 --- Design

Turn the idea into a clear and useful product experience.

### 03 --- Build

Develop, test, refine, and integrate the necessary systems.

### 04 --- Launch

Deploy the product and continue improving it.

## Interaction

Use a horizontal progress line.

As the user scrolls:

```text
DISCOVER ───── DESIGN ───── BUILD ───── LAUNCH
   ●
```

The orange progress indicator moves through the process.

When the user reaches each step:

- Step becomes brighter
- Icon becomes orange
- Description appears/emphasizes
- Progress line advances

This should be subtle scroll-driven interaction.

---

# 14. Section 06 --- About / Trust

## Purpose

This answers:

> **Why should I trust E&W?**

Do not make this section excessively long.

Use a strong statement.

Example:

> GOOD SOFTWARE ISN'T JUST ABOUT CODE.

Then:

> It's about understanding the problem, designing the right solution,
> and building something people actually want to use.

## Optional Supporting Content

You can include:

- Company philosophy
- Short team introduction
- Small statistics if they are real
- Industries served
- Core principles

Do not manufacture impressive numbers.

If the agency is early-stage, strong positioning and honesty are more
valuable than fake statistics.

---

# 15. Section 07 --- Final CTA

This is the conversion section.

By this point, the visitor has seen:

- Who E&W is
- Who has worked with E&W
- What E&W has built
- What E&W can build
- How E&W works
- Why E&W cares about quality

Now ask for action.

## Recommended Structure

Small label:

> LET'S BUILD SOMETHING GREAT.

Large heading:

> HAVE A PROJECT IN MIND?

Then:

> LET'S TALK.

CTA:

> START A PROJECT →

## Visual

Use a subtle orange glow behind the CTA.

The section can have a slightly lighter surface than the surrounding
background.

Do not turn the entire CTA orange.

---

# 16. Footer

The footer should be simple and structured.

Possible columns:

```text
E&W
Software agency
building digital products.

NAVIGATION
Work
Services
About
Contact

SERVICES
Web Applications
Mobile Applications
Custom Software
Automation & AI

CONTACT
Email
Phone
Location

SOCIAL
LinkedIn
GitHub
X
```

The footer can include a small newsletter or updates field if there is a
genuine content strategy behind it.

---

# 17. Other Pages

The homepage should not contain everything.

The website should eventually have the following pages.

---

## 17.1 Work / Projects Page

Route concept:

```text
/work
```

Purpose:

> Show what E&W has built.

This should be a deeper portfolio experience.

Possible structure:

```text
WORK

Selected projects
and digital products.

[ALL] [WEB] [MOBILE] [SOFTWARE] [AUTOMATION]

PROJECT GRID
```

Each project can open into a dedicated case study.

### Interaction

Filters can animate smoothly.

Project cards can respond to hover.

The filter state can use orange as the active indicator.

---

## 17.2 Individual Case Study Page

Example:

```text
/work/project-name
```

This is where you tell the complete story.

Structure:

```text
PROJECT NAME

Short project statement

[Product visual]

OVERVIEW

THE CHALLENGE

THE SOLUTION

THE PROCESS

THE RESULT

TECHNOLOGY

[Next Project →]
```

Case studies should focus on:

> Problem → Process → Solution → Result

rather than simply listing technologies.

---

## 17.3 Services Page

Route:

```text
/services
```

This is a deeper version of the homepage services section.

Possible service categories:

- Web Applications
- Mobile Applications
- Custom Software
- Automation
- AI Integration
- UI/UX Design

Each service should explain:

- What it is
- Who it is for
- What E&W provides
- Typical workflow
- Relevant projects
- CTA

---

## 17.4 About Page

Route:

```text
/about
```

This should explain:

- E&W's story
- Philosophy
- Approach
- Values
- Team
- Why the agency exists

Keep the tone human.

The website should not feel like a faceless technology corporation.

---

## 17.5 Contact / Start a Project Page

Route:

```text
/contact
```

or:

```text
/start-a-project
```

I prefer:

> **/start-a-project**

because it feels more intentional.

Possible form:

```text
WHAT ARE YOU LOOKING TO BUILD?

Name
Email
Company
Project type
Budget range
Timeline
Tell us about the project

[ SEND PROJECT INQUIRY → ]
```

The form should be clean and simple.

Inputs can use subtle orange focus states.

---

# 18. Interaction System

The website should use a consistent interaction language.

## Navigation

- Blur on scroll
- Active link indicator
- Smooth transitions

## Buttons

- Arrow movement
- Orange glow
- Border/fill transition

## Cards

- Small lift
- Image movement
- Border highlight

## Logo

- Subtle parallax
- Glow response

## Background

- Interactive grid
- Very subtle particles/nodes

## Services

- Content switching

## Process

- Scroll progress

## Client Logos

- Continuous right-to-left movement
- Pause on hover

## Text

- Small reveal animations on scroll

## Page Transitions

Optional.

If implemented, keep them quick and subtle.

---

# 19. Animation Rules

The website should follow one major rule:

> **Animation should explain or reinforce something.**

Good animation:

- Shows what is active
- Reveals content
- Provides feedback
- Creates hierarchy
- Adds brand personality

Bad animation:

- Exists only because it looks cool
- Makes text difficult to read
- Delays the user
- Causes excessive movement
- Competes with the CTA

## Recommended Timing

Most UI interactions:

- 150--300ms

Larger transitions:

- 400--700ms

Scroll reveals:

- Approximately 500--800ms

Avoid making ordinary UI interactions feel slow.

---

# 20. Accessibility and Professionalism

The premium look must not come at the expense of usability.

Ensure:

- Good text contrast
- Keyboard navigation
- Visible focus states
- Reduced-motion support
- Buttons are clearly identifiable
- Animations can be reduced
- Mobile interactions do not depend on hover
- Touch targets are large enough

The website should still feel excellent when animations are disabled.

---

# 21. Mobile Design

The desktop design should not simply be squeezed onto mobile.

On mobile:

### Hero

Stack:

```text
SOFTWARE AGENCY

WE BUILD
DIGITAL PRODUCTS
THAT MOVE BUSINESS.

Description

[ START A PROJECT ]

E&W LOGO
```

### Client Logo Marquee

Continue horizontal movement, but reduce the number of visible logos.

### Services

Turn the horizontal selector into an accordion or vertically stacked
interactive list.

### Process

Turn the horizontal timeline into a vertical timeline:

```text
01 DISCOVER
   │
   ↓
02 DESIGN
   │
   ↓
03 BUILD
   │
   ↓
04 LAUNCH
```

### Projects

Use a single-column card layout.

---

# 22. What NOT to Do

Avoid:

- Excessive neon
- Huge glowing text
- Too many gradients
- Orange everywhere
- Constant particle animations
- Excessive 3D objects
- Overly rounded cards
- Generic stock photography
- Fake statistics
- Too many technology logos
- Long paragraphs
- Five different CTA styles
- Animations that slow navigation

The goal is:

> **Premium software agency, not gaming website.**

---

# 23. The E&W Brand Personality

The visual identity should communicate:

### Professional

Dark, structured layout and refined typography.

### Technical

Interactive UI details, grids, product previews, and system-like
elements.

### Creative

Distinctive E&W monogram and thoughtful motion.

### Confident

Large statements, strong spacing, and minimal unnecessary copy.

### Human

Clear language and a genuine About section.

---

# 24. Recommended Homepage Order

The final homepage order should be:

```text
01  NAVIGATION

02  HERO
    Who are we?

03  CLIENT LOGO MARQUEE
    Who trusts us?

04  SELECTED WORK
    What have we built?

05  SERVICES
    What can we build?

06  PROCESS
    How do we work?

07  ABOUT / TRUST
    Why E&W?

08  FINAL CTA
    Let's work together.

09  FOOTER
```

This is the structure to build first.

Do not add more sections until there is a real content or business
reason to add them.

---

# 25. The Design in One Sentence

If the entire design had to be explained in one sentence:

> **E&W is a dark, premium software-agency website where a distinctive
> burnt-orange monogram acts as the visual signal, while subtle
> interactions make the interface feel intelligent and responsive
> without overwhelming the user.**

---

# 26. Build Priority

Do not try to build every interaction at once.

Build in this order:

### Phase 1 --- Foundation

- Color system
- Typography
- Navbar
- Buttons
- Cards
- Spacing
- Responsive layout

### Phase 2 --- Core Pages

- Homepage
- Work
- Case Study
- Services
- About
- Start a Project

### Phase 3 --- Core Interactions

- Hover states
- Logo marquee
- Project card interactions
- Service selector
- Process progress

### Phase 4 --- Hero Interactions

- Interactive grid
- Logo parallax
- Orange glow
- Scroll indicator

### Phase 5 --- Refinement

- Scroll reveals
- Page transitions
- Micro-interactions
- Accessibility
- Reduced-motion support
- Performance optimization

This prevents the project from becoming an animation experiment before
the actual website is finished.

---

# 27. Final Design Direction

The website should ultimately feel like:

```text
                    E&W

        DARK + MINIMAL + TECHNICAL

                     ↓

        Clean typography
        Strong whitespace
        Burnt-orange signals
        Product-focused visuals
        Subtle interactions
        Smooth motion
        Clear conversion paths

                     ↓

          PREMIUM SOFTWARE AGENCY
```

The most important thing is not to make the website look complicated.

Make it look **intentional**.

The visitor should notice the quality of the spacing, typography,
product visuals, transitions, and hierarchy before they consciously
notice the animations.

# Note in Regard to the Logo:

    # Logo System — Background Adaptive

    The E&W logo must be designed as a flexible brand asset that integrates naturally with both dark and light backgrounds.

    The logo should **never appear inside an unnecessary white or colored rectangular box** when used on the website or other branded materials. The surrounding background should remain visible around the logo.

    ## Dark Mode / Dark Background

    When the logo is placed on a dark background:

    - Use a transparent background.
    - The E&W symbol should remain clearly visible.
    - Use the primary E&W burnt-orange brand color for the logo.
    - Do not place the logo inside a white rectangle.
    - The logo should visually sit directly on the dark surface.
    - A very subtle orange glow may be used in interactive or Hero contexts, but the glow must not be part of the core logo asset.

    Example:

        Dark Background
        ─────────────────────────

                E&W
            Burnt Orange

        ─────────────────────────

    The logo asset should have transparency so the dark website background naturally shows through.

    ## Light Mode / Light Background

    When the logo is placed on a white or light background:

    - Use a transparent background.
    - The logo should remain in the E&W burnt-orange brand color where sufficient contrast exists.
    - If the orange does not provide sufficient contrast on a particular light surface, use an approved darker E&W logo variant.
    - Never add a white rectangle behind the logo simply to make it work on a light background.

    Example:

        Light Background
        ─────────────────────────

                E&W
            Burnt Orange

        ─────────────────────────

    ## Logo Variants

    The brand should maintain at least three official logo variants:

    ### 1. Primary Orange Logo

    Used on:

    - Light backgrounds
    - White backgrounds
    - Light posters
    - Light sections

    Color:
    `#D65316`

    Background:
    `Transparent`

    ### 2. Orange + Light Logo

    Used when additional contrast is required on dark surfaces.

    Possible treatment:

    - E&W orange as the primary visual
    - Approved light/off-white elements where necessary

    Background:
    `Transparent`

    ### 3. Monochrome Logo

    A single-color version for situations where the brand must work in a single color.

    Variants:

    - White logo for dark backgrounds
    - Dark logo for light backgrounds

    Background:
    `Transparent`

    ## Core Rule

    The E&W logo must be treated as a **transparent vector-style brand mark**, not as an image placed inside a colored rectangle.

    The background belongs to the design environment, not to the logo.

    Therefore:

    > **The logo adapts to the background; the background should not be forced to adapt to the logo.**

    This rule applies across:

    - Website
    - Dark mode
    - Light mode
    - Hero section
    - Navigation
    - Footer
    - Project case studies
    - Social media graphics
    - Posters
    - Presentations
    - Business documents
    - Marketing materials

    ## Website Implementation

    The website should use transparent logo assets, preferably SVG.

    Example:

        /public/logo/
            ew-logo-orange.svg
            ew-logo-white.svg
            ew-logo-dark.svg

    The website should select the appropriate logo variant based on the surface/background on which it appears.

    For dark mode:

        Dark surface → Orange or White logo

    For light mode:

        Light surface → Orange or Dark logo

    The logo should never contain its own white background unless a specific print-production requirement makes it necessary.

    ## Logo Integrity

    Do not:

    - Add arbitrary background colors to the logo
    - Place the logo inside a white square
    - Add permanent shadows
    - Add permanent glows
    - Change the logo's proportions
    - Stretch or distort the mark
    - Apply gradients directly to the core logo
    - Change the brand orange arbitrarily

    Effects such as glow, hover illumination, or animation should be implemented by the website/interface around the logo rather than baked into the logo asset.

    ## Responsive and Interactive Usage

    The logo must remain visually clear across:

    - Desktop
    - Tablet
    - Mobile
    - Navigation
    - Hero
    - Footer
    - Light mode
    - Dark mode

    When animated, the logo itself should remain visually consistent. Motion, glow, parallax, and hover effects should be treated as interface effects rather than permanent changes to the brand mark.
