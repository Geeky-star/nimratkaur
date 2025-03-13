import './App.css';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import { Route, Routes } from 'react-router-dom';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Navbar from './Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<Tools />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
     <Footer/>
    </div>
  );
}

export default App;
