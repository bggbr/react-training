import { useContext } from 'react';
import Button from './Button';
import { CookingContext } from '../state';

export default function Category() {
    const { state, dispatch } = useContext(CookingContext);
    const countMenu = (currentCategory) => state.menu.filter((el) => el.category === currentCategory).length;

    // TODO: 버튼 코드 중복 없애기
    return (
        <div className="bg-slate-800 text-white w-52 p-5">
            <h2 className="font-bold mb-5">카테고리</h2>
            <div className="flex flex-col space-y-5">
                {state.CATEGORY_LIST.map((list) => (
                    <Button
                        key={list.id} //
                        className={state.category === list.en ? 'bg-neutral-400' : ''}
                        onClick={() => dispatch({ type: 'set-category', nowCategory: list.en })}
                    >
                        {list.kr} ({countMenu(list.en)})
                    </Button>
                ))}
            </div>
        </div>
    );
}
