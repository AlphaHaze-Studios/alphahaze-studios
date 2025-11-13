# AlphaHaze Studios Website

## Overview

AlphaHaze Studios is a single-page indie game studio website built with React, TypeScript, and modern web technologies. The site showcases the studio's mobile games with a clean, premium aesthetic inspired by modern indie game studios. It features smooth scrolling animations, responsive design, and a comprehensive game catalog with detailed individual game pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing
- **TanStack Query** for data fetching and state management
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** component library with Radix UI primitives

**Design System:**
- Light theme throughout with neutral color palette
- Primary accent color: #3C79F5 (modern blue)
- Tailwind spacing units: 4, 8, 12, 16, 24 for consistent rhythm
- Custom CSS variables for theming flexibility
- Responsive breakpoints for mobile, tablet, and desktop

**Component Architecture:**
- Reusable UI components from shadcn/ui located in `client/src/components/ui/`
- Custom components (Navigation, Footer) for site-specific layouts
- Page components in `client/src/pages/` following route structure
- Intersection Observer for scroll-based animations

**Routing Structure:**
- `/` - Home page with hero section and featured content
- `/games` - Grid layout of all games
- `/games/:gameId` - Individual game detail pages with screenshots, FAQs
- `/about` - Studio story and mission
- `/contact` - Contact information and social links
- `/privacy` - Privacy policy
- `/terms` - Terms and conditions

**User Experience Patterns:**
- Sticky navigation bar with centered logo
- Smooth scroll animations with fade-in effects
- Full-viewport height sections on homepage
- Hover effects on cards and links
- Mobile-responsive grid layouts (1 column → 2 columns → 3 columns)

### Backend Architecture

**Server Setup:**
- Express.js server for production serving
- Vite middleware integration for development
- Static file serving from `dist/public`
- API routes prefixed with `/api`
- In-memory storage implementation (MemStorage class)

**Database Schema:**
- PostgreSQL with Drizzle ORM
- Neon serverless database connection
- User table with id, username, password fields
- UUID primary keys generated server-side
- Drizzle-Zod integration for schema validation

**Storage Interface:**
- IStorage interface defines CRUD operations
- MemStorage provides in-memory implementation
- Methods: getUser, getUserByUsername, createUser
- Designed for easy swap to database-backed storage

### External Dependencies

**UI Component Libraries:**
- **Radix UI** - Headless UI primitives for accessible components (accordion, dialog, dropdown, etc.)
- **shadcn/ui** - Pre-styled component system built on Radix
- **Lucide React** - Icon library
- **React Icons** - Additional icon sets (SiX, SiInstagram, SiYoutube)

**Animation & Interaction:**
- **Embla Carousel** - Touch-friendly carousel for game screenshots
- **React Day Picker** - Date selection components
- **cmdk** - Command palette functionality

**Form Handling:**
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Zod resolver for React Hook Form

**Database & ORM:**
- **Drizzle ORM** - Type-safe ORM with PostgreSQL support
- **@neondatabase/serverless** - Serverless PostgreSQL driver
- **drizzle-zod** - Zod schema generation from Drizzle schemas
- **connect-pg-simple** - PostgreSQL session store

**Development Tools:**
- **Replit plugins** - Development banner, error overlay, cartographer
- **PostCSS** - CSS processing with Tailwind and Autoprefixer
- **esbuild** - Fast JavaScript bundler for production builds
- **tsx** - TypeScript execution for development

**Third-Party Integrations:**
- Google Play Store - External links for game downloads and studio page
- Placeholder links throughout for social media (Twitter, Instagram, YouTube)
- Official Google Play badge images for download buttons

**Asset Management:**
- Static assets stored in `attached_assets/` directory
- Generated game images referenced via `@assets` path alias
- Vite alias configuration for clean imports