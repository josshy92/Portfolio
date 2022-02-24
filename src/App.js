import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';
import ContactInfo from './components/contactInfo/ContactInfo';
import Resume from './components/resume/Resume';
import HomeOutlined from 'antd'
function App() {
  return (
    <>
    <nav>
      <NavLink to='/'> About Me</NavLink>
      <NavLink to='/projects'> Projects </NavLink>
      <NavLink to='/contactInfo'> Contact Info </NavLink>
      <NavLink to='/resume'> Resume </NavLink>
    </nav>
    <Routes>
      <Route path="/" element= {<AboutMe/>} />
      <Route path="/projects" element= {<Projects/>} />
      <Route path="/contactInfo" element= {<ContactInfo/>} />
      <Route path="/resume" element= {<Resume/>} />
    </Routes>
    </>
  );
}

export default App;
