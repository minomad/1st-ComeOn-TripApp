import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usePocketData } from '@/api/usePocketData';
import { toast, Toaster } from 'react-hot-toast';
import useAuthStore from '@/store/useAuthStore';
import Header from '@/components/Header';
import Spinner from '@/components/Spinner';
import WishCart from '@/components/WishCart';
import Guest from '@/components/Guest';
import HotelInfoCategory from '@/components/HotelInfoCategory';
import WishList from '@/components/WishList';
import MetaTag from '@/components/MetaTag';

function WishPage() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);
  const { getIdData, updateData: updateUser } = usePocketData('users');
  const [selectCategory, setSelectCategory] = useState('숙소');
  const tag = ['숙소', '레저'];

  const queryClient = useQueryClient();
  const id = user?.id;

  const { data, isLoading } = useQuery(
    ['userWish', id],
    () => getIdData(id, { expand: 'wishHotel, wishLeisure' }),
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
    },
  );

  const wishHotel = data?.expand?.wishHotel;
  const wishLeisure = data?.expand?.wishLeisure;

  if (!isAuth) {
    return (
      <>
        <Header back='back' cart='cart' className='text-xl font-semibold' title='찜한 목록' />
        <section className='px-4 pb-24'>
          <h3 className='sr-only'>찜한 목록</h3>
          <HotelInfoCategory
            info={tag}
            selectCategory={selectCategory}
            handleChangeCategory={setSelectCategory}
            className='text-xl'
          />
          {!isAuth && <Guest />}
        </section>
      </>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  const handleWishDeleteHotel = async (itemId) => {
    await updateUser(id, {
      'wishHotel-': itemId,
    });
    toast.error('찜 목록에서 해제하였습니다.');
    queryClient.invalidateQueries(['userWish']);
  };

  const handleWishDeleteLeisure = async (itemId) => {
    await updateUser(id, {
      'wishLeisure-': itemId,
    });
    toast.error('찜 목록에서 해제하였습니다.');
    queryClient.invalidateQueries(['userWish']);
  };

  return (
    <>
      <MetaTag title='찜한목록' description='야무지개놀자 회원이 찜한 목록' />
      <Header back='back' cart='cart' className='text-xl font-semibold ' title='찜한 목록' />
      <HotelInfoCategory
        info={tag}
        selectCategory={selectCategory}
        handleChangeCategory={setSelectCategory}
        className='text-xl'
      />
      <section className=' pb-20'>
        {selectCategory === '숙소' && isAuth && !wishHotel && (
          <WishCart heart={true} hotel={true} link='hotel' />
        )}

        {selectCategory === '숙소' && (
          <WishList
            wish={true}
            data={wishHotel}
            link='hotel'
            handleWishDelete={handleWishDeleteHotel}
            hotel={true}
            img='img'
            buttonClass='top-5'
          />
        )}

        {selectCategory === '레저' && isAuth && !wishLeisure && (
          <WishCart heart={true} leisure={true} link='leisure' />
        )}

        {selectCategory === '레저' && (
          <WishList
            wish={true}
            data={wishLeisure}
            link='leisure'
            handleWishDelete={handleWishDeleteLeisure}
            img='thumbnail'
            buttonClass='bottom-11'
          />
        )}

        <Toaster
          toastOptions={{
            duration: 900,
            error: {
              style: {
                background: '#E03B69',
                color: 'white',
              },
            },
          }}
        />
      </section>
    </>
  );
}
export default WishPage;
