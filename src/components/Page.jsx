import styled from "styled-components";

const StyledPage = styled.div`
  height: 100vh;
  max-width: 1100px;
  margin: 0 auto;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Page = (props) => {
  return <StyledPage>{props.children}</StyledPage>;
};

export default Page;