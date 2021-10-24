import { getDefaultNormalizer } from "@testing-library/dom"
import { useEffect, useState } from 'react'

function GifSearchComponent(props){

    const [searchTerm, setSearchTerm] = useState('')
    const [gifData, setGifData] = useState([])////this was set to an object, which made it unMAPpable
    const [gifJSX, setGifJSX] = useState('')
    const [savedGif, setSavedGif] = useState({})

    const url = `https://api.giphy.com/v1/gifs/search?api_key=9OJLbKFA9CYHBo4rBITrQ9z7DVFMCjO0&q=${searchTerm}&limit=5&offset=0&rating=g&lang=en`

    const getSearchTerm = (e) =>{
        setSearchTerm(e.target.value)
        // console.log(url)
    }

    // const handleGifChange = (gif) => {
    //     props.onChange(gif)
    // }
    const handleClick = (gif) =>{
        // console.log(gif, 'This give us all the data of that gif') //can we log out the gif object 
        // setSavedGif(gif) //can we set the gif object as the gif to save in state
        // console.log(savedGif)
        props.onChange(gif)// when the clicked changes, this will send that gif as a prop to the parent,now the parent can access the data
    }
    const getJSX = () => {
        
        let gifJSX = gifData.gifData.map((gif,idx)=>{
            return(
                <div key={idx} className="result" value={gif.id}>
                    <p>{gif.id}</p>
                    <iframe className='resultimg' src= {'https://giphy.com/embed/' + gif.id} alt="" frameBorder="0" />
                    <button onClick={()=>handleClick(gif)}
                    >Save to your library</button>
                </div>
            )
        })
        setGifJSX(gifJSX)
    }

    

    const fetchGifs = () => {
        fetch(url)
              .then((response)=> response.json())
              .then(json =>{
                  setGifData({gifData: json.data})
                //   console.log('set the data')
                //   console.log(gifData)
                //   getJSX()
              })
              .catch((err)=>{
                  console.log(err)
              })
    }

    const submitForm = (e) =>{
        e.preventDefault()
        getJSX()
    }

    // if(gifData){
    //     gifData.map(x =>{
    //         return(
    //             <div>
    //                 {x.id}
    //             </div>
    //         )
    //     })
    //     console.log('yenos')
    // }

    useEffect(function(){
        if (gifData){
            fetchGifs()
        }
        // console.log(gifData) 
    }, [searchTerm])
     
    return(
        <div>
            <h1>Giphy Search</h1>
            <form action=""
            onSubmit={submitForm}>
                <input 
                type="text" 
                value={searchTerm}
                onChange={ getSearchTerm }
                />
            </form>

            <div className="gif-container">
                {/* <img src={gifData} alt="" /> */}
               <div >{gifJSX}</div>

                <div>
                    <p></p>
                </div>
            </div>

             
        </div>
    )
}


export default GifSearchComponent