import {ComponentType} from "react";
import App from "./App";
import {Route, Switch} from "react-router-dom";
import React from "react";
import FourOhFour from "./components/shared/FourOhFour.component";
import TestComponent from "./components/shared/test.component";

interface RouteProps {
	path: string;
	key: string;
	exact: boolean;
	component: ComponentType
}

const Routes: Array<RouteProps> = [
	{
		path: '/',
		key: 'app',
		exact: true,
		component: App
	},
	{
		path: '/test-routing',
		key: 'test',
		exact: true,
		component: TestComponent
	}
]

const RouteWithSubRoutes = (route: any) => {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={props => <route.component {...props} routes={route.routes} />}
		/>
	);
}

export const RenderRoutes = ({routes}: any) => {
	return (
		<Switch>
			{
				routes.map((route: RouteProps) => <RouteWithSubRoutes {...route} />)
			}
			<Route component={FourOhFour} />
		</Switch>
	);
}

export default Routes;
