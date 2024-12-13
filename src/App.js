import {BrowserRouter,Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import './App.css'
import BlogItemDetails from './components/BlogItemDetails'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <BrowserRouter>
      <Header />
      <div className="app-body">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/blogs/:id"  element={<BlogItemDetails/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  </div>
)

export default App
