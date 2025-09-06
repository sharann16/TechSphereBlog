
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About'
import ArticleCards from './Components/ArticleCards'
import ArticleSection from './Components/ArticleSection'
import Header from './Components/Header'
import Articlepage from './pages/Articlepage'
import HomePage from './pages/HomePage'
import SingleArticle from './pages/SingleArticle'

function App() {

  return (
    <>
    <Header/>
      <div className='  max-w-7xl flex flex-col items-center mx-auto md:px-5 pt-10'>
        
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/arti" element={<Articlepage/>}/>
              <Route path="/singleArti/:title" element={<SingleArticle/>}/>
            </Routes>
      {/* <Articlepage/> */}
      {/* <SingleArticle/> */}
      <About/>
      
    </div>
    </>
  )
}

export default App
