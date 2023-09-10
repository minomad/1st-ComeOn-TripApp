import Button from './Button'
import { Kakao1 } from './Kakao'



function LocationMap() {

  return (
    <section className='relative'>
      <h3 className='sr-only'>지도검색</h3>
      <div className='flex bg-lightPurple py-2 text-[1rem] pl-[8%]'><img  className='w-[1.3rem] h-[100%] pt-[0.1rem] mr-2' src='/aroundActive.svg' alt='찜목록' />
        서울특별시 강남구 테헤란로108길
      </div>
      <Kakao1 />
      <Button type='button'  className=' fixed bottom-[5.2rem] inset-x-0  z-10 px-[1.1rem] py-[0.75rem] flex mx-auto bg-primary font-bold text-white w-[8rem] h-[3rem] rounded-full shadow-lg'>위치 지정 완료</Button>
    </section>
  )
}

export default LocationMap