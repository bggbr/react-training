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
                <div className="w-[48%] h-100px mb-[2%] bg-blue-300">1</div>
                <div className="w-[48%] h-100px mb-[2%] bg-blue-300">2</div>
                <div className="w-full  h-100px mb-[2%] bg-blue-300">3</div>
                <div className="w-[48%] h-100px mb-[2%] bg-blue-300">4</div>
                <div className="w-[48%] h-100px mb-[2%] bg-blue-300">5</div>
            </div>
            <h1 className="text-black">3 X 3 grid</h1>
            <div className="flex flex-wrap justify-between">
                <div className="basis-[32%]  h-100px mb-[2%] bg-blue-900">1</div>
                <div className="basis-[32%]  h-100px mb-[2%] bg-blue-900">2</div>
                <div className="basis-[32%]  h-100px mb-[2%] bg-blue-900">3</div>
                <div className="basis-[32%]  h-100px mb-[2%] bg-blue-900">4</div>
                <div className="basis-[32%]  h-100px mb-[2%] bg-blue-900">5</div>
                <div className="basis-[32%]  h-100px mb-[2%] bg-blue-900">6</div>
                <div className="basis-[32%]  h-100px mb-[2%] bg-blue-900">7</div>
                <div className="basis-[32%]  h-100px mb-[2%] bg-blue-900">8</div>
                <div className="basis-[32%]  h-100px mb-[2%] bg-blue-900">9</div>
            </div>
            <h1 className="text-black">3 X 3 grid proportions (1:1)</h1>
            <div className="flex flex-wrap justify-between ">
                <div className="relative w-[32%]  pb-[32%] mb-[2%] bg-blue-700"></div>
                <div className="relative w-[32%]  pb-[32%] mb-[2%] bg-blue-700"></div>
                <div className="relative w-[32%]  pb-[32%] mb-[2%] bg-blue-700"></div>
                <div className="relative w-[32%]  pb-[32%] mb-[2%] bg-blue-700"></div>
                <div className="relative w-[32%]  pb-[32%] mb-[2%] bg-blue-700"></div>
                <div className="relative w-[32%]  pb-[32%] mb-[2%] bg-blue-700"></div>
                <div className="relative w-[32%]  pb-[32%] mb-[2%] bg-blue-700"></div>
                <div className="relative w-[32%]  pb-[32%] mb-[2%] bg-blue-700"></div>
                <div className="relative w-[32%]  pb-[32%] mb-[2%] bg-blue-700"></div>
            </div>
            <h1 className="text-black">3 X 3 grid, constrained proportions (16:9)</h1>
            <div className="flex flex-wrap justify-between">
                <div className="w-[32%] pb-[18%] mb-[2%] bg-blue-200"></div>
                <div className="w-[32%] pb-[18%] mb-[2%] bg-blue-200"></div>
                <div className="w-[32%] pb-[18%] mb-[2%] bg-blue-200"></div>
                <div className="w-[32%] pb-[18%] mb-[2%] bg-blue-200"></div>
                <div className="w-[32%] pb-[18%] mb-[2%] bg-blue-200"></div>
                <div className="w-[32%] pb-[18%] mb-[2%] bg-blue-200"></div>
                <div className="w-[32%] pb-[18%] mb-[2%] bg-blue-200"></div>
                <div className="w-[32%] pb-[18%] mb-[2%] bg-blue-200"></div>
                <div className="w-[32%] pb-[18%] mb-[2%] bg-blue-200"></div>
            </div>
            <h1 className="text-black">Graph: vertical bars</h1>
            <div className="flex h-80 justify-between items-end mb-8">
                <div className="w-[14%] h-[40%] bg-blue-400"></div>
                <div className="w-[14%] h-[50%] bg-blue-400"></div>
                <div className="w-[14%] h-[60%] bg-blue-400"></div>
                <div className="w-[14%] h-[20%] bg-blue-400"></div>
                <div className="w-[14%] h-[30%] bg-blue-400"></div>
            </div>
            <h1 className="text-black">Graph: horizontal bars</h1>
            <div className="flex flex-col h-80 justify-between">
                <div className="h-[14%] w-[40%] bg-cyan-600"></div>
                <div className="h-[14%] w-[50%] bg-cyan-600"></div>
                <div className="h-[14%] w-[60%] bg-cyan-600"></div>
                <div className="h-[14%] w-[20%] bg-cyan-600"></div>
                <div className="h-[14%] w-[30%] bg-cyan-600"></div>
            </div>
            <h1 className="text-black">Vertical stack (centered)</h1>
            <div className="flex flex-col items-center">
                <div className="w-80 mb-[10px] h-[40px] bg-cyan-800"></div>
                <div className="w-80 mb-[10px] h-[40px] bg-cyan-800"></div>
                <div className="w-80 mb-[10px] h-[40px] bg-cyan-800"></div>
                <div className="w-80 mb-[10px] h-[40px] bg-cyan-800"></div>
                <div className="w-80 mb-[10px] h-[40px] bg-cyan-800"></div>
            </div>
            <h1 className="text-black">Masonry (or mosaic)</h1>
            <div className="flex flex-col items-center">
                <div className="w-80 mb-[10px] h-[40px] bg-cyan-800"></div>
                <div className="w-80 mb-[10px] h-[40px] bg-cyan-800"></div>
                <div className="w-80 mb-[10px] h-[40px] bg-cyan-800"></div>
                <div className="w-80 mb-[10px] h-[40px] bg-cyan-800"></div>
                <div className="w-80 mb-[10px] h-[40px] bg-cyan-800"></div>
            </div>
        </div>
    );
}
