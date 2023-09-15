import { useState } from 'react';
import { Helmet } from 'react-helmet-async'
import Header from '@/components/Header';
import HotelInfoCategory from '@/components/HotelInfoCategory';
import SearchHotel from '@/components/SearchHotel';
import SearchLeisure from '@/components/SearchLeisure';
import SearchTraffic from '@/components/SearchTraffic';

function SearchPage() {
  const info = ['숙소', '레저/티켓', '교통/항공'];
  const [selectCategory, setSelectCategory] = useState('숙소');

  const handleChangeCategory = (category) => {
    setSelectCategory(category);
  };
  return (
    <>
     <Helmet>
        <title>검색</title>
      </Helmet>
      <Header className='text-xl font-semibold' back='back' cart='cart' title='검색'/>
      <section className='px-4 pb-0'>
        <h2 className='sr-only'>검색페이지</h2>
      </section>
      <HotelInfoCategory
          info={info}
          className='font-semibold text-[1.1rem]'
          selectCategory={selectCategory}
          handleChangeCategory={handleChangeCategory}
        />
        {selectCategory === '숙소' && <SearchHotel/>}
        {selectCategory === '레저/티켓' && <SearchLeisure/>}
        {selectCategory === '교통/항공' && <SearchTraffic/>}
        
    </>
  )
}
export default SearchPage