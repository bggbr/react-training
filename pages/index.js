import React, { useState, useEffect, createContext } from 'react';
import Category from '../src/component/Category';
import Header from '../src/component/Header';
import Menu from '../src/component/Menu';
import { MenuContext, SetMenuContext } from '../src/state';

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
			<MenuContext.Provider value={{ allMenuList, setAllMenuList }}>
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
			</MenuContext.Provider>
		</div>
	);
}

export default Home;

/**
 * 메뉴 추가, 삭제
 * 조리 시작, 조리 멈춤, 조리 삭제
 * 계산하기
 * 최대 동시 조리 표시 및 증가, 감소 (최대값 3, 최소값 0)
 * 매출 표시
 */
