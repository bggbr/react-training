import '../styles/globals.css';
import { initialState, reducer, CookingContext } from '../src/state';
import { useReducer, useMemo } from 'react';

function MyApp({ Component, pageProps }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const cook = useMemo(
        () => ({
            state,
            dispatch,
        }),
        [state, dispatch],
    );

    return (
        <CookingContext.Provider value={cook}>
            <Component {...pageProps} />
        </CookingContext.Provider>
    );
}

export default MyApp;
