import "./AboutMe.css"

export default function AboutMe() {
    return(
        <div className="meBackground" >
            <h1 className="josshy"> Josshy's Portfolio</h1>
            <p className="blurb">Software engineer using various customer support roles to help create dynamic and user-friendly
                interfaces. Completed a certificate for full stack web development from Northwestern
                University. Worked diligently in healthcare for over four years to develop communication skills to
                effectively communicate with colleagues, leadership, and clients from diverse backgrounds. Striving to
                create projects using modern code and innovative design that will draw reader's attention and ultimately
                retain interest for recurring visitation.</p>
                <div className="aboutMe">
                <img id="myPic"
                    src="https://avatars.githubusercontent.com/u/88861538?s=400&u=7770845130a6335833a909a7cebfe03e4248cab7&v=4"
                    alt=""/>
                </div>
        </div>
    )
}