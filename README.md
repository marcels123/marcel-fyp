# DigiMed AI - Final Year Project

A comprehensive web application exploring the intersection of artificial intelligence and digital media, built with Next.js, Firebase, and modern web technologies.

## Features

### AI Integration
- **AI Playground**: Interactive interface for testing AI models
- **Gemini Integration**: Google's Gemini AI for advanced text generation
- **OpenAI Integration**: Access to OpenAI's language models
- **AI Model Selection**: Choose between different AI providers

### Learning Modules
- **Film & AI**: Explore AI applications in film production
- **Music & AI**: Discover AI in music composition and production
- **Gaming & AI**: Learn about AI in game development
- **Interactive Quizzes**: Test knowledge with randomized questions

### Authentication
- **Firebase Authentication**: Secure user registration and login
- **Protected Routes**: Access control for authenticated users
- **User Management**: Profile management and session handling

### Modern UI/UX
- **Responsive Design**: Works seamlessly on all devices
- **Dark/Light Mode**: Theme switching capability
- **Tailwind CSS**: Modern styling with utility classes
- **Component Library**: Reusable UI components

## Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Framer Motion**: Smooth animations

### Backend & Services
- **Firebase**: Authentication and database
- **Google Gemini AI**: Advanced AI capabilities
- **OpenAI API**: Language model integration

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Prisma**: Database ORM (if needed)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/marcel-fyp.git
   cd marcel-fyp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

   # AI API Keys
   OPENAI_API_KEY=your_openai_api_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── authentication/    # Auth pages (login/register)
│   ├── dashboard/         # Main application pages
│   └── globals.css       # Global styles
├── components/            # Reusable React components
│   ├── auth/             # Authentication components
│   ├── features/         # Feature-specific components
│   ├── layout/           # Layout components
│   └── ui/               # UI component library
├── data/                 # Static data (quizzes, etc.)
├── lib/                  # Utility functions and configurations
└── types/                # TypeScript type definitions
```

## Key Components

### Authentication System
- **LoginForm**: User authentication with Firebase
- **RegisterForm**: New user registration
- **AuthWrapper**: Route protection for authenticated users
- **AuthContext**: Global authentication state management

### Quiz System
- **QuizCarousel**: Interactive quiz with randomized answers
- **Question Data**: Structured quiz content for different topics
- **Progress Tracking**: User progress and completion tracking

### AI Integration
- **AIPlayground**: Interactive AI model testing
- **ModelSelector**: Choose between different AI providers
- **ResponseDisplay**: Show AI-generated responses

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

### Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Add your Firebase config to environment variables

### AI API Setup
1. Get API keys from [OpenAI](https://platform.openai.com/) and [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add API keys to environment variables

## Features in Detail

### Interactive Quizzes
- **Randomized Answers**: Questions shuffle answer positions
- **Progress Tracking**: Track completion and scores
- **Retry Functionality**: Restart quizzes without page reload
- **Multiple Topics**: Film, Music, and Gaming AI quizzes

### AI Playground
- **Model Selection**: Choose between different AI providers
- **Real-time Responses**: Get instant AI-generated content
- **Error Handling**: Graceful error management
- **Response History**: View previous interactions

### User Authentication
- **Secure Login**: Firebase-powered authentication
- **Registration**: New user account creation
- **Session Management**: Persistent login sessions
- **Protected Content**: Access control for features

## Design System

The project uses a consistent design system with:
- **Color Palette**: Purple primary (#635bff) with gray accents
- **Typography**: Geist font family for modern readability
- **Components**: Reusable UI components with consistent styling
- **Responsive**: Mobile-first design approach

## Security

- **Firebase Security**: Industry-standard authentication
- **Environment Variables**: Secure API key management
- **Input Validation**: Client and server-side validation
- **CORS Protection**: Cross-origin request handling

**Note**: This is a Final Year Project exploring AI in Digital Media. For educational and research purposes.
