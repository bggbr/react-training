import '../styles/globals.css';
import { initialState, reducer, CookingContext } from '../src/state';
import { useReducer, useMemo, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const cook = useMemo(
		() => ({
			state,
			dispatch,
		}),
		[state, dispatch],
	);

	useEffect(() => {
		async function fetchData() {
			const data = await fetch('/api', {
				method: 'GET',
			}).then((res) => res.json());
			dispatch({ type: 'init-data', data });
		}
		fetchData();
	}, []);

	return (
		<CookingContext.Provider value={cook}>
			<Component {...pageProps} />
		</CookingContext.Provider>
	);
}

export default MyApp;
