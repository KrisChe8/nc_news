import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import SingleArticleCard from './SingleArticleCard';
import {getArticleById} from '../../utils/api'
import ErrorPage from './ErrorPage';

export default function SingleArticleManager({activeUserName}){
    const [voteArticle, setVoteArticle] = useState(null)
    const [article, setArticle] = useState({})
    const [err, setErr] = useState(null)


    const {id}  = useParams();
    useEffect(()=>{
        getArticleById(id)
        .then((response)=>{
            setArticle(response.data.article)
            setVoteArticle(response.data.article.votes)
        }).catch((error)=>{
            console.log(error.response.data.msg)
            console.log(error.response.request.status)
            setErr(error.response)
        })
    }, [])
    
    if(err){
        return <ErrorPage err={err} />
    }
    return(
          <section>
            <SingleArticleCard article={article} activeUserName={activeUserName} id={id} voteArticle={voteArticle} setVoteArticle={setVoteArticle}/>
         </section> 
        
    )
}