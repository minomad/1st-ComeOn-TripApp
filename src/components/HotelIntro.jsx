function HotelIntro({ intro }) {
  return (
    <section className='mx-auto px-4 max-w-xl pt-5 pb-40'>
      <h2 className='font-semibold text-xl'>호텔 소개</h2>
      <p className="">{intro}</p>
    </section>
  );
}
export default HotelIntro;
