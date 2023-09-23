import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from './middleware';

const createStoreState = (set) => {
  return {
    carts: [],

    addCartItem: (newCartItem) => {
      const { id, ...newItem } = newCartItem;
      set(
        (state) => {
          state.carts.push({
            id: id ?? crypto.randomUUID(),
            ...newItem,
          });
        },
        false,
        'carts/addCartItem',
      );
    },
    removeCartItem: (cartItemId) => {
      set(
        (state) => {
          state.carts = state.carts.filter((cart) => cart.id !== cartItemId);
        },
        false,
        'carts/removeCartItem',
      );
    },
    increaseCartItemCount: (cartItem) => {
      set(
        (state) => {
          const selectedCartItem = state.carts.find((item) => item.id === cartItem.id);
          if (selectedCartItem) {
            selectedCartItem.count++;
          }
        },
        false,
        'carts/increaseCartItemCount',
      );
    },
    decreaseCartItemCount: (cartItem) => {
      set(
        (state) => {
          const selectedCartItem = state.carts.find((item) => item.id === cartItem.id);
          if (selectedCartItem) {
            if (selectedCartItem.count > 0) {
              selectedCartItem.count--;
            }
          }
        },
        false,
        'carts/decreaseCartItemCount',
      );
    },
  };
};

const useStore = create(immer(devtools(createStoreState)));

export default useStore;