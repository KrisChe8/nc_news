import { useState, useEffect } from 'react'
import axios from 'axios';
import CommentCard from './CommentCard';
export default function CommentsByArticleId({id, activeUserName}){
    let articleId = id;
    const [commentId, setCommentId] = useState(null)
    const [commentsVote, setCommentsVote] = useState(null)
    const [commentsList, setCommentsList] = useState([])

    useEffect(()=>{
        axios.get(`https://nc-news-24h6.onrender.com/api/articles/${id}/comments`).then((response)=>{
            setCommentsList(response.data.comments)
        })
    }, [])

    return(
        <div className="commentsBlock">
            <form className='commentsForm' action="">
                <textarea name="" id="newComment" cols="60" rows="3" placeholder="Your comment..."></textarea>
                <button className='sendBtn'><i className="fa-regular fa-paper-plane sendIcon"></i>Send</button>
            </form>
            <ul className="commentsList">
                {commentsList.map((comment)=>{
                    return <CommentCard key={comment.comment_id} comment={comment} articleId={articleId} activeUserName={activeUserName}/>
                })}
            </ul>

        </div>

    )
}