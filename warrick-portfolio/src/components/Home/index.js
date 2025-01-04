import { useState } from 'react';
import WarrickGraduation from '../../assets/images/Graduation.png';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const jobArray = ['E', 'n','g','i','n','e','e','r','i','n','g', ' ', 's','t','u','d','e','n','t']

    return(
        <div className = "home-page">
             <div className = 'graduation-image'>
                        <img src = {WarrickGraduation}/>
                        </div>
            
            <div className = "greetingText">
                <h1> Hi, I'm Warrick Tsui!
                </h1>
            </div>

            <div className = 'bodyText'>
            <p>
                Hello! My name is Warrick Chun Wang Tsui, an ambitious undergraduate student at University of Toronto pursuing a degree in Computer Engineering. I am passionate about solving all kinds of problems using software engineering skills and tools. 

            </p>
                </div>

            <div className = 'IntroductionText'>
                <h1>
                    I have experience in...
                </h1>
            </div>
                <div className = 'frontEndBox'>
                    <div className = 'FrontendTitle'>
                    <h2>
                        Frontend Programming
                    </h2>
                </div>

                <div className = 'FrontendBody'>
                    <p>
                        - JavaScript <br/>
                        - HTML <br/>
                        - CSS <br/>
                        &emsp; (Fun Fact...I currently teach the three languages above!) <br />
                        - React.js <br />
                    </p>
            </div>

                </div>
                <div className = 'backendBox'>
                <div className = 'BackendTitle'>
                <h2>
                    Backend Programming 
                </h2>
            </div>

            <div className = 'BackendBody'>
                <p>
                    - Python  <br/>
                    &emsp; - Experience with Flask <br/>
                    - Java  <br/>
                    &emsp; - Selenium (Webscraping) <br/>
                    - C, C++  <br/>
                    - Version system control (Git) <br/>
                    - Firebase
                </p>
            </div>
        
                </div>
                <div className = 'hardwareBox'>
                    <div className = 'HardwareTitle'>
                    <h2>
                        HDL and Assembly
                    </h2>
                </div>
                <div className = 'HardwareBody'>
                    <p>
                        - Verilog <br/>
                        - Assembly 
                    </p>
                </div>
                </div>

           
            

            <div className="links-section">
                <div className="link-box">
                    <a href="https://github.com/WarrickT" target="_blank" rel="noopener noreferrer">
                        <p1>GitHub</p1>
                    </a>
                </div>
                <div className="link-box">
                    <a href="https://www.linkedin.com/in/warrick-tsui-1a83772a3/" target="_blank" rel="noopener noreferrer">
                        <p1>LinkedIn</p1>
                    </a>
                </div>
            </div>
            
            <div className = "PagesText">
                <h1> My Other Pages
                </h1>
            </div>
        </div>
    )
}

export default Home;