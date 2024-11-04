import WarrickGraduation from '../../assets/images/Graduation.png';
import './index.scss';

const Education = () =>{
    return(
        
        <div className='education-page'>
            <div className='header'>
            <h1> About Me!
            </h1>

            </div>

            <div className = 'bodyText'>
            <p>
                Hello! I am an ambitious undergraduate student at University of Toronto pursuing a degree in Computer Engineering. 
            </p>

            <div className = 'graduation-iamge'>
            <img src = {WarrickGraduation}/>
            </div>

                </div>
           
        </div>
   )
}

export default Education;