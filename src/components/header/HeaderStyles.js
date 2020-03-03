import styled, { css } from "styled-components";
// css from styled-components allows you to write a block of css and pass it into other rendered components
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
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsStyles = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

// we needed option Link styles and option div styles, basically reusing our css code in 2 different element

export const OptionLinkStyles = styled(Link)`
  ${OptionStyles}
`;

export const OptionDivStyles = styled.div`
  ${OptionStyles}
`;
