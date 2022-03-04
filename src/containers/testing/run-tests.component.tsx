import React,{useState} from "react";
import {Button} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Box from '@mui/material/Box';
import TestAllComponent from "./test-all.component";
import TestControllerComponent from "./test-controller.component";
import TestBmsComponent from "./test-bms.component";
import TestStarkComponent from "./test-stark.component";
import { getRequest } from "../../api-service";
import CanDataCollectionComponent from "./can-data-collection.component";


const DiagnosisComponent=()=>{

    const [response, updateResponse] = useState({
                                                    bms: {
                                                        test_status:"",
                                                        test_errors:[]
                                                        },
                                                    controller: {
                                                        test_status:"",
                                                        test_errors:[]
                                                        },
                                                    stark: {
                                                        test_status:"",
                                                        test_errors:[]
                                                        },
                                                    testall: {
                                                        test_status:"",
                                                        test_errors:[]
                                                        }
                                                })

    const [canCollectionButtons, updateCanCollectionButtons] = useState(false)

    // const [bmsResponse, updateBmsResponse] = useState({
    //                                                     test_status:"",
    //                                                     test_errors:[]
    //                                                     })

    // const [starkResponse, updateStarkResponse] = useState({
    //     "test_status":"",
    //     "test_errors":[]
    //     })

    // const [controllerResponse, updateControllerResponse] = useState({
    //     "test_status":"",
    //     "test_errors":[]
    //     })

    // const [testAllResponse, updateTestAllResponse] = useState({
    //     "test_status":"",
    //     "test_errors":[]
    //     })


    const setAllTrue = {
                        starkButton:true,
                        testAllButton:true,
                        bmsButton:true,
                        controllerButton:true
                    }
    
    const setAllFalse = {
                        starkButton:false,
                        testAllButton:false,
                        bmsButton:false,
                        controllerButton:false
                    }

    const [handleButtons, updateHandleButtons]=useState(setAllTrue)

    const onTestAll = ()=>{
        if (handleButtons.testAllButton==true){
            updateHandleButtons(setAllFalse)
            
            getRequest('testall',{
            }).then((res:any)=>{
                
                updateResponse({...response,testall:{
                                                    test_status : res.data.test_Status,
                                                    test_errors : res.data.test_errors
                                                    }
                                            })

                updateHandleButtons(setAllTrue)
                
            })
            updateHandleButtons(setAllTrue)
        }
    }

    const onTestStark = ()=>{
        if (handleButtons.starkButton==true){
            updateHandleButtons(setAllFalse)
            
            getRequest('teststark',{
            }).then((res:any)=>{
                
                updateResponse({...response, stark:{
                                                    test_status : res.data.test_Status,
                                                    test_errors : res.data.test_errors
                                                }
                               })

                updateHandleButtons(setAllTrue)
                
            })
            updateHandleButtons(setAllTrue)
        }
    }

    const onTestBms = ()=>{
        if (handleButtons.bmsButton==true){
            updateHandleButtons(setAllFalse)
            
            getRequest('testbms',{
            }).then((res:any)=>{
                
                updateResponse({...response, bms:{
                                                  test_status : res.data.test_Status,
                                                  test_errors : res.data.test_errors
                                                }
                                })

                updateHandleButtons(setAllTrue)

                // updateBmsResponse({...bmsResponse, 
                //                     test_status : res.data.test_status,
                //                     test_errors : res.data.test_errors})

                // //console.log(res.data.test_status, res.data.test_errors)
                // //console.log(bmsResponse)
                // updateHandleButtons(setAllTrue)
                
            })
            updateHandleButtons(setAllTrue)
        }
    }

    const onTestController = ()=>{
        if (handleButtons.controllerButton==true){
            updateHandleButtons(setAllFalse)
            
            getRequest('testcontroller',{
            }).then((res:any)=>{
                
                updateResponse({...response, controller:{
                                                        test_status : res.data.test_Status,
                                                        test_errors : res.data.test_errors
                                                        }
                                })

                updateHandleButtons(setAllTrue)
                
            })
            updateHandleButtons(setAllTrue)
        }
    }

    return (
        <Box sx={{marginLeft:20,marginTop:15, maxHeight:'100vh'}}>
            <Grid key={1} container direction={"row"} spacing={3}>
                <Grid item  md={3}>
                    <Button
                        className='button'
                        variant="contained"
                        onClick={onTestStark}
                        >
                            Test Stark
                    </Button>
                </Grid>
                <Grid item  md={3}>
                    <TestStarkComponent resObj = {response.stark} />
                </Grid>
            </Grid>
            <Grid key={2} container direction={"row"} spacing={3}>
                <Grid item  md={3}>
                    <Button
                        className='button'
                        variant="contained"
                        onClick={onTestBms}
                        >
                            Test BMS
                    </Button>
                </Grid>
                <Grid item  md={3}>
                    <TestBmsComponent resObj={response.bms} />
                </Grid>
            </Grid>
            <Grid key={3} container direction={"row"} spacing={3}>
                <Grid item  md={3}>
                    <Button
                        className='button'
                        variant="contained"
                        onClick={onTestController}
                        >
                            Test Controller
                    </Button>
                </Grid>
                <Grid item  md={3}>
                    <TestControllerComponent resObj = {response.controller} />
                </Grid>
            </Grid>
            <Grid key={4} container direction={"row"} spacing={3}>
                <Grid item  md={3}>
                    <Button
                        className='button'
                        variant="contained"
                        onClick={onTestAll}
                        >
                            Test All
                    </Button>
                </Grid>
                <Grid item  md={3}>
                    <TestAllComponent resObj = {response.testall} />
                </Grid>
            </Grid>
            <Grid key={5} container direction={"row"} spacing={3}>
                <Grid item  md={3}>
                    <Button
                        className='button'
                        variant="contained"
                        onClick={()=>updateCanCollectionButtons(true)}
                        >
                            Can Data Collection
                    </Button>
                </Grid>
                <Grid item  md={3}>
                    <CanDataCollectionComponent show = {canCollectionButtons} />
                </Grid>
            </Grid>
        </Box>
    )

}

export default DiagnosisComponent;