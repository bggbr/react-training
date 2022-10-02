import { createContext } from 'react';
import produce from 'immer';

export const CookingContext = createContext(null);
export const initialState = {
	CATEGORY_LIST: [
		{ id: 0, en: 'korean', kr: '한식' },
		{ id: 1, en: 'japaness', kr: '일식' },
		{ id: 2, en: 'chinese', kr: '중식' },
	],
	category: 'korean',
	menu: [
		{
			id: 1,
			name: '김치찌개',
			cookingTime: 2,
			price: 7000,
			category: 'korean',
		},
	],
	cookingMenu: [],
	maxCookingNum: 3,
	totalSales: 0,
};

export const reducer = (_state, action) => {
	return produce(_state, (state) => {
		switch (action.type) {
			case 'set-category':
				let { nowCategory } = action;
				state.category = nowCategory;
				break;
			case 'add-menu':
				let { addedMenu } = action;
				state.menu.push(addedMenu);
				break;
			case 'delete-menu':
				let { deletedMenu } = action;
				state.menu = state.menu.filter((el) => el.id !== deletedMenu.id);
				break;
			case 'add-cooking':
				let nowCookNum = state.cookingMenu.length;
				if (nowCookNum < state.maxCookingNum) {
					state.cookingMenu.push(action.cookingMenu);
				}
				break;
			case 'delete-cooking':
				let { deleteId } = action;
				state.cookingMenu = state.cookingMenu.filter((el) => el.id !== deleteId);
				break;
			case 'set-cookingTime':
				console.log(action);
				break;
			case 'set-price':
				console.log(action);
				break;
			case 'set-category':
				console.log(action);
				break;
			case 'pay-cooking':
				let { payId, price } = action;
				state.cookingMenu = state.cookingMenu.filter((el) => el.id !== payId);
				state.totalSales += price;
				break;
			case 'plus-maxCooking':
				state.maxCookingNum = state.maxCookingNum + 1 > 3 ? 3 : state.maxCookingNum + 1;
				break;
			case 'minus-maxCooking':
				state.maxCookingNum = state.maxCookingNum - 1 < 0 ? 0 : state.maxCookingNum - 1;
				break;
			default:
				return state;
		}
	});
};
