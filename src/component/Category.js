import react, { useState, useEffect } from 'react';
import Button from './Button';

export default function Category({ setCategory, menuCount }) {
	const [isState, setIsState] = useState('korean');

	const selectCategory = (e) => {
		setIsState(e.target.value);
	};

	let koreanMenuCount = useEffect(() => {
		setCategory(isState);
	}, [isState]);

	return (
		<div className='bg-slate-800 text-white w-52 p-5'>
			<h2 className='font-bold mb-5'>카테고리</h2>
			<div className='flex flex-col space-y-5'>
				<Button className={isState === 'korean' ? 'bg-neutral-400' : ''} onClick={selectCategory} value='korean'>
					한식 ({menuCount('korean')})
				</Button>
				<Button className={isState === 'japaness' ? 'bg-neutral-400' : ''} onClick={selectCategory} value='japaness'>
					일식 ({menuCount('japaness')})
				</Button>
				<Button className={isState === 'chinese' ? 'bg-neutral-400' : ''} onClick={selectCategory} value='chinese'>
					중식 ({menuCount('chinese')})
				</Button>
			</div>
		</div>
	);
}
