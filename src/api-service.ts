import axios, {Method} from 'axios';
import environment from "./env/environment";
import ErrorComponent from "./components/shared/error.component";

export const request = (method: Method, endpoint: string, params: any) => axios.request({
	method,
	url: `${environment.BASE_URL}/${environment.ENV}/${endpoint}`,
	params,
	headers: {
		'authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImV4cCI6IjIwMjEtMDgtMThUMDg6MTQ6NTYuNTE4MzgwIn0.eyJ1c2VyX2lkIjoiOGEwN2M5MTctZjM3Ni00YTIxLWEyMTYtOTk4OGRjZWEyM2FiIn0.I4UMWjM-e9t1QoOsfyZfwtdd0sg8vvC4qOAg-iLB9q4'
	}
}).catch(handleError);

const handleError = (error: any) => {
	if (!navigator.onLine) {
		window.alert('Please check your Internet connection and try again!')
		return;
	}

	if (error.status === 500) {
		ErrorComponent(error);
	} else if ([401, 403, 404].includes(error.status)) {
		ErrorComponent(error);
	} else {
		ErrorComponent(error);
	}

	throw(error);
}

export default request;
