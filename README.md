# InTen Platform

**10-minute expert consultations marketplace**

InTen is a revolutionary platform connecting people who need quick expert advice with consultants who can provide value in just 10 minutes. Built with modern web technologies for speed, scalability, and user experience.

## Project Status

**Phase 1: Foundation - Point 1 COMPLETED**

- Next.js 14 project initialized with App Router
- Tailwind CSS configured with custom design tokens
- GitHub repository created and connected
- Vercel deployment pipeline established
- Environment variables template ready

## Links

- **Production:** https://inten-six.vercel.app
- **GitHub:** https://github.com/01gaunte/inten
- **Roadmap:** See `INTEN_ROADMAP.md` in parent directory

## Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | Next.js 14 (App Router) | Server-side rendering, routing |
| Styling | Tailwind CSS | Utility-first styling |
| Authentication | Clerk | User authentication & management |
| Database | Neon (PostgreSQL) | Serverless database |
| Hosting | Vercel | Deployment & hosting |
| Calendar | Cal.com | Booking & scheduling |
| Video | Daily.co | Video calls |
| Payments | Stripe Connect | Marketplace payments |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/01gaunte/inten.git
cd inten

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your API keys

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
inten/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   ├── ui/          # Shared UI components
│   │   ├── forms/       # Form components
│   │   ├── booking/     # Booking-specific
│   │   └── video/       # Video call components
│   ├── lib/             # Utilities and helpers
│   └── types/           # TypeScript type definitions
├── prisma/              # Database schema
└── public/              # Static assets
```

## Development Roadmap

See [INTEN_ROADMAP.md](../INTEN_ROADMAP.md) for detailed 10-point development plan.

### Next Steps (Point 2)

- Integrate Clerk authentication
- Configure sign-up/sign-in flows
- Implement protected routes
- Create onboarding flow

## Contributing

This project is currently in active development. Contribution guidelines will be added as the project matures.

## License

Copyright 2026 Adam Matthews / Bia Electric. All rights reserved.
