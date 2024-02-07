import { useState, useEffect } from 'react'
import ArticleCard from './ArticleCard';
import {getAllArticles} from '../../utils/api'
import { useSearchParams } from 'react-router-dom';

export default function ArticleManager(){
    const [articleList, setArticleList] = useState([])

    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get('topic');
    const authorQuery = searchParams.get('author')
    useEffect(()=>{
        getAllArticles(topicQuery, authorQuery)
        .then((response)=>{
            setArticleList(response.data.articles);
        })
    }, [searchParams])

    return(
        <section className="allArticles">
            {articleList.map((article)=>{
                return <ArticleCard key={article.article_id} article={article} />
            })}

        </section>
    )
}