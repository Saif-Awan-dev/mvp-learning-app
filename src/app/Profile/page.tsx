"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Home, 
  User, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  Bell, 
  BellOff,
  Trophy,
  Star,
  Flame,
  Award
} from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";

const Profile = () => {
  const { 
    theme, 
    soundEnabled, 
    notificationsEnabled,
    toggleTheme,
    toggleSound,
    toggleNotifications
  } = useSettings();

  // Mock user stats - in real app, this would come from backend
  const userStats = {
    xp: 1250,
    streak: 7,
    lessonsCompleted: 23,
    wordsLearned: 156
  };

  return (
    <div className="min-h-screen bg-muted/50">
      {/* Header */}
      <div className="bg-gradient-secondary py-6 border-b" style={{ background: "linear-gradient(135deg, hsl(217 91% 60%), hsl(142 76% 36%))" }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button asChild variant="ghost" size="sm" className="text-secondary-foreground">
              <Link href="/Home">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-white">Profile & Settings</h1>
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* User Stats Card */}
          <Card className="p-6 md:p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-[#19ba55] flex items-center justify-center">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Language Learner</h2>
                <p className="text-muted-foreground">Member since {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-[#e7f6ec] rounded-lg text-center">
                <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{userStats.xp}</div>
                <div className="text-sm text-muted-foreground">Total XP</div>
              </div>
              <div className="p-4 bg-[#fff4eb] rounded-lg text-center">
                <Flame className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">{userStats.streak}</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </div>
              <div className="p-4 bg-[#ebf2fe] rounded-lg text-center">
                <Trophy className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold">{userStats.lessonsCompleted}</div>
                <div className="text-sm text-muted-foreground">Lessons</div>
              </div>
              <div className="p-4 bg-[#e7f6ec] rounded-lg text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{userStats.wordsLearned}</div>
                <div className="text-sm text-muted-foreground">Words</div>
              </div>
            </div>
          </Card>

          {/* Settings Card */}
          <Card className="p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold mb-6">App Settings</h3>
            
            <div className="space-y-6">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {theme === "dark" ? (
                    <Moon className="w-5 h-5 text-primary" />
                  ) : (
                    <Sun className="w-5 h-5 text-primary" />
                  )}
                  <div>
                    <Label htmlFor="theme" className="text-base font-medium">
                      {theme === "dark" ? "Dark Mode" : "Light Mode"}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Toggle between light and dark theme
                    </p>
                  </div>
                </div>
                <Switch
                  id="theme"
                  checked={theme === "dark"}
                  onCheckedChange={toggleTheme}
                />
              </div>

              <Separator />

              {/* Sound Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {soundEnabled ? (
                    <Volume2 className="w-5 h-5 text-primary" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-muted-foreground" />
                  )}
                  <div>
                    <Label htmlFor="sound" className="text-base font-medium">
                      Sound Effects
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Enable audio feedback and pronunciation
                    </p>
                  </div>
                </div>
                <Switch
                  id="sound"
                  checked={soundEnabled}
                  onCheckedChange={toggleSound}
                />
              </div>

              <Separator />

              {/* Notifications Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {notificationsEnabled ? (
                    <Bell className="w-5 h-5 text-primary" />
                  ) : (
                    <BellOff className="w-5 h-5 text-muted-foreground" />
                  )}
                  <div>
                    <Label htmlFor="notifications" className="text-base font-medium">
                      Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get reminded to practice daily
                    </p>
                  </div>
                </div>
                <Switch
                  id="notifications"
                  checked={notificationsEnabled}
                  onCheckedChange={toggleNotifications}
                />
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="default" className="flex-1">
                <Link href="/Learn">
                  Start Learning
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link href="/Vocabulary">
                  Browse Vocabulary
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
