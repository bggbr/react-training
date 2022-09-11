import React, { useState, useEffect, createContext } from 'react';
import Category from '../src/component/Category';
import Header from '../src/component/Header';
import Menu from '../src/component/Menu';
import { MenuContext, SetMenuContext } from '../src/context/MenuContext';

function Home() {
	const [category, setCategory] = useState('korean');
	const [allMenuList, setAllMenuList] = useState([
		{
			id: 1,
			name: '김치찌개',
			cookingTime: 3,
			price: 7000,
			category: 'korean',
		},
		{
			id: 2,
			name: '된장찌개',
			cookingTime: 10,
			price: 8000,
			category: 'korean',
		},
		{
			id: 3,
			name: '초밥',
			cookingTime: 5,
			price: 9000,
			category: 'japaness',
		},
	]);
	const [cookingMenu, setCookingMenu] = useState([]);

	const setMenu = (menu) => {
		setAllMenuList([...allMenuList, menu]);
	};

	const setCookingList = (cookMenu) => {
		setCookingMenu([...cookingMenu, cookMenu]);
	};

	return (
		<div>
			<MenuContext.Provider value={allMenuList}>
				<SetMenuContext.Provider value={setAllMenuList}>
					<Header cookingMenu={cookingMenu} />
					<div className='flex'>
						<Category category={category} setCategory={setCategory} />
						<Menu setMenu={setMenu} category={category} setCookingList={setCookingList} />
					</div>
				</SetMenuContext.Provider>
			</MenuContext.Provider>
		</div>
	);
}

export default Home;
