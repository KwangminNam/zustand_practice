import { create } from "zustand";

interface useCatStroeTypes {
  cats: {
    bigCats: number;
    smallCats: number;
  },
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
}

export const useCateStore = create<useCatStroeTypes>()((set) => ({
  cats: {
    bigCats: 0,
    smallCats: 0
  },
  increaseBigCats:()=>set((state) => ({cats:{
    ...state.cats,
    bigCats:state.cats.bigCats + 1
  }})),
  increaseSmallCats:()=>set((state) => ({cats:{
    ...state.cats,
    smallCats:state.cats.smallCats + 1
  }})),
}))

