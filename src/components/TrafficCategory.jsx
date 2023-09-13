function TrafficCategory({ category, selectCategory, setSelectCategory, className }) {
  return (
    <div className={`flex text-center font-semibold text-[#616161] ${className}`}>
      {category.map((item) => {
        const isActive = selectCategory === item;
        return (
          <button
            key={item}
            aria-label={item}
            tabIndex='0'
            className={`py-3 text-[20px] w-full cursor-pointer border border-[#e6e6e6] outline-[#e6e6e6] hover:bg-white hover:text-black ${
              isActive ? 'bg-white text-black' : 'bg-[#f2f2f2] text-[#616161]'
            }`}
            onClick={() => {
              setSelectCategory(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default TrafficCategory;
