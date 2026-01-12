# Hatchlab Design System Rules

## Color Palette

### Primary Colors
- **Primary Yellow**: `#FFFF00` - Used for highlights, buttons, and accent elements
- **Header Background**: `#121018` - Used for header and main sections
- **Footer Background**: `#0b0b0b` - Used for footer and card backgrounds
- **Background Dark**: `#121018` - Used for main page background
- **Text White**: `#ffffff` - Primary text color
- **Text Gray**: `#ffffff` - Secondary text color

### Background Usage
- **Homepage sections**: All sections use background color `#121018`
- **Cards**: Use `rgba(255, 255, 255, 0.05)` with white borders for better contrast
- **Gallery section**: Keep existing background (different from other sections)

## Typography System

### Section Titles
- **Font Size**: 2.5rem (desktop), 1.8rem (mobile ≤768px), 1.5rem (small mobile ≤480px), 1.8rem (MacBook Air 1024px-1440px)
- **Font Weight**: 700 (bold)
- **Color**: var(--primary-yellow) which is #FFFF00 (pure yellow)
- **Font Family**: 'Lora', serif (inherited from global styles)
- **Margin Bottom**: 50px
- **Position**: Centered with display: inline-block
- **Padding Bottom**: 15px
- **Decorative Element**: Yellow gradient underline (300px wide, 2px height) positioned at the bottom center
- **Special Cases**: About Us (150px underline), Gallery (120px underline)

### Section Subtitles
- **Font Size**: 1.2rem (desktop), 1.1rem (mobile ≤768px)
- **Color**: var(--text-white) which is #ffffff
- **Margin Bottom**: 50px

### Body Text & Paragraphs
- **Font Size**: 1.2rem (desktop), 1.1rem (mobile ≤768px), 1rem (small mobile ≤480px)
- **Line Height**: 1.7-1.8 for optimal readability
- **Color**: var(--text-white) which is #ffffff
- **Font Family**: 'Lora', serif

### Card Text
- **Font Size**: 1.2rem (desktop), 1.1rem (mobile ≤768px), 1rem (small mobile ≤480px)
- **Line Height**: Inherited from global styles (1.6)
- **Color**: var(--text-white) which is #ffffff

## Component Guidelines

### Cards
- Background: `rgba(255, 255, 255, 0.05)`
- Border: `2px solid #ffffff`
- Hover border: `#FFFF00`
- Border radius: `12px`
- Padding: `30px`

### Icons
- Default color: `#FFFF00`
- Background circles: Use semi-transparent yellow `rgba(255, 255, 0, 0.2)` for consistent styling
- Size: `1.8rem` for main icons, `1.5rem` for smaller icons
- Circle size: `100px` for service icons, `60px` for other sections
- Border radius: `50%` for circular backgrounds

### Buttons
- Primary: White background with black text
- Hover: Box shadow with white glow
- Secondary: Yellow border with transparent background

## Responsive Design
- Mobile: Single column layouts
- Tablet: Adjusted spacing and font sizes
- Desktop: Multi-column grids with proper spacing