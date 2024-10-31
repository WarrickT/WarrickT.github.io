import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import WarrickGraduation from '../../assets/images/Graduation.png'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Sidebar =() =>(
    <div className = 'nav-bar'>
        <Link className='logo' to ='/'>
            <img src = {WarrickGraduation} alt = "logo"/>
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon={faHome} color = "#59218a"/>
            </NavLink>
        </nav>
    </div>
)

export default Sidebar