function MyChatMessage({ message }) {
  return (
    <div className='min-h-2 relative min-w-[20px] pb-3'>
      <div className='id mb-2 flex justify-end'>
        <div className=''>
          <div className='min-w-[30px] rounded-2xl bg-lightPurple px-5 py-3'>
            <div className='max-w-[500px] overflow-auto whitespace-normal text-sm sm:text-base md:text-sm'>
              {message}
            </div>
          </div>
        </div>
        <div className='ml-3 aspect-square max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] flex-shrink-0 items-start overflow-hidden rounded-full'>
          <img src='/my-testimg.jpg' alt='프로필사진' className='aspect-square' />
        </div>
      </div>
    </div>
  );
}

export default MyChatMessage;
