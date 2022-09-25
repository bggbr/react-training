import React, { useState, useEffect, createContext, useReducer, useMemo } from 'react';
import Category from '../src/component/Category';
import Header from '../src/component/Header';
import Menu from '../src/component/Menu';
import { MenuContext, CookingContext } from '../src/state';
import produce from 'immer';

const initialState = {
    cookingMenu: [],
    maxCookingNum: 3,
    totalSales: 0,
};

const reducer = (_state, action) => {
    return produce(_state, (state) => {
        switch (action.type) {
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

    const cook = useMemo(
        () => ({
            state,
            dispatch,
        }),
        [state, dispatch],
    );

    const addMenu = (menu) => {
        setAllMenuList([...allMenuList, menu]);
    };

    const removeMenu = (menu) => {
        let copyAllMenu = allMenuList.filter((el) => el.id !== menu.id);
        setAllMenuList(copyAllMenu);
    };

    const [v, setV] = useState(1);
    return (
        <div>
            <button onClick={() => setV(v + 1)}>증가</button>
            <MenuContext.Provider value={{ allMenuList, setAllMenuList }}>
                <CookingContext.Provider value={cook}>
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
