import { useEffect, useState } from 'react';

export default function Header({ cookingMenu }) {
	const [sec, setSec] = useState(0);
	useEffect(() => {
		console.log(cookingMenu);
	}, [cookingMenu]);

	return (
		<div className='bg-yellow-300 p-5 flex flex-col space-y-5 justify-between'>
			<div>
				<h2 className='font-bold flex space-x-3'>
					<div className='text-5xl'>🧑‍🍳</div>
					<div className='text-2xl self-center'>조리 현황</div>
				</h2>
			</div>

			<div>
				{/* {cookingMenu.map((menu, index) => {
					return (
						<div key={index} className='mb-4'>
							<div>{menu.name}</div>
							<div>{menu.cookingTime}</div>
							<div>{menu.price}</div>
						</div>
					);
				})} */}
			</div>
		</div>
	);
}
