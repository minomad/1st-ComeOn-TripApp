import Button from './Button';

function HotelInfoCategory({ info, className, selectCategory, handleChangeCategory }) {
  return (
    <div className={`mx-auto flex max-w-[39rem] ${className} border-b border-gray px-4`}>
      {info.map((item) => {
        const isActive = selectCategory === item;
        return (
          <Button
            key={item}
            type='button'
            className={`h-12 cursor-pointer px-4 outline-primary hover:text-primary max-[349px]:px-2 ${
              isActive ? 'border-b-[3px] border-primary font-bold text-primary' : ''
            }`}
            onClick={() => {
              handleChangeCategory(item);
            }}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
}
export default HotelInfoCategory;
