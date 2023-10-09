import { create } from "zustand";


interface DataTypes {
  data: any;
  test: string;
  getData: (id: number) => void;
}

export const useDataStore = create<DataTypes>()((set) => ({
  data: undefined,
  test: 'HI',
  getData: async (id: number) => {
    const data = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const res = (await data).json();
    set((state) => ({
      ...state,
      data: res
    }))
  }
}))