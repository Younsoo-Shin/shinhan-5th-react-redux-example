import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import CounterPage from './pages/CounterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <CounterPage />,
      },
    ],
  },
]);

export default router;
