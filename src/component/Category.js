import Button from './Button';

export default function Category() {
    return (
        <div className="bg-slate-800 text-white w-52 p-5">
            <h2 className="font-bold mb-5">카테고리</h2>
            <Button>한식</Button>
            <Button>일식</Button>
            <Button>중식</Button>
        </div>
    );
}
