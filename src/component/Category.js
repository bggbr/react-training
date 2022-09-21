import react, { useState, useEffect, useContext } from 'react';
import Button from './Button';
import { MenuContext } from '../state';

export default function Category({ category, setCategory }) {
    const allMenuList = useContext(MenuContext).allMenuList;
    const countMenu = (currentCategory) => allMenuList.filter((el) => el.category === currentCategory).length;

    // TODO: 버튼 코드 중복 없애기
    return (
        <div className="bg-slate-800 text-white w-52 p-5">
            <h2 className="font-bold mb-5">카테고리</h2>
            <div className="flex flex-col space-y-5">
                {CATEGORY_LIST.map((list) => (
                    <Button
                        key={list.id} //
                        className={category === list.en ? 'bg-neutral-400' : ''}
                        onClick={() => setCategory(list.en)}
                    >
                        {list.kr} ({countMenu(list.en)})
                    </Button>
                ))}
            </div>
        </div>
    );
}

const CATEGORY_LIST = [
    { id: 0, en: 'korean', kr: '한식' },
    { id: 1, en: 'japaness', kr: '일식' },
    { id: 2, en: 'chinese', kr: '중식' },
];
