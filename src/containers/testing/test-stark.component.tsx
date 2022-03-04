import React from "react";

const TestStarkComponent = (props:any) =>{
    if(props.resObj["test_status"]==""){
        return(
            <></>
        )
    }else{ 
        if(props.resObj["test_status"] == true){
            return(
                <div style={{color: "green"}}>
                    Stark Test Passed
                </div>
            )
        }else{
            return(
            <div>
                
                Test Failed
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

export default TestStarkComponent;