import { memo, useEffect, useState, useContext, useReducer } from 'react';
import { MenuContext } from '../state';
import Button from './Button';
import Cooking from './Cooking';
import { CookingContext } from '../state';

export default function Header() {
    const { state, dispatch } = useContext(CookingContext);

    return (
        <div className="bg-yellow-300 p-5 flex flex-col space-y-5 justify-between">
            <div className="flex justify-between">
                <h2 className="font-bold flex space-x-3">
                    <div className="text-5xl">🧑‍🍳</div>
                    <div className="text-2xl self-center">조리 현황</div>
                </h2>

                <div>
                    <div>
                        <span className="mr-2">최대 동시 조리: {state.maxCookingNum}</span>
                        <Button className="mr-2" onClick={() => dispatch({ type: 'plus-maxCooking' })}>
                            증가
                        </Button>
                        <Button onClick={() => dispatch({ type: 'minus-maxCooking' })}>감소</Button>
                    </div>
                    💰 매출: {state.totalSales}원
                </div>
            </div>
            <div>
                {state.cookingMenu.length > 0
                    ? state.cookingMenu.map((cook) => {
                          return (
                              <div key={cook.id} className="mb-4">
                                  <Cooking cook={cook}></Cooking>
                              </div>
                          );
                      })
                    : '조리중인 요리가 없습니다.'}
            </div>
        </div>
    );
}
