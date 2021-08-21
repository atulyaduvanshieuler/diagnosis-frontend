import React from "react";

const ErrorComponent = ({error}: any) => {
	return (
		<div>
			<h3>{error}</h3>
		</div>
	);
}

export default ErrorComponent;
