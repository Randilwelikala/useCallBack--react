import { useEffect, useState } from "react";

const NameList  = ({getNames})=>{

    const [names,setNames] = useState([]);

    useEffect(()=>{
        setNames([...names,getNames()]);
    },[]);
    
    

    return(
        <div>
            {names.map((item)=>{
                return <p>{item.name}</p>
            })}
        </div>
    )
}

export default NameList;