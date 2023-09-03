import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

function RootLayout() {
  return (
    <div role='container' className='mx-auto max-w-3xl font-suit'>
      <main>
        <Outlet />
        <Navigation />
      </main>
    </div>
  );
}
export default RootLayout;
