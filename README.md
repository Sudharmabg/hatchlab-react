# Hatchlab Innovations - React Migration

A clean, modern React application migrated from the original HTML/CSS/JS website with improved code practices and consistent design.

## Features

- **Consistent Yellow Color**: Pure #FFFF00 used throughout the application
- **Unified Header & Footer**: Same components across all pages
- **Mobile Optimized**: Responsive design for mobile devices
- **MacBook Air Optimized**: Specific optimizations for MacBook Air screens (1366x768 - 1440x900)
- **Clean Code Practices**: Modern React patterns with component-based architecture
- **Performance Optimized**: Efficient rendering and animations

## Tech Stack

- React 18.2.0
- React Router DOM 6.3.0
- CSS3 with CSS Variables
- Font Awesome Icons
- Particles.js for background effects

## Project Structure

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.js
│   │   └── Header.css
│   └── Footer/
│       ├── Footer.js
│       └── Footer.css
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Services/
│   ├── Careers/
│   └── Contact/
├── App.js
├── App.css
├── index.js
└── index.css
```

## Design System

### Colors
- Primary Yellow: `#FFFF00`
- Background Dark: `#0f0f16`
- Text White: `#ffffff`
- Text Gray: `#ddd`
- Card Background: `rgba(255, 255, 255, 0.05)`

### Typography
- Font Family: 'Lora', serif
- Responsive font sizes for different screen sizes

### Responsive Breakpoints
- Mobile: ≤ 768px
- Small Mobile: ≤ 480px
- MacBook Air: 1024px - 1440px
- Desktop: > 1440px

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Key Improvements from Original

1. **Component-Based Architecture**: Reusable Header and Footer components
2. **Consistent Styling**: CSS variables for consistent theming
3. **Better Performance**: React's virtual DOM and optimized rendering
4. **Maintainable Code**: Separated concerns with individual component files
5. **Modern JavaScript**: ES6+ features and React hooks
6. **Responsive Design**: Mobile-first approach with specific optimizations
7. **Accessibility**: Better semantic HTML and ARIA labels

## Mobile Optimizations

- Responsive header with mobile-specific layout
- Touch-friendly button sizes (minimum 44px)
- Optimized font sizes for mobile screens
- Proper viewport handling
- Reduced animations on mobile for better performance

## MacBook Air Optimizations

- Specific grid layouts for MacBook Air screen sizes
- Optimized spacing and typography
- Balanced content layout for 1366x768 and 1440x900 resolutions

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Follow the existing code structure
2. Use CSS variables for colors and spacing
3. Ensure mobile responsiveness
4. Test on different screen sizes
5. Maintain consistent naming conventions