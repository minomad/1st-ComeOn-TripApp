import { useParams } from 'react-router-dom';
import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import  Spinner  from '@/components/Spinner';
import  Header  from '@/components/Header';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
function TrafficCarDetailPage() {
  let { id } = useParams();

  const { getIdData } = usePocketData('traffic');
  const { data, isLoading } = useQuery(['traffic', id], () => getIdData(id, { expand: 'product' }));
  console.log(data);

  if (isLoading) {
    return <Spinner />;
  }
  const { title, discount, price, brand } = data;
  const discountPrice = price * (100 - discount) * 0.01;

  return (
    <>
      <Header className='ml-10 text-xl font-semibold ' back='back' search='search' cart='cart' />
      <section className='pb-[100px]'>
        <img className='w-full' key={data.id} src={getPbImageURL(data, 'main')} alt={brand} />
        <div className='mx-5 my-4'>
          <div className='flex justify-between'>
            <span className='text-[20px] font-bold'>{title}</span>
            <div className='mt-1 flex gap-2'>
              <button className='h-[20px] w-[20px] bg-[url("/leisure-share.png")]'></button>
              <button className='h-[20px] w-[20px] bg-[url("/leisure-heart.png")]'></button>
            </div>
          </div>
          <div className='my-3 flex flex-col'>
            <span className='text-[12px] font-bold text-accent'>
              {discount}%
              <span className='pl-1 font-normal text-[#919191] line-through'>
                {numberWithComma(price)}원
              </span>
            </span>
            <span className='text-[18px] font-bold'>{numberWithComma(discountPrice)}원 부터~</span>
          </div>
          <span className='font-bold'>상품 소개</span>
          <div className='my-3 rounded-[4px] border border-[#e6e6e6] p-4'>
            <div className='mb-3 flex gap-2 text-[12px]'>
              <img src='/leisure-time.png' alt='' />
              <span className='font-bold'>당일사용</span>
              <span className='text-[#616161]'>당일 사용 가능</span>
            </div>
            <div className='mb-3 flex gap-2 text-[12px]'>
              <img src='/leisure-info.png' alt='' />
              <span className='font-bold'>이용방법</span>
              <span className='text-[#616161]'>QR/바코드 확인 후 입장</span>
            </div>
            <div className='flex gap-2 text-[12px]'>
              <img src='/leisure-calendar.png' alt='' />
              <span className='font-bold'>유효기간</span>
              <span className='text-[#616161]'>~ 2024.02.09</span>
            </div>
          </div>
          <img src={getPbImageURL(data, 'detail')} alt='' className='border-none rounded-[4px] w-full' />
        </div>

        <div className='h-2 w-full bg-slate-300'></div>

      </section>
    </>
  );

}

export default TrafficCarDetailPage
