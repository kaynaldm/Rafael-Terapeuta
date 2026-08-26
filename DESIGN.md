---
name: Nocturne Glass
colors:
  surface: '#121315'
  surface-dim: '#121315'
  surface-bright: '#38393b'
  surface-container-lowest: '#0d0e10'
  surface-container-low: '#1b1c1e'
  surface-container: '#1f2022'
  surface-container-high: '#292a2c'
  surface-container-highest: '#343537'
  on-surface: '#e3e2e4'
  on-surface-variant: '#c4c6ce'
  inverse-surface: '#e3e2e4'
  inverse-on-surface: '#303032'
  outline: '#8e9198'
  outline-variant: '#43474d'
  surface-tint: '#b1c8e9'
  primary: '#b1c8e9'
  on-primary: '#1a324c'
  primary-container: '#001a33'
  on-primary-container: '#6d84a2'
  inverse-primary: '#4a607c'
  secondary: '#a7c8ff'
  on-secondary: '#003061'
  secondary-container: '#1f477b'
  on-secondary-container: '#93b6f1'
  tertiary: '#f6b99e'
  on-tertiary: '#4c2714'
  tertiary-container: '#2f1002'
  on-tertiary-container: '#aa765e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b1c8e9'
  on-primary-fixed: '#021c36'
  on-primary-fixed-variant: '#324863'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a7c8ff'
  on-secondary-fixed: '#001b3c'
  on-secondary-fixed-variant: '#1f477b'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#f6b99e'
  on-tertiary-fixed: '#321203'
  on-tertiary-fixed-variant: '#663c28'
  background: '#121315'
  on-background: '#e3e2e4'
  surface-variant: '#343537'
typography:
  name-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.15em
  slogan-display:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: 0.02em
  slogan-display-mobile:
    fontFamily: Bebas Neue
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 32px
  link-title:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  link-description:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-padding: 1.5rem
  stack-gap: 0.75rem
  section-margin: 2.5rem
  glass-padding-x: 1.25rem
  glass-padding-y: 1rem
---

## Brand & Style
The design system is centered on a high-end, mobile-first aesthetic for creators and professionals. It utilizes **Glassmorphism** as its core visual driver, blending deep atmospheric tones with sharp, translucent layers. The brand personality is professional, modern, and high-contrast, evoking the feel of a premium night-mode interface. 

The user experience should feel lightweight yet grounded, using heavy backdrop blurs to maintain legibility over potentially complex background gradients or imagery.

## Colors
This design system operates exclusively in a dark-themed, high-contrast palette. 
- **Primary & Secondary:** Deep navy blues used for background gradients and structural depth.
- **Surface:** Glassmorphism is achieved through semi-transparent white fills with a low opacity, paired with a subtle white stroke to define edges.
- **Typography:** Pure white (#FFFFFF) is used for all text to ensure maximum readability against the dark, translucent surfaces.

## Typography
Typography is a primary differentiator in this design system. 
- **Name Badge:** Uses *Plus Jakarta Sans* with heavy tracking (0.15em) to create an airy, premium brand mark at the top of the profile.
- **Slogan:** Uses *Bebas Neue* for an impactful, poster-style editorial look. It should always be all-caps.
- **UI Text:** *Inter* provides a functional, systematic contrast to the display type, ensuring links and secondary info are legible at a glance.

## Layout & Spacing
The layout is a single-column, fluid mobile-first stack. 
- **Centering:** All header elements (avatar, name badge, slogan) are center-aligned.
- **The Stack:** Interactive elements are stacked vertically with a consistent 12px (0.75rem) gap.
- **Safe Zones:** Content is contained within a max-width of 560px for desktop viewing, while stretching to fill the screen width on mobile with 24px side margins.

## Elevation & Depth
Depth is created through optical transparency rather than traditional drop shadows.
- **Backdrop Blur:** All interactive "glass" containers must apply a `backdrop-filter: blur(12px)`.
- **Layering:** Backgrounds should feature a subtle radial gradient from `#003366` at the top center to `#001A33` at the bottom to provide a sense of environment behind the glass.
- **Border:** A 1px solid border at 15% white opacity mimics the "sheen" of a glass edge, catching light to separate the element from the dark background.

## Shapes
The design system utilizes a **Pill-shaped (3)** geometry for all primary interactive elements. This softness balances the "hard" high-contrast typography. Circular elements are used exclusively for profile avatars and icon containers within buttons.

## Components
- **Pill Buttons (Links):** The primary component. Features a glassmorphism background, a 1px white border (15% opacity), and a circular icon container on the far left. The text is center-aligned relative to the button width, but offset by the icon.
- **Icon Containers:** Perfect circles within the button. They should have a slightly higher opacity fill (20% white) to distinguish them from the button surface.
- **Profile Avatar:** A large, 96px circular image at the top with a 2px white border.
- **Menu Icon:** Floating or positioned top-right, using a minimalist "meatball" or "hamburger" icon with no background container.
- **Social Grid:** A horizontal row of simple white icons at the bottom of the stack, with no background containers, spaced 24px apart.
- **Input Fields:** If used for newsletter signups, they follow the pill-shaped glassmorphism style with placeholder text at 50% opacity.