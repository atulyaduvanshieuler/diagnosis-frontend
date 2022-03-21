import React from 'react';
import { Button} from '@mui/material';
import { getRequest } from '../../api-service';
import { useHistory } from 'react-router-dom';
import './run-tests.component.css';

const startTestingComponent = () =>{

    const history = useHistory();

    const onSubmit = () =>{
        getRequest('api/v1/starttesting', {})
        .then((res:any) => {
            if(res.data === 'Success'){
              history.push('/filldetails');
            }else{
              alert(res.data);
            }
          });
    }
    return (
        <div className='body'>
            <Button className="button" variant="contained" onClick={onSubmit}>
                Start Testing
            </Button>
        </div>
    );
}

export default startTestingComponent;