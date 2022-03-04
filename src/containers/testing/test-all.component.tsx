import React from "react";

const TestAllComponent = (props:any) =>{

    if(props.resObj["test_status"]==""){
        return(<></>)
    }else {
        if(props.resObj["test_status"]=="All Tests Passed"){
            return(
                <div style={{color: "green"}}>
                    All Tests Passed
                </div>
            )
        }
        else if(props.resObj=="Stark Testing Failed"){
            return(
                <div style={{color: "red"}}>
                    Stark test Failed
                    {props.resObj["test_errors"].map((x:any, key:any)=>{
                        return(
                            <li key={key}>{x}</li>
                        )
                    }
                    )}
                </div>
            )
        }else if(props.resObj=="Controller Testing Failed"){
            return(
                <div style={{color: "red"}}>
                    Controller Testing Failed
                    {props.resObj["test_errors"].map((x:any, key:any)=>{
                        return(
                            <li key={key}>{x}</li>
                        )
                    }
                    )}
                </div>
            )
        }else if(props.resObj=="BMS Testing Failed"){
            return(
                <div style={{color: "red"}}>
                    BMS Testing Failed
                    {props.resObj["test_errors"].map((x:any, key:any)=>{
                        return(
                            <li key={key}>{x}</li>
                        )
                    }
                    )}
                </div>
            )
        }else{
            return(
                <div style={{color: "red"}}>
                    Received something else
                    {props.resObj["test_errors"].map((x:any, key:any)=>{
                        return(
                            <li key={key}>{x}</li>
                        )
                    }
                    )}
                </div>
            )
        }
}
}

export default TestAllComponent; 