import { memo, useEffect, useState, useContext, useReducer } from 'react';
import { MenuContext } from '../context/MenuContext';
import Button from './Button';
import Cooking from './Cooking';

const reducer = (state, action) => {};

export default function Header({ cookingMenu, setCookingMenu }) {
    const [time, setTime] = useState([
        { menuId: 1, id: 1662992018406, remainingTime: 3 },
        { menuId: 2, id: 1662992018111, remainingTime: 10 },
        { menuId: 3, id: 1662992022310, remainingTime: 5 },
    ]);
    const menu = useContext(MenuContext);
    const [test, dispatch] = useReducer(reducer, cookingMenu);

    function decreaseTime() {
        let timerId = setInterval(() => {
            let resultTime = time.map((v) => {
                v.remainingTime === 0 ? (v.remainingTime = 0) : (v.remainingTime -= 1);
                return v;
            });
            setTime(resultTime);
            let check = resultTime.find((el) => el.remainingTime);
            check ? '' : clearInterval(timerId);
        }, 1000);
    }

    useEffect(() => {
        decreaseTime();
    }, []);

    return (
        <div className="bg-yellow-300 p-5 flex flex-col space-y-5 justify-between">
            {/* <div>
                ----time----
                {time.map((cook) => {
                    return (
                        <div key={cook.menuId} className="mb-4">
                            <div>{cook.remainingTime}</div>
                        </div>
                    );
                })}
                ------------
            </div> */}
            <div className="flex justify-between">
                <h2 className="font-bold flex space-x-3">
                    <div className="text-5xl">🧑‍🍳</div>
                    <div className="text-2xl self-center">조리 현황</div>
                </h2>

                <div>
                    <div>
                        <span className="mr-2">최대 동시 조리: 0</span>
                        <Button className="mr-2">증가</Button>
                        <Button>감소</Button>
                    </div>
                    💰 매출: 0원
                </div>
            </div>
            <div>
                {cookingMenu.map((cook) => {
                    return (
                        <div key={cook.id} className="mb-4">
                            <Cooking menuId={cook.menuId} name={menu.find((el) => el.id === cook.menuId).name} remainingTime={cook.remainingTime}></Cooking>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
