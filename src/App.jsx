import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Mainpage from './Pages/Mainpage'
import About from './Pages/About'
import ProjectDetail from './Pages/ProjectDetail'
import  Footer from './ components/Footer'
function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
   </>
  )
}

export default App