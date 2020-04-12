import React from "react";
import {
  MenuItemStyles,
  BackgroundImageStyles,
  ContentStyles,
} from "./MenuItemStyles";
// router
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemStyles
    className={`menu-item ${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageStyles
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <ContentStyles>
      <h2 className="title">{title.toUpperCase()}</h2>
      <span className="subtitle">SHOP NOW</span>
    </ContentStyles>
  </MenuItemStyles>
);

export default withRouter(MenuItem);
