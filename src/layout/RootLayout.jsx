import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import ScrollToTop from '@/utils/ScrollToTop';

function RootLayout() {
  return (
    <div role='container' className='mx-auto max-w-3xl font-suit'>
      <main>
        <ScrollToTop />
        <Outlet />
        <Navigation />
      </main>
    </div>
  );
}
export default RootLayout;
