import './Resume.css'

export default function Resume() {
    return(
        <div className='centered' >
            <h1 className="techSkills">Technical Skills</h1>
            <h3 className="skills">Languages: JavaScript</h3>
            <h3 className='skills'>Tools/Frameworks/Libraries</h3>
                <ul className='skills'>
                    <li>React</li> 
                    <li>MongoDB </li> 
                    <li>GraphQL</li>
                    <li>Object Relational Mapping</li> 
                    <li>MERN</li> 
                    <li>MySQL</li> 
                    <li>NodeJS</li> 
                    <li>OOP</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                </ul>
            <h4 className='skills'>Download and view my full resume  <a className='shorten2' target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1yq_AHOuzqr6JXLJ5yt3oOvyr8iR7Q9yI/edit?usp=sharing&ouid=112531032005241728342&rtpof=true&sd=true">here</a> </h4>
        </div>
    )
}
