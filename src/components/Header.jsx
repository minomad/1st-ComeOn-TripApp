import { useNavigate } from "react-router-dom";

function Header({ logo, title, search, className, back, cart }) {
const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <header className='mx-auto flex max-w-3xl justify-between px-4 py-6'>
      <div className="flex">
        {back && (
          <button type='button' onClick={handleBack}>
            <img src='/back.svg' alt='뒤로가기' />
          </button>
        )}
        {logo && <span>로고</span>}
      </div>
      <h2 className={className}>{title}</h2>
      <div className='flex gap-4'>
        {search && <img src='/search.svg' alt='검색' />}
        {cart && <img src='/cart.svg' alt='장바구니' />}
      </div>
    </header>
  );
}
export default Header;