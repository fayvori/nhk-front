import {Collapse} from 'react-collapse';
import { atom, useRecoilState } from "recoil"

import { useState } from "react"
import { Popover } from 'react-tiny-popover'
import { Slider, Button } from "@mui/material"
import { Input } from "../components/utils/Input"
import { filterPrice, filterTags } from "../atoms"

export const FilterCollapse = (props) => { 
    const [price, setPrice] = useRecoilState(filterPrice)
    const [tags, setTags] = useRecoilState(filterTags)

    const handlePriceChange = (event, newValue) => {
        console.log(newValue)
        setPrice(newValue)
    }
    
    const handleInputChange = (e) => {
        setTags(e.target.value)
    }

    return (
        <Collapse isOpened={props.isOpen}>
            
                <div className="flex flex-col align-center items-start">
                <h1>Подберите цену которая вам подходит</h1>
                <Slider
                    className="max-w-[280px]"
                    getAriaLabel={() => 'Price range'}
                    defaultValue={price}
                    min={0}
                    max={50_000}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                />
           
                <h1>Начните вводить теги разделяя их пробелом</h1>
                <Input
                    value={tags}
                    style={{ marginTop: 10, marginBottom: 10 }}
                    onChange={handleInputChange}
                    placeholder={"Поиск по тегам"}
                />

                
                    <Button onClick={() => props.fetchFunc()} variant="contained">Применить</Button>
            </div>
        </Collapse>
    )
}
