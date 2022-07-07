import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Article } from '../types/Article';

interface SingleArticleProps{
    article: Article
}




const SingleArticle = ({article}: SingleArticleProps) =>{
    
    return(
        <>
        <Card>
      <Card.Img variant="top" src={article.imageUrl} className="img-fluid width-100" style={{height:"200px"}}/>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.publishedAt.toString()}
        </Card.Text>
        <Link to={'./details' + article.id}><div className='btn btn-primary'>Read Now</div></Link>
        {/* <Button variant="primary">Read Now</Button> */}
      </Card.Body>
    </Card>
    </>
  );
}
export default SingleArticle