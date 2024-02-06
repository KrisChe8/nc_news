import axios from 'axios';
// ARTICLES
export const getAllArticles = ()=>{
    return  axios.get('https://nc-news-24h6.onrender.com/api/articles')
}

export const getArticleById = (id)=>{
    return  axios.get(`https://nc-news-24h6.onrender.com/api/articles/${id}`)
}
export const updateVotesForArticleById = (id, votes)=>{
   return axios.patch(`https://nc-news-24h6.onrender.com/api/articles/${id}`, votes)
}

// COMMENTS
export const getCommentsByArticleId =(id)=>{
  return  axios.get(`https://nc-news-24h6.onrender.com/api/articles/${id}/comments`)
}


export const postComment =(id, msg)=>{
    return axios.post(`https://nc-news-24h6.onrender.com/api/articles/${id}/comments`, msg)
}

export const deleteCommentById = (idComment)=>{
   return axios.delete(`https://nc-news-24h6.onrender.com/api/comments/${idComment}`)
}

export const updateCommentVotes = (commentId, votes) =>{
    return axios.patch(`https://nc-news-24h6.onrender.com/api/comments/${commentId}`, votes)
}