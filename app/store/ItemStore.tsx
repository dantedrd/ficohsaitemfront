import { create } from 'zustand';

interface MyState {
    items: any[];
    item:any;
    searchItem:string
  }
  
  interface MyActions {
    search: (name:any) => Promise<void>;
    setItems: (items:any[]) => Promise<void>;  
    setItem: (item:any[]) => Promise<void>;
  }

const itemStore = create<MyState & MyActions>((set) => ({
  items: [],
  item:{},
  searchItem: "",
  search: async (name:any) => {set({ searchItem: name})},
  setItems: async (items:any) => {set({ items: items})},
  setItem: async (item:any) => {set({ item: item})},
}));

export default itemStore;