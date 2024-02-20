import Chisquarescore from '@/components/ui/Chisquarescore'
import Tscore from '@/components/ui/Tscore'
import Zscore from '@/components/ui/Zscore'
import React from 'react'

function Home() {
  return (
    <div className=' flex flex-row flex-wrap items-center justify-center h-[100%] min-h-[100vh] p-2 gap-2 bg-slate-600'>
      <div className=' rounded-lg w-[30%] h-[250px] flex flex-col flex-grow basis-48 items-center justify-center bg-slate-300 border-2 border-black '>
        <Tscore />
      </div>

      <div className=' rounded-lg w-[30%] h-[250px] flex flex-col flex-grow basis-48 items-center justify-center bg-slate-300 border-2 border-black'>
        <Zscore />
      </div>

      <div className=' rounded-lg w-[30%] h-[250px] flex flex-col flex-grow basis-48 items-center justify-center bg-slate-300 border-2 border-black'>
        <Chisquarescore />
      </div>

    </div>
  )
}

export default Home