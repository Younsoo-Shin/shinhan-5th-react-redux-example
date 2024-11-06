import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';

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
