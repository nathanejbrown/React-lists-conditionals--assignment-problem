import React from 'react';

const validationComponent = (props) => {
  var message = '';
  if (props.length < 5) {
    message = 'Text too short.'
  } else {
    message = 'Text long enough.'
  }
  return (
    <div>
      <p>{props.length}</p>
      <p>{message}</p>
    </div>
  );
}

export default validationComponent;
