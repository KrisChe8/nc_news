import {Link} from 'react-router-dom'
import CommentsByArticleId from './CommentsByArticleId'
export default function SingleArticleCard({article, activeUserName, id}){

    // let dateArr = article.created_at.split('T');
    // console.log(dateArr[0])
   

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
                        <button className="likesBtn"><i className=" fa-regular fa-heart likeIcon"></i> </button>
                    <p>{article.votes}</p>
                    </div>
                    <div className="dislikes">
                   <button className="likesBtn"><i className="fa-regular fa-thumbs-down disLikeIcon"></i></button>
                    
                    </div>
                </div>
            </div>
            <CommentsByArticleId activeUserName={activeUserName} id={id}/>
        </div>


    )

}