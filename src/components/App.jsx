import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ArticleManager from './ArticleManager'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'



function App() {
 const [topicsList, setTopicsList] = useState([])
 const [activeUserName, setActiveUserName] = useState('grumpy19')

  return (
    <>
      <Nav setTopicsList={setTopicsList} topicsList={topicsList} activeUserName={activeUserName}/>
      <Header />
      <main>
      <ArticleManager />

      </main>

      {/* <Footer /> */}
    </>
  )
}

export default App
