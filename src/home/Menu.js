import { useContext, useState, useEffect, useRef } from 'react';
import Button from '../common/Button';
import { CookingContext } from '../state';
import Link from 'next/link';

export default function Menu() {
	const [name, setName] = useState('');
	const [cookingTime, setCookingTime] = useState('');
	const [price, setPrice] = useState('');

	const { state, dispatch } = useContext(CookingContext);

	function addOneMenu() {
		let id = Math.max(...state.menu.map((item) => item.id)) + 1;

		if (!(name.length && cookingTime.length && price.length)) {
			alert('모든 값을 입력해주세요');
			return;
		}

		let menu = {
			id,
			name,
			cookingTime: parseInt(cookingTime),
			price: parseInt(price),
			category: state.category,
			history: [],
		};
		dispatch({ type: 'add-menu', addedMenu: menu });
		setName('');
		setCookingTime('');
		setPrice('');
	}

	const addCooking = ({ id, name, cookingTime, price }, e) => {
		let { cookingMenu, maxCookingNum } = state;

		let cooking = {
			menuId: id,
			id: Date.now(),
			name,
			remainingTime: cookingTime,
			price,
		};

		if (cookingMenu.length < maxCookingNum) dispatch({ type: 'add-cooking', cookingMenu: cooking });
	};

	const focusRef = useRef();
	useEffect(
		// 1
		() => {
			const handleKeyup = (e) => {
				if (e.key === 'a') {
					focusRef.current.focus();
				}
			};
			window.addEventListener('keyup', handleKeyup);
			return () => window.removeEventListener('keyup', handleKeyup); // 2
		},
	);

	return (
		<div className='bg-slate-400 p-5 w-full'>
			<h2 className='font-bold flex space-x-3 mb-4'>
				<div className='text-5xl'>🥘</div>
				<Link href='/menu'>
					<a className='text-2xl self-center'>메뉴</a>
				</Link>
			</h2>
			<div className='space-y-2'>
				{state.menu
					.filter((el) => el.category === state.category)
					.map((menu) => (
						<div key={menu.id}>
							<div>{menu.name}</div>
							<div>조리시간: {menu.cookingTime}</div>
							<div>가격: {menu.price}</div>
							<Button className='mr-2 my-2.5' onClick={(e) => addCooking(menu, e)}>
								조리 시작
							</Button>
							<Button className='mr-2 my-2.5' onClick={() => dispatch({ type: 'delete-menu', deletedMenu: menu })}>
								메뉴 삭제
							</Button>
							<Button>
								<Link href={{ pathname: `/menu/${menu.id}` }}>
									<a>메뉴 상세</a>
								</Link>
							</Button>
						</div>
					))}
			</div>

			<div className='space-x-2'>
				<input ref={focusRef} type='text' placeholder='요리 이름' value={name} onChange={(e) => setName(e.target.value)} />

				<input type='number' placeholder='조리 시간' value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />

				<input type='number' placeholder='가격' value={price} onChange={(e) => setPrice(e.target.value)} />

				<Button onClick={addOneMenu}>메뉴 추가</Button>
			</div>
		</div>
	);
}
