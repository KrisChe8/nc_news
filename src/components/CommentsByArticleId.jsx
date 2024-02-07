import { useState, useEffect } from 'react'
import CommentCard from './CommentCard';
import {getCommentsByArticleId, postComment} from '../../utils/api'

export default function CommentsByArticleId({id, activeUserName}){
    let articleId = id;
    const [commentId, setCommentId] = useState(null)
    const [commentsList, setCommentsList] = useState([])

    const [isLoading, setIsloading] = useState(true);

    const [newComment, setNewComment] = useState("")
    const [err, setErr] = useState(null)


    useEffect(()=>{
        getCommentsByArticleId(id)
        .then((response)=>{
            setCommentsList(response.data.comments)
            setIsloading(false)
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
        const msg = {
            "username": activeUserName,
            "body": newComment
        };
        postComment(id, msg)
        .then(()=>{
            setNewComment("")
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
            {isLoading ? <h5 className="statusMessage">Loading...</h5> : null}
            {commentsList.length===0 ? <h5 className="statusMessage">No comments yet... Be the first to comment!</h5> : <ul className="commentsList">    
                {commentsList.map((comment)=>{
                    return <CommentCard key={comment.comment_id} comment={comment} articleId={articleId} activeUserName={activeUserName} commentId={comment.comment_id} setCommentsList={setCommentsList} commentsList={commentsList}/>
                })}
            </ul>}
            

        </div>

    )
}