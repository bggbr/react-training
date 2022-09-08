import { useState } from 'react';
import Button from './Button';
export default function Menu() {
    const [menuList, setMenuList] = useState([
        {
            id: 1,
            name: '김치찌개',
            cookingTime: 3,
            price: 7000,
            category: 'korean',
        },
        {
            id: 2,
            name: '된장찌개',
            cookingTime: 10,
            price: 8000,
            category: 'korean',
        },
        {
            id: 3,
            name: '초밥',
            cookingTime: 5,
            price: 9000,
            category: 'japaness',
        },
    ]);
    const [name, setName] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [price, setPrice] = useState('');

    /**
     * 현재 카테고리를 상태값으로 관리
     * 현재 카테고리에 해당하는 메뉴만 보여주기
     *
     * 조리 시작 기능 구현하기
     */
    function addMenu() {
        let id = Math.max(...menuList.map((item) => item.id)) + 1;

        if (!(name.length && cookingTime.length && price.length)) {
            alert('모든 값을 입력해주세요');
            return;
        }

        let menu = {
            id,
            name,
            cookingTime: parseInt(cookingTime),
            price: parseInt(price),
            category: '',
        };
        console.log(menu);
        setMenuList([...menuList, menu]);
        // console.log(menuList);
    }

    return (
        <div className="bg-slate-200 p-5 w-full">
            <h2 className="font-bold flex space-x-3">
                <div className="text-5xl">🥘</div>
                <div className="text-2xl self-center">메뉴</div>
            </h2>

            {menuList.map((menu) => (
                <div key={menu.id}>
                    <div>{menu.name}</div>
                    <div>조리시간: {menu.cookingTime}</div>
                    <div>가격: {menu.price}</div>
                    <Button>조리 시작</Button>
                    <Button>메뉴 삭제</Button>
                </div>
            ))}

            <div className="space-x-2">
                <input type="text" placeholder="요리 이름" value={name} onChange={(e) => setName(e.target.value)} />

                <input type="number" placeholder="조리 시간" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />

                <input type="number" placeholder="가격" value={price} onChange={(e) => setPrice(e.target.value)} />

                <Button onClick={addMenu}>메뉴 추가</Button>
            </div>
        </div>
    );
}
