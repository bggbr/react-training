import { useState, useEffect, useMemo } from 'react';
import Button from './Button';
export default function Menu({ menuList, setMenu, isCategory, setCookingList }) {
	const [name, setName] = useState('');
	const [cookingTime, setCookingTime] = useState('');
	const [price, setPrice] = useState('');

	/**
	 * 현재 카테고리를 상태값으로 관리
	 * 현재 카테고리에 해당하는 메뉴만 보여주기
	 *
	 * 조리 시작 기능 구현하기
	 */

	function addMenu() {
		let id = Math.max(...menuList.map((item) => item.id)) + 1;

		if (!(name.length && cookingTime.length && price.length)) {
			alert('모든 값을 입력해주세요');
			return;
		}

		let menu = {
			id,
			name,
			cookingTime: parseInt(cookingTime),
			price: parseInt(price),
			category: isCategory,
		};
		setMenu(menu);
		setName('');
		setCookingTime('');
		setPrice('');
	}

	const addCooking = ({ name, cookingTime, price }, e) => {
		e.preventDefault();
		let menu = {
			name,
			cookingTime: parseInt(cookingTime),
			price: parseInt(price),
		};
		setCookingList(menu);
	};

	return (
		<div className='bg-slate-400 p-5 w-full'>
			<h2 className='font-bold flex space-x-3'>
				<div className='text-5xl'>🥘</div>
				<div className='text-2xl self-center'>메뉴</div>
			</h2>

			{menuList &&
				menuList.map((menu, idx) => (
					<div key={idx}>
						<div>{menu.name}</div>
						<div>조리시간: {menu.cookingTime}</div>
						<div>가격: {menu.price}</div>
						<Button className='mr-2 my-2.5' onClick={(e) => addCooking(menu, e)}>
							조리 시작
						</Button>
						<Button>메뉴 삭제</Button>
					</div>
				))}

			<div className='space-x-2'>
				<input type='text' placeholder='요리 이름' value={name} onChange={(e) => setName(e.target.value)} />

				<input type='number' placeholder='조리 시간' value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />

				<input type='number' placeholder='가격' value={price} onChange={(e) => setPrice(e.target.value)} />

				<Button onClick={addMenu}>메뉴 추가</Button>
			</div>
		</div>
	);
}
