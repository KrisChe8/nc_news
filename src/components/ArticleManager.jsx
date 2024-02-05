import { useState, useEffect } from 'react'
import axios from 'axios';
import ArticleCard from './ArticleCard';

export default function ArticleManager(){
    const [articleList, setArticleList] = useState([])
    useEffect(()=>{
        axios.get('https://nc-news-24h6.onrender.com/api/articles').then((response)=>{
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