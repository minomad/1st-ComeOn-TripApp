import { useState } from 'react';
import { Children } from 'react';
import { Helmet } from 'react-helmet-async';
import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import Button from '@/components/Button'
import Category from '@/components/Category'
import Header from '@/components/Header'
import LocationChoice from '@/components/LocationChoice';
import LocationMap from '@/components/LocationMap';
import Spinner from '@/components/Spinner';


function LocationPage() {
  const [selectNav, setSelectNav] = useState('지역별');
  const [selectCategory, setSelectCategory] = useState('');
  const category = ['강원', '제주', '부산', '광주'];

  
  const { getListData } = usePocketData('hotel');
  const { data: hotelData,
    isLoading: isHotelLoading,
    isError , 
  } = useQuery(['hotel'], () => getListData());


  const handleChangeNav = (nav) => {
    setSelectNav(nav);
  };
  
  if (isHotelLoading) {
    return <Spinner />;
  }
  
  if (isError) {
    return <div>서버 에러 발생</div>;
  }




  return (
    <>
    <Helmet>
      <title>지역</title>
    </Helmet>
    <Header className= 'text-xl font-semibold' search='search' title='지역' back />
    <nav className='fixed bg-white pt-14 top-0 left-0 right-0 z-20'>
      <ul className='text-center mx-auto flex max-w-3xl justify-evenly border-b-[0.1rem] border-[#E1E1E1] mx-15'>
        <li  className='w-[100%] pb-1'>
          <Button onClick={() => {
              handleChangeNav('지역별')
              ;
            }} 
            className={`w-[100%] pb-2 border-r-[0.1rem] border-[#E1E1E1] ${selectNav ==='지역별'
              ? 'font-bold text-black'
              : 'text-gray2'
            } `}>{'지역별'}</Button></li>
      
        {/* <div className='border-left bg-gray w-[0.1rem] h-7'></div> */}
        <li className='w-[100%] '>
          <Button onClick={() => {
              handleChangeNav('지도검색');
            }} 
            className={`w-[100%] pb-2 border-[#E1E1E1] ${selectNav ==='지도검색'
              ? 'font-bold text-black'
              : 'text-gray2'
            } `}>{'지도검색'}</Button></li>
      </ul>
      <Category
          className='justify-center max-w-3xl mx-auto gap-4 py-2 border-b-[0.1rem] border-[#E1E1E1]'
          category={category}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          // icon={icon}
        />
    </nav>
    <h2 className='sr-only'>지역 페이지</h2>
    {selectNav === '지역별' && <LocationChoice data={hotelData} /> }
    {selectNav === '지도검색' && <LocationMap/>}
    
    </>
  )
}
export default LocationPage



/* export function LocationSideButtonList({ locationSideButton, selectLocationSide, setSelectLocationSide, className }) {
  return (
    <ul className={`flex  flex-col  ${className}`}>
      {locationSideButton.map((item) => {
        const isActive = selectLocationSide === item;
        return (
          
          <li
            key={item}
            aria-label={item}
            tabIndex='0'
            className={``}
          onClick={() => {
            setSelectLocationSide(item);
          }}
          >
            <Button 
            className={` w-[100%] text-gray2 font-bold px-[3.9rem] py-7  bg-lightPurple border-b-[0.1rem] border-[#E1E1E1] 
            ${isActive ? 'bg-white text-black' : ''
            }`} 
            onClick={() => {
              setSelectLocationSide(item);
            }}
            >{item}</Button>
            
          </li>
        );
      })}
    </ul>
  );
} */


