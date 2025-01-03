import CodeSky from '../../assets/images/CodeSky.png';
import UTFRImage from '../../assets/images/UTFR.jpg';
import WellnessRoom from '../../assets/images/WellnessRoom.png';
import './index.scss';


const Education = () =>{
    return(
        
        <div className='education-page'>

            <div className='Experiences'>
            <h2> Recent Experiences!
            </h2>
            </div>

            <div className='Job1'>
            <h3> CodeSky: Programming Classroom Instructor
            </h3>
            </div>

            <div className = 'codesky-image'>
            <img src = {CodeSky}/>
            </div>


            <div className = 'Job1Text'>
            <p>
                I love exploring and sharing my interest for coding. Currently I am an on-call programming instructor for Codesky, a kids coding school located in Markham, Ontario. My teaching ranges from building simple playable programs on Scratch to building completely responsive websites using HTML, CSS, and JS. 
            </p>
                </div>

            <div className='Job2'>
            <h3> UTFR: Driverless Team Member
            </h3>
            </div>

            <div className = 'UTFRImage'>
                <img src = {UTFRImage}/>
            </div>
            
            <div className='Job3'>
            <h3> Team Leader: Engineering 
            Strategies and Practice II
            </h3>
            </div>

            <div className = 'wellnessRoom-image'>
                <img src = {WellnessRoom}/>
            </div>

            <div className = 'Job3Text'>
            <p>
                In a first year second semester course, I had the opportunity to design a wellness room for a student residence with 5 other amazing engineering students. In addition to conducting research and helping write engineering documents, I was responsible for managing the team's workload and project progression. See more in "Projects"
                for the details of our conceptual design. 
            </p>
                </div>
            
            <div className='Job4'>
            <h6> Editor: Programming Classroom Instructor
            </h6>
            </div>

            <div className = 'Job2Text'>
            <p>
                In November, I've taken on the new challenge of joining the UTFR Driverless Team. I am currently working on an Error Graph Widget, which displays the difference between the experimental and projected locations of cones. These cones are used for testing the design team vehicles. 
            </p>
                </div>

           
        </div>
   )
}

export default Education;