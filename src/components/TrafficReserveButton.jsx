function TrafficReserveButton({src, alt}) {
  return (
    <button
      type='button'
      className='flex w-full items-center justify-between gap-3 rounded-[4px] border border-[#cccccc] px-4 py-3 mt-3'
    >
      <div className='flex items-center gap-1'>
        <img src={src} alt={alt} className='h-10 w-10' />
        <span className='font-bold'>{alt}</span>
      </div>
      <div className='flex gap-1'>
        <span className='text-[14px] text-[#919191]'>출발/도착 선택</span>
        <img src='/leisure-next.png' alt='다음으로' />
      </div>
    </button>
  );
}

export default TrafficReserveButton;
