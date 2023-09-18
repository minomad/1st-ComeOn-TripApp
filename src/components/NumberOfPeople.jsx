function NumberOfPeople({
  number,
  selectNumber,
  setSelectNumber,
  selectList,
  setSelectList,
  className,
  NumberBoxclassName,
  NumberListClassName = 'text-[0.9rem] py-[0.35rem]',
}) {
  return (
    <div
      className={`relative ${className}`}
      onClick={() => {
        setSelectList((e) => !e);
      }}
    >
      <img src='/myActive.svg' alt='인원수' className='mx-3 mb-1 inline-block' />
      <span className=' text-[1rem] font-semibold'>성인 {selectNumber}명</span>
      <ul className={`absolute ${NumberBoxclassName} ${!selectList ? 'hidden' : ''}`}>
        {number.map((item) => (
          <li
            key={item}
            className={`hover:bg-lightPurple ${NumberListClassName}`}
            onClick={() => {
              setSelectNumber(`${item}`);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NumberOfPeople;
