import Header from '@/components/Header';
import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import { getPbImageURL } from '../utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import TrafficReserveButton from '../components/TrafficReserveButton';
import { Link } from 'react-router-dom';
function TrafficPage() {
  const { getListData: getTrafficData } = usePocketData('traffic');
  const { data: trafficData } = useQuery(['traffic'], () => getTrafficData());

  return (
    <>
      <Header
        className='ml-10 text-xl font-semibold'
        back='back'
        search='search'
        cart='cart'
        title='교통'
      />
      <section className='px-5'>
        <h2 className='sr-only'>교통 페이지</h2>
        <ul className='flex justify-around'>
          <Link to={'/install'}>
            <li className='flex items-center gap-1'>
              <img src='/leisure-bus.png' alt='고속버스' className='h-[58px] w-[38px] py-[10px]' />
              <span className='text-[12px]'>고속버스</span>
            </li>
          </Link>
          <Link to={'/train'}>
            <li className='flex items-center gap-1'>
              <img src='/leisure-train.png' alt='기차' className='h-[58px] w-[38px] py-[10px]' />
              <span className='text-[12px]'>기차</span>
            </li>
          </Link>
          <li className='flex items-center gap-1'>
            <img src='/leisure-car.png' alt='렌트카' className='h-[58px] w-[38px] py-[10px]' />
            <span className='text-[12px]'>렌트카</span>
          </li>
        </ul>
        <div>
          <h3 className='mb-3 text-[18px] font-bold'>렌터카 상품 추천</h3>
          <section className='flex gap-2'>
            {trafficData?.map((item) => (
              <div key={item.id}>
                <div className='w-[140px]'>
                  <img
                    src={getPbImageURL(item, 'thumbnail')}
                    alt={item.title}
                    className='w-[140px] rounded-[4px]'
                  />
                  <span className='text-[14px] leading-[14px]'>{item.title}</span>
                  {item.label.map((label) => (
                    <div key={label} className='flex flex-wrap'>
                      <span className='mr-1 mt-1 rounded-[2px] border-[1px] border-[#e6e6e6] bg-[#f2f2f2] px-1 py-[2px] text-[10px]'>
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className='text-end'>
                  {item.discount && (
                    <span className='text-end text-[12px] leading-3 text-gray line-through'>
                      {numberWithComma(item.price)}원
                    </span>
                  )}
                  <div className='text-end font-bold leading-4'>
                    {item.discount && (
                      <span className='text-accent'>
                        {item.discount}
                        <span className='mr-1 text-[12px] text-accent'>%</span>
                      </span>
                    )}
                    <span>{numberWithComma(item.price * (100 - item.discount) * 0.01)}</span>
                    <span className='font-normal'>원</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <section>
            <h3 className='mb-3 mt-3 text-[18px] font-bold'>교통편 바로예매</h3>
            <button
              type='button'
              className='flex w-full items-center justify-between gap-3 rounded-[4px] border border-[#cccccc] px-4 py-3'
            >
              <div className='flex items-center gap-1'>
                <img src='/leisure-bus.png' alt='고속버스' className='h-10 w-10' />
                <span className='font-bold'>고속버스</span>
              </div>
              <div className='flex gap-1'>
                <span className='text-[14px] text-[#919191]'>출발/도착 선택</span>
                <img src='/leisure-next.png' alt='다음으로' />
              </div>
            </button>
            <TrafficReserveButton src={'/leisure-train.png'} alt={'기차'} />
            <TrafficReserveButton src={'/leisure-airplane.png'} alt={'항공권'} />
          </section>
        </div>
      </section>
    </>
  );
}

export default TrafficPage;
