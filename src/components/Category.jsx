
function Category({ category, selectCategory, setSelectCategory, icon, className }) {
  return (
    <ul className={`flex text-center font-semibold text-primary ${className}`}>
      {category.map((item) => {
        const isActive = selectCategory === item;
        return (
          <li
            key={item}
            aria-label={item}
            tabIndex='0'
            className={`h-6 w-14 cursor-pointer rounded-3xl border border-primary hover:bg-primary hover:text-white ${
              isActive ? 'bg-primary text-white' : ''
            }`}
            onClick={() => {
              setSelectCategory(item);
            }}
          >
            {icon && <img src={icon} alt={item} className='' />}
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default Category;
