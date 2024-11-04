import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Education from './components/Education';
import Home from './components/Home';
import Layout from './components/Layout';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="education" element={<Education/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App;
