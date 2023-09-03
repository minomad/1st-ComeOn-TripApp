
function Header({ children, logo, title, search, back,cart }) {
  return (
    <header className='mx-auto flex max-w-3xl justify-between px-4 py-6'>
      {back && <img src='/back.svg' alt='두로가기' />}
      {logo && <span>로고</span>}
      <h2 className='text-center'>{title}</h2>
      {children}
      <div className='flex gap-4'>
        {search && <img src='/search.svg' alt='검색' />}
        {cart && <img src='/cart.svg' alt='장바구니' />}
      </div>
    </header>
  );
}
export default Header;
