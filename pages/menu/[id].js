import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// export default function Menu() {
//     const router = useRouter();
//     const id = Number(router.query.id);
//     console.log('test', id);
//     const [allMenu, setAllMenu] = useState([]);

//     useEffect(() => {
//         const fetchMenu = async () => {
//             const res = await fetch('/api/menu', {
//                 method: 'GET',
//             });
//             const allMenuList = await res.json();
//             setAllMenu(allMenuList);
//         };
//         fetchMenu();
//     }, []);
//     return (
//         <>
//             <h1 className="font-bold text-2xl mb-4">메뉴 상세 페이지</h1>
//             <div>
//                 {allMenu.map((menu) => (
//                     <ul key={menu.id} className="mb-4">
//                         <li>카테고리 : {menu.category}</li>
//                         <li>이름 : {menu.name}</li>
//                         <li>조리 시간 : {menu.cookingTime}</li>
//                         <li>가격 : {menu.price}</li>
//                     </ul>
//                 ))}
//             </div>
//         </>
//     );
// }

// 2번
// export default function MenuDetailPage({ id }) {
//     console.log('test', id);
//     return (
//         <>
//             <h1 className="font-bold text-2xl mb-4">메뉴 상세 페이지</h1>
//             <div>{id}</div>
//         </>
//     );
// }

// export async function getServerSideProps({ query }) {
//     const id = Number(query.id);
//     return { props: { id } };
// }

import React, { useRef, useContext } from 'react';
import { CookingContext } from '../../src/state';

// 3번
export default function MenuDetailPage({ id }) {
    const { state, dispatch } = useContext(CookingContext);
    console.log('test', id);
    console.log(state);
    return (
        <>
            <h1 className="font-bold text-2xl mb-4">메뉴 상세 페이지</h1>
            <div>{id}</div>
        </>
    );
}

export async function getStaticProps({ params }) {
    console.log('getStaticProps called');
    return {
        props: { id: Number(params.id) },
        // revalidate: 3, // 주석 풀고 npm run build && npm start => 3초 후에 getStaticProps 호출되는 것 확인해보기
    };
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: true,
    };
}
