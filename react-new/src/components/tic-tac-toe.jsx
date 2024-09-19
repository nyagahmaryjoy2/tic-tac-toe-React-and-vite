import React, { useState }  from "react";
import useTicTacToe from '../hooks/use-tic-tac-toe';


function TicTacToe() {

     const { board, handleCLick, calculateWinner, resetGame,getStatusMessage} = useTicTacToe();

  return (
    <div className='game'>
      <div className="status"> {getStatusMessage()}
        <button className='reset' onClick={resetGame}>reset Game</button> 
      </div>
      <div className="board">
        {board.map((b,index) =>{
          return <button 
          className="cell"
           key ={index}
           onClick= {() => handleCLick(index)}  
          disabled={b !== null}> 
          {b}
          </button>
        })}</div>
    </div>
  )
}

export default TicTacToe;
//Coded by Maryjoy Nyagah https://github.com/nyagahmaryjoy2