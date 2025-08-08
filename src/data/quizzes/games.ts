export interface GamesQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const gamesAIQuestions: GamesQuizQuestion[] = [
  {
    id: 1,
    question: "What is Procedural Content Generation in gaming?",
    options: [
      "AI creating game levels and worlds automatically",
      "Manual level design by developers",
      "Player-created content",
      "Pre-made game templates"
    ],
    correctAnswer: "AI creating game levels and worlds automatically",
    explanation: "Procedural Content Generation uses AI algorithms to automatically create game levels, worlds, and content, as seen in games like No Man's Sky."
  },
  {
    id: 2,
    question: "Which gaming feature uses AI to adjust difficulty based on player performance?",
    options: [
      "Static difficulty levels",
      "Dynamic Difficulty Adjustment",
      "Manual difficulty selection",
      "Random difficulty changes"
    ],
    correctAnswer: "Dynamic Difficulty Adjustment",
    explanation: "Dynamic Difficulty Adjustment (DDA) uses AI to monitor player performance and automatically adjust game difficulty to maintain engagement."
  },
  {
    id: 3,
    question: "What is the main benefit of AI-driven NPCs in games?",
    options: [
      "Reduced game file size",
      "More realistic and responsive character behavior",
      "Faster game loading times",
      "Lower development costs"
    ],
    correctAnswer: "More realistic and responsive character behavior",
    explanation: "AI-driven NPCs can react realistically to player actions and provide more immersive gaming experiences."
  },
  {
    id: 4,
    question: "How does AI help in game testing and quality assurance?",
    options: [
      "By playing the game manually",
      "By automating bug detection and testing processes",
      "By creating game trailers",
      "By managing player accounts"
    ],
    correctAnswer: "By automating bug detection and testing processes",
    explanation: "AI algorithms can automatically test games, identify bugs and glitches rapidly, and significantly shorten development cycles."
  },
  {
    id: 5,
    question: "What is a potential negative impact of AI in gaming?",
    options: [
      "Faster game development",
      "AI biases in generated content",
      "Better graphics quality",
      "Improved player experience"
    ],
    correctAnswer: "AI biases in generated content",
    explanation: "AI-generated content can perpetuate biases from training datasets, potentially leading to problematic representations in games."
  }
];
