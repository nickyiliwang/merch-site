import React from "react";
import { DirectoryMenuStyles } from "./DirectoryStyles";
// components
import MenuItem from "../menu-item/MenuItem";
// redux
import { connect } from "react-redux";
// reselect
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../Redux/directory/directorySelectors";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuStyles>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuStyles>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
