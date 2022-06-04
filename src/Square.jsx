import React from 'react'

function Square({value, handleClick, disable}) {
  return (
    <button className="square" onClick={!disable ? handleClick : ()=> {}}>
        {value}
      </button>
  )
}

export default Square