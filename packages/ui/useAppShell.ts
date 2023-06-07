import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  user: string | null;
  score: number;
  setUser: (user: string | null) => void;
  addScore: (amount: number) => void;
};

// store 생성
export const useAppShell = create<Store>()(
  persist<Store>(
    (set) => ({
      user: null,
      score: 0,
      setUser: (user) => set({ user }),
      addScore: (amount) => set((state) => ({ score: state.score + amount })),
    }),
    {
      name: "app-shell", // localStorage 내 저장될 states 값을 관리하는 key
    }
  )
);
