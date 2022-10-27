import { useState } from "react"
import { Popover } from 'react-tiny-popover'
import { Slider } from "@mui/material"
import { Input } from "../components/utils/Input"

export const CatalogFilter = (props) => {
    const [price, setPrice] = useState([0, 1000000])
    const [tags, setTags] = useState("")

    const handlePriceChange = (event, newValue) => {
        console.log(newValue)
        setPrice(newValue)
    }
    
    const handleInputChange = (e) => {
        setTags(e.target.value)
    }

    return (
        <Popover
            isOpen={props.isOpen}
            positions={['bottom', 'left']} // preferred positions by priority
            content={({ position, nudgedLeft, nudgedTop }) => ( // you can also provide a render function that injects some useful stuff!
                <div className="max-w-[340px] bg-[#E6E6E6]">
                <h1>Подберите цену которая вам подходит</h1>
                <Slider
                    className="max-w-[280px]"
                    getAriaLabel={() => 'Price range'}
                    value={price}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                />
           
                <h1>Начните вводить теги разделяя их пробелом</h1>
                <Input
                    value={tags}
                    style={{ marginTop: 10 }}
                    onChange={handleInputChange}
                    placeholder={"Поиск по тегам"}
                />
                </div>
            )}
        >
            <>
            </>
        </Popover>
    )
}
