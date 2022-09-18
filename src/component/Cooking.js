import React, { useEffect, useState, useRef, useContext } from 'react';
import Button from './Button';

export default function Cooking({ taskCookingMenu, id, name, remainingTime }) {
	const [count, setCount] = useState(remainingTime);
	const [isPause, setIsPause] = useState(false);

	const decreaseTime = () => {
		return setInterval(() => {
			setCount(() => count - 1);
		}, 1000);
	};

	const pauseTime = (pause, e) => {
		// e.preventDefault();
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
			<div>{name}</div>
			<div>⏳ 남은 시간: {count}초</div>
			<div className={count > 0 ? '' : 'hidden'}>
				<Button
					className='mr-2'
					onClick={(e) => {
						pauseTime(!isPause, e);
					}}
				>
					pause
				</Button>
				<Button
					className='mr-2'
					onClick={() => {
						taskCookingMenu({ id, flag: 'stop' });
					}}
				>
					stop
				</Button>
			</div>
			<Button
				className={count === 0 ? '' : 'hidden'}
				onClick={() => {
					taskCookingMenu({ id, name, flag: 'calc' });
				}}
			>
				계산하기
			</Button>
		</div>
	);
}
