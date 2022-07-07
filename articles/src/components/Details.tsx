import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IDetails } from "../types/IDetails"
import '../details.css';



const Details = ()=>{
    const [details, setDetails] = useState<IDetails | null>(null)
    const params = useParams()
    let articleId = params.articleId

    useEffect(()=>{
        fetchDetails()

    },[])

    const fetchDetails = async ()=>{
        try {
            const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles/"+ articleId)
            if(response.ok){
                const data = await response.json()
                console.log(data)
                setDetails(data)
            }
        } catch (error) {
            console.log("unable to fetch")
        }
    }
    return(
        <>
       
        {details&&
            
        <div className="d-flex details">
            
        <div className="mr-2 ml-2">
        <h1>{details.newsSite.toUpperCase()}</h1>
        <img src={details.imageUrl} alt="details" style={{width:"600px"}} />
        <p>{details.publishedAt}</p>
        
        </div>
        <div className="mt-5">
        <h2>HEADLINES:<br></br>{details.title}</h2>
            <p>{details.summary}</p>
        </div>
        </div>
        }
        
        </>
        
        
    )
}
export default Details