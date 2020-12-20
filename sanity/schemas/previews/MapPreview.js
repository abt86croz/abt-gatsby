/* eslint-disable react/prop-types */
import React from 'react';

const MapPreview = ({ value }) => {
  const { url, description } = value;
  if (!url) {
    return <p>Missing URL for Google Maps</p>;
  }

  return (
    <iframe
      src={url}
      width="450px"
      height="450px"
      display="initial"
      position="relative"
      injectScript
      title={description}
    />
  );
};

export default MapPreview;
