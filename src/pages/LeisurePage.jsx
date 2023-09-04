import Header from '@/components/Header';
import LeisureCategory from '../components/LeisureCategory';
import LeisureBrand from '../components/LeisureBrand';
import { usePocketData } from '../api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import { getPbImageURL } from '../utils/getPbImageURL';
import { numberWithComma } from '../utils/numberWithComma';
import Category from '../components/Category';
import { useState } from 'react';

function LeisurePage() {
  const { getListData: getLeisureData } = usePocketData('leisure');
  const { getListData: getExhibitionData } = usePocketData('exhibition');
  const { data: leisureData } = useQuery(['leisure'], () => getLeisureData());
  const { data: exhibitionData } = useQuery(['exhibition'], () =>
    getExhibitionData({ sort: 'ranking' }),
  );

  console.log(exhibitionData);

  const [selectCategory, setSelectCategory] = useState('');
  const category = ['서울', '경기', '제주', '강원'];

  return (
    <>
      <Header
        className='ml-10 text-xl font-semibold'
        back='back'
        search='search'
        cart='cart'
        title='레저/티켓'
      />
      <section>
        <h2 className='sr-only'>레저 페이지</h2>
        <div className='flex justify-between px-4 text-[10px]'>
          <LeisureCategory src='/leisure-themePark.png' alt='테마파크' caption='테마파크' />
          <LeisureCategory src='/leisure-waterPark.png' alt='워터파크' caption='워터파크' />
          <LeisureCategory src='/leisure-reservation.png' alt='전시예매' caption='전시예매' />
          <LeisureCategory src='/leisure-tour.png' alt='투어/관광' caption='투어/관광' />
          <LeisureCategory
            src='/leisure-plus.png'
            alt='더보기'
            caption='더보기'
            className='text-center'
          />
        </div>
        <div className='mx-5 flex justify-between py-[14px] font-bold'>
          <h3 className='text-[18px]'>인기 브랜드관</h3>
          <a href='' className='text-[14px] leading-[27px] text-primary'>
            전체보기
          </a>
        </div>
        <div className='flex gap-4 px-5 pb-5'>
          <LeisureBrand src='/leisure-everland.png' alt='에버랜드' caption='에버랜드' />
          <LeisureBrand src='/leisure-lotteworld.png' alt='롯데월드' caption='롯데월드' />
          <LeisureBrand src='/leisure-carribeanbay.png' alt='캐리비안베이' caption='캐리비안베이' />
        </div>
        <div className='flex h-[118px] justify-between bg-secondary px-5 pt-3 font-bold'>
          <h3 className='text-[18px] text-white'>놀거리 기획전</h3>
          <a href='' className='text-[14px] leading-[27px] text-white'>
            전체보기
          </a>
        </div>
        <div className='mx-5 mt-[-70px] rounded-[4px] border border-[#e6e6e6] bg-white px-4 pt-6'>
          <h3 className='text-[18px] font-bold'>인기놀거리 10% 쿠폰할인</h3>
          <span className='text-[14px] font-medium text-primary'>
            여름 놀거리 야놀자에서 쿠폰받고 즐기자!
          </span>
          {leisureData?.map((item) => (
            <div key={item.id} className='flex gap-3 border-b-[1px] border-[#f2f2f2] py-4'>
              <img
                src={getPbImageURL(item, 'thumbnail')}
                alt={item.brand}
                className='h-[120px] w-[120px] rounded-[4px] border-none'
              />
              <div className='flex grow flex-col justify-between'>
                <div>
                  <span className='line-clamp-2 text-[14px] leading-[14px]'>{item.title}</span>
                  <div className='flex flex-wrap'>
                    {item.label.map((label) => (
                      <span
                        key={label}
                        className='mt-1 rounded-[2px] border-[1px] border-[#e6e6e6] bg-[#f2f2f2] px-1 py-[2px] text-[10px]'
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='text-end'>
                  <span className='text-end text-[12px] leading-3 text-gray line-through'>
                    {numberWithComma(item.price)}원
                  </span>
                  <div className='text-end font-bold leading-4'>
                    <span className='text-accent'>{item.discount}</span>
                    <span className='mr-1 text-[12px] text-accent'>%</span>
                    <span>{numberWithComma(item.price * (100 - item.discount) * 0.01)}</span>
                    <span className='font-normal'>원</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <a className='mx-[-16px] flex items-center justify-center border-[1px] border-[#f2f2f2] bg-[#fbfbfb] py-[14px]' href=''>
            기획전 자세히보기
            <img className='h-[14px]' src='/leisure-next.png' alt='더보기' />
          </a>
        </div>
        <div className='p-5'>
          <div className='flex items-center justify-between pb-3'>
            <div>
              <h3 className='text-[18px] font-bold leading-[18px]'>지역별 전시 TOP 랭킹</h3>
              <span className='text-[12px] leading-[12px]'>최근 1주간 판매량이 가장 많았어요</span>
            </div>
            <a className='text-primary'>전체보기</a>
          </div>
          <Category
            className='mb-4 justify-center gap-5'
            category={category}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
          />
          {exhibitionData?.map((item) => (
            <div key={item.id} className='mb-3 flex gap-2'>
              <img src={getPbImageURL(item, 'thumbnail')} alt={item.title} className='w-[100px] rounded-[4px]' />
              <div className='flex grow flex-col justify-between'>
                <div className='flex flex-col'>
                  <span className='text-[14px]'>{item.title}</span>
                  <span className='text-[12px] text-[#919191]'>{item.company}</span>
                </div>
                <div className='text-end'>
                  {item.discount && (
                    <span className='text-accent'>
                      {item.discount}
                      <span className='text-[12px]'>%</span>
                    </span>
                  )}
                  <span className='ml-1 font-bold'>
                    {item.discount ? numberWithComma((item.price * (100 - item.discount)) * 0.01) : numberWithComma(item.price)}
                    <span className='text-[14px]'>원</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default LeisurePage;
