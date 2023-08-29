import React from 'react'

const Buttonbg = () => {
  return (
    <div className="flex h-96 items-center justify-center bg-slate-600">
    <div className="buttonbox flex gap-5 flex-row bg-white px-3 py-4 rounded-lg">

    <button class="bg-red-500 w-32 hover:bg-black  tracking-wider px-5 py-2 rounded-lg font-bold text-white ">
      Red
    </button>
    <button class="bg-yellow-500 w-32 hover:bg-black  tracking-wider px-5 py-2 rounded-lg font-bold text-white ">
      Yellow
    </button>
    <button class="bg-green-500 w-32 hover:bg-black tracking-wider px-5 py-2 rounded-lg font-bold text-white ">
      Green
    </button>
    <button class="bg-blue-500 w-32 hover:bg-black  tracking-wider px-5 py-2 rounded-lg font-bold text-white ">
      Blue
    </button>
    <button class="bg-teal-500 w-32 hover:bg-black  tracking-wider px-5 py-2 rounded-lg font-bold text-white ">
      Teal
    </button>
    </div>
  </div>

  )
}

export default Buttonbg