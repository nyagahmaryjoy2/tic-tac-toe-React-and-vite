/*placing all the logic of the tictactoe game who the player is active,the reset game logic */
import { useState } from "react";

const initialBoard =()=>Array(9).fill(null);

const useTicTacToe =()=>{

    const [board, setBoard] = useState(initialBoard());
    const [isXNext, setisXNext] = useState(true);

    const WINNING_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


    const calculateWinner = (currentBoard) => {
        for (let i =0; i< WINNING_PATTERNS.length; i++){
           const[a,b,c] =WINNING_PATTERNS[i]
           if(currentBoard[a]&&
             currentBoard[a]===currentBoard[b] && 
             currentBoard[a]===currentBoard[c]
            ){
            return currentBoard[a]
            }
        }
        return null;

    };

    const handleCLick= (index) => {
        //check the winner
        const winner= calculateWinner(board);
        console.log(winner);
        if (winner || board[index]) return

        const newBoard = [...board]
        newBoard[index] = isXNext?"X":"O"
        setBoard(newBoard);
        setisXNext(!isXNext);

    };


    const getStatusMessage = () => {
        const winner =calculateWinner(board)
        if(winner)  return `player ${winner} wins`;
        if(!board.includes(null))
            return`it's a draw good luck next time!`;
        return `Player ${isXNext ? "X"  : "O"} turn`;

    };


    const resetGame = () => {
        setBoard(initialBoard())
        setisXNext(true);
    };
    
    return {board, handleCLick, calculateWinner, getStatusMessage, resetGame};   
};


export default useTicTacToe;