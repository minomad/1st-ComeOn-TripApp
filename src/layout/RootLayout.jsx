import { Outlet, useLocation } from 'react-router-dom';

import {useEffect } from 'react';
import Navigation from './Navigation';
import ScrollToTop from '@/utils/ScrollToTop';
import useStore from '@/store/zustand';

function RootLayout() {
  const location = useLocation();
  const emptyCartItems = useStore((state) => state.emptyCartItems);
	
	// 페이지가 변경될 때마다 이펙트 함수 실행
  useEffect(() => {
		// 임시 장바구니 비우기
    emptyCartItems();
  }, [location, emptyCartItems]);

  return (
    <main className='mx-auto max-w-3xl font-suit'>
      <ScrollToTop />
      <Outlet />
      <Navigation />
    </main>
  );
}
export default RootLayout;