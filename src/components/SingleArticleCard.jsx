import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';
import CommentsByArticleId from './CommentsByArticleId'

export default function SingleArticleCard({article, activeUserName, id, setVoteArticle, voteArticle }){

    // let dateArr = article.created_at.split('T');
    // console.log(dateArr[0])
    const [err, setErr] = useState(null)

   const handleLikeClick = () =>{
    setVoteArticle((currentCount)=> currentCount + 1);
    setErr(null);
    axios.patch(`https://nc-news-24h6.onrender.com/api/articles/${id}`, {inc_votes : 1 }).catch((err)=>{
        setVoteArticle((currentCount)=> currentCount - 1);
        setErr('Something went wrong, please try again')
    })
   }

   const handleDislikeClick = ()=>{
    setVoteArticle((currentCount)=> currentCount - 1);
    setErr(null);
    axios.patch(`https://nc-news-24h6.onrender.com/api/articles/${id}`, {inc_votes : -1 }).catch((err)=>{
        setVoteArticle((currentCount)=> currentCount + 1);
        setErr('Something went wrong, please try again')
    })
   }

    return(
        <div className="singleArticleCard">
            <img className="articleImg articleImgSingle" src={article.article_img_url} alt={article.title} />
            
            <h2 className="singleHeading">{article.title}</h2>
            <div className="createdBlock">
            <Link className="linkAuthor" to={`/article?author=${article.author}`}>Created by: <span className="spanNameAuthor">{article.author} </span></Link>
                {/* <p className="createdDate">{dateArr[0]}</p> */}
            </div>
            <p className="articleBody">{article.body}</p>

            <div className="singleArticleFooter">
              {activeUserName ? <div className="editDelBtnWrapper">
                    <Link className="editBtnLink" to={`/articles/${article.article_id}/edit`}><button className="btn editBtn">Edit</button> </Link>
                    <button className="btn deleteBtn">Delete</button>
                </div> : null }  
                
                <div className="likesDislikesWrapper">
                    <div className="likes">
                        <button className="likesBtn" onClick={handleLikeClick}><i className=" fa-regular fa-heart likeIcon"></i> </button>
                    <p>{voteArticle}</p>
                    </div>
                    <div className="dislikes">
                   <button className="likesBtn" onClick={handleDislikeClick}><i className="fa-regular fa-thumbs-down disLikeIcon"></i></button>
                    
                    </div>
                </div>
            </div>
            <div className="error">{err ? <h4>{err}</h4> : null}</div>
            <CommentsByArticleId activeUserName={activeUserName} id={id}/>
        </div>


    )

}