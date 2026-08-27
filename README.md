# The Caffeine Culture

A responsive and modern front-end coffee shop website built with HTML, SCSS, and JavaScript. Features dynamic component loading, product listings, shopping cart functionality, and a fully responsive design.

## Features

- **Dynamic Component Loading** - Header and footer loaded dynamically
- **Product Showcase** - Display premium coffee products with descriptions and pricing
- **Responsive Design** - Mobile-first approach with desktop optimization
- **Animation Libraries** - AOS and Swiper integration
- **Modern Styling** - SCSS with organized structure (abstracts, components, pages)
- **Shopping Cart Ready** - Product cart utilities prepared for future e-commerce expansion
- **Local Storage Support** - Browser storage helpers for lightweight state management

## Project Structure

```text
The Caffeine Culture - Website/
├── index.html              # Home page
├── about.html              # About page
├── products.html           # Products page
├── contact.html            # Contact page
├── checkout.html           # Checkout page
├── style-guide.html        # UI style reference page
├── header.html             # Shared header component
├── footer.html             # Shared footer component
├── assets/
│   ├── css/
│   │   └── main.css        # Compiled stylesheet
│   └── images/             # Image assets
├── js/
│   ├── main.js             # Shared page setup logic
│   └── components/
│       ├── header.js       # Navigation behavior
│       └── footer.js       # Footer-related logic placeholder
├── scss/
│   ├── main.scss                 # Main SCSS entry point
│   ├── abstracts/
│   │   ├── _mixins.scss          # Reusable Sass mixins
│   │   └── _variables.scss      # Theme colors, spacing, and typography variables
│   ├── components/
│   │   ├── _buttons.scss         # Button styles
│   │   ├── _footer.scss          # Footer styles
│   │   ├── _header.scss          # Header styles
│   │   ├── _navigation.scss      # Navigation styles
│   │   └── _typography.scss      # Typography styles
│   └── pages/
│       ├── _about.scss           # About page styles
│       ├── _checkout.scss        # Checkout page styles
│       ├── _contact.scss         # Contact page styles
│       ├── _home.scss            # Home page styles
│       ├── _products.scss        # Products page styles
│       └── style-guide.scss      # Style guide page styles
└── README.md                     # Project documentation
```

## Technologies Used

- **HTML5** - Semantic markup
- **SCSS** - Advanced CSS preprocessing
- **JavaScript (ES6+)** - Modern JavaScript
- **Animation Libraries**:
  - AOS - Scroll animations
  - Swiper - Carousel/slider

## Getting Started

### Prerequisites

- Node.js and npm (for Sass compilation)
- A modern web browser
- A code editor (VS Code recommended)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd "The Caffeine Culture - Website"
```

2. Install Sass (if not already installed):

```bash
npm install -g sass
```

3. Compile SCSS to CSS:

```bash
sass scss/main.scss assets/css/main.css
```

### Development

To watch SCSS files for changes:

```bash
sass --watch scss:assets/css
```

Open `index.html` in your browser to view the website.

## File Organization

### HTML Pages

All pages include:

- Dynamic component loading via `js/main.js`
- External CDN libraries (AOS, Swiper)
- Local JavaScript and CSS files

### JavaScript Modules

- `js/main.js` - Core functionality

### SCSS Architecture

- **Abstracts**: Variables and mixins used across the site
- **Components**: Reusable styles for the header, footer, buttons, navigation, and typography
- **Pages**: Page-specific SCSS files for home, about, products, contact, checkout, and style guide
- **Main entry point**: [scss/main.scss](scss/main.scss) imports the shared and page-specific styles

## Contact

For questions or feedback about The Caffeine Culture, please use the contact page or reach out through the provided contact details.
