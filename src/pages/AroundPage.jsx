import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Input from '@/components/Input';
import Category from '@/components/Category';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';
import AroundMap from '@/components/AroundMap';
import AroundList, { AroundLeisureList } from '@/components/AroundList';

function AroundPage() {
  const [selectCategory, setSelectCategory] = useState('숙소');
  const [isCheck, setCheck] = useState(false);
  const aroundSearch = useRef();
  const category = ['숙소', '레저/티켓'];

  const { getListData: getLeisureData } = usePocketData('leisure');
  const { data: leisureData } = useQuery(['leisure'], () => getLeisureData());

  const { getListData } = usePocketData('hotel');
  const filter = 'category = "도심힐링" || category = "강원" || category = "제주" || category = "부산" || category = "광주"'
  const {
    data: hotelData,
    isLoading: isHotelLoading,
    isError,
  } = useQuery(['hotelAround'], () => getListData({filter}));
  const {latitude, longitude } = useParams();
  


  if (isHotelLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>서버 에러 발생</div>;
  }

  return (
    <>
      <Helmet>
        <title>내주변</title>
      </Helmet>
      <h2 className='sr-only'>내주변 페이지</h2>
      <header className='fixed top-0 left-0 right-0 z-20 mx-auto bg-white flex text text-center max-w-3xl justify-between px-5 m:px-[5rem] pt-4 gap-5'>
      <Link to={'/search'} className='w-[100%]'>
        <form action="" method="get" className='w-[100%]'>
          <Input id='aroundSearch' label='장소 검색' type='search' labelClass='sr-only' inputRef={aroundSearch} placeholder='장소, 지명 검색' className='bg-lightPurple w-[100%]  h-9 rounded-full px-5 focus:outline-none focus:ring-none focus:ring-secondary search-cancel:rotate-45'  />
        </form>
      </Link>
      <Link to={'/cart'}>
        <Button>
          {<img src='/cart.svg' alt='장바구니' className='h-7 py-0.4' />}
        </Button>
      </Link>
      </header>
      <nav className='fixed mx-auto max-w-3xl bg-white pt-14 top-0 left-0 right-0 z-10'>
        <Category
            className='px-5 gap-2 pb-2 pt-2 border-b-[0.13rem] border-[#E1E1E1]'
            category={category}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            // icon={icon}
          />
      </nav>
      {
      isCheck && selectCategory==='숙소' 
      ? <AroundList data={hotelData}  selectCategory={selectCategory}  /> 
      : (!isCheck && selectCategory==='숙소' ? <AroundMap data={hotelData} latitude={latitude} longitude={longitude} selectCategory={selectCategory}    /> : '')}

      {
      isCheck && selectCategory==='레저/티켓' 
      ? <AroundLeisureList data={leisureData}  selectCategory={selectCategory}  /> 
      : (!isCheck && selectCategory==='레저/티켓' ? <AroundMap data={leisureData} latitude={latitude} longitude={longitude} selectCategory={selectCategory}    /> : '')}


          <Button type='button' className={`fixed bottom-[5.2rem] inset-x-0 z-10 mx-auto flex rounded-full w-[5.5rem] h-[2.5rem] bg-primary  font-semibold  text-[1rem] shadow-md py-2 px-4 gap-2 ${isCheck ?'bg-white text-primary border-primary border-[0.12rem] bottom-[4.9rem]':'text-white bottom-[4.9rem] ' } `} 
          onClick={() => {setCheck((e) => !e);
                }}
            >
            {isCheck ?<img src='/around-map.svg' alt='targetButton' className='py-2 translate-y-[-0.25rem]' />:<img src='/around-list.svg' alt='targetButton' className='py-2 translate-y-[-0.15rem]' />}  {isCheck ? "지도" : "목록"}
          </Button>
        </>
  );
}
export default AroundPage;
