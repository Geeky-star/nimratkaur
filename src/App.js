import './App.css';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import { Route, Routes } from 'react-router-dom';
import Tools from './components/Tools';
import Navbar from './Navbar';
import Footer from './components/Footer';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<Tools />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
     <Footer/>
    </div>
  );
}

export default App;
