import {React, useState} from 'react';

const Welcome=()=>{
    const[welcomeTitle,setTitle]=useState("");
    return(
        <div id="welcomeTitle">
            <p>  Welcome to Raga Surabhi </p>
        </div>
    )
}
export default Welcome;