export interface FilmQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const filmAIQuestions: FilmQuizQuestion[] = [
  {
    id: 1,
    question: "What is Deepfake technology in film?",
    options: [
      "AI-generated synthetic media that replaces faces and voices",
      "Traditional makeup and prosthetics",
      "Computer-generated imagery (CGI)",
      "Stop-motion animation"
    ],
    correctAnswer: "AI-generated synthetic media that replaces faces and voices",
    explanation: "Deepfake technology uses AI to create synthetic media by replacing faces and voices in videos, allowing for realistic digital manipulation of actors and scenes."
  },
  {
    id: 2,
    question: "How does AI assist in film editing?",
    options: [
      "By manually cutting film reels",
      "By automatically analysing scenes and suggesting edits",
      "By creating film trailers",
      "By managing film budgets"
    ],
    correctAnswer: "By automatically analysing scenes and suggesting edits",
    explanation: "AI can analyse film scenes, detect patterns, and suggest optimal editing points, helping editors work more efficiently and creatively."
  },
  {
    id: 3,
    question: "What is AI-powered video enhancement used for?",
    options: [
      "Only for special effects",
      "Restoring old films, upscaling resolution, and improving quality",
      "Creating film posters",
      "Managing film schedules"
    ],
    correctAnswer: "Restoring old films, upscaling resolution, and improving quality",
    explanation: "AI-powered video enhancement can restore old films, upscale resolution, improve image quality, and enhance visual effects."
  },
  {
    id: 4,
    question: "How does AI help in film script analysis?",
    options: [
      "By writing complete scripts",
      "By analysing plot structure, character development, and predicting audience reception",
      "By creating film budgets",
      "By managing film crews"
    ],
    correctAnswer: "By analysing plot structure, character development, and predicting audience reception",
    explanation: "AI can analyse scripts for plot structure, character development, pacing, and even predict potential audience reception and box office performance."
  },
  {
    id: 5,
    question: "What is a potential concern with AI in film production?",
    options: [
      "Faster film production",
      "Job displacement for traditional film workers",
      "Better visual effects",
      "Improved film quality"
    ],
    correctAnswer: "Job displacement for traditional film workers",
    explanation: "AI automation in film production could potentially displace traditional film workers, raising concerns about job security in the industry."
  }
]; 