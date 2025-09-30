"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Trophy, 
  Flame, 
  Star, 
  CheckCircle2,
  XCircle,
  Volume2
} from "lucide-react";
import { vocabularyData } from "../../../src/data/vocabulary";
import { toast } from "sonner";
import Link from "next/link";

interface QuizQuestion {
  word: string;
  correctAnswer: string;
  options: string[];
  difficulty: string;
}

const Learn = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Generate quiz questions from vocabulary
  const generateQuestions = (): QuizQuestion[] => {
    const questions: QuizQuestion[] = [];
    const shuffled = [...vocabularyData].sort(() => Math.random() - 0.5).slice(0, 10);
    
    shuffled.forEach(word => {
      const otherWords = vocabularyData
        .filter(w => w.id !== word.id && w.category === word.category)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.translation);
      
      const options = [...otherWords, word.translation].sort(() => Math.random() - 0.5);
      
      questions.push({
        word: word.word,
        correctAnswer: word.translation,
        options,
        difficulty: word.difficulty
      });
    });
    
    return questions;
  };

  const [questions] = useState<QuizQuestion[]>(generateQuestions());
  const currentQ = questions[currentQuestion];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);

    const isCorrect = answer === currentQ.correctAnswer;
    if (isCorrect) {
      const xpGain = currentQ.difficulty === "hard" ? 15 : currentQ.difficulty === "medium" ? 10 : 5;
      setScore(score + 1);
      setXp(xp + xpGain);
      toast.success(`Correct! +${xpGain} XP`, {
        description: "Keep going! 🎉"
      });
    } else {
      toast.error("Not quite right", {
        description: `The correct answer is: ${currentQ.correctAnswer}`
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
      
      // Show completion celebration
      if (score >= 8) {
        toast.success("Outstanding! 🏆", {
          description: `You scored ${score}/${questions.length}!`
        });
      } else if (score >= 5) {
        toast.success("Great job! 🎯", {
          description: `You scored ${score}/${questions.length}!`
        });
      } else {
        toast.info("Keep practicing! 💪", {
          description: `You scored ${score}/${questions.length}`
        });
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const playAudio = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 md:p-12 text-center space-y-6 animate-scale-in">
          <div className="text-6xl mb-4 animate-bounce-subtle">
            {percentage >= 80 ? "🏆" : percentage >= 60 ? "🎯" : "💪"}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold">Quiz Complete!</h1>
          
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{score}/{questions.length}</div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <Star className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">+{xp}</div>
                <div className="text-sm text-muted-foreground">XP Earned</div>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg">
                <Flame className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold">{percentage}%</div>
                <div className="text-sm text-muted-foreground">Score</div>
              </div>
            </div>

            <div className="text-lg text-muted-foreground">
              {percentage >= 80 && "Amazing work! You're mastering this! 🌟"}
              {percentage >= 60 && percentage < 80 && "Good job! Keep practicing to improve! 👍"}
              {percentage < 60 && "Keep going! Every practice makes you better! 💪"}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" onClick={restartQuiz} variant="default">
              Try Again
            </Button>
            <Button size="lg" asChild variant="outline">
              <Link href="/Vocabulary">
                Browse Vocabulary
              </Link>
            </Button>
            <Button size="lg" asChild variant="ghost">
              <Link href="/Home">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/50">
      {/* Header */}
      <div className="bg-gradient-secondary py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button asChild variant="ghost" size="sm" className="text-secondary-foreground">
              <Link href="/Home">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                <span className="font-bold text-secondary-foreground">{xp} XP</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="font-bold text-secondary-foreground">{score}/{questions.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
            </span>
          </div>
          <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-3" />
        </div>
      </div>

      {/* Quiz Question */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 animate-fade-in">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 capitalize">
                {currentQ.difficulty}
              </Badge>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  What is the translation of:
                </h2>
              </div>
              <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-xl border-2 border-primary/20">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {currentQ.word}
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => playAudio(currentQ.word)}
                  className="hover:bg-primary/10"
                >
                  <Volume2 className="h-6 w-6 text-primary" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQ.correctAnswer;
                const showCorrect = showResult && isCorrect;
                const showIncorrect = showResult && isSelected && !isCorrect;

                return (
                  <Button
                    key={index}
                    variant={"default"}
                    size="lg"
                    className={`w-full justify-start text-left h-auto py-4 px-6 text-lg ${
                      !showResult && "hover:bg-primary/5 hover:border-primary"
                    }`}
                    onClick={() => !showResult && handleAnswer(option)}
                    disabled={showResult}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{option}</span>
                      {showCorrect && <CheckCircle2 className="h-6 w-6" />}
                      {showIncorrect && <XCircle className="h-6 w-6" />}
                    </div>
                  </Button>
                );
              })}
            </div>

            {showResult && (
              <div className="mt-8 pt-6 border-t">
                <Button
                  size="lg"
                  onClick={nextQuestion}
                  className="w-full"
                >
                  {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Quiz"}
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Learn;