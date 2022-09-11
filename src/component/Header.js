import { memo, useEffect, useState, useContext } from 'react';
import { MenuContext } from '../context/MenuContext';

export default function Header({ cookingMenu }) {
	const [sec, setSec] = useState(0);
	const menu = useContext(MenuContext);

	return (
		<div className='bg-yellow-300 p-5 flex flex-col space-y-5 justify-between'>
			<div>
				<h2 className='font-bold flex space-x-3'>
					<div className='text-5xl'>🧑‍🍳</div>
					<div className='text-2xl self-center'>조리 현황</div>
				</h2>
			</div>

			<div>
				{cookingMenu.map((cook) => {
					return (
						<div key={cook.id} className='mb-4'>
							<div>{menu.find((el) => el.id === cook.menuId).name}</div>
							<div>{cook.remainingTime}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
