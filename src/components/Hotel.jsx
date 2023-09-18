import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Hotel({ data, selectCategory }) {
  const filteredData = data.filter((hotel) => {
    return selectCategory === '전체' ? true : hotel.category === selectCategory;
  });
  
  return (
    <div role='list' className='flex justify-center'>
      <ul className='max-w-screen-lg:grid-cols-2 grid grid-cols-4 gap-4'>
        {filteredData.map((item) => (
          <li key={item.id} className='max-w-screen-lg:px-2 py-1 hover:scale-105'>
            <Link to={`/hotel/${item.id}`} aria-label={`${item.title} 상세 정보로 이동`}>
              <img
                src={getPbImageURL(item, 'img')}
                alt={item.title}
                className='h-32 w-36 rounded-lg'
              />
              <div className='pt-1 font-semibold'>{item.title}</div>
              <div className='text-gray-500 flex items-center gap-1 text-sm'>
                <img src='/star.svg' alt='평점' className='h-4 w-4' />
                <span>{item.star}</span>
                <span>({item.count})</span>
              </div>
              <div className='pt-1 text-right font-semibold text-primary'>
                {numberWithComma(item.price)}원
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hotel;

Hotel.propTypes = {
  data: PropTypes.array,
  selectCategory: PropTypes.string,
};
