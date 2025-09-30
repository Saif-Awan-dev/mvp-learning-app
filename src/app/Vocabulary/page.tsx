"use client"
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Volume2, BookOpen, Home } from "lucide-react";
import { vocabularyCategories, vocabularyData } from "@/data/vocabulary";
import { toast } from "sonner";
import Link from "next/link";

const Vocabulary = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredWords = selectedCategory === "all" 
    ? vocabularyData 
    : vocabularyData.filter(word => word.category === selectedCategory);

  const playAudio = (word: string) => {
    // In a real app, this would use Google TTS or a similar service
    // For now, we'll use the Web Speech API if available
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
      toast.success(`Playing: ${word}`);
    } else {
      toast.info("Audio feature not available in this browser");
    }
  };

  return (
    <div className="min-h-screen bg-muted/50">
      {/* Header */}
      <div className="bg-gradient-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <Button asChild variant="ghost" className="text-secondary-foreground">
              <Link href="/Home">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-secondary-foreground" />
              <span className="text-sm text-secondary-foreground font-medium">1000+ Words</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
              Vocabulary Library
            </h1>
            <p className="text-lg text-secondary-foreground/90">
              Master essential words across multiple categories with native audio
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className="rounded-full"
          >
            All Words
          </Button>
          {vocabularyCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Word Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredWords.map((word, index) => (
            <Card
              key={word.id}
              className="p-6 hover:shadow-elevated transition-smooth hover:-translate-y-1 cursor-pointer animate-fade-in group"
              style={{ animationDelay: `${(index % 12) * 0.05}s` }}
              onClick={() => playAudio(word.word)}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge 
                  variant={
                    word.difficulty === "easy" ? "default" : 
                    word.difficulty === "medium" ? "secondary" : 
                    "destructive"
                  }
                  className="capitalize"
                >
                  {word.difficulty}
                </Badge>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 group-hover:bg-primary/10 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio(word.word);
                  }}
                >
                  <Volume2 className="h-4 w-4 text-primary" />
                </Button>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold mb-1">{word.word}</div>
                  <div className="text-lg text-muted-foreground">{word.translation}</div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="text-xs text-muted-foreground">
                    {vocabularyCategories.find(c => c.id === word.category)?.icon}{" "}
                    {vocabularyCategories.find(c => c.id === word.category)?.name}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredWords.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No words found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vocabulary;