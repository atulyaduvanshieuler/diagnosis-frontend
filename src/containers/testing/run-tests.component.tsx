/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import TestAllComponent from './test-all.component';
import TestControllerComponent from './test-controller.component';
import TestBmsComponent from './test-bms.component';
import TestStarkComponent from './test-stark.component';
import { getRequest } from '../../api-service';
import CanDataCollectionComponent from './can-data-collection.component';
import './run-tests.component.css';

const setAllTrue = {
  starkButton: true,
  testAllButton: true,
  bmsButton: true,
  controllerButton: true,
};

const setAllFalse = {
  starkButton: false,
  testAllButton: false,
  bmsButton: false,
  controllerButton: false,
};

export interface ResponseType {
  test_status?: string | boolean;
  test_errors?: string[];
}

const DiagnosisComponent = (): React.ReactElement => {
  const [response, updateResponse] = useState({
    bms: {
      test_status: '',
      test_errors: [],
    },
    controller: {
      test_status: '',
      test_errors: [],
    },
    stark: {
      test_status: '',
      test_errors: [],
    },
    testall: {
      test_status: '',
      test_errors: [],
    },
  });

  const [canCollectionButtons, updateCanCollectionButtons] = useState(false);

  const [handleButtons, updateHandleButtons] = useState(setAllTrue);

  const onTestAll = () => {
    if (handleButtons.testAllButton == true) {
      updateHandleButtons(setAllFalse);

      getRequest('api/v1/test/all', {}).then((res: any) => {
        updateResponse({
          ...response,
          testall: {
            test_status: res.data.test_status,
            test_errors: res.data.test_errors,
          },
        });

        updateHandleButtons(setAllTrue);
      });
      updateHandleButtons(setAllTrue);
    }
  };

  const onTestStark = () => {
    if (handleButtons.starkButton == true) {
      updateHandleButtons(setAllFalse);

      getRequest('api/v1/test/stark', {}).then((res: any) => {
        updateResponse({
          ...response,
          stark: {
            test_status: res.data.test_status,
            test_errors: res.data.test_errors,
          },
        });

        updateHandleButtons(setAllTrue);
      });
      updateHandleButtons(setAllTrue);
    }
  };

  const onTestBms = () => {
    if (handleButtons.bmsButton == true) {
      updateHandleButtons(setAllFalse);

      getRequest('api/v1/test/bms', {}).then((res: any) => {
        console.log(res);
        updateResponse({
          ...response,
          bms: {
            test_status: res.data.test_status,
            test_errors: res.data.test_errors,
          },
        });

        updateHandleButtons(setAllTrue);
      });
      updateHandleButtons(setAllTrue);
    }
  };

  const onTestController = () => {
    if (handleButtons.controllerButton == true) {
      updateHandleButtons(setAllFalse);

      getRequest('api/v1/test/controller', {}).then((res: any) => {
        updateResponse({
          ...response,
          controller: {
            test_status: res.data.test_status,
            test_errors: res.data.test_errors,
          },
        });
        updateHandleButtons(setAllTrue);
      });
      updateHandleButtons(setAllTrue);
    }
  };

  return (

      <div className = 'body'>
        <Grid container direction={'row'} spacing={3}>
          <Grid item md={3}>
            <Grid key={1} container direction={'column'} spacing={3}>
              <Grid item md={12}>
                <Button 
                  className="button" 
                  variant="contained" 
                  onClick={onTestStark}
                >
                  Test Stark
                </Button>
              </Grid>

              <Grid item md={12}>
                <TestStarkComponent {...response.stark} />
              </Grid>
            </Grid>
          </Grid>


          <Grid item md={3}>
            <Grid key={2} container direction={'column'} spacing={3}>
              <Grid item md={12}>
                <Button 
                  className="button" 
                  variant="contained" 
                  onClick={onTestBms}
                >
                  Test BMS
                </Button>
              </Grid>

              <Grid item md={12}>
                <TestBmsComponent {...response.bms} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={3}>
            <Grid key={3} container direction={'column'} spacing={3}>
              <Grid item md={12}>
                <Button
                  className="button"
                  variant="contained"
                  onClick={onTestController}
                >
                  Test Controller
                </Button>
              </Grid>

              <Grid item md={12}>
                <TestControllerComponent {...response.controller} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={3}>
            <Grid key={4} container direction={'column'} spacing={3}>
              <Grid item md={12}>
                <Button className="button" variant="contained" onClick={onTestAll}>
                  Test All
                </Button>
              </Grid>

              <Grid item md={12}>
                <TestAllComponent {...response.testall} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={3}>
            <Grid key={5} container direction={'column'} spacing={3}>
              <Grid item md={12}>
                <Button
                  className="button"
                  variant="contained"
                  onClick={() => updateCanCollectionButtons(true)}
                >
                  Can Data Collection
                </Button>
              </Grid>

              <Grid item md={12}>
                <CanDataCollectionComponent show={canCollectionButtons} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
  );
};

export default DiagnosisComponent;
