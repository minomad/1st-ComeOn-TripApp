import { Link } from 'react-router-dom';

function MySelecModal({ children, MoveTo, onClose, option1 = '확인', option2 = '취소' }) {
  return (
    <section className='absolute right-1/2 top-1/4 z-50 translate-x-1/2 translate-y-1/2 '>
      <div className='h-60 w-72 rounded-lg bg-secondary bg-opacity-70 p-4 font-semibold shadow-md'>
        <p className='p-6 text-center text-lg'>{children}</p>
        <div className='fixed bottom-4 right-4 flex gap-3 text-white'>
          <Link to={MoveTo}>
            <button className='rounded bg-thirdary px-2 py-1 hover:bg-primary '>{option1}</button>
          </Link>
          <button onClick={onClose} className='mr-2 rounded bg-slate-400 px-2 py-1 hover:bg-accent'>
            {option2}
          </button>
        </div>
      </div>
    </section>
  );
}

export default MySelecModal;
