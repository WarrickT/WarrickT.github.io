import TetrisHome from '../../assets/images/NormalSelected.png';
import Othello from '../../assets/images/Othello.png';
import ReliefGrid from '../../assets/images/ReliefGrid.png';

import './index.scss';

const Projects = () => {
    return (
        <div className="projects-page">
            <div className="project-container">
                <div className="project-header">
                    <h1>Verilog Tetris!</h1>
                </div>
                <div className="project-image">
                    <a href="https://github.com/WarrickT/2-Player-Tetris">
                        <img src={TetrisHome} alt="Tetris Home" />
                    </a>
                </div>
                <div className="project-body">
                    <p>
                        For our ECE241 Digital Systems final project, me and my amazing lab partner, Daunte Figueroa, built Tetris using Verilog! It was an accumulation of the knowledge we gained throughout the course, using concepts like Finite State Machines, Registers, and Memory.
                    </p>
                </div>
            </div>

            <div className="project-container">
                <div className="project-header">
                    <h1>ReliefGrid</h1>
                </div>
                <div className="project-image">
                    <a href="https://github.com/chaitanyasingh84/natural_disaster">
                        <img src={ReliefGrid} alt="Relief Grid" />
                    </a>
                </div>
                <div className="project-body">
                    <p>
                        For the NewHacks hack-a-thon, I collaborated with a team of 4 to create a web application that aids with the management of natural disaster resource allocation in communities. Using Firebase and JavaScript, I built a database that allows citizens to request for resources, which community administration can use to see which areas require the most commodities.
                    </p>
                </div>
            </div>

            <div className="project-container">
                <div className="project-header">
                    <h1>Orthello Terminal Game Bot</h1>
                </div>
                <div className="project-image">
                    <img src={Othello} alt="Orthello" />
                </div>
                <div className="project-body">
                    <p>
                        For a course assignment, I built the classic board game Othello (or Reversi) in my first-year Computer Fundamentals course using C. In addition to building the option for two users to play against each other, I built an automated bot using my knowledge and research of search algorithms. Using the minimaxing searching algorithm, I programmed heuristic functions to evaluate the optimal move the computer can make against the user.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
