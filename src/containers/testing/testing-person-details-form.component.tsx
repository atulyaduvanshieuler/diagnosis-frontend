import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { postRequest } from '../../api-service';
import { useHistory } from 'react-router-dom';
import './run-tests.component.css';

const testingPersonDetailsFormComponent = (): React.ReactElement => {
  const [formData, updateFormData] = useState({
    personName: '',
    vehicleEmchNumber: '',
    vehicleChassisNo: '',
    testingCenter: '',
  });

  const history = useHistory();

  const onSubmit = () => {
    if (formData.personName == null) {
      alert('Please Enter Your Name');
    } else if (formData.vehicleEmchNumber == null) {
      alert('Please Enter Vehicle EMCH Number');
    } else if (formData.vehicleChassisNo == '') {
      alert('Please Enter Vehicle Chassis Number');
    } else if (formData.testingCenter == '') {
      alert('Please Select Testing Center');
    } else {
      postRequest('api/v1/test/vehicle', {
        ...formData,
      }).then((res:any) => {
        //below code will change depending onn the structure of data
        if(res.data === 'Success'){
          history.push('/runtest');
        }else{
          alert(res.data);
        }
      });
    }
  };

  return (
    <div className='body'>
        <h2>Fill your details here:</h2>

        <div className="form-area">
          <Grid key={1} container direction={'row'} spacing={3}>
            <Grid item md={3}>
              <InputLabel id="person-name">
                Your Name
              </InputLabel>
            </Grid>
            <Grid item md={3}>
              <TextField
                title={' Your Name: '}
                placeholder={'Enter Your Name here'}
                type={'text'}
                value={formData.personName}
                variant={'outlined'}
                onChange={(e) =>
                  updateFormData({ ...formData, personName: e.target.value })
                }
                size={'small'}
              />
            </Grid>
          </Grid>
          <br />
          <Grid key={2} container direction={'row'} spacing={3}>
            <Grid item md={3}>
              <InputLabel id="testing-center">
                Testing Center 
              </InputLabel>
            </Grid>
            <Grid item md={3}>
              <Select
                labelId="testing-center"
                id="testing-center-id"
                value={formData.testingCenter}
                onChange={(e) =>
                  updateFormData({ ...formData, testingCenter: e.target.value })
                }
                size={'small'}
                sx={{ minWidth: 2 / 3 }}
              >
                <MenuItem value={'Assembly-Line'}>Assembly Line</MenuItem>
                <MenuItem value={'Noida-Plant'}>Noida Plant</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <br />
          <Grid key={3} container direction={'row'} spacing={3}>
            <Grid item md={3}>
              <InputLabel id="vehicle-emch-number">
                Vehicle EMCH Number
              </InputLabel>
            </Grid>
            <Grid item md={3}>
              <TextField
                title={' Vehicle EMCH Number: '}
                placeholder={'Enter EMCH Number here'}
                type={'text'}
                value={formData.vehicleEmchNumber}
                variant={'outlined'}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    vehicleEmchNumber: e.target.value,
                  })
                }
                size={'small'}
              />
            </Grid>
          </Grid>
          <br />
          <Grid key={4} container direction={'row'} spacing={3}>
            <Grid item md={3}>
              <InputLabel id="vehicle-chassis-number">
                Vehicle Chassis Number
              </InputLabel>
            </Grid>
            <Grid item md={3}>
              <TextField
                title={' Vehicle Chassis Number: '}
                placeholder={'Enter Vehicle Chassis Number here'}
                type={'text'}
                value={formData.vehicleChassisNo}
                variant={'outlined'}
                onChange={(e) =>
                  updateFormData({
                    ...formData,
                    vehicleChassisNo: e.target.value,
                  })
                }
                size={'small'}
              />
            </Grid>
          </Grid>
          <br />

          <Grid key={5} container direction={'row'} spacing={3}>
            <Grid item md={3}>
              <Button className="button" variant="contained" onClick={onSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
    </div>
  );
};

export default testingPersonDetailsFormComponent;
