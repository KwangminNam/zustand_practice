import { create } from "zustand";
import { persist } from "zustand/middleware";

interface useBearStoreTypes {
  bears: number;
  increaseBears: () => void;
  decreaseBears: () => void;
}

export const useBearStore = create<useBearStoreTypes>()(persist((set) => ({
  bears: 0,
  increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
  decreaseBears: () => set((state) => ({ bears: state.bears - 1 })),
}),{
  name:'first-localstorage'
}))

