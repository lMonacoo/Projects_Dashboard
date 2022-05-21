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
import * as JsonProjectsData from '~/store/features/project/projects.json';
import * as JsonUsersData from '~/store/features/user/users.json';

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
    const convertInitialJSONdata = JSON.parse(JSON.stringify(JsonUsersData)).default;

    dispatch(
      loadFirstUsersPayload(usersStoraged ? JSON.parse(usersStoraged) : convertInitialJSONdata)
    );
  }, [dispatch]);

  useEffect(() => {
    const projectsStoraged = localStorage.getItem(COLLECTION_PROJECTS_KEY);
    const convertInitialJSONdata = JSON.parse(JSON.stringify(JsonProjectsData)).default;

    dispatch(
      loadFirstProjectsPayload(
        projectsStoraged ? JSON.parse(projectsStoraged) : convertInitialJSONdata
      )
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
