import { numberWithComma } from '@/utils/numberWithComma';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

function HotelRoomPage({ data, title }) {
  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <section className='flex flex-col items-center px-4 pb-32'>
      <h2 className='sr-only'>객실 정보</h2>
      {data.map((item) => (
        <div key={item.id} className='py-5 font-bold'>
          <div>
            <img src={getPbImageURL(item, 'img')} alt={item.title} className='w-full max-w-xl' />
          </div>
          <p className='py-2 text-lg' key={item.id}>
            {item.title}
          </p>
          <span className='rounded bg-slate-100 px-2 py-1 font-semibold text-gray2'>
            {item.info}
          </span>
          <div className='mt-1 flex justify-between py-2'>
            <span>숙박(15:00~)</span>
            <p className='text-lg text-primary'>{numberWithComma(item.price)}원</p>
          </div>
          <div className='flex justify-end'>
            <Link
              to={`/rooms/${item.id}/${title}`}
              className='mt-5 w-52 rounded bg-primary p-1 text-center text-white max-[420px]:w-32'
            >
              객실 선택하기
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default HotelRoomPage;
