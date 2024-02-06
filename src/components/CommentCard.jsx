import CommentsByArticleId from "./CommentsByArticleId";

export default function CommentCard({comment, articleId, activeUserName}){

    // let date = comment.created_at.split('T');

    return(
        <div className="commentCard">
            <div className="commentsHeader">
                <h3>{comment.author}</h3>
                {activeUserName===comment.author ? <div className="handleBlock">
                <button className="btn editBtn">Edit</button> 
                <button className="btn deleteBtn">Delete</button>
                </div> : null}
                
            </div>
            <div className="commentsBody">
                {comment.body}
            </div>
            <div className="commentsFooter">
                {/* <p className="date">{date[0]}</p> */}
                <div className="likesDislikesWrapper">
                    <div className="likes">
                        <button className="likesBtn"><i className=" fa-regular fa-heart likeIcon"></i> </button>
                    <p>{comment.votes}</p>
                    </div>
                    <div className="dislikes">
                   <button className="likesBtn"><i className="fa-regular fa-thumbs-down disLikeIcon"></i></button>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}