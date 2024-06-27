import React,{useEffect, useState} from "react";


export default function Git(){
    const[data,setdata] = useState([])

    useEffect(()=>{
        fetch(`https://api.github.com/users/ImranShaikh8806`)
        .then(res=>res.json())
        .then(data=>{
        console.log(data)
        setdata(data)
        })
      },[])


    return(
      <div className="bg-gray-600 text-white  ">
        
        <img src={data.avatar_url} alt="" width={200} className="ml-30"/>
        <p>Github Name: {data.login}</p>
      </div>
    )
}