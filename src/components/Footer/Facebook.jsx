import React from 'react';

const Facebook = ({ href, target, content }) => {
  return (
    <div>
      <a href={href} target={target}>{content}</a>
    </div>
  );
};

export default Facebook;
