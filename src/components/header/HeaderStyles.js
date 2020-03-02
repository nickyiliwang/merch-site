import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyles = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

// calling the styled import like a function and pass Link component in HOC
export const LogoStyles = styled(Link)`
    
`