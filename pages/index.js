import React, { useState, useReducer, useMemo } from 'react';
import Category from '../src/component/Category';
import Header from '../src/component/Header';
import Menu from '../src/component/Menu';
import { initialState, reducer, CookingContext } from '../src/state';

function Home() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const cook = useMemo(
        () => ({
            state,
            dispatch,
        }),
        [state, dispatch],
    );

    const [v, setV] = useState(1);
    return (
        <div>
            {/* <button onClick={() => setV(v + 1)}>증가</button> */}
            <CookingContext.Provider value={cook}>
                <Header />
                <div className="flex">
                    <Category />
                    <Menu />
                </div>
            </CookingContext.Provider>
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
