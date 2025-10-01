"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Globe, 
  Brain, 
  Trophy, 
  Zap, 
  Users, 
  Target,
  Play,
  BookOpen,
  Award,
  User
} from "lucide-react";
import heroImage from "../../../public/assets/images/hero-learning.jpg";
import vocabularyImage from "../../../public/assets/images/vocabulary-concept.jpg";
import achievementImage from "../../../public/assets/images/achievement-celebration.jpg";
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ar", name: "Arabic", flag: "🇸🇦" },
    { code: "nl", name: "Dutch", flag: "🇳🇱" },
    { code: "id", name: "Indonesian", flag: "🇮🇩" },
    { code: "ms", name: "Malay", flag: "🇲🇾" },
    { code: "th", name: "Thai", flag: "🇹🇭" },
    { code: "km", name: "Khmer", flag: "🇰🇭" },
  ];

  const features = [
    {
      icon: Brain,
      title: "Smart Learning",
      description: "AI-powered adaptive lessons that match your pace",
      color: "primary"
    },
    {
      icon: Target,
      title: "1000+ Words",
      description: "Comprehensive vocabulary across multiple categories",
      color: "secondary"
    },
    {
      icon: Trophy,
      title: "Gamified Progress",
      description: "Earn XP, badges, and climb the leaderboard",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Quick Practice",
      description: "Short, effective lessons that fit your schedule",
      color: "primary"
    },
  ];

  return (
    <div className="min-h-screen">
            <div className="absolute top-4 right-4 z-10">
        <Button asChild variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
          <Link href="/Profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </Button>
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-green-400 opacity-90"  style={{ background: "linear-gradient(135deg, hsl(142 76% 36%), hsl(217 91% 60%))" }}/>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        />
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
              <Zap className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm text-primary-foreground font-medium">Master 7 Languages</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              Learn Languages
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                The Fun Way
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Interactive lessons, real conversations, and gamified progress.
              Start speaking with confidence today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="default" className="group">
                <Link href="/Learn" className="flex items-center">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Learning
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground border-primary-foreground">
                <Link href="/Vocabulary">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Vocabulary
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">7 Languages Available</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Language
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From Arabic script to Thai tones, master the languages you love
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {languages.map((lang, index) => (
              <Card
                key={lang.code}
                className="p-6 text-center cursor-pointer hover:shadow-elevated transition-smooth hover:-translate-y-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {lang.flag}
                </div>
                <h3 className="font-semibold text-sm">{lang.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Learn With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make language learning effective and enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="p-6 hover:shadow-elevated transition-smooth hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-${feature.color}/10 mb-4`}>
                    <Icon className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Brain className="w-4 h-4 text-secondary" />
                <span className="text-sm text-secondary font-medium">Master Vocabulary</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Build Your Word Power
              </h2>
              <p className="text-lg text-muted-foreground">
                Learn 1000+ essential words organized by categories. 
                Practice with native audio, visual flashcards, and interactive quizzes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span>Organized by real-life categories</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span>Native speaker audio for every word</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span>Spaced repetition for lasting memory</span>
                </li>
              </ul>
            </div>
            <div className="relative animate-scale-in">
              <Image
                src={vocabularyImage} 
                alt="Vocabulary Learning" 
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative animate-scale-in order-2 lg:order-1">
              <Image 
                src={achievementImage} 
                alt="Achievement Tracking" 
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
            <div className="space-y-6 animate-fade-in order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <Trophy className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">Track Your Progress</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Celebrate Every Milestone
              </h2>
              <p className="text-lg text-muted-foreground">
                Watch your progress grow with XP points, daily streaks, achievement badges, 
                and compete with learners worldwide on our leaderboard.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Trophy className="w-8 h-8 text-primary mb-2" />
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Achievements</div>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <Users className="w-8 h-8 text-secondary mb-2" />
                  <div className="text-2xl font-bold">Live</div>
                  <div className="text-sm text-muted-foreground">Leaderboard</div>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <Zap className="w-8 h-8 text-accent mb-2" />
                  <div className="text-2xl font-bold">Daily</div>
                  <div className="text-sm text-muted-foreground">Streaks</div>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Award className="w-8 h-8 text-primary mb-2" />
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-muted-foreground">Difficulty Levels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 " style={{ background: "linear-gradient(135deg, hsl(142 76% 36%), hsl(217 91% 60%))" }}/>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of learners mastering new languages every day
            </p>
            <Button asChild size="lg" variant="default" className="text-lg">
              <Link href="/Learn">
                <Play className="mr-2 h-6 w-6" />
                Begin Learning Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;