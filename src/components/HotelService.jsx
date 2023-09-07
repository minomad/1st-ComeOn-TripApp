function HotelService() {
  return (
    <section className='mx-auto max-w-xl px-4 pb-40 pt-5 font-semibold'>
      <h3 className='text-xl'>시설/서비스</h3>
      <div className='grid grid-cols-3 grid-rows-2 gap-8 pt-8'>
        <figure className='flex flex-col items-center'>
          <img src='/hotel-gym.svg' alt='피트니스' />
          <figcaption>피트니스</figcaption>
        </figure>
        <figure className='flex flex-col items-center'>
          <img src='/hotel-food.svg' alt='조식운영' />
          <figcaption>조식운영</figcaption>
        </figure>
        <figure className='flex flex-col items-center'>
          <img src='/hotel-car.svg' alt='주차가능' />
          <figcaption>주차가능</figcaption>
        </figure>
        <figure className='flex flex-col items-center'>
          <img src='/hotel-pool.svg' alt='수영장' />
          <figcaption>수영장</figcaption>
        </figure>
        <figure className='flex flex-col items-center'>
          <img src='/hotel-sauna.svg' alt='사우나' />
          <figcaption>사우나</figcaption>
        </figure>
        <figure className='flex flex-col items-center'>
          <img src='/hotel-wifi.svg' alt='와이파이' />
          <figcaption>와이파이</figcaption>
        </figure>
      </div>
    </section>
  );
}
export default HotelService;
