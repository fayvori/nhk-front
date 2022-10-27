import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import { Input } from "./Input"

export const HeroInput = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className="mt-4">
            <Input
                style={{ marginRight: 10 }}
                type="text"
                placeholder="Поиск"
                value={search}
                onChange={handleInput}
            />

            <Button variant="contained" onClick={() => navigate(`/catalog/?q=${search}`)}>Поиск</Button>
        </div>
    )
}
