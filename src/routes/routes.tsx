import { useEffect } from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import { CURRENT_USER_KEY, ROUTES } from '~/constants';
import { useAppDispatch } from '~/hooks';
import ProtectedRoutes from '~/routes/protected-route';
import PublicRoutes from '~/routes/public-route';
import { Dashboard, Login } from '~/screens';
import { login } from '~/store';

export const Routes = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentUser = localStorage.getItem(CURRENT_USER_KEY);
    if (currentUser) {
      dispatch(login(JSON.parse(currentUser)));
    }
  }, [dispatch]);

  return (
    <Switch>
      {/* PROTECTED */}
      <Route element={<ProtectedRoutes />}>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path='*' element={<Navigate to={ROUTES.DASHBOARD} replace={true} />} />
      </Route>

      {/* PUBLIC */}
      <Route element={<PublicRoutes />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path='*' element={<Navigate to={ROUTES.LOGIN} replace={true} />} />
      </Route>
    </Switch>
  );
};
