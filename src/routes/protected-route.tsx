import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '~/constants';

const ProtectedRoutes = (): JSX.Element => {
  const auth = true;

  return auth ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};

export default ProtectedRoutes;
