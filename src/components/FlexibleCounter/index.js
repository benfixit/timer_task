/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import useTimeInterval from '../../hooks/useTimeInterval';
import { Wrapper } from './styles';
import { Heading, Counter, InputSection, Input } from '../sharedStyles';

const FlexibleCounter = props => {
    let [counter, setCounter] = useState(0);
    const [delay, setDelay] = useState(1000);

    const handleSetDelay = event => {
        setDelay(parseInt(event.target.value));
    }

    useTimeInterval(() => {
        setCounter(counter++)
    }, delay);

    return (
        <Wrapper>
            <Heading>Flexible Counter</Heading>
            <Counter>{counter}</Counter>
            <InputSection>
                <span>Delay: </span>
                <Input type="text" value={delay} onChange={handleSetDelay} />
            </InputSection>
        </Wrapper>
    )
}

export default FlexibleCounter