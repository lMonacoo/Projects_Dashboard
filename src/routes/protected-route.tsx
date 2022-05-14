import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '~/constants';
import { useAppSelector } from '~/hooks';

const ProtectedRoutes = (): JSX.Element => {
  const { currentUser } = useAppSelector(state => state.user);

  return currentUser ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};

export default ProtectedRoutes;
