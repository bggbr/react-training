import React, { useEffect, useState } from 'react';
import Button from './Button';

export default function Cooking({ menuId, name, remainingTime }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timeId = setInterval(() => {
            setCount(() => count - 1);
        }, 1000);
        if (count === 0) clearInterval(timeId);
        return () => clearInterval(timeId);
    }, [count]);

    useEffect(() => {
        setCount(remainingTime);
    }, []);

    return (
        <div>
            <div>{name}</div>
            <div>⏳ 남은 시간: {count}초</div>
            <div className={count > 0 ? '' : 'hidden'}>
                <Button className="mr-2">pause</Button>
                <Button className="mr-2">stop</Button>
            </div>
            <Button className={count === 0 ? '' : 'hidden'}>계산하기</Button>
        </div>
    );
}
