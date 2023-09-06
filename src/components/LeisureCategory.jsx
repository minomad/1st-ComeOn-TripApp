function LeisureCategory({ category, selectCategory, setSelectCategory, icon, className }) {
  return (
    <div className={`flex flex-wrap font-semibold text-[#666666] border border-[#eaeef1] ${className}`}>
      {category.map((item) => {
        const isActive = selectCategory === item;
        return (
          <button
            key={item}
            aria-label={item}
            tabIndex='0'
            className={` w-[46%] cursor-pointer border-b border-[#eaeef1] mx-[2%] px-[10px] py-3 text-[14px] ${
              isActive ? 'bg-[#f5f5f5] px-[10px] py-3 font-bold text-[black]' : ''
            }`}
            onClick={() => {
              setSelectCategory(item);
            }}
          >
            {icon && <img src={icon} alt={item} className='' />}
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default LeisureCategory;
