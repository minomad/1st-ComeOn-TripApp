function Category({ category, selectCategory, setSelectCategory, icon, className }) {
  return (
    <div className={`flex text-center font-semibold text-primary ${className}`}>
      {category.map((item) => {
        const isActive = selectCategory === item;
        return (
          <button
            key={item}
            aria-label={item}
            tabIndex='0'
            className={`h-[1.7rem] w-20 outline-primary cursor-pointer rounded-3xl border border-primary hover:bg-primary hover:text-white ${
              isActive ? 'bg-primary text-white' : ''
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

export default Category;
