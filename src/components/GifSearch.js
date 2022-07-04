import React, {useState} from "react"
function GifSearch({lookup}){
    console.log(lookup)
    const [search, setSearch] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        lookup(search)

        console.log("Submitted!")
    }

    function handleChange(e){
        setSearch(e.target.value)
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Type For Search</label>
                    <input id="search" 
                    className="form-control" 
                    type="text" value={search} 
                    onChange={handleChange}
                    />
                    <button type="submit" className="btn btn-success">Search</button>
                </div>
            </form>
        </div>
    )
}

export default GifSearch