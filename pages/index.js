import Chisquarescore from '@/components/ui/Chisquarescore'
import Tscore from '@/components/ui/Tscore'
import Zscore from '@/components/ui/Zscore'
import React from 'react'

function Home() {
  return (
    <div className=' flex flex-row flex-wrap items-center justify-center h-[100vh] overflow-hidden p-2 gap-2 bg-slate-600'>
      <div className=' rounded-lg w-[30%] h-[250px] flex flex-col items-center justify-center bg-slate-300 border-2 border-black '>
        <Tscore />
      </div>

      <div className=' rounded-lg w-[30%] h-[250px] flex flex-col items-center justify-center bg-slate-300 border-2 border-black'>
        <Zscore />
      </div>

      <div className=' rounded-lg w-[30%] h-[250px] flex flex-col items-center justify-center bg-slate-300 border-2 border-black'>
        <Chisquarescore />
      </div>

      <div className=' rounded-lg w-[30%] h-[250px] flex flex-col items-center justify-center bg-slate-300 border-2 border-black '>
        <h1>Home</h1>
      </div>

      <div className=' rounded-lg w-[30%] h-[250px] flex flex-col items-center justify-center bg-slate-300 border-2 border-black'>
        <h1>Home</h1>
      </div>

      <div className=' rounded-lg w-[30%] h-[250px] flex flex-col items-center justify-center bg-slate-300 border-2 border-black'>
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home