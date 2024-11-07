import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import CounterPage from './pages/CounterPage';
import TodoPage from './pages/TodoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <CounterPage />,
      },
      {
        path: 'todo',
        element: <TodoPage />,
      },
    ],
  },
]);

export default router;
