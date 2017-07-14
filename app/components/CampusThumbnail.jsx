// This was intended to be used on both CampusList and Campus.

import React from 'react';

const CampusThumbnail = ({ campus, isDetail }) => {
  return (
    <div className="panel">
      <h3>{campus.name}</h3>
      <figure className="thumbnail">
        <img src={campus.image} alt={campus.imageAlt || ''} />
        {
          if (isDetail) { // display the image caption only on a campus's detail page
            return (
              <figcaption>{campus.imageCaption || ''}</figcaption>
              )
          }
        }
      </figure>
    </div>
  );
};

export default CampusThumbnail;
