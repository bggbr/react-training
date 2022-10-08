import fs from 'fs';

export default function Home(req, res) {
	const initData = readInitFile();
	res.status(200).json(initData);
}

function readInitFile() {
	const initData = JSON.parse(fs.readFileSync('./server-data.json'));
	return initData;
}

const initialData = {
	totalSales: 62106,
	cookingList: [],
	histories: [
		{ id: 4, key: 'cookingTime', createdAt: 1662188943468, from: 22, to: 11 },
		{ id: 4, key: 'cookingTime', createdAt: 1662188970657, from: 11, to: 12 },
		{ id: 4, key: 'cookingTime', createdAt: 1662189163548, from: 12, to: 13 },
		{ id: 4, key: 'cookingTime', createdAt: 1662189166054, from: 13, to: 14 },
		{ id: 4, key: 'cookingTime', createdAt: 1662189168112, from: 14, to: 15 },
		{ id: 4, key: 'cookingTime', createdAt: 1662189170418, from: 15, to: 16 },
		{ id: 4, key: 'cookingTime', createdAt: 1662189172809, from: 16, to: 17 },
		{ id: 4, key: 'price', createdAt: 1662189344117, from: 6000, to: 1234 },
		{ id: 1, key: 'cookingTime', createdAt: 1662189404990, from: 3, to: 4 },
		{ id: 5, key: 'cookingTime', createdAt: 1662530281383, from: 5, to: 3 },
		{ id: 5, key: 'price', createdAt: 1662530286057, from: 8000, to: 9000 },
		{ id: 1, key: 'cookingTime', createdAt: 1662557526021, from: 4, to: 3 },
		{ id: 1, key: 'cookingTime', createdAt: 1664375365298, from: 3, to: 4 },
		{ id: 1, key: 'cookingTime', createdAt: 1664375370786, from: 4, to: 5 },
		{ id: 1, key: 'cookingTime', createdAt: 1664375539151, from: 5, to: 6 },
		{ id: 1, key: 'price', createdAt: 1664375544756, from: 7000, to: 8000 },
	],
	menus: [
		{ id: 3, name: '초밥', cookingTime: 5, price: 9000, category: 'japaness' },
		{ id: 1, name: '김치찌개', cookingTime: 6, price: 8000, category: 'korean' },
		{ name: '된장찌개', cookingTime: 3, price: 9000, category: 'korean', id: 5 },
		{ id: 4, name: '콩국수', cookingTime: 17, price: 1234, category: 'korean' },
	],
};
