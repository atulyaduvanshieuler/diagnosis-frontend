import React from "react";
import { ResponseType } from "./run-tests.component";

const TestAllComponent = (resObj: ResponseType): React.ReactElement => {
  const { test_status, test_errors } = resObj;

  if (test_status == "") {
    return <></>;
  } else {
    if (test_status == "All Tests Passed") {
      return <div style={{ color: "green" }}>All Tests Passed</div>;
    } else if (test_status == "Stark Testing Failed") {
      return (
        <div style={{ color: "red" }}>
          Stark test Failed
          {test_errors?.map((x: string, key: number) => {
            return <li key={key}>{x}</li>;
          })}
        </div>
      );
    } else if (test_status == "Controller Testing Failed") {
      return (
        <div style={{ color: "red" }}>
          Controller Testing Failed
          {test_errors?.map((x: string, key: number) => {
            return <li key={key}>{x}</li>;
          })}
        </div>
      );
    } else if (test_status == "BMS Testing Failed") {
      return (
        <div style={{ color: "red" }}>
          BMS Testing Failed
          {test_errors?.map((x: string, key: number) => {
            return <li key={key}>{x}</li>;
          })}
        </div>
      );
    } else {
      return (
        <div style={{ color: "red" }}>
          Received something else
          {test_errors?.map((x: string, key: number) => {
            return <li key={key}>{x}</li>;
          })}
        </div>
      );
    }
  }
};

export default TestAllComponent;
