import React from 'react';
// Generic Btn
function Button(props) {
  return <button onClick={props.onClick}>{props.children || 'Button'}</button>;
}

export default Button;
