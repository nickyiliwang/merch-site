import React from "react";
import "./directory.scss";
// components
import MenuItem from "../menu-item/MenuItem";
// redux
import { connect } from "react-redux";
// reselect
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../Redux/directory/directorySelectors";

const Directory = ({ sections }) => {
  return (
    <div>
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => {
          return (
            <MenuItem key={id} {...otherSectionProps} />
            // spreading these
            // <MenuItem
            //   key={id}
            //   title={title}
            //   imageUrl={imageUrl}
            //   size={size}
            //   linkUrl={linkUrl}
            // />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
