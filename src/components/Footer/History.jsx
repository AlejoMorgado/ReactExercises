import React from 'react';

const History = ({ href, target, content }) => {
  return (
    <div>
      <a href={href} target={target}>{content}</a>
    </div>
  );
};

export default History;
