import {useState} from 'react';
import {createStage} from '../gameHelper';

export const useStage = () => {
    const [stage, setStage] = useStage(createStage());

    return [stage, setStage];
}