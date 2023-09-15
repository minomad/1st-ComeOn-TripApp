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
          className='mt-12  h-full overflow-hidden
            rounded-full border-2 border-secondary bg-gray object-cover shadow-md'
        >
          <div className='aspect-square h-full w-full min-w-[90px] max-w-[90px] overflow-hidden   object-cover sm:max-h-[100px] sm:min-h-[100px] sm:min-w-[100px] sm:max-w-[100px] md:max-h-[120px] md:min-h-[120px] md:min-w-[120px] md:max-w-[120px]'>
            <img src={avatarSrc} alt={imgalt} />
          </div>
        </Button>
      </Link>
    </section>
  );
}

export default MyCircleProfile;
