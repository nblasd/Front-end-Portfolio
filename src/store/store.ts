import { create } from "zustand";

interface stateType {
  isClicked: boolean;
  setIsClicked: () => void;
}

export const useStore = create<stateType>((set) => ({
  isClicked: true,
  setIsClicked: () => set((state) => ({ isClicked: !state.isClicked })),
}));
