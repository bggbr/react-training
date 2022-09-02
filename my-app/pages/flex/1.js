export default function Flex_First() {
    return (
        <div className="space-y-4 text-white text-center">
            <h1 className="text-black">Stretch all, fixed spacing</h1>
            <div className="flex space-x-2">
                <div className="h-full grow bg-blue-700">1</div>
                <div className="h-full grow bg-blue-700">2</div>
                <div className="h-full grow bg-blue-700">3</div>
                <div className="h-full grow bg-blue-700">4</div>
                <div className="h-full grow bg-blue-700">5</div>
            </div>
            <div className="flex space-x-2">
                <div className="h-full grow bg-blue-700">1</div>
                <div className="h-full grow bg-blue-700">2</div>
                <div className="h-full grow-2 bg-blue-700">3</div>
                <div className="h-full grow bg-blue-700">4</div>
                <div className="h-full grow bg-blue-700">5</div>
            </div>
            <div className="flex space-x-2">
                <div className="h-full grow bg-blue-700">1</div>
                <div className="h-full grow bg-blue-700">2</div>
                <div className="h-full grow-[3] bg-blue-700">3</div>
                <div className="h-full grow bg-blue-700">4</div>
                <div className="h-full grow bg-blue-700">5</div>
            </div>
            <h1 className="text-black">Alternating grid</h1>
            <div className="flex flex-wrap justify-between">
                <div className="w-[48%] h-100px mb-2 bg-blue-300">1</div>
                <div className="w-[48%] h-100px mb-2 bg-blue-300">2</div>
                <div className="w-full  h-100px mb-2 bg-blue-300">3</div>
                <div className="w-[48%] h-100px mb-2 bg-blue-300">4</div>
                <div className="w-[48%] h-100px mb-2 bg-blue-300">5</div>
            </div>
            <h1 className="text-black">3 X 3 grid</h1>
            <div className="flex flex-wrap justify-between">
                <div className="basis-[32%]  h-100px mb-2 bg-blue-900">1</div>
                <div className="basis-[32%]  h-100px mb-2 bg-blue-900">2</div>
                <div className="basis-[32%]  h-100px mb-2 bg-blue-900">3</div>
                <div className="basis-[32%]  h-100px mb-2 bg-blue-900">4</div>
                <div className="basis-[32%]  h-100px mb-2 bg-blue-900">5</div>
                <div className="basis-[32%]  h-100px mb-2 bg-blue-900">6</div>
                <div className="basis-[32%]  h-100px mb-2 bg-blue-900">7</div>
                <div className="basis-[32%]  h-100px mb-2 bg-blue-900">8</div>
                <div className="basis-[32%]  h-100px mb-2 bg-blue-900">9</div>
            </div>
        </div>
    );
}
