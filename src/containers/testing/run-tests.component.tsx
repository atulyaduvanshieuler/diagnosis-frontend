import React,{useState} from "react";
import {Button} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Box from '@mui/material/Box';
import TestStatusComponent from "./test-status.component";
import { getRequest } from "../../api-service";


const DiagnosisComponent=()=>{

    const [showTest, updateShowTest] = useState("")
    const [handleStarkButton, updateHandleStarkButton]=useState(true)

    const onClick = ()=>{
        if (handleStarkButton==true){
            updateHandleStarkButton(false)
            
            getRequest('runtest',{
            }).then((res:any)=>{
                //below code will change depending onn the structure of data
                console.log(res.data)
                updateShowTest(res.data)
                updateHandleStarkButton(true)
                
            })
        }
    }

    return (
        <Box sx={{marginLeft:20,marginTop:15, maxHeight:'100vh'}}>
            <Grid key={1} container direction={"row"} spacing={3}>
                <Grid item  md={3}>
                    <Button
                        className='button'
                        variant="contained"
                        onClick={onClick}
                        >
                            Test Stark
                    </Button>
                </Grid>
                <Grid item  md={3}>
                    <TestStatusComponent show={showTest} />
                </Grid>
            </Grid>
        </Box>
    )

}

export default DiagnosisComponent;