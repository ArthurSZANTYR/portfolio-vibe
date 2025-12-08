# Portfolio Website Documentation

## Overview

A minimal, bold personal portfolio website built with pure HTML, CSS, and optional vanilla JavaScript. The site is designed to educate visitors about who you are and showcase your projects.

## Design Philosophy

- **Clarity**: Clean, readable content with strong typography
- **Confidence**: Bold design choices with strategic use of accent color
- **Simplicity**: Minimal interface with lots of white space
- **Monochrome + Accent**: Black and white with a single vibrant green accent

## File Structure

```
/
├── index.html          # Home page with hero and introduction
├── projects.html       # Projects page with grid of project cards
├── styles.css          # Global stylesheet
└── agent.md           # This documentation file
```

## Pages

### Home Page (`index.html`)
- **Hero Section**: Large, bold introduction with name and brief tagline
- **About Section**: Introduction text about who you are
- **Navigation**: Links to Home and Projects pages

### Projects Page (`projects.html`)
- **Page Header**: Title and subtitle
- **Projects Grid**: Responsive grid layout displaying project cards
- **Project Cards**: Each card contains a title and description
- **Navigation**: Links to Home and Projects pages

## Design System

### Color Palette
- **Background**: `#ffffff` (white)
- **Text**: `#000000` (black)
- **Accent**: `#00ff88` (vibrant green)

The accent color is used strategically for:
- Active navigation links
- Hover states on interactive elements
- Border highlights on project cards

### Typography

**Fonts** (loaded from Fontshare):
- **General Sans** (400): Body text, UI elements, buttons, navigation
- **Trench Slab** (500): Headings, titles, hero text

**Font Loading**:
```html
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@400&f[]=trench-slab@500&display=swap" rel="stylesheet">
```

### Layout Principles
- Maximum content width: 1200px
- Generous padding and margins
- Responsive breakpoints at 768px and 480px
- Mobile-first approach

## Responsive Design

The site is fully responsive with three main breakpoints:

1. **Desktop** (> 768px): Full layout with multi-column grids
2. **Tablet** (≤ 768px): Adjusted spacing, single-column project grid
3. **Mobile** (≤ 480px): Compact navigation, optimized spacing

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **No Frameworks**: Pure vanilla implementation
- **No Build Step**: Ready to deploy as-is

## Browser Compatibility

Works in all modern browsers that support:
- CSS Grid
- CSS Custom Properties (CSS Variables)
- Flexbox
- `clamp()` function for responsive typography

## Deployment

### Netlify (Recommended)

1. **Drag & Drop**:
   - Go to [Netlify](https://app.netlify.com)
   - Drag the entire project folder into the deploy area

2. **Git Integration**:
   - Connect your Git repository
   - Netlify will auto-deploy on push

3. **No Configuration Needed**:
   - No build command required
   - No publish directory to set
   - Works immediately

### Other Static Hosting

The site can be deployed to any static hosting service:
- GitHub Pages
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- Any web server

Simply upload all files maintaining the directory structure.

## Customization

### Replacing Placeholder Content

1. **Home Page** (`index.html`):
   - Replace `[Your Name]` in the hero title
   - Update hero subtitle
   - Replace placeholder paragraphs in the intro section

2. **Projects Page** (`projects.html`):
   - Update project titles
   - Replace project descriptions
   - Add or remove project cards as needed

### Styling Adjustments

All styles are in `styles.css`. Key areas to customize:

- **Colors**: Modify CSS variables in `:root`
- **Typography**: Adjust font sizes using `clamp()` values
- **Spacing**: Modify padding and margin values
- **Layout**: Adjust grid columns and breakpoints

### Adding More Pages

To add additional pages:

1. Create new HTML file (e.g., `contact.html`)
2. Copy the structure from `index.html` or `projects.html`
3. Update navigation links in all pages
4. Add page-specific styles to `styles.css` if needed

## Content Guidelines

- Keep text concise and clear
- Use the accent color sparingly for emphasis
- Maintain consistent spacing
- Ensure all placeholder content is replaced before going live

## Maintenance

- All styles are in one CSS file for easy updates
- Semantic HTML makes content easy to modify
- No dependencies to manage or update
- Pure static files = fast loading times

## Future Enhancements (Optional)

If you want to add interactivity later, you can:

1. Create `script.js` for:
   - Smooth scroll animations
   - Mobile menu toggle
   - Form handling (if adding a contact page)
   - Light/dark mode toggle

2. Keep it minimal - the site is designed to be simple and fast

## Notes

- All content is currently placeholder text
- Replace all placeholder content before publishing
- The design emphasizes readability and simplicity
- The accent color should be used strategically, not everywhere

