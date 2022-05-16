import { useEffect } from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import {
  COLLECTION_PROJECTS_KEY,
  COLLECTION_USERS_KEY,
  CURRENT_USER_KEY,
  ROUTES
} from '~/constants';
import { useAppDispatch } from '~/hooks';
import ProtectedRoutes from '~/routes/protected-route';
import PublicRoutes from '~/routes/public-route';
import { Dashboard, Login } from '~/screens';
import { loadFirstProjectsPayload, loadFirstUsersPayload, login } from '~/store';
import initialProjects from '~/store/features/project/mock';
import initialUsers from '~/store/features/user/mock';

export const Routes = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentUser = localStorage.getItem(CURRENT_USER_KEY);
    if (currentUser) {
      dispatch(login(JSON.parse(currentUser)));
    }
  }, [dispatch]);

  useEffect(() => {
    const usersStoraged = localStorage.getItem(COLLECTION_USERS_KEY);
    dispatch(loadFirstUsersPayload(usersStoraged ? JSON.parse(usersStoraged) : initialUsers));
  }, [dispatch]);

  useEffect(() => {
    const projectsStoraged = localStorage.getItem(COLLECTION_PROJECTS_KEY);
    dispatch(
      loadFirstProjectsPayload(projectsStoraged ? JSON.parse(projectsStoraged) : initialProjects)
    );
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
