import './App.css';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
<Route path='/' element={<HomePage/>}></Route>
     <Route path="projects" element={<ProjectsPage/>}/>
     </Routes>

     
    </div>

  );
}

export default App;
