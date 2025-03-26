import { TLanguage } from "@/shared/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LanguageStore {
  language: TLanguage;
  setLanguage: (lang: TLanguage) => void;
  resetLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "pt",
      setLanguage: (lang) => set({ language: lang }),
      resetLanguage: () => set({ language: "pt" }),
    }),
    {
      name: "language-storage",
    }
  )
);
