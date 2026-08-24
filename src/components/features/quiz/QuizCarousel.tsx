"use client"

import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type CarouselApi } from "@/components/ui/carousel";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizCarouselProps {
  questions: Question[];
  topic: string;
}

export function QuizCarousel({ questions, topic }: QuizCarouselProps) {
  // State management for quiz functionality
  const [api, setApi] = useState<CarouselApi>(); 
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({}); 
  const [showResults, setShowResults] = useState<Record<number, boolean>>({}); 
  const [showFeedback, setShowFeedback] = useState(false); 
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Shuffle answers for each question - use useState to prevent re-shuffling on re-renders
  const [shuffledQuestions] = useState(() => 
    questions.map(question => {
      const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
      return {
        ...question,
        options: shuffledOptions,
        // Keep track of the correct answer in the shuffled array
        correctAnswer: question.correctAnswer
      };
    })
  );

  // Listen for carousel navigation changes
  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleAnswer = (questionId: number, selectedAnswer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedAnswer
    }));
  };

  // Check if the selected answer is correct
  const checkAnswer = (questionId: number) => {
    const isAnswerCorrect = shuffledQuestions[questionId].correctAnswer === answers[questionId];
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    setShowResults(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  // Navigate to next question or complete quiz
  const handleNext = () => {
    setShowFeedback(false);
    if (current < shuffledQuestions.length - 1) {
      api?.scrollNext();
    } else {
      // Quiz completed
      setQuizCompleted(true);
    }
  };

  // Allow user to retry the current question
  const handleTryAgain = () => {
    setShowFeedback(false);
    setAnswers(prev => ({
      ...prev,
      [current]: ''
    }));
    setShowResults(prev => ({
      ...prev,
      [current]: false
    }));
  };

  // Check if an option is currently selected
  const isAnswerSelected = (questionId: number, option: string) => {
    return answers[questionId] === option;
  };

  // Reset the entire quiz to start over
  const resetQuiz = () => {
    setAnswers({});
    setShowResults({});
    setShowFeedback(false);
    setIsCorrect(false);
    setQuizCompleted(false);
    setCurrent(0);
    api?.scrollTo(0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      <h2 className="text-2xl font-bold mb-6">{topic} Quiz</h2>
      
      {/* Main quiz carousel */}
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {shuffledQuestions.map((question, index) => (
            <CarouselItem key={question.id}>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Question {index + 1} of {shuffledQuestions.length}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">{question.question}</p>
                  {/* Answer options */}
                  <div className="space-y-2">
                    {question.options.map((option) => (
                      <Button
                        key={option}
                        onClick={() => handleAnswer(index, option)}
                        className={`w-full justify-start text-left ${
                          isAnswerSelected(index, option) ? 'bg-blue-100 text-blue-800' : ''
                        }`}
                        variant="outline"
                        disabled={showResults[index]}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">

                  {!showResults[index] && (
                    <Button
                      onClick={() => checkAnswer(index)}
                      disabled={!answers[index]}
                      variant="default"
                      className="w-full"
                    >
                      Check Answer
                    </Button>
                  )}

                  {showResults[index] && (
                    <div className={`w-full p-4 rounded-lg ${
                      isCorrect 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      <p className="font-medium text-center mb-2">
                        {isCorrect ? 'Correct!' : 'Try Again'}
                      </p>
                      <Button
                        onClick={isCorrect ? handleNext : handleTryAgain}
                        className={`w-full ${
                          isCorrect 
                            ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                            : 'bg-red-100 text-red-800 hover:bg-red-200'
                        }`}
                      >
                        {isCorrect 
                          ? (current === shuffledQuestions.length - 1 ? 'Complete Quiz' : 'Next Question »')
                          : 'Try Again'
                        }
                      </Button>
                    </div>
                  )}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Carousel navigation buttons */}
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      
      {/* Quiz completion screen */}
      {quizCompleted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
            <p className="text-gray-600 mb-6">
              Great job! You've completed the {topic} quiz.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={resetQuiz}
                className="bg-[#635bff] hover:bg-[#635bff]/90 text-white"
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 