
function Modal({ children }) {
  return (
    <section className='top-1/6 absolute right-1/2 z-50 translate-x-1/2 translate-y-1/2 '>
      <div className='h-40 w-72 rounded-lg bg-secondary p-4 font-semibold shadow-md'>
        <p className='p-6 text-center text-lg'>{children}</p>
        <div className='fixed bottom-4 right-4 flex gap-3 text-white'>
          <button className='rounded bg-thirdary px-2 py-1 hover:bg-primary '>확인</button>
          <button className='hover:bg-accent mr-2 rounded bg-gray-300 px-2 py-1'>취소</button>
        </div>
      </div>
    </section>
  );
}

export default Modal;
