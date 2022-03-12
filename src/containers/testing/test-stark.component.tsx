import React from "react";

const TestStarkComponent = (props:any) =>{
    let {resObj} = props;
    let response = resObj;

    // useEffect(()=>{
    //     console.log(response)
    //     response = props.resObj; 
    // },[props])
    console.log(response)
    
    if(response.test_status==""){
        return(
            <></>
        )
    }else{ 
        if(response.test_status == true){
            return(
                <div style={{color: "green"}}>
                    Stark Test Passed
                </div>
            )
        }else{
            return(
            <div>
                <div style={{color: "red"}}>
                    Stark Test Failed
                </div>
                {resObj.test_errors.map((x:any, key:any)=>{
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