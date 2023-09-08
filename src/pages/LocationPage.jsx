import { useState } from 'react';
import { Children } from 'react';

import Button from '@/components/Button'
import Category from '@/components/Category'
import Header from '@/components/Header'
import LocationChoice from '@/components/LocationChoice';
import LocationMap from '@/components/LocationMap';



function LocationPage() {
  const [selectNav, setSelectNav] = useState('지역별');
  const [selectCategory, setSelectCategory] = useState('');
  const category = ['강원', '제주', '부산', '광주'];

  const handleChangeNav = (nav) => {
    setSelectNav(nav);
  };
  



  return (
    <>
    
    <Header className= 'text-xl font-semibold' search='search' title='지역' back>메인페이지</Header>
    <nav>
      <ul className='text-center  flex max-w-3xl justify-evenly border-b-[0.15rem] border-[#E1E1E1] mx-15'>
        <li  className='w-[100%] pb-2'>
          <Button onClick={() => {
              handleChangeNav('지역별')
              ;
            }} 
            className={`w-[100%] pb-2 border-r-[0.1rem] border-[#E1E1E1] ${selectNav ==='지역별'
              ? 'font-bold text-black'
              : 'text-gray2'
            } `}>{'지역별'}</Button></li>
      
        {/* <div className='border-left bg-gray w-[0.1rem] h-7'></div> */}
        <li className='w-[100%] pb-2'>
          <Button onClick={() => {
              handleChangeNav('지도검색');
            }} 
            className={`w-[100%] pb-2 border-[#E1E1E1] ${selectNav ==='지도검색'
              ? 'font-bold text-black'
              : 'text-gray2'
            } `}>{'지도검색'}</Button></li>
      </ul>
      <Category
          className='justify-center gap-4 py-3 border-b-[0.15rem] border-[#E1E1E1]'
          category={category}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          // icon={icon}
        />
    </nav>
    {selectNav === '지역별' && <LocationChoice /> }
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


