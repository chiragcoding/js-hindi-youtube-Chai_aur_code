
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SingleBlog from './pages/SingleBlog'
function App() {
  return (
   <div>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/users/:id' element={<SingleBlog/>} />

      </Routes>
      <Footer/>

      </div>
      
  )
}

export default App
