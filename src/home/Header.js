import { memo, useContext } from 'react';
import Button from '../common/Button';
import Cooking from './Cooking';
import { CookingContext } from '../state';

export default memo(function Header() {
    const { state, dispatch } = useContext(CookingContext);

    return (
        <div className="bg-yellow-300 p-5 flex flex-col space-y-5 justify-between">
            <div className="flex justify-between">
                <h2 className="font-bold flex space-x-3">
                    <div className="text-5xl">π§βπ³</div>
                    <div className="text-2xl self-center">μ‘°λ¦¬ νν©</div>
                </h2>

                <div>
                    <div>
                        <span className="mr-2">μ΅λ λμ μ‘°λ¦¬: {state.maxCookingNum}</span>
                        <Button className="mr-2" onClick={() => dispatch({ type: 'plus-maxCooking' })}>
                            μ¦κ°
                        </Button>
                        <Button onClick={() => dispatch({ type: 'minus-maxCooking' })}>κ°μ</Button>
                    </div>
                    π° λ§€μΆ: {state.totalSales}μ
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
                    : 'μ‘°λ¦¬μ€μΈ μλ¦¬κ° μμ΅λλ€.'}
            </div>
        </div>
    );
});
