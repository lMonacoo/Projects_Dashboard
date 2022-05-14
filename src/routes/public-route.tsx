import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '~/constants';

const PublicRoutes = (): JSX.Element => {
  const auth = true;
  return auth ? <Navigate to={ROUTES.DASHBOARD} /> : <Outlet />;
};

export default PublicRoutes;
