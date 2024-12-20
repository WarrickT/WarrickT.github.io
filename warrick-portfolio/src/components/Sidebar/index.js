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
            <NavLink exact = "true" activeclassname = "active" className = 'education-link' to = "/Education">
                <FontAwesomeIcon icon={faUser} color = "#59218a"/>
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = 'projects-link' to = "/Projects">
                <FontAwesomeIcon icon={faEnvelope} color = "#59218a"/>
            </NavLink>
        </nav>

    </div>
    )
}

/*Change these icons into a long sidebar */

export default Sidebar;