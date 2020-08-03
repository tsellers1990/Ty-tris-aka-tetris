import React from "react";
import Stage from "../Stage";
import Display from "../Display";
import StartButton from "../StartButton";
import { createStage } from "../../gameHelper";
import {StyledTetris, StyledTetrisWrapper} from "./StyledTetris";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
