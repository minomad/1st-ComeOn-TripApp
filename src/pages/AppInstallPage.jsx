import Header from '@/components/Header';
import { Link } from 'react-router-dom';
function AppInstallPage() {
  return (
    <>
      <Header
        search='search'
        back='back'
        cart='cart'
        className='ml-10 text-xl font-semibold'
        title='다운로드'
      />
      <Link to={'/'}><img src='/AppInstall.png' alt='앱 설치' /></Link>
    </>
  );
}

export default AppInstallPage;
