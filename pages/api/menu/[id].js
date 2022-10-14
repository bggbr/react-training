import fs from 'fs';
import path from 'path';

export default function Menu(req, res) {
	const { id } = req.query;
	const queryId = parseInt(id);
	const menu = readInitData().menus.find((menu) => menu.id === queryId);

	if (req.method === 'GET') {
		res.status(200).json(menu);
	} else if (req.method === 'POST') {
	} else if (req.method === 'PUT') {
	}
}

function readInitData() {
	const initData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'server-data.json'), 'utf8'));
	return initData;
}
