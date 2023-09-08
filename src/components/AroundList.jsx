import Button from './Button'

function AroundList({img, title, star, price}) {
  return (
    <section className='relative'>
    <h2 className='sr-only'>내 주변 숙소 목록</h2>
    <Button type='button' className='ml-auto mr-3 mt-auto flex rounded-full  text-gray2   text-[0.9rem]  py-2 px-4  '
          > {'추천순'}   <img src='/back.svg' alt='뒤로가기' className='rotate-[270deg] w-5 pt-0.5' />
        </Button>
    <div className=' absolute right-9 top-8 w-[4rem] text-center bg-white rounded-md shadow-md '>
          <ul>
            <li className='hover:bg-lightPurple text-[0.9rem] py-[0.5rem]'>추천순</li>
            <li className='hover:bg-lightPurple text-[0.9rem] py-[0.5rem]'>인기순</li>
            <li className='hover:bg-lightPurple text-[0.9rem] py-[0.5rem]'>최신순</li>
          </ul>
    </div>
      <article key={title} className='h-[30rem] lg:h-[33rem] py-1.2   shadow-md  bg-white '>
        <figure className='w-[100%] h-[57%] lg:h-[65%]  overflow-hidden mr-4 '>
          <img src={img} alt={title} className=' h-[120%] w-[110%]  cover object-cover' />
          <figcaption className='sr-only'>{title} </figcaption>
        </figure> 
        {/* 호텔명, 별점, 가격 설명박스 */}
        <div className='px-6 pt-3  '>
          <h2 className='font-bold text-lg'>{title}</h2>
          <img src='/star.svg' alt='별점' className='inline-block mb-[0.3rem] mr-[0.3rem] '/>
          <span className='font-extrabold text-[0.9rem]'>{star} </span>

          <div className=' flex justify-between py-4  '>
            <span className='block text-[0.9rem] mr-3 text-gray2'>숙박: 15:00~
            </span>
              <span className='block text-[1.2rem] font-extrabold '>{price}원</span>
          </div>
          <Button type='button' className='ml-auto mr-0 mb-2 mt-auto flex rounded-full  bg-primary text-white font-medium  text-[1rem] shadow-md py-2 px-6 gap-2 '
          > {'숙소 예약하기'}
        </Button>
        </div>
      </article>
    </section>
  )
}

export default AroundList