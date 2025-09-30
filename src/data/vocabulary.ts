export interface VocabularyWord {
  id: string;
  word: string;
  translation: string;
  category: string;
  language: string;
  audioUrl?: string;
  imageUrl?: string;
  difficulty: "easy" | "medium" | "hard";
}

export const vocabularyCategories = [
  { id: "greetings", name: "Greetings", icon: "👋" },
  { id: "numbers", name: "Numbers", icon: "🔢" },
  { id: "colors", name: "Colors", icon: "🎨" },
  { id: "food", name: "Food & Drink", icon: "🍽️" },
  { id: "family", name: "Family", icon: "👨‍👩‍👧‍👦" },
  { id: "animals", name: "Animals", icon: "🐾" },
  { id: "travel", name: "Travel", icon: "✈️" },
  { id: "time", name: "Time & Date", icon: "⏰" },
];

// Sample vocabulary - in a real app, this would come from a database
export const vocabularyData: VocabularyWord[] = [
  // English Greetings
  { id: "en-1", word: "Hello", translation: "مرحبا", category: "greetings", language: "en", difficulty: "easy" },
  { id: "en-2", word: "Goodbye", translation: "وداعا", category: "greetings", language: "en", difficulty: "easy" },
  { id: "en-3", word: "Thank you", translation: "شكراً", category: "greetings", language: "en", difficulty: "easy" },
  { id: "en-4", word: "Please", translation: "من فضلك", category: "greetings", language: "en", difficulty: "easy" },
  { id: "en-5", word: "Good morning", translation: "صباح الخير", category: "greetings", language: "en", difficulty: "easy" },
  
  // English Numbers
  { id: "en-6", word: "One", translation: "واحد", category: "numbers", language: "en", difficulty: "easy" },
  { id: "en-7", word: "Two", translation: "اثنان", category: "numbers", language: "en", difficulty: "easy" },
  { id: "en-8", word: "Three", translation: "ثلاثة", category: "numbers", language: "en", difficulty: "easy" },
  { id: "en-9", word: "Ten", translation: "عشرة", category: "numbers", language: "en", difficulty: "easy" },
  { id: "en-10", word: "Hundred", translation: "مئة", category: "numbers", language: "en", difficulty: "medium" },

  // English Colors
  { id: "en-11", word: "Red", translation: "أحمر", category: "colors", language: "en", difficulty: "easy" },
  { id: "en-12", word: "Blue", translation: "أزرق", category: "colors", language: "en", difficulty: "easy" },
  { id: "en-13", word: "Green", translation: "أخضر", category: "colors", language: "en", difficulty: "easy" },
  { id: "en-14", word: "Yellow", translation: "أصفر", category: "colors", language: "en", difficulty: "easy" },
  { id: "en-15", word: "Black", translation: "أسود", category: "colors", language: "en", difficulty: "easy" },

  // English Food
  { id: "en-16", word: "Water", translation: "ماء", category: "food", language: "en", difficulty: "easy" },
  { id: "en-17", word: "Bread", translation: "خبز", category: "food", language: "en", difficulty: "easy" },
  { id: "en-18", word: "Rice", translation: "أرز", category: "food", language: "en", difficulty: "easy" },
  { id: "en-19", word: "Coffee", translation: "قهوة", category: "food", language: "en", difficulty: "easy" },
  { id: "en-20", word: "Delicious", translation: "لذيذ", category: "food", language: "en", difficulty: "medium" },

  // English Family
  { id: "en-21", word: "Mother", translation: "أم", category: "family", language: "en", difficulty: "easy" },
  { id: "en-22", word: "Father", translation: "أب", category: "family", language: "en", difficulty: "easy" },
  { id: "en-23", word: "Brother", translation: "أخ", category: "family", language: "en", difficulty: "easy" },
  { id: "en-24", word: "Sister", translation: "أخت", category: "family", language: "en", difficulty: "easy" },
  { id: "en-25", word: "Family", translation: "عائلة", category: "family", language: "en", difficulty: "easy" },

  // English Animals
  { id: "en-26", word: "Cat", translation: "قطة", category: "animals", language: "en", difficulty: "easy" },
  { id: "en-27", word: "Dog", translation: "كلب", category: "animals", language: "en", difficulty: "easy" },
  { id: "en-28", word: "Bird", translation: "طائر", category: "animals", language: "en", difficulty: "easy" },
  { id: "en-29", word: "Fish", translation: "سمك", category: "animals", language: "en", difficulty: "easy" },
  { id: "en-30", word: "Lion", translation: "أسد", category: "animals", language: "en", difficulty: "medium" },
];