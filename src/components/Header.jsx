import BookImage from '../assets/books.jpg'
import styled from 'styled-components';

const StyledImage = styled.img`
 width:100%;
 height:25%
`

const Header = () => {
    return  <StyledImage src={BookImage} alt=""/> 
}
 
export default Header;