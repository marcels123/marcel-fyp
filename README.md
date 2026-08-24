# DigiMed AI

A final year project exploring how artificial intelligence is transforming digital media — gaming, film, and music — built as a full-stack Next.js web app with live AI integration.

Users can read curated breakdowns of AI's impact on each industry, test their knowledge with interactive quizzes, and try prompts against a real AI model (Google Gemini) directly in the browser.

## Features

- **Learning content** — dedicated pages covering AI's role in gaming, film, and music, each with real-world examples and sourced claims
- **Interactive quizzes** — randomized answer ordering, retry-on-wrong-answer, and a completion screen per topic
- **AI Playground** — send prompts to Gemini and see live responses, with usage history saved per account
- **Authentication** — email/password sign-up and login via Firebase Authentication
- **Persistence** — user profiles and AI interaction history stored in Firestore

## Tech stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) + TypeScript |
| UI | Tailwind CSS, [shadcn/ui](https://ui.shadcn.com) components, Radix UI primitives |
| Auth & Database | [Firebase](https://firebase.google.com) (Authentication + Firestore) |
| AI | [Google Gemini API](https://ai.google.dev) via the [Vercel AI SDK](https://sdk.vercel.ai) |

## Getting started

### Prerequisites

- Node.js 18+
- A [Firebase](https://console.firebase.google.com) project (Authentication + Firestore enabled)
- A [Google Gemini API key](https://makersuite.google.com/app/apikey)

### Setup

```bash
npm install
```

Create a `.env.local` file in the project root:

```env
GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here
```

Then run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

See [SETUP.md](./SETUP.md) for full Firebase configuration details.

### Available scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run start` — start the production server
- `npm run lint` — run ESLint

## Project structure

```
src/
├── app/                  # Next.js App Router pages and API routes
│   ├── api/ai/           # AI generation endpoint
│   ├── authentication/   # Login / register pages
│   └── dashboard/        # Learning content, quizzes, AI playground
├── components/
│   ├── auth/             # Login / register forms
│   ├── features/         # Feature-specific components (AI playground, quizzes)
│   ├── layout/            # Navbar, footer
│   └── ui/                # Reusable shadcn/ui-based components
├── lib/
│   ├── ai/                # AI provider integration (Gemini)
│   ├── context/           # Auth context/provider
│   └── firebase/          # Firebase config and Firestore services
└── data/quizzes/          # Quiz content
```

## About this project

This was built as an individual final year project. It's no longer under active feature development, but the codebase is kept as a portfolio reference — feel free to look around.
