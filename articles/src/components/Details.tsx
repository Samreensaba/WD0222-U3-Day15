import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Article } from "../types/Article"

interface DetailsProps{
    article: Article
}

const Details = ()=>{
    const [details, setDetails] = useState<Article[]>([])
    const params = useParams()
    let articleId = params.articleId

    useEffect(()=>{
        let news = articles.find((article)=>article.id.toString()===articleId)
    },[])
    return(
        <div className="d-flex">
            <div><img src={article.imageUrl} alt="artile image" /></div>
            <div>
                <h2>{article.title}</h2>
                <p>{article.summary</p>
            </div>
        </div>
    )
}
export default Details