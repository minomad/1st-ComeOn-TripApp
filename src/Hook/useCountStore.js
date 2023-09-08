import create from 'zustand'
const store = (set) => ({
    increment: () =>
      set((store) => ({
        count: store.count + 1,
      })),
    decrement: () =>
    set((store) => ({
      count: store.count + -1,
    })),
  });
  
  const useCountStore = create(store);
  
  export default useCountStore;
