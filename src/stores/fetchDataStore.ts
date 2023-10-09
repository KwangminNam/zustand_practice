import { create } from "zustand";
import { persist } from "zustand/middleware";


interface DataTypes {
  data: any;
  status: string;
  getData: (id:number) => void;
  getSeocndData: (id:number) => void;
  changeStatus:(status:string) => void;
  
}

export const useDataStore = create<DataTypes>()(persist((set) => ({
  data: undefined,
  status: 'HI',
  changeStatus: (change) => set((state)=>({
    ...state,
    status:change
  })),
  getData: async (id:number) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const res = await data.json();
    set((state) => ({
      ...state,
      data: res
    }))
  },
  getSeocndData: async (id:number) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const res = await data.json();
    set((state) => ({
      ...state,
      data: res
    }))
  },
}),{
  name:'fetch-data'
}))