import React from "react";
import { useParams } from "react-router-dom";


export default function User(){
    const{userid} =useParams()
    return(
        <>
        <h1 className="bg-gray-600 flex justify-center text-2xl font-bold p-4 text-white">User:{userid}</h1>
        </>
    )
}