import React from "react";

const TestStatusComponent = (props:any) =>{

    if(props.show==""){
        return(<></>)
    }else if(props.show=="All Tests Passed"){
        return(
            <div style={{color: "green"}}>
                All Tests Passed
            </div>
        )
    }
    else if(props.show=="Stark Testing Failed"){
        return(
            <div style={{color: "red"}}>
                Stark test passed
            </div>
        )
    }else if(props.show=="Controller Testing Failed"){
        return(
            <div style={{color: "red"}}>
                Controller Testing Failed
            </div>
        )
    }else if(props.show=="BMS Testing Failed"){
        return(
            <div style={{color: "red"}}>
                BMS Testing Failed
            </div>
        )
    }else{
        return(
            <div style={{color: "red"}}>
                Received something else
            </div>
        )
    }
}

export default TestStatusComponent; 