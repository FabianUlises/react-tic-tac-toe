import React from 'react';

const Cell = (props) => {
  // Update cells after click
  const changeCells = (className) => {
    // Map through exsiting cells and return new array
    const nextCells = props.cells.map((cell, i) => {
      if(i === props.id) {
        return className
      } else {
        return cell
      }
    })
    props.setCells(nextCells);
  }
  // Mark box x or o
  const handleClick = (e) => {
      // Store clicked cell in variable
    const cell = e.target.firstChild;
    // Cell is taken if contains a cross or circle
    const taken = cell.classList.contains('circle') || cell.classList.contains('cross');
    // If cell is not taken
    if(!taken) {
      // If go = cricle add classname
      if(props.go === 'circle') {
        cell.classList.add('circle');
        props.setGo('cross');
        changeCells('circle');
        // Else go can only equal cross, add classname
      } else {
        cell.classList.add('cross');
        props.setGo('circle');
        changeCells('cross');
      }
    }
  };
  return (
    <div id={props.id} className='cell' onClick={handleClick} >
      <div></div>
      
    </div>
  )
};
export default Cell;