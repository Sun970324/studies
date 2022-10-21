import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="space-y-4 py-10 px-4">
      <div className="flex items-start space-x-2">
        <div className="h-8 w-8 rounded-full bg-slate-400" />
        <div className="w-1/2 rounded-md border border-gray-300 p-2 text-sm text-gray-700">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="h-8 w-8 rounded-full bg-slate-400" />
        <div className="w-1/2 rounded-md border border-gray-300 p-2 text-sm text-gray-700">
          <p>I want ￦20,000</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="h-8 w-8 rounded-full bg-slate-400" />
        <div className="w-1/2 rounded-md border border-gray-300 p-2 text-sm text-gray-700">미쳤어</div>
      </div>
      <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0 ">
        <div className="flex relative items-center">
          <input type="text" className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500" />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex items-center focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
