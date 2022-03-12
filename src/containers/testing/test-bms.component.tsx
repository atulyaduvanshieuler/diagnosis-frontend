import React from "react";

const TestBmsComponent = (props:any) =>{
    const {resObj} = props;

    if(resObj["test_status"]==""){
        return(
            <></>
        )
    }else{ 
        if(resObj["test_status"] == true){
            return(
                <div style={{color: "green"}}>    
                    BMS Test Passed
                </div>
            )
        }else{
            return(
            <div>
                Test Failed
                {resObj["test_errors"].map((x:any, key:any)=>{
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

export default TestBmsComponent;