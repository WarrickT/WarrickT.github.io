import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Education from './components/Education';
import Home from './components/Home';
import Layout from './components/Layout';
import Projects from './components/Projects';
import Resume from './components/Resume';



function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="Education" element={<Education/>}/>
      <Route path="Projects" element={<Projects/>}/>
      <Route path = "Resume" element={<Resume/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App;
