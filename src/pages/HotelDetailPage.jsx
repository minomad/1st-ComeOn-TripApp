import { useState } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Spinner from '@/components/Spinner';
import HotelInfoCategory from '@/components/HotelInfoCategory';
import HotelRoom from '@/components/HotelRoom';
import HotelReview from '@/components/HotelReview';
import HotelIntro from '@/components/HotelIntro';
import HotelService from '@/components/HotelService';

function HotelDetailPage() {
  const { id } = useParams();
  const [selectCategory, setSelectCategory] = useState('객실선택');
  const { getIdData } = usePocketData('hotel');
  const { getListData } = usePocketData('room');
  const { data: hotelData, isLoading: isHotelLoading } = useQuery(['hotel', id], () =>
    getIdData(id),
  );

  const option = {
    sort: '+created',
  };

  const { data: roomData, isLoading: isRoomlLoading } = useQuery(['room'], () =>
    getListData(option),
  );

  const handleChangeCategory = (category) => {
    setSelectCategory(category);
  };

  if (isHotelLoading || isRoomlLoading) {
    return <Spinner />;
  }

  const filterRoom = roomData.filter((room) => room.category === hotelData.grade);

  return (
    <>
      <Helmet>
        <title>{hotelData.title}</title>
      </Helmet>
      <Header back='back' home='home' cart='cart' />
      <section>
        <h2 className='sr-only'>호텔 상세 페이지</h2>
        <div className='flex justify-center'>
          <div>
            <img
              src={getPbImageURL(hotelData, 'img')}
              alt={hotelData.title}
              className='w-full max-w-[39rem]'
            />
            <div className='border-b-8 border-thirdary p-4'>
              <span className='text-sm font-semibold text-gray3'>{hotelData.grade}</span>
              <div className='flex justify-between'>
                <h3 className='text-2xl font-semibold max-[500px]:text-xl'>{hotelData.title}</h3>
                <img src='/heartActive.svg' alt='찜' />
              </div>
              <div className='flex items-center gap-1 text-primary'>
                <img src='/locationActive.svg' alt={hotelData.title} className='h-4 w-4' />
                {hotelData.location}
              </div>
              <div className='flex items-center gap-1 pt-1 text-sm text-gray2'>
                <img src='/star.svg' alt='평점' className='h-4 w-4' />
                <span>{hotelData.star}</span>
                <span>({hotelData.count})</span>
              </div>
            </div>
          </div>
        </div>
        
        <HotelInfoCategory
          selectCategory={selectCategory}
          handleChangeCategory={handleChangeCategory}
        />
        
        {selectCategory === '객실선택' && <HotelRoom data={filterRoom} />}
        {selectCategory === '소개' && <HotelIntro intro={hotelData.intro} />}
        {selectCategory === '시설/서비스' && <HotelService />}
        {selectCategory === '후기' && <HotelReview />}
      </section>
    </>
  );
}
export default HotelDetailPage;
