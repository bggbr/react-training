import react, { useState, useEffect, useContext } from 'react';
import Button from './Button';
import { MenuContext } from '../state';

export default function Category({ category, setCategory }) {
	const selectCategory = (e) => {
		setCategory(e.target.value);
	};

	const allMenuList = useContext(MenuContext);
	const countMenu = (currentCategory) => allMenuList.allMenuList.filter((el) => el.category === currentCategory).length;

	// TODO: 버튼 코드 중복 없애기
	return (
		<div className='bg-slate-800 text-white w-52 p-5'>
			<h2 className='font-bold mb-5'>카테고리</h2>
			<div className='flex flex-col space-y-5'>
				<Button className={category === 'korean' ? 'bg-neutral-400' : ''} onClick={selectCategory} value='korean'>
					한식 ({countMenu('korean')})
				</Button>
				<Button className={category === 'japaness' ? 'bg-neutral-400' : ''} onClick={selectCategory} value='japaness'>
					일식 ({countMenu('japaness')})
				</Button>
				<Button className={category === 'chinese' ? 'bg-neutral-400' : ''} onClick={selectCategory} value='chinese'>
					중식 ({countMenu('chinese')})
				</Button>
			</div>
		</div>
	);
}

const CATEGORY_LIST = ['korean', 'japaness', 'chinese'];
