import React, { useEffect, useState } from "react";
import GifList from "./GifList"
import GifSearch from "./GifSearch"


function GiftListContainer(){
    const [gifs, setGifs] = useState([])
    const [search, setSearch] = useState('dolphins')
    const URL = "https://api.giphy.com/v1/gifs/search?api_key=0hZIM9Prt2MnNXjDPrTzRIU2TXqIbyxM&q=Giphy&limit=25&offset=0&rating=g&lang=en"
    useEffect(()=>{
        fetch(URL)
        .then((r)=>r.json())
        .then((data)=>{
            const allGif = data.data.map((gif)=>({url:gif.url}))
            setGifs(allGif)
        })
    }, [])
    
    console.log(gifs)
    return (
        <div style={{display: "flex"}}>
            <GifList gifs = {gifs}/>
            <GifSearch lookup = {setSearch} />
        </div>
    )

}

export default GiftListContainer