import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleArticleCard from './SingleArticleCard';

export default function SingleArticleManager({activeUserName}){
    const [voteArticle, setVoteArticle] = useState(null)
    
    
    
    const [article, setArticle] = useState({})

    const {id}  = useParams();
    useEffect(()=>{
        axios.get(`https://nc-news-24h6.onrender.com/api/articles/${id}`).then((response)=>{
            setArticle(response.data.article)
            })
    }, [])
    
   

    return(
        <section>
           <SingleArticleCard article={article} activeUserName={activeUserName} id={id}/>
        </section>
    )
}