import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import SingleArticleCard from './SingleArticleCard';
import {getArticleById} from '../../utils/api'

export default function SingleArticleManager({activeUserName}){
    const [voteArticle, setVoteArticle] = useState(null)
    const [article, setArticle] = useState({})

    const {id}  = useParams();
    useEffect(()=>{
        getArticleById(id)
        .then((response)=>{
            setArticle(response.data.article)
            setVoteArticle(response.data.article.votes)
            })
    }, [])
    
   

    return(
        <section>
           <SingleArticleCard article={article} activeUserName={activeUserName} id={id} voteArticle={voteArticle} setVoteArticle={setVoteArticle}/>
        </section>
    )
}