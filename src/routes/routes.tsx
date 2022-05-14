import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import { ROUTES } from '~/constants';
import ProtectedRoutes from '~/routes/protected-route';
import PublicRoutes from '~/routes/public-route';
import { Dashboard, Login } from '~/screens';

export const Routes = () => {
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
