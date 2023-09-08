import Button from './Button'
import { Kakao } from './Kakao'


function AroundMap({img, title, star, price }) {
  return (
    <section className='relative  '>
    <h2 className='sr-only'>내 주변 숙소 지도</h2>
    <Kakao title={title} img={img} />
    <div  className='flex justify-between fixed bottom-[5.2rem] inset-x-0 z-10 mx-auto'>
      {/* <Button type='button' className='mb-2 mt-auto w-9 h-9 text-gray2 font-medium  text-[1rem] border-[0.1rem] border-[#E1E1E1] shadow-md '>
        <img src='/around-target.svg' alt='targetButton' className='m-auto' />
      </Button> */}
      {/* <Button type='button' className='mb-2 mt-auto flex rounded-full w-[5.5rem] h-[2.5rem] bg-primary text-white font-medium  text-[1rem] shadow-md py-2 px-4 gap-2 '
        >
        <img src='/around-list.svg' alt='targetButton' className='py-2'
        onClick={() => {
          {setSelectCategory}('목록')}} /> {'목록'}
      </Button> */}
      {/* <div className='flex flex-col mb-2  '>
          <Button type='button' className=' w-9 h-9 text-gray2 font-medium  text-[1rem] border-[0.1rem] border-[#E1E1E1] '>
          <img src='/around-plus.svg' alt='targetButton' className='m-auto' />
          </Button>
          <Button type='button' className=' w-9 h-9 text-gray2 font-medium  text-[1rem] border-[0.1rem] border-[#E1E1E1] shadow-md'>
          <img src='/around-minus.svg' alt='targetButton' className='m-auto' />
          </Button>
      </div> */}
    </div>
    <div className='fixed bottom-[5.2rem] mx-auto w-[30rem] lg:w-[40rem] inset-x-0 z-10  h-[9.3rem] py-3 px-3   flex  shadow-md  bg-white rounded-3xl'>
      <figure className='w-[35%]  overflow-hidden mr-4 rounded-2xl'>
        <img src={img} alt={title} className=' h-[110%] w-[100%]  cover object-cover' />
        <figcaption className='sr-only'>{title} </figcaption>
      </figure>
      {/* 호텔명, 별점, 가격 설명박스 */}
      <div className=''>
        <h2 className='font-bold'>{title}</h2>
        <img src='/star.svg' alt='별점' className='inline-block mb-[0.3rem] mr-[0.3rem] '/>
        <span className='font-extrabold text-[0.9rem]'>{ star} </span>

        <div className='block absolute right-5 bottom-5 '>
          <span className=' text-[0.9rem] mr-3 text-gray2'>숙박: 15:00~
          </span>
            <span className=' text-[1.2rem] font-bold '>{price}원</span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AroundMap