import { useEffect, useState, useContext } from 'react';
import { CookingContext } from '../../src/state';

export default function Menu() {
    const [allMenu, setAllMenu] = useState([]);
    const { state, dispatch } = useContext(CookingContext);
    console.log('menu rendering', state);

    useEffect(() => {
        const fetchMenu = async () => {
            const res = await fetch('/api/menu', {
                method: 'GET',
            });
            const allMenuList = await res.json();
            setAllMenu(allMenuList);
        };
        fetchMenu();
    }, []);

    return (
        <>
            <h1 className="font-bold text-2xl mb-4">메뉴 상세 페이지</h1>
            <div>
                {allMenu.map((menu) => (
                    <ul key={menu.id} className="mb-4">
                        <li>카테고리 : {menu.category}</li>
                        <li>이름 : {menu.name}</li>
                        <li>조리 시간 : {menu.cookingTime}</li>
                        <li>가격 : {menu.price}</li>
                    </ul>
                ))}
            </div>
        </>
    );
}
