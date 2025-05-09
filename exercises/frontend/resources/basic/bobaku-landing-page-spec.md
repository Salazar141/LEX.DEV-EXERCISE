# BobaKu Landing Page - Specifications

## Overview

This document provides detailed specifications for the BobaKu landing page rebuild exercise. The page consists of 6 main sections and should be implemented as a responsive webpage using HTML, CSS, and minimal JavaScript for interactions.

## Page Sections

### 1. Navigation Bar (Sticky)

- **Logo**: BobaKu logo on the left side
- **Menu Items**: Home, Menu, About Us, Locations, Contact
- **Shopping Cart Icon**: On the right side
- **Behavior**: Should stick to the top when scrolling
- **Mobile**: Transforms into a hamburger menu

### 2. Hero Section

- **Background**: Brown gradient background
- **Content**:
  - Headline: "Fresh Premium Boba"
  - Subheadline: "Experience the authentic taste of Taiwan with our handcrafted bubble tea"
  - CTA Button: "ORDER NOW"
- **Hero Image**: Feature image of signature boba drink
- **Mobile**: Text stacks above image

### 3. Featured Products

- **Section Title**: "Our Signature Drinks"
- **Layout**: 3x2 grid of product cards (2x3 on tablet, 1x6 on mobile)
- **Each Card Contains**:
  - Product Image
  - Product Name
  - Price
  - "Add to Cart" button
- **Hover Effect**: Subtle scale and shadow increase

### 4. About Section

- **Background**: Dark brown background
- **Content**:
  - Heading: "Our Story"
  - Paragraph about BobaKu's history and mission
  - "LEARN MORE" button
- **Mobile**: Text is centered and button takes full width

### 5. Testimonials

- **Section Title**: "What Our Customers Say"
- **Content**: Customer testimonial cards with:
  - Customer photo/avatar
  - Customer name
  - Testimonial text
- **Desktop**: Show 1 testimonial at a time
- **Interaction**: Left/right navigation arrows (Optional: Auto-slide every 5 seconds)

### 6. Footer

- **Content**:
  - Copyright text
  - Social media icons
  - Quick links (repeated from navbar)
  - Newsletter signup (optional for extra challenge)
- **Background**: Dark brown (same as navbar)

## Responsive Behavior

### Desktop (>992px)
- Full layout as described
- Max content width of 1200px centered
- 3 products per row

### Tablet (576px - 992px)
- 2 products per row
- Hero section with slightly smaller image
- Navbar remains horizontal

### Mobile (<576px)
- 1 product per row
- Hero text above hero image
- Hamburger menu
- Full-width buttons
- Stacked layout for all sections

## Interactive Elements

### Required
- Sticky navigation
- Hover effects on buttons and cards
- Smooth scroll to sections when navigation links are clicked

### Optional (Extra Challenge)
- Simple fade-in animations as user scrolls down the page
- Testimonial carousel/slider
- Dynamic shopping cart counter

## Performance Requirements

- All images should be optimized for web
- Page should score at least 90 on Google Lighthouse performance
- First contentful paint under 1.5s

## Accessibility Requirements

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Color contrast following WCAG guidelines
