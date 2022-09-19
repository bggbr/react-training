import React, { useState, useEffect, createContext, useReducer } from 'react';
import Category from '../src/component/Category';
import Header from '../src/component/Header';
import Menu from '../src/component/Menu';
import { MenuContext, CookingContext } from '../src/state';

const initialState = {
    cookingMenu: [],
    maxCookingNum: 3,
    totalSales: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'add-cooking':
            let nowCookNum = state.cookingMenu.length;
            if (nowCookNum < state.maxCookingNum) {
                return { ...state, cookingMenu: [...state.cookingMenu, action.cookingMenu] };
            }
        case 'delete-cooking':
            let { deleteId } = action;
            let leftCookingMenu = state.cookingMenu.filter((el) => el.id !== deleteId);
            return { ...state, cookingMenu: [...leftCookingMenu] };
        case 'pay-cooking':
            let { payId, price } = action;
            let remainCookingMenu = state.cookingMenu.filter((el) => el.id !== payId);
            return { ...state, totalSales: state.totalSales + price, cookingMenu: [...remainCookingMenu] };
        case 'plus-maxCooking':
            return { ...state, maxCookingNum: state.maxCookingNum + 1 > 3 ? 3 : state.maxCookingNum + 1 };
        case 'minus-maxCooking':
            return { ...state, maxCookingNum: state.maxCookingNum - 1 < 0 ? 0 : state.maxCookingNum - 1 };
        default:
            return new Error();
    }
};
function Home() {
    const [category, setCategory] = useState('korean');
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

    const [state, dispatch] = useReducer(reducer, initialState);

    const addMenu = (menu) => {
        setAllMenuList([...allMenuList, menu]);
    };

    const removeMenu = (menu) => {
        let copyAllMenu = allMenuList.filter((el) => el.id !== menu.id);
        setAllMenuList(copyAllMenu);
    };

    return (
        <div>
            {/* {JSON.stringify(state)} */}
            <MenuContext.Provider value={{ allMenuList, setAllMenuList }}>
                <CookingContext.Provider value={{ state, dispatch }}>
                    <Header />
                    <div className="flex">
                        <Category category={category} setCategory={setCategory} />
                        <Menu addMenu={addMenu} removeMenu={removeMenu} category={category} />
                    </div>
                </CookingContext.Provider>
            </MenuContext.Provider>
        </div>
    );
}

export default Home;

/**
 * 메뉴 추가, 삭제
 * 조리 시작, 멈춤, 삭제, 계산하기
 * 최대 동시 조리 표시 및 증가, 감소 (최대값 3, 최소값 0)
 * 매출 표시
 */
