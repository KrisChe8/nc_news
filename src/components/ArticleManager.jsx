import { useState, useEffect } from 'react'
import ArticleCard from './ArticleCard';
import {getAllArticles} from '../../utils/api'
import { useSearchParams } from 'react-router-dom';

export default function ArticleManager(){
    const [articleList, setArticleList] = useState([])
    const [isLoading, setIsloading] = useState(true)

    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get('topic');
    const authorQuery = searchParams.get('author')

    const [direction, setDirection] = useState('desc')
    const [sortField, setSortField] = useState("null")

    console.log(sortField)
    // Setting direction asc/deesc
    const onDirectionChange = (e) =>{
        setDirection(e.target.value)
    }
    const setDirectionOrder = (e) => {
        onDirectionChange(e)
        const newParams = new URLSearchParams(searchParams);
        newParams.set('order', direction);
        setSearchParams(newParams)
    }

    // sorting 
    const sortBasedOnKey = (property) =>{
        const array = [...articleList];
        return array.sort((a, b)=>{
            let x = a[property];
            let y = b[property];
            return y-x;
        })  
    }
    const handleSortChange = (e) =>{
        setSortField(e.target.value)
        if(e.target.value !== "null"){
            let sortedData = sortBasedOnKey(e.target.value);
            setArticleList(sortedData)
        }
    }

    useEffect(()=>{
        getAllArticles(topicQuery, authorQuery, direction)
        .then((response)=>{
            setArticleList(response.data.articles);
            setIsloading(false)
        })
    }, [searchParams])

    if (isLoading)  return <p className="loading">Loading ... </p>
    return(
        <main>
            <div className="sortnavbar">
                <div className="directionWrapper">
                    <h3>Show articles:</h3>
                    <div className="directionInputsWrapper">
                    <label  htmlFor="asc">From new to old</label>
                    <input className="radio" type="radio" name="direction" value="desc" id="desc" checked={direction === 'desc'} onChange={setDirectionOrder}/>

                    <label className="labelDirection" htmlFor="asc">From old to new</label>
                    <input className="radio" type="radio" name="direction" value="asc" id="asc" checked={direction === 'asc'} onChange={setDirectionOrder}/>
                    </div>
                </div>
                <div className="sortByWrapper">
                    
                        <h3 className="sortByItem">Sort by...</h3>
                        
                        <select value={sortField} onChange={handleSortChange} id="list-sorting">
                            <option  disabled value={"null"}>Choose ...</option> 
                            <option value="comment_count">By comment count</option>
                            <option value="votes">By votes</option>
                        </select>
                </div>
            </div>
       
            <section className="allArticles">
            {articleList.map((article)=>{
                return <ArticleCard key={article.article_id} article={article} />
            })}

         </section>
        </main>
    )
}