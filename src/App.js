import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';
import ContactInfo from './components/contactInfo/ContactInfo';
import Resume from './components/resume/Resume';
import HomeOutlined from 'antd'
import Nav from './components/nav/Nav'


function App() {
  return (
    <>
    <Nav />
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
