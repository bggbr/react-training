import React, { useState, useEffect } from 'react';
import Category from '../src/component/Category';
import Header from '../src/component/Header';
import Menu from '../src/component/Menu';

function Home() {
	const [isCategory, setIsCategory] = useState('');
	const [isMenuList, setIsMenuList] = useState('');
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

	const setCategory = (category) => {
		setIsCategory(category);
	};

	const setMenu = (menu) => {
		setAllMenuList([...allMenuList, menu]);
	};

	const menuCount = (nation) => {
		return allMenuList.filter((el) => el.category === nation).length;
	};

	useEffect(() => {
		let menu = allMenuList.filter((el) => el.category === isCategory);
		setIsMenuList(menu);
	}, [allMenuList, isCategory]);

	return (
		<div>
			<div>{isCategory}</div>
			<div>{allMenuList.length}</div>
			{/* <div>
				{allMenuList &
					allMenuList.map((item, idx) => {
						<div key={idx}>
							<div>{item}</div>
						</div>;
					})}
			</div> */}
			<Header />
			<div className='flex'>
				<Category setCategory={setCategory} menuCount={menuCount} />
				<Menu menuList={isMenuList} setMenu={setMenu} isCategory={isCategory} />
			</div>
		</div>
	);
}

export default Home;
