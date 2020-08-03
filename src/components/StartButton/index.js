import React from 'react';
import { StyledStartButton } from './StyledStartButton'

const StartButton = ({ callBack }) => (
    <StyledStartButton onClick={callBack}>Start Game</StyledStartButton>
)

export default StartButton;