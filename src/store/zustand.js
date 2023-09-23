const createStoreState = (set) => {
  return {
    carts: [],
		// 임시 장바구니
    tempCarts: [],

		// 임시 장바구니 비우기
    emptyCartItems: () => {
      set(
        (state) => {
          state.tempCarts = [];
        },
        false,
        'cart/empty-temp-carts',
      );
    },

		// 임시 장바구니 항목을 모두 장바구니로 옮기기
    putInCart: () => {
      set(
        (state) => {
          state.carts = state.tempCarts;
        },
        false,
        'cart/put-in',
      );
    },

		// 임시 장바구니에 항목 추가
    addCartItem: (newCartItem) => {
      const { id, ...newItem } = newCartItem;
      set(
        (state) => {
          state.tempCarts.push({
            id: id ?? crypto.randomUUID(),
            ...newItem,
          });
        },
        false,
        'carts/addCartItem',
      );
    },

		// 임시 장바구니에 항목 삭제
    removeCartItem: (cartItemId) => {
      set(
        (state) => {
          state.tempCarts = state.tempCarts.filter((cart) => cart.id !== cartItemId);
        },
        false,
        'carts/removeCartItem',
      );
    },

		// 임시 장바구니 항목 갯수 증가
    increaseCartItemCount: (cartItem) => {
      set(
        (state) => {
          const selectedCartItem = state.tempCarts.find((item) => item.id === cartItem.id);
          if (selectedCartItem) {
            selectedCartItem.count++;
          }
        },
        false,
        'carts/increaseCartItemCount',
      );
    },


		// 임시 장바구니에 항목 갯수 감소
    decreaseCartItemCount: (cartItem) => {
      set(
        (state) => {
          const selectedCartItem = state.tempCarts.find((item) => item.id === cartItem.id);
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