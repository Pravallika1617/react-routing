import { Routes, Route } from 'react-router-dom'
import Home from "./components/home"
import About from './components/about'
import Navbar from './components/navbar'
// import Book from './components/Book'
import User from './components/user'

function App() {
  

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/book/:id" element={<Book/>} /> */}
        <Route path='/user/:id/:name' element={<User />}/>
      </Routes>
    </>
  )
}

export default App
