import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import './index.scss'

const Sidebar =() =>{
    return(
    <div className = 'nav-bar'>

        <nav>
            <NavLink exact = "true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon={faHome} color = "#59218a"/>
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = 'education-link' to = "/education">
                <FontAwesomeIcon icon={faUser} color = "#59218a"/>
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = 'projects-link' to = "/projects">
                <FontAwesomeIcon icon={faEnvelope} color = "#59218a"/>
            </NavLink>
        </nav>
        <ul>
        <li>
                <a
                target="_blank"
                rel="noreferrer"
                href = "https://www.linkedin.com/in/warrick-tsui-1a83772a3/">
                    <FontAwesomeIcon icon= {faLinkedin} color = "#59218a"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href = "https://github.com/WarrickT">
                    <FontAwesomeIcon icon= {faGithub} color = "#59218a"/>
                </a>
            </li>
        </ul>
    </div>
    )
}

/*Change these icons into a long sidebar */

export default Sidebar;