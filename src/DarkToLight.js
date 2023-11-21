import React, {useEffect, useState } from "react";
import 'DarkToLight.css';

function DarkToLight(){
    const [theme, setTheme] = useState(false);

    const handleclick=()=>{
        setTheme(!theme);
    }
    useEffect(()=>{
        if(theme==true){
            document.body.classList.add("dark");
        }else{
            document.body.classList.add("light");
        }
    })

    return(
        <div>
            <button onclick={handleclick}>Dark</button>
            <h1>Theme in React</h1>
            <span>Light and Dark Mode</span>
        </div>
    )
}

export default DarkToLight;