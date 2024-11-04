import { useState } from 'react';
import './index.scss';

import HomeBackground from '../../assets/images/U of T Background.png';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const jobArray = ['E', 'n','g','i','n','e','e','r','i','n','g', ' ', 's','t','u','d','e','n','t']

    return(
        <div className = "home-page">
            <div className = "background-Image"
                 style = {{
                    backgroundImage: `url(${HomeBackground})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    paddingLeft: '60px', // Adjust if necessary
                 }}
            >
            </div>
            <div className = "text-zone">
                <h1> Hi, I'm Warrick!
                </h1>
                <h2>
                    University of Toronto Computer Engineering Student
                </h2>
            </div>
            

        
        </div>
    )
}

export default Home;