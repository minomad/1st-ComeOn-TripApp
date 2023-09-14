import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { usePocketData } from '@/api/usePocketData';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import HotelInfoCategory from '@/components/HotelInfoCategory';
import useAuthStore from '@/store/useAuthStore';
import Spinner from '@/components/Spinner';
import WishList from '@/components/WishList';

function CartPage() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);
  const { getIdData, updateData: updateUser } = usePocketData('users');
  const [selectCategory, setSelectCategory] = useState('숙소');
  const queryClient = useQueryClient();
  const id = user?.id;

  const { data, isLoading } = useQuery(
    ['users', id],
    () => getIdData(id, { expand: 'cartHotel' }),
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
    },
  );

  const cartHotel = data?.expand?.cartHotel;
  // const cartLeisure = data?.expand?.cartLeisure;

  const tag = ['숙소', '레저', '교통'];

  if (!isAuth) {
    return (
      <>
        <Header back='back' search='search' title='장바구니' className='text-xl font-semibold' />
        <section className='px-4'>
          <h3 className='sr-only'>장바구니</h3>
          <HotelInfoCategory
            info={tag}
            selectCategory={selectCategory}
            handleChangeCategory={setSelectCategory}
            className='text-xl'
          />
          {!isAuth && (
            <div className='text-gray-600 flex flex-col items-center pt-20 font-semibold'>
              <p>로그인 후 장바구니를 확인해주세요.</p>
              <Link
                to='/signin'
                className='my-2 w-full max-w-sm rounded bg-primary py-2 text-center text-white'
              >
                로그인
              </Link>
              <Link
                to='/signup'
                className='my-2 w-full max-w-sm rounded border py-2 text-center text-black hover:text-primary'
              >
                회원가입
              </Link>
            </div>
          )}
        </section>
      </>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Helmet>
        <title>장바구니</title>
      </Helmet>
      <Header back='back' search='search' title='장바구니' className='text-xl font-semibold' />
      <section className='px-4 pb-24'>
        <h3 className='sr-only'>장바구니</h3>
        <HotelInfoCategory
          info={tag}
          selectCategory={selectCategory}
          handleChangeCategory={setSelectCategory}
          className='text-xl'
        />

        {selectCategory === '숙소' && isAuth && !cartHotel && (
          <>
            <WishList cart='cart' link='' />
          </>
        )}
        
        {selectCategory === '레저' && isAuth && !cartHotel && (
          <>
            <WishList cart='cart' link='' />
          </>
        )}

        {selectCategory === '교통' && isAuth && !cartHotel && (
          <>
            <WishList cart='cart' link='' />
          </>
        )}
      </section>
    </>
  );
}
export default CartPage;
