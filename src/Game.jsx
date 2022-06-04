import React from 'react'
import Board from './Board'

const Game = () => (
    <div className="game" style={{width :'100hw'}}>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
  )

export default Game