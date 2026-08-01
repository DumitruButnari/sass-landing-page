# SaaS Landing Page

A modern, responsive landing page built with React, Vite, and TailwindCSS. Designed for SaaS products with a sleek UI and smooth user experience.

## Features

- **Modern UI/UX**: Clean, contemporary design with smooth animations
- **Responsive Design**: Fully responsive layout that works on all devices
- **Feature Showcase**: Highlight key product features with icons and descriptions
- **Pricing Section**: Display pricing plans with feature comparisons
- **FAQ Section**: Accordion-style frequently asked questions
- **Testimonials**: Customer reviews and social proof
- **Social Links**: Integration with social media platforms
- **Smooth Scrolling**: Enhanced navigation with react-scroll
- **Count-up Animations**: Animated counters for statistics
- **Cross-platform Icons**: iOS, Android, Windows, and Web platform icons

## Tech Stack

- **React 18.3.1** - UI library
- **Vite 8.2.0** - Build tool and dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **React Scroll** - Smooth scrolling
- **React CountUp** - Number animations
- **React Slidedown** - Accordion animations
- **CLSX** - Conditional className utility

## Prerequisites

- Node.js 24.0 or higher
- Yarn or npm

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sass-landing-page
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

## Available Scripts

- `yarn dev` - Start the development server with hot module replacement
- `yarn build` - Build the project for production
- `yarn preview` - Preview the production build locally
- `yarn lint` - Run ESLint to check for code issues

## Project Structure

```
sass-landing-page/
├── public/
│   └── images/          # Static images (logos, icons, testimonials)
├── src/
│   ├── assets/          # React assets
│   ├── components/      # Reusable React components
│   │   ├── Button.jsx
│   │   ├── FaqItem.jsx
│   │   └── Marker.jsx
│   ├── constants/       # Data constants and configuration
│   │   └── index.jsx
│   ├── sections/        # Page sections
│   │   ├── Download.jsx
│   │   ├── Faq.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Pricing.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global styles
│   ├── index.css        # Tailwind imports
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Deployment

This project is configured for deployment on Vercel. Simply connect your repository to Vercel, and it will automatically deploy.

For other platforms, run the build command:
```bash
yarn build
```

The output will be in the `dist` directory, which can be deployed to any static hosting service.

## Customization

### Colors and Styling
Modify the color scheme in `tailwind.config.js` to match your brand.

### Content
Update the content in `src/constants/index.jsx` to customize:
- Features
- Pricing plans
- FAQ items
- Testimonials
- Social links
- Platform links

### Images
Replace images in the `public/images/` directory with your own assets.

## License

This project is private.

## Support

For support, contact [your-email@example.com]
