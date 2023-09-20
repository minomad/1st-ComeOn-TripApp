import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { usePocketData } from '@/api/usePocketData';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import { Link } from 'react-router-dom';
import Header from '@/components/Header'
import Spinner from '@/components/Spinner';
import MetaTag from '@/components/MetaTag';


function LocationDetailPage() {
  let hotelCategoryData;
  const { category } = useParams(); // category 파라미터를 가져옵니다.

  const [selectCategory, setSelectCategory]= useState(category);

  const { getListData } = usePocketData('hotel');
  const { data: hotelData,
    isLoading: isHotelLoading, 
  } = useQuery(['hotel'], () => getListData());

  if (isHotelLoading) {
    return <Spinner />;
  }

  switch (selectCategory) {
    case '도심힐링':
      hotelCategoryData = hotelData.filter((hotel) => hotel.category === '도심힐링');
      break;
    case '강원':
      hotelCategoryData = hotelData.filter((hotel) => hotel.category === '강원');
      break;
    case '광주':
      hotelCategoryData = hotelData.filter((hotel) => hotel.category === '광주');
      break;
    default:
      hotelCategoryData = hotelData.filter((hotel) => hotel.category === selectCategory);
      break;
    
  }
  
  return (
    <>
    <MetaTag title='지역 리스트' description='지역별 호텔리스트' />
    <Header back='back' search='search' title='' />
    <section className=''>
      <h1 className='fixed bg-white rounded-b-3xl w-full font-bold text-[1.4rem] max-w-3xl z-10 md:text-[1.7rem] px-[2.5rem] pb-2 '>
        <img src='/locationActive.svg' alt='선택 위치' className='inline-block h-6 md:h-7 mb-0.5 mr-[0.1rem] '/>
        { category === '도심힐링' ? '서울' : category }
      </h1>
      <div role='group' className='pt-[3.1rem] pb-[5rem]  '>
      {hotelCategoryData?.map((item) => (
        <article key={item.id} className='pb-10  py-1.2   shadow-md  bg-white '>
          <figure className='w-[100%] h-[57%] lg:h-[65%]  overflow-hidden mr-4 '>
            <img
              src={getPbImageURL(item, 'img')}
              alt=''
              className=' h-[130%] w-[120%]  cover object-cover' />
            <figcaption className='sr-only'>{item.title} </figcaption>
          </figure>
          
          <div role="group" className='px-6 pt-3  '>
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <img src='/star.svg' alt='별점' className='inline-block mb-[0.3rem] mr-[0.3rem] '/>
            <span className='font-extrabold text-[0.9rem]'>{item.star} </span>
            <span className='font-bold text-gray2 text-[0.9rem]'>&#183; {item.grade} </span>
            <div className=' bg-lightPurple inline-block ml-1 pr-3 pl-2 pb-1 rounded-full'>
              <img src='/locationActive.svg' alt='주소' className='inline-block h-4  mr-[0.2rem] '/>
              <span className='font-medium text-primary text-[0.8rem] mb-[1rem]'>{item.location} </span>
            </div>
            <div className=' flex justify-between pt-3 pb-3  '>
              <span className='block text-[0.9rem] mr-3 text-gray2'>숙박: 15:00~
              </span>
                <span className='block text-[1.2rem] font-extrabold mr-2 '>{numberWithComma(item.price)}원</span>
            </div>
            
            <div className='flex  justify-end'>
              <Link to={`hotel/${item.id}`} className='flex rounded-full  bg-primary hover:bg-[#1E51EE] text-white font-medium  text-[1rem] shadow-md py-2 px-6 gap-2 '>
                {'숙소 예약하기'}
              </Link>
              
            </div>
          </div>
        </article>
        ))}
      </div>
    </section>
    </>
  )
}

export default LocationDetailPage