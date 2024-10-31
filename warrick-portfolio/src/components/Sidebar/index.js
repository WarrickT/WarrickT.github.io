import { faEnvelope, faGithub, faHome, faLinkedin, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import WarrickGraduation from '../../assets/images/Graduation.png'
import './index.scss'

const Sidebar =() =>(
    <div className = 'nav-bar'>
        <Link className='logo' to ='/'>
            <img src = {WarrickGraduation} alt = "logo"/>
        </Link>
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
                <a target="_blank" rel="noreferrer" href = 'https://www.linkedin.com/in/warrick-tsui-1a83772a3/'>
                    <FontAwesomeIcon icon={faLinkedin} color = "#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href = "https://www.linkedin.com/in/warrick-tsui-1a83772a3/">
                    <FontAwesomeIcon icon={faGithub} color = "#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href = "https://www.linkedin.com/in/warrick-tsui-1a83772a3/">
                    <FontAwesomeIcon icon={faLinkedin} color = "#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

/*Change these icons into a long sidebar */

export default Sidebar