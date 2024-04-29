import React from 'react';

const Links = ({ github, linkedin }) => {
  return (
    <div>
      <h3>Links</h3>
      <div>
        <p>Github: <a href={github}>{github}</a></p>
        <p>LinkedIn: <a href={linkedin}>{linkedin}</a></p>
      </div>
    </div>
  );
};

export default Links;
