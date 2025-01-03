

import { NavLink } from 'react-router-dom';
import './index.scss';

const Sidebar =() =>{
    return(
    <div className = 'nav-bar'>

        <nav>
            <NavLink exact = "true" activeclassname = "active" to = "/">
                Home
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = 'education-link' to = "/Education">
                Experiences
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = 'projects-link' to = "/Projects">
                Projects
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = 'resume-link' to = "/Resume">
                Resume
            </NavLink>
        </nav>
    </div>
    )
}

/*Change these icons into a long sidebar */

export default Sidebar;