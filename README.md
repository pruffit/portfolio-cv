# Portfolio CV - Kotlaev Danil

Professional portfolio website showcasing my experience as a Frontend Developer with 4+ years of expertise in modern web applications.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4.1
- **UI Components:** shadcn/ui
- **Animations:** Motion (Framer Motion)
- **Internationalization:** react-i18next
- **Architecture:** Feature-Sliced Design (FSD)
- **Testing:** Vitest + React Testing Library
- **Code Quality:** ESLint + Prettier

## Features

- Dark/Light theme toggle (dark by default)
- Multi-language support (Russian/English)
- Fully responsive design (320px - 1920px+)
- Interactive Flappy Bird mini-game
- Modern, minimalist UI inspired by Next.js
- Accessibility-first approach
- Optimized performance
- Downloadable CV in PDF format

## Sections

- **About Me** - Introduction and professional summary
- **Skills** - Technical stack and expertise levels
- **Experience** - Work history and achievements
- **Projects** - Portfolio showcase
- **Hobbies** - Personal interests
- **Achievements** - Certificates and accomplishments
- **Game** - Interactive Flappy Bird
- **Contacts** - Social links and contact information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/pruffit/portfolio-cv.git
cd portfolio-cv

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check

# Type check
npm run type-check
```

## Project Structure
```
portfolio-cv/
├── src/
│   ├── app/           # Application initialization
│   │   ├── providers/ # Providers (theme, i18n)
│   │   ├── styles/    # Global styles
│   │   └── App.tsx    # Root component
│   ├── pages/         # Page components
│   ├── widgets/       # Complex UI blocks
│   ├── features/      # User interactions
│   ├── entities/      # Business entities
│   ├── shared/        # Reusable code
│   │   ├── ui/        # UI components (shadcn)
│   │   ├── lib/       # Utilities and helpers
│   │   └── hooks/     # Custom React hooks
│   └── main.tsx       # Entry point
├── public/            # Static assets
└── tests/             # E2E and integration tests
```

## Architecture

This project follows Feature-Sliced Design (FSD) methodology:

- **app** - Application initialization, providers, global styles
- **pages** - Route pages composition
- **widgets** - Large composite blocks
- **features** - User interactions and business features
- **entities** - Business entities and their logic
- **shared** - Reusable infrastructure code

## Deployment

The site is deployed on GitHub Pages:
[https://pruffit.github.io/portfolio-cv/](https://pruffit.github.io/portfolio-cv/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**KOTLAEV DANIL**

- Email: kotlaevdanil@gmail.com
- Telegram: [@userpruffit](https://t.me/userpruffit)
- GitHub: [@pruffit](https://github.com/pruffit)

## Acknowledgments

- Design inspiration: [Next.js](https://nextjs.org/)
- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Icons: [Lucide Icons](https://lucide.dev/)

---

Built with care and attention to detail by KOTLAEV DANIL