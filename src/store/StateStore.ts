import { create } from "zustand";

interface IState {
  state: string;
  clickState(state: string): void;
}

export const useStateStore = create<IState>((set) => ({
  state: "",
  clickState(clickedState: string) {
    set((state) => ({ state: clickedState }));
  },
}));
