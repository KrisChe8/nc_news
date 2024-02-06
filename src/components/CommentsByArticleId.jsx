import { useState, useEffect } from 'react'
import axios from 'axios';
import CommentCard from './CommentCard';
export default function CommentsByArticleId({id, activeUserName}){
    let articleId = id;
    const [commentId, setCommentId] = useState(null)
    const [commentsVote, setCommentsVote] = useState(null)
    const [commentsList, setCommentsList] = useState([])

    const [newComment, setNewComment] = useState("")
    const [err, setErr] = useState(null)

    useEffect(()=>{
        axios.get(`https://nc-news-24h6.onrender.com/api/articles/${id}/comments`).then((response)=>{
            setCommentsList(response.data.comments)
        })
    }, [])

    const handleSubmitComment = (e)=>{
        e.preventDefault();
        setCommentsList((currentComments)=>[{
            "author": activeUserName,
            "body": newComment,
            "votes": 0
        }, ...currentComments]);
        setErr(null);
        axios.post(`https://nc-news-24h6.onrender.com/api/articles/${id}/comments`, {
            "username": activeUserName,
            "body": newComment
        }).catch((err)=>{
            setCommentsList((currentComments)=>{
                return currentComments.filter(comment => comment.body != newComment)
            });
            setErr('Something went wrong, please try again')
        })
    }

    return(
        <div className="commentsBlock">
            <form className='commentsForm' onSubmit={handleSubmitComment}>
                <textarea name="" id="newComment" cols="60" rows="4" placeholder="Your comment..." value={newComment} onChange={e=>setNewComment(e.target.value)}></textarea>
                <button className='sendBtn'><i className="fa-regular fa-paper-plane sendIcon"></i>Send</button>
            </form>
            <div className="error">{err ? <h4>{err}</h4> : null}</div>
            <ul className="commentsList">
                {commentsList.map((comment)=>{
                    return <CommentCard key={comment.comment_id} comment={comment} articleId={articleId} activeUserName={activeUserName} />
                })}
            </ul>

        </div>

    )
}