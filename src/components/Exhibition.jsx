import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';

function Exhibition({ data, selectLocation }) {
  let filterData;

  if (selectLocation === '서울') {
    filterData = data?.filter((exhibition) => exhibition.location === '서울');
  } else if (selectLocation === '경기') {
    filterData = data?.filter((exhibition) => exhibition.location === '경기');
  } else if (selectLocation === '제주') {
    filterData = data?.filter((exhibition) => exhibition.location === '제주');
  } else {
    filterData = data?.filter((exhibition) => exhibition.location === '강원');
  }

  return (
    <div>
      {filterData?.map((item) => (
        <div key={item.id} className='mb-3 flex gap-2'>
          <img
            src={getPbImageURL(item, 'thumbnail')}
            alt={item.title}
            className='w-[100px] rounded-[4px]'
          />
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
                {item.discount
                  ? numberWithComma(item.price * (100 - item.discount) * 0.01)
                  : numberWithComma(item.price)}
                <span className='text-[14px]'>원</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Exhibition;
