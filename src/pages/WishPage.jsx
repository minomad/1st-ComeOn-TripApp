import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usePocketData } from '@/api/usePocketData';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import { toast, Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import useAuthStore from '@/store/useAuthStore';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';
import WishList from '@/components/WishList';
import Guest from '@/components/Guest';
import HotelInfoCategory from '@/components/HotelInfoCategory';

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

  const handleWishHotel = async (itemId) => {
    await updateUser(id, {
      'wishHotel-': itemId,
    });
    toast.error('찜 목록에서 해제하였습니다.');
    queryClient.invalidateQueries(['userWish']);
  };

  const handleWishLeisure = async (itemId) => {
    await updateUser(id, {
      'wishLeisure-': itemId,
    });
    toast.error('찜 목록에서 해제하였습니다.');
    queryClient.invalidateQueries(['userWish']);
  };

  return (
    <>
      <Helmet>
        <title>야무지개놀자 찜한 목록</title>
      </Helmet>
      <Header back='back' cart='cart' className='text-xl font-semibold' title='찜한 목록' />
      <HotelInfoCategory
        info={tag}
        selectCategory={selectCategory}
        handleChangeCategory={setSelectCategory}
        className='text-xl'
      />
      <section className='px-4 pb-20'>
        {selectCategory === '숙소' && isAuth && !wishHotel && (
          <>
            <WishList heart='heart' hotel='hotel' link='hotel' />
          </>
        )}

        {selectCategory === '숙소' && (
          <>
            <AnimatePresence>
              {wishHotel?.map((item) => (
                <motion.article
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  key={item.id}
                  className='relative mx-auto mt-3 w-full max-w-xl gap-3 rounded-3xl bg-white p-3 shadow-lg min-[400px]:flex'
                >
                  <figure className='overflow-hidden rounded-2xl max-[450px]:mb-2'>
                    <img
                      src={getPbImageURL(item, 'img')}
                      alt={item.title}
                      className='h-[130px] w-full min-[400px]:max-w-[130px]'
                    />
                    <figcaption className='sr-only'>{item.title}</figcaption>
                  </figure>
                  <Button className='absolute right-5 h-7 w-7 cursor-pointer'>
                    <img src='/heartActive.svg' alt='찜' onClick={() => handleWishHotel(item.id)} />
                  </Button>
                  <Link to={`/hotel/${item.id}`} className='hover:text-primary'>
                    <div>
                      <h2 className='text-lg font-bold'>{item.title}</h2>
                      <div className='flex items-center'>
                        <img src='/star.svg' alt='평점' className='h-4 w-4' />
                        <span className='text-sm'>{item.star}</span>
                      </div>
                    </div>
                  </Link>
                  <div className='flex items-center gap-1 text-sm text-gray2 max-[450px]:pt-2'>
                    <div className='absolute bottom-[10px] right-5'>
                      <span className='mr-3 text-[0.9rem] text-gray2'>숙박: 15:00~</span>
                      <span className='text-[1.2rem] font-bold text-primary'>
                        {numberWithComma(item.price)}원
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </>
        )}

        {selectCategory === '레저' && isAuth && !wishLeisure && (
          <>
            <WishList heart='heart' leisure='leisure' link='leisure' />
          </>
        )}

        {selectCategory === '레저' && (
          <>
            {wishLeisure?.map((item) => (
              <article
                key={item.id}
                className='relative mx-auto mt-3 w-full max-w-xl rounded-3xl bg-white p-3 shadow-lg'
              >
                <Link to={`/leisure/${item.id}`} className='flex gap-2'>
                  <figure className='flex-2  overflow-hidden rounded-2xl'>
                    <img
                      src={getPbImageURL(item, 'thumbnail')}
                      alt={item.title}
                      className='h-[130px] w-[130px]'
                    />
                    <figcaption className='sr-only'>{item.title}</figcaption>
                  </figure>
                  <div className='flex flex-1'>
                    <h2 className='pb-10 font-bold'>{item.title}</h2>
                    <div className='absolute bottom-[10px] right-5'>
                      <span className='text-[1.2rem] font-bold text-primary'>
                        {numberWithComma(item.price)}원
                      </span>
                    </div>
                  </div>
                </Link>
                <Button className='absolute bottom-[40px] right-5'>
                  <img
                    src='/heartActive.svg'
                    alt='찜'
                    className='h-7 w-7 cursor-pointer'
                    onClick={() => handleWishLeisure(item.id)}
                  />
                </Button>
              </article>
            ))}
          </>
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
