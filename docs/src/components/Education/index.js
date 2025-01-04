import CodeSky from '../../assets/images/CodeSky.png';
import UTFRImage from '../../assets/images/UTFR.jpg';
import WellnessRoom from '../../assets/images/WellnessRoom.png';
import './index.scss';

const Education = () => {
    return (
        <div className='education-page'>
            <div className='Experiences'>
                <h2> Recent Experiences!</h2>
            </div>

            {/* Job 1 */}
            <div className='Job'>
                <div className='JobHeader'>
                    <h3>CodeSky: Programming Classroom Instructor</h3>
                </div>
                <div className='JobImage'>
                    <img src={CodeSky} alt="CodeSky" />
                </div>
                <div className='JobText'>
                    <p>
                        I love exploring and sharing my interest for coding. Currently I am an on-call programming instructor for Codesky, a kids coding school located in Markham, Ontario. My teaching ranges from building simple playable programs on Scratch to building completely responsive websites using HTML, CSS, and JS.
                    </p>
                </div>
            </div>

            {/* Job 2 */}
            <div className='Job'>
                <div className='JobHeader'>
                    <h3>UTFR: Driverless Team Member</h3>
                </div>
                <div className='JobImage'>
                    <img src={UTFRImage} alt="UTFR" />
                </div>
                <div className='JobText'>
                    <p>
                        In November, I've taken on the new challenge of joining the UTFR Driverless Team. I am currently working on an Error Graph Widget, which displays the difference between the experimental and projected locations of cones. These cones are used for testing the design team vehicles.
                    </p>
                </div>
            </div>

            {/* Job 3 */}
            <div className='Job'>
                <div className='JobHeader'>
                    <h3>Team Leader: Engineering Strategies and Practice II</h3>
                </div>
                <div className='JobImage'>
                    <img src={WellnessRoom} alt="Wellness Room" />
                </div>
                <div className='JobText'>
                    <p>
                        In a first-year second-semester course, I had the opportunity to design a wellness room for a student residence with 5 other amazing engineering students. In addition to conducting research and helping write engineering documents, I was responsible for managing the team's workload and project progression.
                    </p>
                </div>
            </div>

            {/* Job 4 */}
            <div className='Job'>
                <div className='JobHeader'>
                    <h3>Electrical/Structural Team member</h3>
                </div>
                <div className='JobText'>
                    <p>
                        During the summer of 2024, I explored the field of electrical engineering through building circuit prototypes like the 555 timer.
                    </p>
                </div>
            </div>

            {/* Job 5 */}
            <div className='Job'>
                <div className='JobHeader'>
                    <h3>Activity Leader: Oxford International North America</h3>
                </div>
                <div className='JobText'>
                    <p>
                        In the same summer, I toured study groups from countries like Italy, Ukraine, and Mexico around Downtown Toronto as a side job.
                    </p>
                </div>
            </div>

            {/* Job 6 */}
            <div className='Job'>
                <div className='JobHeader'>
                    <h3>Co-Op Accounting Assistant: Stouffville Toyota</h3>
                </div>
                <div className='JobText'>
                    <p>
                        As a high school co-op student, I assisted the Stouffville Toyota Administration department for five months. I performed accounting tasks like Cash Reports and Accounts Payable entries. <br/><br/><br/>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education;
