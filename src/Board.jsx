import React from 'react'
import Square from './Square'
import {calculateWinner} from './utils'

function Board() {
    const init = Array(9).fill(null)
    const [squareValues, setSquareValues] = React.useState(init)
    const [winnerDeclared, setWinnerDeclared] = React.useState('')
    const [xIsNext, setXIsNext] = React.useState(true)
    const [disable, setDisable] = React.useState(false)
    const [history, setHistory] = React.useState([])
    const status = `Next player : ${xIsNext ? 'X' : 'O'}`
    const handleClick = (i) => {
        if (squareValues[i] === null) {
            const newSquareValues = [...squareValues]
            newSquareValues[i] = xIsNext ? 'X' : 'O'; 
            setXIsNext(val => !val)
            setSquareValues(newSquareValues)
            setHistory(value => [...value,[newSquareValues,[!xIsNext]]])
        }
    }
    const resetAll = () =>   {
        setSquareValues(init)
        setXIsNext(true)
        setDisable(false)
        setHistory([])
        setWinnerDeclared('')

    }
    React.useEffect(()=> {
        const winner = calculateWinner(squareValues)
        if (winner) {
            setWinnerDeclared(winner)
            setDisable(true)
        }
    },[squareValues, xIsNext]);
  return (
    <div className='board-main'>
    <div className="status">{!winnerDeclared && status}</div>
    <div>
        {
            [...Array(3)].map((x, i) => (
            <div className="board-row" >
                {   [...Array(3)].map((x, j) => (
                    <Square key={`${i}${j}`}  value={squareValues[i*3 + j]} handleClick={() => handleClick(i*3 + j)} disable={disable}/>
                ))}
            </div>
        ))}
        </div>
        <div style={{"display" :'flex', 'flexDirection' : 'column'}}>
        <button onClick={()=> resetAll()}>reset</button>
        {history.map((item,index) => (
            <button key={`${item}`} onClick={()=>{setSquareValues(item[0]);setXIsNext(item[1][0])}}>move {index+1}</button>
        ))}
        </div>
        <div>{`Winner is ${winnerDeclared}`}</div>

  </div>
  )
}

export default Board