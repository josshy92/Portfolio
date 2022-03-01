import './App.css';
import {  Routes, Route } from 'react-router-dom';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';
import ContactInfo from './components/contactInfo/Contactinfo';
import Resume from './components/resume/Resume';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className='background'>
      <Nav />
      <Routes>
        <Route exact path="/home" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactInfo" element={<ContactInfo />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
