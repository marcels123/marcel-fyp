# Setup Guide

## Environment Configuration

### 1. Create your environment file

Create a `.env.local` file in the project root.

### 2. Configure API keys

Add your Gemini API key to `.env.local`:

```env
# AI API key (required)
GOOGLE_GEMINI_API_KEY=your_actual_gemini_api_key_here

# Optional: override the default model
GEMINI_MODEL_NAME=gemini-1.5-flash
```

### 3. Get a Gemini API key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy it into `.env.local`

### 4. Restart the development server

After adding your API key, restart the dev server so it picks up the new environment variable:

```bash
npm run dev
```

## Firebase configuration

The Firebase project config lives in `src/lib/firebase/firebase.ts`. The project uses:
- Firebase Authentication (email/password) for user management
- Firestore for storing user profiles and AI interaction history

To point the app at your own Firebase project, replace the config object in that file with your own project's config (found in Firebase Console → Project Settings).

## Features

### Authentication
- User registration and login
- User profiles stored in Firestore
- Protected routes and components

### AI Playground
- Prompts sent to Gemini via the `/api/ai` route
- AI interactions automatically saved to Firestore for signed-in users
- Real-time API key status checking (`/api/ai/status`)
- Authentication required to use the playground

### Data storage
- User profiles with roles and preferences
- AI interaction history with timestamps

## Troubleshooting

### AI model not working
1. Check that `GOOGLE_GEMINI_API_KEY` is set correctly in `.env.local`
2. Verify the key is valid by testing it in [Google AI Studio](https://makersuite.google.com/app/apikey)
3. Restart the development server after adding/changing the key
4. Check the browser console and terminal for error messages

### Firebase issues
1. Ensure your Firebase project has Authentication and Firestore enabled
2. Check that Firestore security rules allow read/write access for authenticated users
3. Verify the config in `src/lib/firebase/firebase.ts` matches your Firebase project

### Authentication issues
1. Make sure Email/Password sign-in is enabled in Firebase Console → Authentication → Sign-in method
2. Verify the Firebase config is correct
