import { numberWithComma } from '../utils/numberWithComma';
import { getPbImageURL } from '../utils/getPbImageURL';

function Entertainment({ data }) {
  let filterData;

  filterData = data?.filter((leisure) => leisure.category === '인기');

  return (
    <div>
      {filterData?.map((item) => (
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
    </div>
  );
}

export default Entertainment;
