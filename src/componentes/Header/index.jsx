import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import styled from 'styled-components'


const HomeLogo = styled.img`
    height: 50px;
    width: 150px;
    
`
const StyledNav = styled.nav`
    width: 309px;
    display: flex;
    justify-content: space-around;
    margin-right: 100px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
`

const StyledHeader = styled.header`
    margin-left: 5%; 
    width: 100%;
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position : absolute;
    top: 40px;
    
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FF6060;
`

function Header() {

    return (
        <StyledHeader>
            <Link to="/">
                <HomeLogo src={Logo} alt =" logo de kasa"/>
            </Link>
            <StyledNav>
                <StyledLink to="/"> Accueil</StyledLink>
                <StyledLink to="/about"> A Propos</StyledLink>
            </StyledNav>                        
        </StyledHeader>    
        )
}

export default Header