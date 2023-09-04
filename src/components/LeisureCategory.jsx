function LeisureCategory({className, src, alt, caption}) {
  return (
    <figure className='flex flex-col'>
      <img src={src} alt={alt} />
      <figcaption className={className}>{caption}</figcaption>
    </figure>
  );
}

export default LeisureCategory;
