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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState<Record<number, boolean>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

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

  const checkAnswer = (questionId: number) => {
    const isAnswerCorrect = questions[questionId].correctAnswer === answers[questionId];
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    setShowResults(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (current < questions.length - 1) {
      api?.scrollNext();
    }
  };

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

  const isAnswerSelected = (questionId: number, option: string) => {
    return answers[questionId] === option;
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      <h2 className="text-2xl font-bold mb-6">{topic} Quiz</h2>
      
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {questions.map((question, index) => (
            <CarouselItem key={question.id}>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Question {index + 1} of {questions.length}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">{question.question}</p>
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
                        {isCorrect ? 'Next Question »' : 'Try Again'}
                      </Button>
                    </div>
                  )}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
} 