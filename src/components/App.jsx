import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ArticleManager from './ArticleManager'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import NewArticle from './NewArticle'
import SingleArticleManager from './SingleArticleManager'



function App() {
 const [topicsList, setTopicsList] = useState([])
 const [activeUserName, setActiveUserName] = useState('grumpy19')

  return (
    <>
      <Nav setTopicsList={setTopicsList} topicsList={topicsList} activeUserName={activeUserName}/>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={ <ArticleManager />} />
          <Route path='/articles' element={<ArticleManager />} />
          <Route path='/new-article' element={<NewArticle topicsList={topicsList} activeUserName={activeUserName} />} />
          <Route path='/articles/:id' element={<SingleArticleManager activeUserName={activeUserName}/>} />

        </Routes>
     

      </main>

      {/* <Footer /> */}
    </>
  )
}

export default App
