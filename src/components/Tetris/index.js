import React, {useState} from "react";
import Stage from "../Stage";
import Display from "../Display";
import StartButton from "../StartButton";
import {StyledTetris, StyledTetrisWrapper} from "./StyledTetris";
import {usePlayer} from '../../hooks/usePlayer'
import {useStage} from '../../hooks/useStage'

import { createStage } from '../../gameHelper';

const Tetris = () => {

  const [droptime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  const movePlayer = dir => {
    updatePlayerPos({ x: dir, y: 0 })
  }

  const startGame = () => {
    console.log("started")
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  }
  
  const drop = () => {
    //make a function to check collision
    //if it's collided then return game over
      //alert gameover
      //set game over to true
      //stop the drop timer
    //if it's not collided, updateplayerpos with y increasing by one

    //

    updatePlayerPos({ x:0, y:1, collided: false})

  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode }) => {
    if(!gameOver){
      if(keyCode === 37){
        movePlayer(-1)
      } else if (keyCode === 39){
        movePlayer(1)
      } else if (keyCode === 40){
        dropPlayer()
      }
    }
  }

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ):(
            <div>
              <Display text="score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callBack={startGame}/>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
