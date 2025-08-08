export interface MusicQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const musicAIQuestions: MusicQuizQuestion[] = [
  {
    id: 1,
    question: "What is AI-generated music?",
    options: [
      "Music created entirely by humans",
      "Music composed and produced using artificial intelligence algorithms",
      "Music played by robots",
      "Music from traditional instruments only"
    ],
    correctAnswer: "Music composed and produced using artificial intelligence algorithms",
    explanation: "AI-generated music uses machine learning algorithms to compose, arrange, and produce music, creating original compositions without human composition."
  },
  {
    id: 2,
    question: "How does AI assist in music mixing and mastering?",
    options: [
      "By playing instruments",
      "By automatically balancing levels, EQ, and compression",
      "By writing lyrics",
      "By managing concert schedules"
    ],
    correctAnswer: "By automatically balancing levels, EQ, and compression",
    explanation: "AI can automatically analyze audio tracks and apply professional mixing and mastering techniques, balancing levels, EQ, compression, and other audio processing."
  },
  {
    id: 3,
    question: "What is AI-powered music recommendation based on?",
    options: [
      "Only genre preferences",
      "Listening patterns, mood, time of day, and user behavior analysis",
      "Artist popularity only",
      "Album release dates"
    ],
    correctAnswer: "Listening patterns, mood, time of day, and user behavior analysis",
    explanation: "AI analyzes multiple factors including listening patterns, mood, time of day, user behavior, and musical characteristics to provide personalized recommendations."
  },
  {
    id: 4,
    question: "How does AI help in music copyright detection?",
    options: [
      "By writing new songs",
      "By analyzing audio fingerprints and detecting potential copyright infringements",
      "By creating music videos",
      "By managing royalties"
    ],
    correctAnswer: "By analyzing audio fingerprints and detecting potential copyright infringements",
    explanation: "AI can analyze audio fingerprints and detect similarities between songs, helping identify potential copyright infringements and protect intellectual property."
  },
  {
    id: 5,
    question: "What is a challenge with AI-generated music?",
    options: [
      "Faster music production",
      "Ensuring originality and avoiding copyright issues",
      "Better sound quality",
      "Lower production costs"
    ],
    correctAnswer: "Ensuring originality and avoiding copyright issues",
    explanation: "AI-generated music faces challenges in ensuring originality and avoiding copyright issues, as it may inadvertently reproduce elements from existing copyrighted works."
  }
]; 