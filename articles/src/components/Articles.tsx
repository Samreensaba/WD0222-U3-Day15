import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Article } from "../types/Article"
import SingleArticle from "./SingleArticle"



const Articles =()=>{
    const [articles, setArticles]=useState<Article[]>([])

    useEffect(()=>{
        fetchArticles()
    },[])
    

    const fetchArticles = async()=>{
        try {
           const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
           if(response.ok){
            const data = await response.json()
            console.log(data)
            setArticles(data)
           } else{
            const message = response.text
            console.log(message)
           }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <Container>
        <Row className="mt-5">
          {articles.map((article, i) => (
            <Col md={4} key={i} className="mb-2">
              <SingleArticle article={article} />
            </Col>
          ))}
        </Row>
      </Container>
        
       

            
        
    )
}
export default Articles