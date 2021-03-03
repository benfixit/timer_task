import React, { useState } from 'react'
import useTimeInterval from '../../hooks/useTimeInterval';
import { Wrapper, Button } from './styles';
import { Heading, Counter, InputSection } from '../sharedStyles'

const DEFAULT_DELAY = 1000;

const ExtraCounter = props => {
    let [counter, setCounter] = useState(0);
    let [delay, setDelay] = useState(DEFAULT_DELAY);

    useTimeInterval(() => {
        setDelay(delay/2);
    }, DEFAULT_DELAY);

    useTimeInterval(() => {
        setCounter(counter++);
    }, delay);

    const resetDelay = () => {
        setDelay(DEFAULT_DELAY)
    }

    return (
        <Wrapper>
            <Heading>Extra Counter</Heading>
            <Counter>{counter}</Counter>
            <InputSection>
                <strong>Delay: {delay}</strong>
            </InputSection>
            <Button onClick={resetDelay}>Reset Delay</Button>
        </Wrapper>
    )
}

export default ExtraCounter;