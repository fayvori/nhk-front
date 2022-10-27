import { useState, useEffect } from "react"
import { Button } from "@mui/material"
import { useSearchParams } from "react-router-dom"
import ReactLoading from "react-loading";
import axios from "axios"
import { API_URL } from "../constants"

import { CatalogGrid } from "../components/CatalogGrid"
import { MainHeader } from "../components/MainHeader"
import { MainFooter } from "../components/MainFooter"
import { Container } from "../components/Container"
import { BackButton } from "../components/utils/BackButton"
import { Input } from "../components/utils/Input"
import { CatalogFilter } from "../components/CatalogFilter"

export const Catalog = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    
    const [isSomethingChanged, setIsSomethingChanged] = useState(false)
    const [loading, setLoading] = useState(true)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [items, setItems] = useState([])
    const [search, setSearch] = useState(searchParams.get("q"))

    const handleChange = (event) => {
        setItems([])
        setLoading(true)
        setSearch(event.target.value)
        setSearchParams({ q: event.target.value })
    }

    const controller = new AbortController();
    
    const getData = async () => {
        console.log("im here")
        const res = await axios.post(API_URL+"/Catalog/Inventories",{
                signal: controller.signal
            }, {
            "Search": search
        })
        
        if (res.data != null) {
            setLoading(false)
        }

        setItems(res.data)
    }

    useEffect(() => {
        if (items.length == 0) {
            getData()
        }
    })

    return (
        <>
        <MainHeader />
        <Container>
            <BackButton title="Назад" />   

            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="font-medium text-[40px] my-3">Каталог</h1>
                    <Input
                        value={search}
                        onChange={handleChange}
                        style={{ marginLeft: 10 }}
                        placeholder="Поиск"
                    />    
                </div>
                    <Button onClick={() => setIsFilterOpen(prev => !prev)} variant="contained">Фильтр</Button>
                {isFilterOpen && <CatalogFilter isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} />}
            </div>

        {!loading ? (<CatalogGrid items={items} />) : (
            <div className="flex align-center justify-center">
                <ReactLoading type="spin" color="#000" className="max-w-[50px]" />
            </div>
        )}
        </Container>
        <MainFooter />
        </>
    )
}       
