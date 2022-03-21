import { ComponentType } from 'react';
import App from './App';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import FourOhFour from './components/shared/FourOhFour.component';
import WelcomeComponent from './components/shared/welcome.component';
import LoginComponent from './containers/auth/login.component';
import DiagnosisComponent from './containers/testing/run-tests.component';
import testingPersonDetailsFormComponent from './containers/testing/testing-person-details-form.component';
import startTestingComponent from './containers/testing/start-testing.component';

interface RouteProps {
  path: string;
  key: string;
  exact: boolean;
  component: ComponentType;
}

const Routes: Array<RouteProps> = [
  {
    path: '/',
    key: 'app',
    exact: true,
    component: App,
  },
  {
    path: '/login',
    key: 'login',
    exact: true,
    component: LoginComponent,
  },
  {
    path: '/welcome',
    key: 'test',
    exact: true,
    component: WelcomeComponent,
  },
  {
    path: '/runtest',
    key: 'diagnosis',
    exact: true,
    component: DiagnosisComponent,
  },
  {
    path: '/filldetails',
    key: 'testing-person-details-form',
    exact: true,
    component: testingPersonDetailsFormComponent,
  },
  {
    path: '/starttesting',
    key: 'start-testing',
    exact: true,
    component: startTestingComponent,
  },
];

const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export const RenderRoutes = ({ routes }: any) => {
  return (
    <Switch>
      {routes.map((route: RouteProps) => (
        <RouteWithSubRoutes {...route} />
      ))}
      <Route component={FourOhFour} />
    </Switch>
  );
};

export default Routes;
