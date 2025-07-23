import React, { useEffect } from 'react';

const RemoteButton = ({label="click me", onClick}) => {
  return (
    <button onClick={onClick} label={label} style={{ padding: '10px' }}>Remote Button from Remote App</button>
  )
};

export default RemoteButton;
