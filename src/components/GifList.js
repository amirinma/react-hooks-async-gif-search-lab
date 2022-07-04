import React from "react";
function GifList({gifs}){
    
    return (
        <ul>
            {gifs.map((ur)=>
                (
                    <li>
                        <img src={ur.url} alt="gif"/>
                    </li>
                )
            )}
        </ul>
    )
}

export default GifList