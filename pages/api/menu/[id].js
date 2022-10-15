import fs from 'fs';
import path from 'path';

export default function Menu(req, res) {
	if (req.method === 'GET') {
		const { id } = req.query;
		const queryId = parseInt(id);
		const menu = readInitData().menus.find((menu) => menu.id === queryId);
		res.status(200).json(menu);
	} else if (req.method === 'POST') {
	} else if (req.method === 'PUT') {
		const { id, time, price, category, type } = JSON.parse(req.body);
		const { menus } = readInitData();
		const updatedMenu = menus.find((menu) => menu.id === id);
		const leftMenu = menus.filter((menu) => menu.id !== id);
		switch (type) {
			case 'time':
				updatedMenu.cookingTime = parseInt(time);
				break;
			case 'price':
				updatedMenu.price = parseInt(price);
				break;
			case 'category':
				updatedMenu.category = category;
				break;
		}

		const newMenu = [...leftMenu, updatedMenu];
		writeData(JSON.stringify({ menus: newMenu }));
		res.status(200).json(updatedMenu);
	}
}

function readInitData() {
	const initData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'server-data.json'), 'utf8'));
	return initData;
}

function writeData(data) {
	fs.writeFileSync(path.join(process.cwd(), 'server-data.json'), data);
}
