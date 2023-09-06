import { useState } from 'react';
import { Children } from 'react';
import Button from '../components/Button'
import Category from '../components/Category'
import Header from '../components/Header'

function LocationPage() {
  const [selectCategory, setSelectCategory] = useState('');
  const [selectLocationSide, setSelectLocationSide] = useState('');
  const category = ['강원', '제주', '부산', '광주'];
  const locationSideButton = ['서울', '경기', '부산'];
  return (
    <>
    
    <Header className= 'text-xl font-semibold' search='search' title='지역' back>메인페이지</Header>
    <nav>
      <ul className='text-center  flex max-w-3xl justify-evenly border-b-[0.15rem] border-[#E1E1E1] mx-15'>
        <li className='w-[100%] pb-2'><Button className='w-[100%] pb-2 border-r-[0.1rem] border-[#E1E1E1]'>{'지역별'}</Button></li>
      
        {/* <div className='border-left bg-gray w-[0.1rem] h-7'></div> */}
        <li className='w-[100%] pb-2'><Button className='w-[100%] pb-2'>{'지도검색'}</Button></li>
      </ul>
      <Category
          className='justify-center gap-4 py-3 border-b-[0.15rem] border-[#E1E1E1]'
          category={category}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          // icon={icon}
        />
    </nav>
    {/* 지역별 section */}
    {/* <section className='max-w-3xl flex justify-between gap-4'>
      <nav>
        <LocationSideButtonList locationSideButton={locationSideButton} selectLocationSide={selectLocationSide} setSelectLocationSide={setSelectLocationSide}></LocationSideButtonList> */}
      {/* <ul className='text-center  flex max-w-3xl flex-col'>
        <li className=' w-[30%]'><Button className='w-[100%] text-gray2 font-bold px-4 py-7 bg-lightPurple   border-b-[0.1rem] border-[#E1E1E1]'>{'서울'}</Button></li>
      
        <li className=' w-[30%]'><Button className='w-[100%] text-gray2 font-bold px-4 py-7 bg-lightPurple border-b-[0.1rem] border-[#E1E1E1]'>{'경기'}</Button></li>
        <li className=' w-[30%]'><Button className='w-[100%] text-gray2 font-bold px-4 py-7 bg-lightPurple border-b-[0.1rem] border-[#E1E1E1]'>{'부산'}</Button></li>
      </ul> */}
    {/*   </nav>
       <ul className='flex  flex-col  flex-grow '>
        <li className=' '><Button type='button' className='w-[100%] text-gray2 font-medium px-4 py-7 text-[1rem] border-b-[0.1rem] border-[#E1E1E1]'>{'강남/역삼/삼성/논현'}</Button></li>
        <li className=' '><Button type='button' className='w-[100%] text-gray2 font-medium px-4 py-7 text-[1rem] border-b-[0.1rem] border-[#E1E1E1]'>{'서초/신사/방배'}</Button></li>
        <li className=' '><Button type='button' className='w-[100%] text-gray2 font-medium px-4 py-7 text-[1rem] border-b-[0.1rem] border-[#E1E1E1]'>{'잠실/신천(잠실새내)'}</Button></li>
      </ul>
    </section> */}
    {/* 지도검색 section*/}
    <section className='relative'>
      <div className='flex bg-lightPurple py-2 text-[1rem] pl-[8%]'><img  className='w-[1.3rem] h-[100%] pt-[0.1rem] mr-2' src='/aroundActive.svg' alt='찜목록' />
        서울특별시 강남구 테헤란로108길
      </div>
      <Button type='button'  className=' px-[1.1rem] py-[0.75rem] flex mx-auto bg-primary font-bold text-white w-[8rem] h-[3rem] rounded-full shadow-lg'>위치 지정 완료</Button>
    </section>
    </>
  )
}
export default LocationPage



export function LocationSideButtonList({ locationSideButton, selectLocationSide, setSelectLocationSide, className }) {
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
            /* onClick={() => {
              setSelectLocationSide(item);
            }} */
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
}

