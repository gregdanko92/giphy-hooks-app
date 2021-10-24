import GifLibraryComponent from "./GifLibraryPage"
import GifSearchComponent from "./GifSearchComponent"
import {useState} from 'react'

function HomePage(){
    const [libraryGif, setLibraryGif] = useState({})
    const gifArray = []
    console.log(gifArray)

    const [gifLibrary, setGifLibrary] = useState([])


    function handleChange(newGif){ // call back function will be passed to child comoponent, which then can call it from props and therefore send back data
        // console.log(gifArray)
        setLibraryGif(newGif)
        gifArray.push(newGif)
        console.log(gifArray)
        setGifLibrary([gifArray])
    }

    return(
        <div>
            <h2>HomePage Component</h2>
            <GifLibraryComponent value={gifLibrary} />
            <GifSearchComponent value={libraryGif} onChange={handleChange} />
        </div>
    )
}

export default HomePage