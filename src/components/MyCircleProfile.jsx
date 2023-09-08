import { Link } from 'react-router-dom';
import Button from '../components/Button';

function MyCircleProfile({ towhere, imgpath, imgalt }) {
  return (
    <section className='mb-10 flex items-center justify-center'>
      <Link to={towhere}>
        <Button
          type='button'
          className='mt-12  h-full overflow-hidden
            rounded-full border-2 border-secondary bg-gray object-cover shadow-md'
        >
          <img
            src={imgpath}
            alt={imgalt}
            className='aspect-square h-full w-full min-w-[90px] max-w-[90px] overflow-hidden object-cover sm:max-h-[100px] sm:min-h-[100px] sm:min-w-[100px] sm:max-w-[100px] md:max-h-[120px] md:min-h-[120px] md:min-w-[120px] md:max-w-[120px]'
          />
        </Button>
      </Link>
    </section>
  );
}

export default MyCircleProfile;
