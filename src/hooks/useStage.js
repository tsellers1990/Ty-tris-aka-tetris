import { useState, useEffect } from "react";
import { createStage } from "../gameHelper";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage) => {
      //clear the stage //change out for a for loop if it's slow
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      //draw the tetromino
        player.tetromino.forEach((row, y) => {
            row.forEach((value, x) => {
                if(value !== 0){
                    newStage[y + player.pos.y][x + player.pos.x] = [
                        value,
                        `${player.collided ? 'merged' : 'clear'}`,
                    ]
                }
            })
        })
        return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, []);

  return [stage, setStage];
};
