function LeisureBrand({ src, alt, caption }) {
  return (
    <figure className='inline-block'>
      <img src={src} alt={alt} className='rounded-[4px] border border-[#E6E6E6] p-[14px]' />
      <figcaption className='mt-2 text-center text-[12px]'>{caption}</figcaption>
    </figure>
  );
}

export default LeisureBrand;
