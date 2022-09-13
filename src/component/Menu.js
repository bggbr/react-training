import { useContext, useState, useEffect } from 'react';
import Button from './Button';
import { MenuContext } from '../context/MenuContext';

export default function Menu({ addMenu, removeMenu, category, setCookingList }) {
    const [name, setName] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [price, setPrice] = useState('');
    const allMenuList = useContext(MenuContext);

    const menuList = allMenuList.filter((el) => el.category === category);

    /**
     * 현재 카테고리를 상태값으로 관리
     * 현재 카테고리에 해당하는 메뉴만 보여주기
     *
     * 조리 시작 기능 구현하기
     */

    function addOneMenu() {
        let id = Math.max(...allMenuList.map((item) => item.id)) + 1;

        if (!(name.length && cookingTime.length && price.length)) {
            alert('모든 값을 입력해주세요');
            return;
        }

        let menu = {
            id,
            name,
            cookingTime: parseInt(cookingTime),
            price: parseInt(price),
            category,
        };
        addMenu(menu);
        setName('');
        setCookingTime('');
        setPrice('');
    }

    const removeOneMenu = (menu, e) => {
        e.preventDefault();
        removeMenu(menu);
    };

    const addCooking = ({ id, name, cookingTime, price }, e) => {
        e.preventDefault();
        let cooking = {
            menuId: id,
            id: Date.now(),
            remainingTime: cookingTime,
        };
        setCookingList(cooking);
    };

    return (
        <div className="bg-slate-400 p-5 w-full">
            <h2 className="font-bold flex space-x-3 mb-4">
                <div className="text-5xl">🥘</div>
                <div className="text-2xl self-center">메뉴</div>
            </h2>
            <div className="space-y-2">
                {menuList.map((menu) => (
                    <div key={menu.id}>
                        <div>{menu.name}</div>
                        <div>조리시간: {menu.cookingTime}</div>
                        <div>가격: {menu.price}</div>
                        <Button className="mr-2 my-2.5" onClick={(e) => addCooking(menu, e)}>
                            조리 시작
                        </Button>
                        <Button onClick={(e) => removeOneMenu(menu, e)}>메뉴 삭제</Button>
                    </div>
                ))}
            </div>

            <div className="space-x-2">
                <input type="text" placeholder="요리 이름" value={name} onChange={(e) => setName(e.target.value)} />

                <input type="number" placeholder="조리 시간" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />

                <input type="number" placeholder="가격" value={price} onChange={(e) => setPrice(e.target.value)} />

                <Button onClick={addOneMenu}>메뉴 추가</Button>
            </div>
        </div>
    );
}
