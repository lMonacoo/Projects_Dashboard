import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '~/constants';
import { useAppSelector } from '~/hooks';

const PublicRoutes = (): JSX.Element => {
  const { currentUser } = useAppSelector(state => state.user);
  return currentUser ? <Navigate to={ROUTES.DASHBOARD} /> : <Outlet />;
};

export default PublicRoutes;
