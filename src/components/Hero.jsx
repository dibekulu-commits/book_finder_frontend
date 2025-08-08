import styled from "styled-components";

const StyledNote= styled.p`
padding:20px;
margin-top:0.25rem;
`
const WelcomeNote = styled.h1`
margin-bottom:0.25rem;
`
const Hero = () => {
    return ( 
    <> 
    <WelcomeNote> Welcome to the Book Finder</WelcomeNote>
    <StyledNote>Books are important because they offer a gateway to knowledge, enhance cognitive skills, and provide therapeutic benefits. They serve as educational tools, fostering intellectual and personal growth by expanding vocabulary, improving comprehension, and developing critical thinking. Furthermore, books offer an escape, reduce stress, and promote empathy and understanding of diverse perspectives. .</StyledNote>
    </> 
    );
}
 
export default Hero;