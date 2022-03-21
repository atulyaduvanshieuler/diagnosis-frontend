import React from "react";
import { ResponseType } from "./run-tests.component";

const TestBmsComponent = (resObj: ResponseType): React.ReactElement => {
  const { test_status, test_errors } = resObj;

  if (test_status === "") {
    return <></>;
  } else if (test_status === true) {
    return <div style={{ color: "green" }}>BMS Test Passed</div>;
  } else {
    return (
      <div style={{ color: "red" }}>
        <span>BMS Test Failed</span>
        {test_errors?.map((x: string, key: number) => (
          <li key={key}>{x}</li>
        ))}
      </div>
    );
  }
};

export default TestBmsComponent;
