import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usePocketData } from '@/api/usePocketData';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import Header from '@/components/Header';
import useStorage from '@/Hook/useStorage';
import HotelInfoCategory from '@/components/HotelInfoCategory';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';

function WishPage() {
  const { storageData: authUser } = useStorage('pocketbase_auth');
  const { getIdData, updateData: updateUser } = usePocketData('users');
  const [selectCategory, setSelectCategory] = useState('숙소');
  const queryClient = useQueryClient();

  const tag = ['숙소', '레저'];
  const id = authUser?.model?.id;

  const { data, isLoading } = useQuery(
    ['users', id],
    () => getIdData(id, { expand: 'wishHotel, wishLeisure' }),
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
    },
  );

  const wishHotel = data?.expand?.wishHotel;
  const wishLeisure = data?.expand?.wishLeisure;

  if (!authUser) {
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
          {!authUser && (
            <div className='text-gray-600 flex flex-col items-center pt-20 font-semibold'>
              <p>로그인 후 찜한 목록을 확인해주세요.</p>
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

  const handleWishHotel = async (itemId) => {
    await updateUser(id, {
      'wishHotel-': itemId,
    });
    toast.error('찜 목록에서 해제하였습니다.');
    queryClient.invalidateQueries(['users']);
  };

  const handleWishLeisure = async (itemId) => {
    await updateUser(id, {
      'wishLeisure-': itemId,
    });
    toast.error('찜 목록에서 해제하였습니다.');
    queryClient.invalidateQueries(['users']);
  };

  return (
    <>
      <Helmet>
        <title>찜한 목록</title>
      </Helmet>
      <Header back='back' cart='cart' className='text-xl font-semibold' title='찜한 목록' />
      <HotelInfoCategory
        info={tag}
        selectCategory={selectCategory}
        handleChangeCategory={setSelectCategory}
        className='text-xl'
      />
      <section className='px-4 pb-20'>
        {selectCategory === '숙소' && authUser && !wishHotel && (
          <section className='mt-20 flex flex-col items-center gap-2 font-semibold'>
            <figure>
              <img src='/heartActive.svg' alt='하트' className='w-14' />
            </figure>
            <p>찜한 숙소가 없습니다.</p>
            <Link
              to='/hotel'
              className='my-2 rounded border px-20 py-2  text-center text-gray2 hover:text-primary'
            >
              숙소 보러가기
            </Link>
          </section>
        )}

        {selectCategory === '숙소' && (
          <>
            {wishHotel?.map((item) => (
              <article
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
              </article>
            ))}
          </>
        )}

        {selectCategory === '레저' && authUser && !wishLeisure && (
          <section className='mt-20 flex flex-col items-center gap-2 font-semibold'>
            <figure>
              <img src='/heartActive.svg' alt='하트' className='w-14' />
            </figure>
            <p>찜한 레저가 없습니다.</p>
            <Link
              to='/leisure'
              className='my-2 rounded border px-20 py-2  text-center text-gray2 hover:text-primary'
            >
              레저 보러가기
            </Link>
          </section>
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
            duration: 1000,
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
