import { useState } from 'react';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
// import { numberWithComma } from '@/utils/numberWithComma';
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
  const {
    data: hotelData,
    isLoading: isHotelLoading,
    isError,
  } = useQuery(['hotel'], () => getListData());

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
      <header className='text flex max-w-3xl justify-between gap-5 px-5 pt-4 text-center'>
        <form action='' method='get' className='w-[100%]'>
          <Input
            id='aroundSearch'
            label='장소 검색'
            type='search'
            labelClass='sr-only'
            inputRef={aroundSearch}
            placeholder='장소, 지명 검색'
            className='focus:ring-none search-cancel:rotate-45  h-9 w-[100%] rounded-full bg-lightPurple px-5 focus:outline-none focus:ring-secondary'
          />
        </form>
        <Button>{<img src='/cart.svg' alt='장바구니' className='py-0.4 h-7' />}</Button>
      </header>
      <nav>
        <Category
          className='gap-2 border-b-[0.15rem] border-[#E1E1E1] px-5 pb-2 pt-2'
          category={category}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          // icon={icon}
        />
      </nav>
      <h2 className='sr-only'>내주변 페이지</h2>
      {/* 첫번째 지도 섹션 */}

      {/* {selectCategory==='목록' && selectCategory==='숙소' ? <AroundList img={img} title={title} star={data1?.star} price={data1?.price} />
      :( selectCategory==='숙소' ?<AroundMap img={img} title={title} star={data1?.star} price={data1?.price}  />:'')
      } */}

      {/* 두번째 호텔 섹션 */}
      {}

      {isCheck && selectCategory === '숙소' ? (
        <AroundList data={hotelData} selectCategory={selectCategory} />
      ) : !isCheck && selectCategory === '숙소' ? (
        <AroundMap data={hotelData} selectCategory={selectCategory} />
      ) : (
        ''
      )}

      {/* {isCheck && selectCategory==='레저/티켓' ? <AroundLeisureList data={leisureData}  selectCategory={selectCategory} setSelectCategory={setSelectCategory} img={img} title={title} star={data1?.star} price={data1?.price} /> :<AroundMap data={leisureData} selectCategory={selectCategory} img={img} title={title} star={data1?.star} price={data1?.price}  />} */}
      {/* {selectCategory=='레저/티켓'? <AroundList data={hotelData}  selectCategory={selectCategory} setSelectCategory={setSelectCategory} img={img} title={title} star={data1?.star} price={data1?.price} /> :<AroundMap data={hotelData} selectCategory={selectCategory} img={img} title={title} star={data1?.star} price={data1?.price}  />} */}
      {isCheck && selectCategory === '레저/티켓' ? (
        <AroundLeisureList data={leisureData} selectCategory={selectCategory} />
      ) : !isCheck && selectCategory === '레저/티켓' ? (
        <AroundMap data={leisureData} selectCategory={selectCategory} />
      ) : (
        ''
      )}

      <Button
        type='button'
        className={`fixed inset-x-0 bottom-[5.2rem] z-10 mx-auto flex h-[2.5rem] w-[5.5rem] gap-2 rounded-full  bg-primary  px-4 py-2 text-[1rem] font-semibold shadow-md ${
          isCheck
            ? 'bottom-[4.9rem] border-[0.12rem] border-primary bg-white text-primary'
            : 'bottom-[4.9rem] text-white md:bottom-[18rem]'
        } `}
        onClick={() => {
          setCheck((e) => !e);
        }}
      >
        {isCheck ? (
          <img src='/around-map.svg' alt='targetButton' className='translate-y-[-0.25rem] py-2' />
        ) : (
          <img src='/around-list.svg' alt='targetButton' className='translate-y-[-0.15rem] py-2' />
        )}{' '}
        {isCheck ? '지도' : '목록'}
      </Button>
    </>
  );
}
export default AroundPage;
