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

function Tscore() {

    const [xbar, setXbar] = useState(0)
    const [mu, setMu] = useState(0)
    const [s, setS] = useState(0)
    const [n, setN] = useState(0)
    const [precision, setPrecision] = useState(4)

    const tscoreResult = useRef(null)
    const round = (value, decimals) => {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    const Calculate = (e) => {
        e.preventDefault()
        let t = round((xbar - mu) / (s / Math.sqrt(n)), precision);
        const result = tscoreResult.current
        result.innerText = t
    }

    return (
        <React.Fragment>
            <h1 className='text-2xl font-bold'>T-Score</h1>
            <div className='flex flex-row items-center overflow-hidden w-[90%] justify-center gap-2 mt-4'>
                <Input type='number' className='w-[45%] ring-transparent p-2' placeholder='X-bar (Sample Mean)' onChange={(e) => {
                    setXbar(e.target.value)
                }} />
                <Input type='number' className='w-[45%] ring-transparent p-2' placeholder='mu (Hypothesized Mean)'
                    onChange={(e) => {
                        setMu(e.target.value)
                    }}
                />
            </div>
            <div className='flex flex-row items-center overflow-hidden w-[90%] justify-center gap-2 mt-4'>
                <Input type='number' className='w-[45%] ring-transparent p-2' placeholder='Standard Deviation'
                    onChange={(e) => {
                        setS(e.target.value)
                    }}
                />
                <Input type='number' className='w-[45%] ring-transparent p-2' placeholder='n'
                    onChange={(e) => {
                        setN(e.target.value)
                    }}
                />
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
            <span className='w-[100%] text-center py-2' id='result' ref={tscoreResult}>Result</span>
        </React.Fragment>
    )
}

export default Tscore