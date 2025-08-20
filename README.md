# Belajar LinkedIn Landing Page

A modern, responsive landing page promoting the "Mastering LinkedIn for Career Growth" online class. Built with HTML, Tailwind CSS v4, and vanilla JavaScript, featuring smooth animations, interactive components, and mobile-first design.

## 🚀 Features

### Visual & Interactive Elements

- **Responsive Design**: Mobile-first approach with seamless desktop scaling
- **Smooth Animations**: Custom fade-in animations and CSS transitions
- **Interactive Navigation**: Mobile hamburger menu with smooth toggle animations
- **Image Gallery Modal**: Click-to-expand image viewer with keyboard navigation
- **FAQ Accordion**: Collapsible sections with smooth transitions

### Technical Highlights

- **Modern CSS**: Tailwind CSS v4 with custom theme configuration
- **Performance Optimized**: Efficient CSS compilation and minimal JavaScript
- **Accessibility**: Semantic HTML structure and keyboard navigation support
- **Cross-browser Compatible**: Modern browser support with graceful degradation

### Sections

1. **Hero Section**: Eye-catching banner with call-to-action
2. **About Class**: Detailed course description
3. **Key Benefits**: Interactive benefit cards with hover effects
4. **Class Activities**: Image gallery with modal functionality
5. **Alumni Testimonials**: Social proof with avatar interactions
6. **FAQ Section**: Expandable accordion interface
7. **Registration**: Clear call-to-action section

## 🛠 Tech Stack

- **HTML5**: Semantic markup structure
- **Tailwind CSS v4**: Utility-first CSS framework with custom theming
- **Vanilla JavaScript**: Modern ES6+ features for interactivity
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Poppins font family for typography

## 🚦 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (usually comes with Node.js)

You can check your versions by running:

```bash
node --version
npm --version
```

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd belajar-linkedin-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install / npm i
   ```
   This will install:
   - Tailwind CSS v4.1.12
   - Tailwind CLI
   - Prettier (for code formatting)
   - Prettier Tailwind plugin

### Running the Project

#### Development Mode

For active development with automatic CSS compilation:

```bash
npm run dev
```

This command:

- Watches for changes in `src/input.css`
- Automatically compiles Tailwind CSS to `public/css/style.css`
- Continues running until you stop it (Ctrl+C)

#### Production Build

To build CSS for production (one-time compilation):

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./public/css/style.min.css --minify
```

And point the styling in html to the style that has been minified

#### Serving the Files

Since this is a static website, you can serve it using any of these methods:

**Option 1: Live Server (Recommended for development)**

- Install the Live Server extension in VS Code
- Right-click `index.html` and select "Open with Live Server"

**Option 2: Python HTTP Server**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000`

**Option 3: Node.js HTTP Server**

```bash
# Install globally (one-time)
npm install -g http-server

# Run server
http-server
```

**Option 4: Browser (Basic)**

- Simply open `index.html` in your web browser
- Note: Some features may not work due to CORS restrictions

## 🎨 Customization

### Colors

The project uses a custom color scheme defined in `src/input.css`:

```css
--color-primary: rgba(0, 89, 134, 0.95); /* Dark Blue */
--color-secondary: rgba(0, 158, 222, 0.9); /* Light Blue */
--color-tertiary: rgba(255, 211, 78, 1); /* Yellow/Gold */
```

### Typography

Uses Google Fonts (Poppins) with fallbacks:

```css
--font-poppins: "Poppins", "Arial", "sans-serif";
```

### Modifying Animations

Custom animations are defined in the CSS:

- `fadeInUp`: Entrance animation for elements
- `fade-in`: Scroll-triggered animations via Intersection Observer

## 📱 Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile**: iOS Safari 14+, Chrome Mobile 88+
- **Features**: CSS Custom Properties, CSS Grid, Flexbox, ES6+

## 🔧 Scripts

- `npm run dev`: Start development mode with CSS watching
- `npm run prod`: Start minify style for production

## 📄 File Descriptions

### Core Files

- **`index.html`**: Main HTML structure with semantic markup
- **`src/input.css`**: Source CSS with Tailwind directives and custom components
- **`public/css/style.css`**: Compiled CSS (auto-generated, don't edit directly)
- **`public/script/index.js`**: JavaScript for interactivity

### Configuration Files

- **`package.json`**: Project metadata and dependencies
- **`.prettierrc`**: Code formatting rules
- **`.gitignore`**: Files excluded from version control

## 🎯 Key Features Implementation

### Mobile Navigation

- Hamburger menu with CSS-only animations
- Smooth slide transitions
- Auto-close on link click

### Image Modal System

- Click any image to open in modal
- Keyboard navigation (ESC to close)
- Smooth zoom animations
- Overlay background click to close

### Scroll Animations

- Intersection Observer API for performance
- Staggered animations on scroll
- Smooth fade-in effects

### Accordion FAQ

- Single-active accordion pattern
- Smooth expand/collapse animations
- Icon rotation transitions

## 🚀 Deployment

This static site can be deployed to:

- **GitHub Pages**: Push to GitHub and enable Pages
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your Git repository
- **Any Web Host**: Upload all files to public_html or www folder

### Build for Deployment

1. Run production build: `npx @tailwindcss/cli -i ./src/input.css -o ./public/css/style.min.css --minify`
2. Upload all files to your hosting provider
3. Ensure `index.html` is in the root directory

**Happy Learning! 🎓**
