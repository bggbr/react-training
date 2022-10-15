import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import React, { useRef, useContext } from 'react';
import { CookingContext } from '../../src/state';
import Modal from '../../src/common/Modal.js';
import Button from '../../src/common/Button.js';

export default function MenuDetailPage({ id }) {
	const [menu, setMenu] = useState(null);
	const { state, dispatch } = useContext(CookingContext);
	const router = useRouter();

	const changeCookingInfo = async (type, value) => {
		switch (type) {
			case 'time': {
				const menu = await putMenuDetail({ id, time: value, type });
				dispatch({ type: 'change-cookingTime', time: menu.cookingTime, id });
				break;
			}
			case 'price': {
				const menu = await putMenuDetail({ id, time: value, type });
				dispatch({ type: 'change-price', price: menu.price, id });
				break;
			}
			case 'category': {
				const menu = await putMenuDetail({ id, time: value, type });
				dispatch({ type: 'change-category', category: menu.category, id });
				break;
			}
		}
	};

	async function putMenuDetail(data) {
		const res = await fetch(`/api/menu/${id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
		}).then((res) => res.json());
		return res;
	}

	return (
		<>
			<Button className='m-4' onClick={() => router.back()}>
				뒤로 가기
			</Button>
			{state.menu.length > 0 && (
				<div>
					<div className='m-10 border-l-8 border-l-green-700 pl-1'>
						<h1 className='mb-4'>{state.menu.find((menu) => menu.id === id).name}</h1>
						<ul>
							<li className='mb-4'>ID: {state.menu.find((menu) => menu.id === id).id}</li>
							<li className='mb-4'>
								<span className='mr-2'> 조리 시간: {state.menu.find((menu) => menu.id === id).cookingTime}초</span>
								<Modal changeCookingInfo={changeCookingInfo} type='time'>
									수정
								</Modal>
							</li>
							<li className='mb-4'>
								<span className='mr-2'>가격: {state.menu.find((menu) => menu.id === id).price}원</span>
								<Modal changeCookingInfo={changeCookingInfo} type='price'>
									수정
								</Modal>
							</li>
							<li className='mb-4'>
								<span className='mr-2'>카테고리: {state.menu.find((menu) => menu.id === id).category}</span>
								<Modal changeCookingInfo={changeCookingInfo} type='category'>
									수정
								</Modal>
							</li>
						</ul>
					</div>
					<div className='m-10 border-l-8 pl-1 border-l-indigo-600'>
						<h2>변경 내역</h2>
						{state.menu
							.find((menu) => menu.id === id)
							.history.map((hstry) => (
								<div key={hstry.date}>
									{hstry.date} {invertText[hstry.type]}{' '}
									<span style={{ textDecoration: 'line-through' }}>
										{hstry.lastVal}
										{hstry.type === 'time' ? '초' : hstry.type === 'price' ? '원' : ''}
									</span>{' '}
									➡ {hstry.updateVal}
									{hstry.type === 'time' ? '초' : hstry.type === 'price' ? '원' : ''}
								</div>
							))}
					</div>
				</div>
			)}
		</>
	);
}

const invertText = {
	price: '가격',
	time: '조리 시간',
	category: '카테고리',
};

// 2번
export async function getServerSideProps({ query }) {
	// console.log(query);
	// const test = JSON.parse(query.test);
	const id = Number(query.id);
	return { props: { id } };
}

// 3번
// export async function getStaticProps({ params }) {
// 	console.log('getStaticProps called');
// 	return {
// 		props: { id: Number(params.id) },
// 		// revalidate: 3, // 주석 풀고 npm run build && npm start => 3초 후에 getStaticProps 호출되는 것 확인해보기
// 	};
// }

// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
// 		fallback: true,
// 	};
// }
