import { useState} from 'react'
import CommentsByArticleId from "./CommentsByArticleId";
import {deleteCommentById, updateCommentVotes} from '../../utils/api'

export default function CommentCard({comment, articleId, activeUserName, setCommentsVote, commentsVote, commentId, index, setCommentsList, commentsList}){

    // let date = comment.created_at.split('T');

    const [err, setErr] = useState(null)
    
    let copyState = [...commentsList];

   
        const handleLikeClick = (index) =>{
   
        setCommentsVote((currentCount)=> currentCount + 1);
        setErr(null);
        const votes = {inc_votes : 1 };
        
        updateCommentVotes(commentId, votes)
        .catch((err)=>{
            setCommentsVote((currentCount)=> currentCount - 1);
            setErr('Something went wrong, please try again')
        })
       }
    
       const handleDislikeClick = ()=>{
        setCommentsVote((currentCount)=> currentCount - 1);
        setErr(null);
        const votes = {inc_votes : -1 };
        updateCommentVotes(commentId, votes)
        .catch((err)=>{
            setCommentsVote((currentCount)=> currentCount + 1);
            setErr('Something went wrong, please try again')
        })
       }

       const deleteComment = (idComment) =>{
        
        setCommentsList((currentComments)=>{
            return currentComments.filter(comment => comment.comment_id != idComment)
        })
       
        deleteCommentById(idComment)
        .then((response) => {
            alert(`Comment deleted successfully!`);
         })
        .catch(error => {
            setCommentsList(copyState);
            alert(`Something went wrong, please try again`);
        });
            
       }

    return(
        <div className="commentCard">
            <div className="commentsHeader">
                <h3>{comment.author}</h3>
                {activeUserName===comment.author ? <div className="handleBlock">
                <button className="btn editBtn">Edit</button> 
                <button className="btn deleteBtn" onClick={()=>{deleteComment(commentId)}}>Delete</button>
                </div> : null}
                
            </div>
            <div className="commentsBody">
                {comment.body}
            </div>
            <div className="commentsFooter">
                {/* <p className="date">{date[0]}</p> */}
                <div className="likesDislikesWrapper">
                    <div className="likes">
                        <button value={index} className="likesBtn" onClick={()=>{handleLikeClick(index)}} ><i  className=" fa-regular fa-heart likeIcon"></i> </button>
                    <p>{comment.votes}</p>
                    </div>
                    <div className="dislikes">
                   <button className="likesBtn" onClick={handleDislikeClick}><i className="fa-regular fa-thumbs-down disLikeIcon"></i></button>
                    </div>
                </div>
            </div>
            <div className="error">{err ? <h4>{err}</h4> : null}</div>
        </div>
    )
}