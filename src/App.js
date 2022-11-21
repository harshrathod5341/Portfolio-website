import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Techstack from './components/Techstack'
import About from './components/About'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <div >
      <div class="flex flex-auto justify-end mr-20 mt-7">
        <Link to='/' class='m-5 pl-10 flex-auto font-bold text-8xl hover:opacity-40 hover:transition-all' ><i class="uil uil-gitlab"></i></Link>
        <Link to='/experience' class=' text-xl hover:scale-125 m-5 transition-all'>Experience</Link>
        <Link to='/techstack' class='text-xl hover:scale-125 m-5 transition-all'>Techstack</Link>
        <Link to='/projects' class='text-xl hover:scale-125 m-5 transition-all'>Projects</Link>
        <Link to='/about' class='text-xl hover:scale-125 m-5 transition-all'>About</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/techstack' element={<Techstack />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div >
  );
}