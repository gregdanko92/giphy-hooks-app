import{useState, useEffect} from 'react'
function GifLibraryComponent(props){
    
    const [gifState, setGifState] = useState([])
    const [globalGifJSX, setGlobalGifJSX] = useState('')
    const [toggle, setToggle] = useState(true)


    let gifData = props.value[0]
    console.log('DATA', gifData)
    console.log('STATE', gifState)

    function getGifJSX(){
        if (!gifData){
            return
        } else {
            let gifJSX = gifData.map((gif,idx)=>{
               return(
                   <p key={idx}>{gif.id}</p>
                   )
               })
               setGlobalGifJSX(gifJSX)
            //    setToggle(!toggle)
               
            //    setToggle(false)
               return gifJSX

        }
    }
        
        useEffect(() => {
            setGifState(gifData)
            getGifJSX()
        }, [gifData, toggle]);


    


    
    return(
        <div>
            {globalGifJSX}
            
        </div>
    )
}
    
    

export default GifLibraryComponent
    //     const [gifArraySource, setGifArraySource] = useState([]);
    //     let array=props.value
    //     console.log(array)
    //     console.log(gifArraySource[1])
    
    //     useEffect(() => {
    //         gifJSX()
    //     }, [props.value]);
        
    
    
    //     // const gifArraySource = props.value
    
    //     console.log(props.value)
        
    //     const gifJSX = () =>{
    //         console.log(array)
    //         if (!array){
    //             return
    //         } else{
    //             let allGifsJSX = array.map((gif) => {
    //                 return(
    //                     <div>
    //                         <p>{gif.id}</p>
    //                     </div>
    //                 )
    //             }) 
    //             console.log(allGifsJSX)
    //             setGifArraySource(allGifsJSX)
    //             return allGifsJSX
                
    //         }
    //     }
    //     return(
    //         <div>
    //             {gifArraySource}
    //         </div>
    //     )
    // }