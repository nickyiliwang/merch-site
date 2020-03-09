import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./WithLoadingSpinnerStyles";

const LoadingSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default LoadingSpinner;
