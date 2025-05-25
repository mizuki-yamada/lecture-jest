import { useRoutes } from 'react-router-dom';
import Topbar from './components/Topbar';
import routes from './Routes';
import type { JSX } from 'react';

const AppRoutes = (): JSX.Element | null => {
  const element = useRoutes(routes);
  return element;
};

const App = () => {
  return (
    <>
      <Topbar />
      <AppRoutes />
    </>
  );
};

export default App;
