import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import { numberWithComma } from '@/utils/numberWithComma';
import { useState } from 'react';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { Link } from 'react-router-dom';
import Spinner from '@/components/Spinner';
import Header from '@/components/Header'
import Button from '@/components/Button';

function LocationDetailPage() {
  let hotelCategoryData;
  const { category } = useParams(); // category 파라미터를 가져옵니다.

  const [selectCategory, setSelectCategory]= useState(category);


  const { getListData:getLeisureData } = usePocketData('leisure');
  const { data: leisureData,
    isLoading,
    isError ,
  } = useQuery(['leisure'], () => getLeisureData());

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>서버 에러 발생</div>;
  }

  switch (selectCategory) {
    case '도심힐링':
      hotelCategoryData = hotelData.filter((hotel) => hotel.category === '도심힐링');
      break;
    case '강원':
      hotelCategoryData = hotelData.filter((hotel) => hotel.category === '강원');
      break;
    case '놀이동산':
      hotelCategoryData = leisureData.filter((leisure) => leisure.category === '놀이동산');
      break;
    default:
      hotelCategoryData = leisureData.filter((leisure) => leisure.category === selectCategory);
      break;
    
  }
  


  return (
    <>
    <Helmet>
      <title>지역-리스트</title>
    </Helmet>
    <Header back='back' search='search' title='' />
    <section>
      <h2 className='fixed bg-white rounded-b-3xl w-full font-bold text-[1.4rem] max-w-3xl z-10 md:text-[1.7rem] px-[2.5rem] pb-2 '>
        <img src='/locationActive.svg' alt='위치' className='inline-block h-6 md:h-7 mb-0.5 mr-[0.1rem] '/>
        { category === '도심힐링' ? '서울' : category }
      </h2>
      <div className='pt-[3.1rem] pb-[5rem]'>
      {hotelCategoryData?.map((item) => (
        <article key={item.id} className='h-[30rem] lg:h-[33rem] py-1.2   shadow-md  bg-white '>
          <figure className='w-[100%] h-[57%] lg:h-[65%]  overflow-hidden mr-4 '>
            <img
              src={getPbImageURL(item, 'img')}
              alt={item.title}
              className=' h-[120%] w-[110%]  cover object-cover' />
            <figcaption className='sr-only'>{item.title} </figcaption>
          </figure>
          {/* 호텔명, 별점, 가격 설명박스 */}
          <div className='px-6 pt-3  '>
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <img src='/star.svg' alt='별점' className='inline-block mb-[0.3rem] mr-[0.3rem] '/>
            <span className='font-extrabold text-[0.9rem]'>{item.star} </span>
            <span className='font-bold text-gray2 text-[0.9rem]'>&#183; {item.grade} </span>
            <div className=' bg-lightPurple inline-block ml-1 pr-3 pl-2 pb-1 rounded-full'>
              <img src='/locationActive.svg' alt='위치' className='inline-block h-4  mr-[0.2rem] '/>
              <span className='font-medium text-primary text-[0.8rem] mb-[1rem]'>{item.location} </span>
            </div>
            <div className=' flex justify-between py-4  '>
              <span className='block text-[0.9rem] mr-3 text-gray2'>숙박: 15:00~
              </span>
                <span className='block text-[1.2rem] font-extrabold mr-2 '>{numberWithComma(item.price)}원</span>
            </div>
            
            <Link to={`/LeisureDetail/${item.id}`}>
              <Button type='button' className='ml-auto mr-0 mb-2 mt-auto flex rounded-full  bg-primary text-white font-medium  text-[1rem] shadow-md py-2 px-6 gap-2 '
              > {'숙소 예약하기'}
              </Button>
            </Link>
            
          </div>
        </article>
        ))}
      </div>
    </section>
    </>
  )
}

export default LocationDetailPage