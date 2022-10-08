import React, { useEffect, useState, useRef, useContext } from 'react';
import { CookingContext } from '../state';
import Button from '../common/Button';

export default function Cooking({ cook }) {
    const [count, setCount] = useState(cook.remainingTime);
    const [isPause, setIsPause] = useState(false);
    const { dispatch } = useContext(CookingContext);

    const decreaseTime = () => {
        return setInterval(() => {
            setCount(() => count - 1);
        }, 1000);
    };

    const pauseTime = (pause, e) => {
        if (pause) {
            clearInterval(timerIdRef.current);
        } else {
            timerIdRef.current = decreaseTime();
        }
        setIsPause(pause);
    };

    const timerIdRef = useRef();

    useEffect(() => {
        timerIdRef.current = decreaseTime();
        if (count === 0) clearInterval(timerIdRef.current);
        return () => clearInterval(timerIdRef.current);
    }, [count]);

    return (
        <div>
            <div>{cook.name}</div>
            <div>⏳ 남은 시간: {count}초</div>
            <div className={count > 0 ? '' : 'hidden'}>
                <Button
                    className="mr-2"
                    onClick={(e) => {
                        pauseTime(!isPause, e);
                    }}
                >
                    pause
                </Button>
                <Button className="mr-2" onClick={() => dispatch({ type: 'delete-cooking', deleteId: cook.id })}>
                    stop
                </Button>
            </div>
            <Button className={count === 0 ? '' : 'hidden'} onClick={() => dispatch({ type: 'pay-cooking', payId: cook.id, price: cook.price })}>
                계산하기
            </Button>
        </div>
    );
}
