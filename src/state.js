import { createContext } from 'react';
import produce from 'immer';
import { dateFormat } from '../util/utils.js';

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
            history: [],
        },
        {
            id: 2,
            name: '참치찌개',
            cookingTime: 2,
            price: 7000,
            category: 'korean',
            history: [],
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
            case 'change-cookingTime': {
                let { id, time } = action;
                let idx = state.menu.findIndex((menu) => menu.id === id);

                // 변경 내역을 위해 history에 push
                state.menu[idx].history.unshift({ date: dateFormat(new Date()), type: 'time', lastVal: state.menu[idx].cookingTime, updateVal: parseInt(time) });

                state.menu[idx].cookingTime = parseInt(time);
                break;
            }
            case 'change-price': {
                let { id, price } = action;
                let idx = state.menu.findIndex((menu) => menu.id === id);

                // 변경 내역을 위해 history에 push
                state.menu[idx].history.unshift({ date: dateFormat(new Date()), type: 'price', lastVal: state.menu[idx].price, updateVal: parseInt(price) });

                state.menu[idx].price = parseInt(price);
                break;
            }
            case 'change-category': {
                let { id, category } = action;
                let idx = state.menu.findIndex((menu) => menu.id === id);

                // 변경 내역을 위해 history에 push
                state.menu[idx].history.unshift({ date: dateFormat(new Date()), type: 'category', lastVal: state.menu[idx].category, updateVal: category });

                state.menu[idx].category = category;
                break;
            }
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
