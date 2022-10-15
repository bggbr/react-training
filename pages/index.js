import React, { useState, useEffect } from 'react';
import Category from '../src/home/Category';
import Header from '../src/home/Header';
import Menu from '../src/home/Menu';
import axios from 'axios';

function Home() {
	return (
		<div>
			<Header />
			<div className='flex'>
				<Category />
				<Menu />
			</div>
		</div>
	);
}

export default Home;
