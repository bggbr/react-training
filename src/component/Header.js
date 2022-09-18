import { memo, useEffect, useState, useContext, useReducer } from 'react';
import { MenuContext } from '../state';
import Button from './Button';
import Cooking from './Cooking';
import { CookingContext } from '../state';

export default function Header({ maxCook, setMaxCook }) {
	const [revenue, setRevenue] = useState(0);
	const { state, dispatch } = useContext(CookingContext);

	useEffect(() => {
		console.log('Cooking state =', state.cookingMenu);
	}, [state]);

	const taskCookingMenu = (nowCookMenu) => {
		let removedCooking = state.cookingMenu.find((m) => m.id === nowCookMenu.id);
		let { flag } = nowCookMenu;
		flag === 'stop' ? dispatch({ type: 'delete-cooking', removedCooking }) : dispatch({ type: 'pay-cooking', removedCooking });
	};

	return (
		<div className='bg-yellow-300 p-5 flex flex-col space-y-5 justify-between'>
			<div className='flex justify-between'>
				<h2 className='font-bold flex space-x-3'>
					<div className='text-5xl'>🧑‍🍳</div>
					<div className='text-2xl self-center'>조리 현황</div>
				</h2>

				<div>
					<div>
						<span className='mr-2'>최대 동시 조리: {maxCook}</span>
						<Button className='mr-2' onClick={() => setMaxCook(maxCook + 1)}>
							증가
						</Button>
						<Button onClick={() => setMaxCook(maxCook - 1)}>감소</Button>
					</div>
					💰 매출: {revenue}원
				</div>
			</div>
			<div>
				{state.cookingMenu.map((cook) => {
					return (
						<div key={cook.id} className='mb-4'>
							<Cooking
								taskCookingMenu={taskCookingMenu}
								id={cook.id}
								// name={menu.find((el) => el.id === cook.menuId).name}
								name={cook.name}
								remainingTime={cook.remainingTime}
							></Cooking>
						</div>
					);
				})}
			</div>
		</div>
	);
}
