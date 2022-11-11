import { useState, useEffect } from "react"
import { Button } from "@mui/material"
import { useSearchParams } from "react-router-dom"
import ReactLoading from "react-loading";
import axios from "axios"
import { API_URL } from "../constants"
import { useRecoilState } from "recoil"

import { CatalogGrid } from "../components/CatalogGrid"
import { MainHeader } from "../components/MainHeader"
import { MainFooter } from "../components/MainFooter"
import { Container } from "../components/Container"
import { BackButton } from "../components/utils/BackButton"
import { Input } from "../components/utils/Input"
import { CatalogFilter } from "../components/CatalogFilter"
import { FilterCollapse } from "../components/Collapse"
import { filterPrice, filterTags } from "../atoms"

export const Catalog = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    let profile = JSON.parse(localStorage.getItem('userInfo'))
    let anonimCity = localStorage.getItem('anonimCity')

    const [isSomethingChanged, setIsSomethingChanged] = useState(false)
    const [loading, setLoading] = useState(true)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [items, setItems] = useState([])
    const [search, setSearch] = useState(searchParams.get("q") ?? "")

    const [price, setPrice] = useRecoilState(filterPrice);
    const [tags, setTags] = useRecoilState(filterTags);

    const controller = new AbortController();

    const handleChange = (event) => {
        setIsSomethingChanged(true)
        setItems([])
        setLoading(true)
        setSearch(event.target.value)
        setSearchParams({ q: event.target.value })   
    }
   
    function getCity() {
        if (profile == null && anonimCity == null) {
            return "москва"
        } else if (anonimCity != null) {
            return anonimCity.toLowerCase()
        } else {
            return profile?.city.toLowerCase()
        }
    }

    console.log(getCity())

    const getData = async () => {
        if (profile != null) {
            localStorage.removeItem('anonimCity')
        }

        const res = await axios.post(API_URL+"/Catalog/Inventories",{
            "Search": search,
            "Tags": tags.split(" "),
            "City": getCity(),
            "MinPrice": price[0],
            "MaxPrice": price[1]
        }, { signal: controller.signal })
        
        if (res.data != null) {
            setLoading(false)
        }

        setItems(res.data)
    }

    console.log(tags)

    useEffect(() => {
            getData()  
    }, [])

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
                        onBlur={() => getData()}
                        style={{ marginLeft: 10 }}
                        placeholder="Поиск"
                    />    
                </div>
                    <Button onClick={() => setIsFilterOpen(prev => !prev)} variant="contained">Фильтр</Button>
            </div>

                    <FilterCollapse isOpen={isFilterOpen} fetchFunc={getData} />
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
