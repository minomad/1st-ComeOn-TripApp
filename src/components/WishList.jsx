import { motion, AnimatePresence } from 'framer-motion';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import { Link } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import PropTypes from 'prop-types';

function WishList({
  wish,
  cart,
  data,
  link,
  handleDelete,
  hotel,
  img,
  filterData,
  cartHotel,
  handleCheckbox,
  buttonClass,
}) {
  return (
    <AnimatePresence>
      {data?.map((item) => {
        return (
          <motion.article
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            key={item.id}
            className='relative mx-auto mt-3 flex w-full max-w-[39rem] flex-col rounded-lg bg-lightPurple p-5'
          >
            {cartHotel && (
              <div className='flex items-center gap-2 pb-3'>
                <Input
                  type='checkbox'
                  id={item.id}
                  label='선택'
                  className='checkbox h-5 w-5'
                  labelClass='sr-only'
                  onClick={() => handleCheckbox(item.id)}
                />
                {filterData?.map((orderItem) => (
                  <h3 key={orderItem.id} className='text-lg font-bold'>
                    {orderItem.title}
                  </h3>
                ))}
              </div>
            )}
            <div className='flex gap-3'>
              {img && (
                <figure className='h-[130px] w-[130px]'>
                  <img
                    src={getPbImageURL(item, img)}
                    alt={item.title}
                    className='h-full w-full object-cover rounded-md'
                  />
                  <figcaption className='sr-only'>{item.title}</figcaption>
                </figure>
              )}
              <div className='flex flex-col min-[375px]:pb-2'>
                <Link to={`/${link}/${item.id}`} className='font-bold min-[375px]:text-lg'>
                  {item.title}
                </Link>
                {hotel && (
                  <div className='flex items-center gap-1 text-sm text-gray2'>
                    <img src='/star.svg' alt='평점' className='h-4 w-4' />
                    <span>{item.star}</span>
                  </div>
                )}
                {cartHotel &&
                  filterData?.map((orderItem) => (
                    <div key={orderItem.id} className='flex flex-col'>
                      <span className='text-sm'>체크인: {orderItem.checkin.slice(0, 10)}</span>
                      <span className='text-sm'>체크아웃: {orderItem.checkout.slice(0, 10)}</span>
                    </div>
                  ))}
                <div className='pt-8 font-bold text-primary min-[400px]:text-[1.2rem]'>
                  <p className='absolute bottom-4 right-5'>{numberWithComma(item.price)}원</p>
                </div>
              </div>
            </div>
            <Button
              type='button'
              className={`absolute right-5 h-6 w-6 cursor-pointer ${buttonClass}`}
              onClick={() => handleDelete(item.id)}
            >
              {wish && <img src='/heartActive.svg' alt='찜' />}
              {cart && <img src='/close.svg' alt='닫기' className='h-5 w-5' />}
            </Button>
          </motion.article>
        );
      })}
    </AnimatePresence>
  );
}
export default WishList;

WishList.propTypes = {
  wish: PropTypes.bool,
  cart: PropTypes.bool,
  data: PropTypes.array,
  link: PropTypes.string,
  handleDelete: PropTypes.func,
  hotel: PropTypes.bool,
  img: PropTypes.string,
  filterData: PropTypes.array,
  cartHotel: PropTypes.bool,
  handleCheckbox: PropTypes.func,
  buttonClass: PropTypes.string,
};
