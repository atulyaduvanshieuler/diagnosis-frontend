import React, {useState} from "react";
import {Button} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import { getRequest } from "../../api-service";
import { CSVLink } from "react-csv";

const ShowCsvDownloadComponent = (props: any) =>{
    const {show, csvData} = props;
    if(show==false){
        return(<></>)
    }else{
        return(
            <CSVLink data={csvData} filename={"my-file.csv"} className="btn btn-primary" target="_blank">Download me</CSVLink>
        )
    }
}


const CanDataCollectionComponent = (props:any) => {
    const {show} = props;
    const [csvData, updateCsvData] = useState("")
    const [showCsv, updateShowCsv] = useState(false)

    const startDataLogging = () =>{
        updateShowCsv(false)
        getRequest('/api/v1/log/can-bus',{
        }).then((res:any)=>{
            alert('Colletion Started')
        })

    }

    const stopDataLogging = () =>{
        getRequest('/api/v1/write_can_data_to_csv',{
        }).then((res:any)=>{
            updateCsvData(res.data)
            updateShowCsv(true)
        })
    }



    if(show == false){
        return (
                <>
                </>
        )
    }else{
        return (
            <div>
                <Grid key={1} container direction={"row"} spacing={3}>
                    <Grid item  md={3}>
                        <Button
                            className='button'
                            variant="contained"
                            onClick={startDataLogging}
                            >
                            Start        
                        </Button>
                    </Grid>
                    <Grid item  md={3}>
                        <Button
                            className='button'
                            variant="contained"
                            onClick={stopDataLogging}
                            >
                            Stop
                        </Button>
                    </Grid>
                </Grid>
                <ShowCsvDownloadComponent show={showCsv} csvData={csvData} />

            </div>
        )


    }
}

export default CanDataCollectionComponent;