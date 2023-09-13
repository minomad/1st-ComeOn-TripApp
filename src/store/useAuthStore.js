import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import pb from '@/api/pocketbase';

// import useAuthStore from '@/store/useAuthStore';

// const isAuth = useAuthStore((state) => state.isAuth); 로그인 회원만 사용가능
// ex) {isAuth &&<div>로그인 회원만 이용할 수 있습니다.</div> }

// const user = useAuthStore((state) => state.user); 회원정보 가져올 때
// console.log(user); const userId = user.id; 로그인한 회원의 정보 출력

const initialAuthState = {
  isAuth: false,
  user: '',
  token: '',
};

const useAuthStore = create(
  devtools((set) => ({
    ...initialAuthState,

    signIn: async ({ email, password }) => {
      const authData = await pb.collection('users').authWithPassword(email, password);

      const { isValid, model, token } = pb.authStore;

      set(
        (state) => ({
          ...state,
          isAuth: isValid,
          user: model,
          token,
        }),
        false,
        'auth/signIn',
      );
      return authData;
    },

    signOut: () => {
      set(
        (state) => ({
          ...state,
          ...initialAuthState,
        }),
        false,
        'auth/signOut',
      );
      return pb.authStore.clear();
    },

    cancelMembership: async (userId) => {
      return await pb.collection('users').delete(userId);
    },

    authState: () => {
      const { isValid, model, token } = pb.authStore;

      if ((isValid, model, token)) {
        set(
          (state) => ({
            ...state,
            isAuth: isValid,
            user: model,
            token: token,
          }),
          false,
          'auth/authState',
        );
      }
    },
  })),
);

useAuthStore.getState().authState();

export default useAuthStore;
