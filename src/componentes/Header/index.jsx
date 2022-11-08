import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import styled from 'styled-components'


const HomeLogo = styled.img`
    height: 68px;
    width: 210px;
    
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
    position: absolute;
    width: 1240px;
    height: 68px;
    left: 100px;
    top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
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