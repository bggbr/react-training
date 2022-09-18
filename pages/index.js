import React, { useState, useEffect, createContext, useReducer } from 'react';
import Category from '../src/component/Category';
import Header from '../src/component/Header';
import Menu from '../src/component/Menu';
import { MenuContext, CookingContext } from '../src/state';

const initialState = {
	cookingMenu: [],
	maxCookingNum: 3,
	totalSales: 0,
};
const reducer = (state, action) => {
	console.log('state =', state);
	console.log('action =', action);

	switch (action.type) {
		case 'add-cooking':
			let nowCookNum = state.cookingMenu.length;
			if (nowCookNum < 3) {
				return { ...state, cookingMenu: [...state.cookingMenu, action.cookingMenu] };
			}
		case 'delete-cooking':
			let { removedCooking } = action;
			let newCookingMenu = state.cookingMenu.filter((el) => el.id !== removedCooking.id);
			return { ...state, cookingMenu: [...newCookingMenu] };
		// case 'pay-cooking':
		// 	let { removedCooking } = action;
		// 	let price = removedCooking.price;
		// 	let newCookingMenu = state.cookingMenu.filter((el) => el.id !== removedCooking.id);
		// 	return { ...state, totalSales: (totalSales += price), cookingMenu: [...newCookingMenu] };
		default:
			return new Error();
	}
};
function Home() {
	const [category, setCategory] = useState('korean');
	const [maxCook, setMaxCook] = useState(3);
	const [allMenuList, setAllMenuList] = useState([
		{
			id: 1,
			name: '김치찌개',
			cookingTime: 2,
			price: 7000,
			category: 'korean',
		},
		{
			id: 2,
			name: '된장찌개',
			cookingTime: 5,
			price: 8000,
			category: 'korean',
		},
		{
			id: 3,
			name: '초밥',
			cookingTime: 3,
			price: 9000,
			category: 'japaness',
		},
	]);
	const [cookingMenu, setCookingMenu] = useState([]);

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		console.log('index state =', state);
	}, [state]);

	useEffect(() => {
		if (maxCook > 3) {
			setMaxCook(3);
		} else if (maxCook < 0) {
			setMaxCook(0);
		}
	}, [maxCook]);

	const addMenu = (menu) => {
		setAllMenuList([...allMenuList, menu]);
	};

	const removeMenu = (menu) => {
		let copyAllMenu = allMenuList.filter((el) => el.id !== menu.id);
		setAllMenuList(copyAllMenu);
	};

	const setCookingList = (cookMenu) => {
		setCookingMenu([...cookingMenu, cookMenu]);
	};

	return (
		<div>
			{/* {JSON.stringify(state)} */}
			<MenuContext.Provider value={{ allMenuList, setAllMenuList }}>
				<CookingContext.Provider value={{ state, dispatch }}>
					<Header maxCook={maxCook} setMaxCook={setMaxCook} cookingMenu={cookingMenu} setCookingMenu={setCookingMenu} />
					<div className='flex'>
						<Category category={category} setCategory={setCategory} />
						<Menu
							maxCook={maxCook}
							addMenu={addMenu}
							removeMenu={removeMenu}
							category={category}
							cookingMenu={cookingMenu}
							setCookingList={setCookingList}
						/>
					</div>
				</CookingContext.Provider>
			</MenuContext.Provider>
		</div>
	);
}

export default Home;

/**
 * 메뉴 추가, 삭제
 * 조리 시작, 멈춤, 삭제, 계산하기
 * 최대 동시 조리 표시 및 증가, 감소 (최대값 3, 최소값 0)
 * 매출 표시
 */
