"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface SettingsContextType {
  theme: "light" | "dark";
  soundEnabled: boolean;
  notificationsEnabled: boolean;
  toggleTheme: () => void;
  toggleSound: () => void;
  toggleNotifications: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // Load saved settings from localStorage (runs only on client)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }

    const savedSound = localStorage.getItem("soundEnabled");
    if (savedSound) {
      setSoundEnabled(JSON.parse(savedSound));
    }

    const savedNotifications = localStorage.getItem("notificationsEnabled");
    if (savedNotifications) {
      setNotificationsEnabled(JSON.parse(savedNotifications));
    }
  }, []);

  // Persist theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Persist sound setting
  useEffect(() => {
    localStorage.setItem("soundEnabled", JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  // Persist notifications setting
  useEffect(() => {
    localStorage.setItem(
      "notificationsEnabled",
      JSON.stringify(notificationsEnabled)
    );
  }, [notificationsEnabled]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const toggleSound = () => setSoundEnabled((prev) => !prev);
  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        soundEnabled,
        notificationsEnabled,
        toggleTheme,
        toggleSound,
        toggleNotifications,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within SettingsProvider");
  }
  return context;
};
