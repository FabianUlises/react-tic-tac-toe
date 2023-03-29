import React from 'react';

const Cell = (props) => {
  const handleClick = () => {
    console.log('cell clicked');
  };
  return (
    <div id={props.id} className='cell' onClick={handleClick}>
      <div className={props.go}></div>
    </div>
  )
};
export default Cell;