# Setup Guide

## Environment Configuration

### 1. Copy Environment File

Copy the example environment file to create your local configuration:

```bash
cp env.example .env.local
```

### 2. Configure API Keys

Edit `.env.local` and add your API keys:

```env
# AI API Keys
GOOGLE_GEMINI_API_KEY=your_actual_gemini_api_key_here
OPENAI_API_KEY=your_actual_openai_api_key_here

# Optional: Model names (these have defaults)
GEMINI_MODEL_NAME=gemini-pro
OPENAI_MODEL_NAME=gpt-4-turbo
```

### 3. Get API Keys

#### Google Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key and paste it in your `.env.local` file

#### OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new API key
3. Copy the key and paste it in your `.env.local` file

### 4. Restart Development Server

After adding your API keys, restart your development server:

```bash
npm run dev
```

## Firebase Configuration

The Firebase configuration is already set up in `src/firebase.ts`. The project uses:
- Firebase Authentication for user management
- Firestore for storing user profiles and AI interactions

## Features

### Authentication
- User registration and login
- User profiles stored in Firestore
- Protected routes and components

### AI Playground
- Support for both Gemini and OpenAI models
- Automatic storage of AI interactions in Firestore
- Real-time API key status checking
- Authentication required for AI features

### Data Storage
- User profiles with roles and preferences
- AI interaction history with timestamps
- Session-based interaction tracking

## Troubleshooting

### AI Models Not Working
1. Check that your API keys are correctly set in `.env.local`
2. Verify the API keys are valid by testing them in their respective platforms
3. Restart your development server after adding API keys
4. Check the browser console for any error messages

### Firebase Issues
1. Ensure your Firebase project is properly configured
2. Check that Firestore rules allow read/write access
3. Verify the Firebase config in `src/firebase.ts` matches your project

### Authentication Issues
1. Make sure Firebase Authentication is enabled in your Firebase console
2. Check that email/password authentication is enabled
3. Verify the Firebase config is correct 