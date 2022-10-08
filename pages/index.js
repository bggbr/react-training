import React, { useState, useEffect } from 'react';
import Category from '../src/component/Category';
import Header from '../src/component/Header';
import Menu from '../src/component/Menu';
import axios from 'axios';

function Home() {
	const [v, setV] = useState(1);
	console.log();

	useEffect(() => {
		async function fetchData() {
			const res = await fetch('/api/', {
				method: 'GET',
			});
			console.log(await res.json());
		}
		fetchData();
	}, []);

	return (
		<div>
			{/* <button onClick={() => setV(v + 1)}>증가</button> */}

			<Header />
			<div className='flex'>
				<Category />
				<Menu />
			</div>
		</div>
	);
}

export default Home;
