import { useState, useEffect } from 'react'
import ArticleCard from './ArticleCard';
import {getAllArticles} from '../../utils/api'

export default function ArticleManager(){
    const [articleList, setArticleList] = useState([])
    useEffect(()=>{
        getAllArticles()
        .then((response)=>{
            setArticleList(response.data.articles);
        })
    }, [])

    return(
        <section className="allArticles">
            {articleList.map((article)=>{
                return <ArticleCard key={article.article_id} article={article} />
            })}

        </section>
    )
}