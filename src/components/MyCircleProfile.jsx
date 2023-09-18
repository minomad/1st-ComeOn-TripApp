import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { getPbImageURL } from '@/utils/getPbImageURL';
import useAuthStore from '../store/useAuthStore';

function MyCircleProfile({ towhere, imgalt = '내 프로필 사진' }) {
  const user = useAuthStore((state) => state.user);
  const [avatarSrc, setAvatarSrc] = useState('/My-ProfileBasic.jpeg');
  useEffect(() => {
    if (user && user.avatar) {
      try {
        const url = getPbImageURL(user, 'avatar');
        setAvatarSrc(url);
      } catch (error) {
        setAvatarSrc('/My-ProfileBasic.jpeg');
      }
    }
  }, [user]);

  return (
    <section className='mb-10 flex items-center justify-center'>
      <Link to={towhere} tabIndex='-1'>
        <Button
          type='button'
          className='relative mt-12 h-full overflow-hidden rounded-full border-2 border-secondary bg-gray shadow-md'
          style={{ width: '120px', height: '120px' }} // adjust this as needed
        >
          <img
            src={avatarSrc}
            alt={imgalt}
            className='absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform object-cover'
          />
        </Button>
      </Link>
    </section>
  );
}

export default MyCircleProfile;
