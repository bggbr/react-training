export default function Flex() {
  return (
    <div className="space-y-4">
      <h1>Stretch all, fixed spacing</h1>
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
    </div>
  );
}
