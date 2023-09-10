import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Spinner from './components/Spinner';
import router from './routes';

const querClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 20 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={querClient}>
        <Suspense fallback={<Spinner />}>
          <RouterProvider router={router} />
          <Toaster
            toastOptions={{
              success: {
                style: {
                  background: '#5D6FFF',
                  color: 'white',
                },
              },
              error: {
                style: {
                  background: '#E03B69',
                  color: 'white',
                },
              },
            }}
          />
        </Suspense>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
export default App;
