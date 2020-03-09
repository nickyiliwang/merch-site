import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./LoadingSpinnerStyles";

export const LoadingSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};
