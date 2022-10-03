import React, { useState, useContext } from 'react';
import Button from './Button.js';
import { CookingContext } from '../../src/state';

export default function Modal({ type, changeCookingInfo }) {
	const [showModal, setShowModal] = useState(false);
	const { state, dispatch } = useContext(CookingContext);
	const [value, setValue] = useState(0);

	const save = (type) => {
		setShowModal(false);
		changeCookingInfo(type, value);
	};

	return (
		<>
			<Button onClick={() => setShowModal(true)}>수정</Button>
			{showModal ? (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								{/*body*/}
								<div className='relative'>
									<p
										className='m-4 p-10 text-slate-500 text-lg leading-relaxed'
										// onClick={dispatch({ type: 'set-cookingTime', time: time })}
									>
										새로운 값을 입력하세요 <br />
										<input
											className='mt-2 w-[25rem] border border-slate-300'
											type='text'
											onChange={(e) => setValue(e.target.value)}
										/>
									</p>
								</div>
								{/*footer*/}
								<div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
									<button
										className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={() => save(type)}
									>
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</>
	);
}
