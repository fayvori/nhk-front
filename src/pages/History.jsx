import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL } from "../constants"

import { MainHeader } from "../components/MainHeader"
import { MainFooter } from "../components/MainFooter"
import { Navigate } from "react-router-dom";
import { BackButton } from "../components/utils/BackButton"
import { Container } from "../components/Container"

export const History = () => {
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(true)
    let profile = JSON.parse(localStorage.getItem("userInfo"))

    const getData = async () => {
        const res = await axios.get(API_URL+"/Profile/Rent")
        
        if (res.data != null) {
            setLoading(false)
        }

        console.log(res.data)
        setHistory(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <MainHeader />

            <Container>
            <BackButton title="Назад" />
            <div className="my-10">
                <div>
                    {profile == null ? (<Navigate to="/" replace />) :
                    (
                        <h1></h1>    
                    )}
                </div>
            </div>
            </Container>
            <MainFooter />
        </>
    )
}
