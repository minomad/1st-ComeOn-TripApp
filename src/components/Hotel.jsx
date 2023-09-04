function Hotel({ data, selectCategory }) {
    let filterData;
  
    if (selectCategory === '휴가에딱') {
      filterData = data.filter((hotel) => hotel.category === '휴가에딱');
    } else if (selectCategory === '도쿄') {
      filterData = data.filter((hotel) => hotel.category === '도쿄');
    } else {
      filterData = data.filter((hotel) => hotel.category === selectCategory);
    }
  
    return (
      <div role='ListWrapper' className='flex justify-center '>
        <ul className='grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4'>
          {filterData?.map((item) => (
            <li key={item.id} className='py-1'>
              <img
                src={getPbImageURL(item, 'img')}
                alt={item.title}
                className='h-32 w-36 rounded-lg'
              />
              <p className=' font-semibold'>{item.title}</p>
              <div className='flex items-center gap-1 text-sm text-gray2'>
                <img src='/star.svg' alt='평점' className='h-4 w-4' />
                <span>{item.star}</span>
                <span>({item.count})</span>
              </div>
              <p className='text-right pt-1 font-semibold text-primary'>{item.price}원</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Hotel;