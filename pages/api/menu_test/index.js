export default function Menu(req, res) {
    const { method } = req;
    if (method === 'GET') {
        res.status(200).json(menu);
    }
}

const menu = [
    {
        id: 1,
        name: '김치찌개',
        cookingTime: 2,
        price: 7000,
        category: 'korean',
    },
    {
        id: 2,
        name: '된장찌개',
        cookingTime: 3,
        price: 8000,
        category: 'korean',
    },
];
