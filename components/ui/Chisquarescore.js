import React, { useRef, useState } from 'react'
import { Button } from './button'
import { Input } from './input'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



function Chisquarescore() {
    const [populationVariance, setPopulationVariance] = useState(0)
    const [sampleVariance, setSampleVariance] = useState(0)
    const [n, setN] = useState(0)
    const [precision, setPrecision] = useState(4)

    const chisquarescore = useRef(null)

    const round = (value, decimals) => {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    const Calculate = (e) => {
        e.preventDefault()
        let chi = round((n - 1) * sampleVariance / populationVariance, precision);
        const result = chisquarescore.current
        result.innerText = chi
    }

    return (
        <React.Fragment>
            <h1 className='text-2xl font-bold'>Chi-Square Score</h1>
            <div className='flex flex-row items-center overflow-hidden w-[90%] justify-center gap-2 mt-4'>

                <Input type='number' className='w-[45%] ring-transparent p-2' placeholder='Sample Variance'
                    onChange={(e) => {
                        setSampleVariance(e.target.value)
                    }}
                />
                <Input type='number' className='w-[45%] ring-transparent p-2' placeholder='n'
                    onChange={(e) => {
                        setN(e.target.value)
                    }}
                />
            </div>
            <div className='flex flex-row items-center overflow-hidden w-[90%] justify-center gap-2 mt-4'>
                <Input type='number' className='w-[92%] ring-transparent p-2' placeholder='Hypothesized Population Variance' onChange={(e) => {
                    setPopulationVariance(e.target.value)
                }} />


            </div>
            <div className='flex flex-row items-center overflow-hidden w-[90%] justify-center gap-2 mt-4'>
                <DropdownMenu>
                    <DropdownMenuTrigger className='w-[45%]'>
                        <Button variant="outline">Precision</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="right">
                        <DropdownMenuLabel>Select Precision</DropdownMenuLabel>
                        <DropdownMenuRadioGroup value={precision} onValueChange={setPrecision}>
                            <DropdownMenuRadioItem value="1">1</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="2">2</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="3">3</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="4">4</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="5">5</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="6">6</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button className='w-[45%] text-white' label='Calculate' onClick={(e) => {
                    Calculate(e)
                }}>Calculate</Button>

            </div>
            <span className='w-[100%] text-center py-2' id='result' ref={chisquarescore}>Result</span>
        </React.Fragment>
    )
}

export default Chisquarescore