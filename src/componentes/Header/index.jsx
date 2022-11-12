import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import '../../styles/Header.css'



function Header() {

    return (
        <header className='sl_header'>
            <Link to="/">
                <img className='sl_header_img' src={Logo} alt =" logo de kasa"/>
            </Link>
            <nav className='sl_header_nav'>
                <Link className='sl_header_link' to="/"> Accueil</Link>
                <Link className='sl_header_link' to="/about"> A Propos</Link>
            </nav>                        
        </header>    
        )
}

export default Header