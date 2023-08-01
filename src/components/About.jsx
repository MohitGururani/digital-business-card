import email from "../images/Mail.png"
import linkdin from "../images/linkedin.png"
function About() {
    return (
        <div className="about">
            <h1 className="h1-name">Mohit Gururani</h1>
            <h3 className="h3-role">Frontend Developer</h3>

            <div className="btn-class">
                <a href="mailto:mohitgururani12@gmail.com" target="_blank" rel="noopener noreferrer" className="main-btn btn-email">
                    <img src={email} alt="" className="email" />Email
                </a>
                <a href="https://www.linkedin.com/in/mohit-gururani-999b4b212/" target="_blank" rel="noopener noreferrer" className="main-btn btn-linkdin">
                    <img src={linkdin} alt="" className="linkdin" />LinkedIn
                </a>
            </div>
            <div className="main--about--interest">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                    I try to keep up with security and best practices,
                    and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Playing cricket and badminton.Cooking and experimenting with new recipes.
                    Reading self-help books to grow and learn.Helping others and making a positive impact.
                    Listening to music from various genres.
                    Travelling and exploring new places.</p>
            </div>
        </div>
    )
}
export default About;