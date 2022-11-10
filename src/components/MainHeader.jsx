import { useState } from "react"
import { Button } from "@mui/material"
import { Input } from "./utils/Input"
import { LoginModal } from "./modals/LoginModal"
import { RegisterModal } from "./modals/RegisterModal"
import { Container } from "./Container"
import { Link } from "react-router-dom";
import { SelectCity } from "./utils/SelectCity"
import { RENT_MEDIA_URL } from "../constants"

import logo from '../assets/logo.svg'
import marker_icon from '../assets/map_marker.svg'

export const MainHeader = () => {
    const [isLoginModalOpened, setIsLoginModalOpened] = useState(false)
    const [isRegisterModalOpened, setIsRegisterModalOpened] = useState(false)

    const logOut = () => {
        localStorage.removeItem('userInfo')
        window.location.reload();
    }

    let userInfo = JSON.parse(localStorage.getItem('userInfo'))

    return (
        <>
        {isRegisterModalOpened ? <RegisterModal open={isRegisterModalOpened} handleClose={() => setIsRegisterModalOpened(false)} /> : <></>}
        {isLoginModalOpened ? <LoginModal open={isLoginModalOpened} handleClose={() => setIsLoginModalOpened(false)} /> : <></>}
        <Container>
        <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
                <Button variant="contained"><Link to="/catalog">Каталог</Link></Button>
                <div className="ml-3">
                    <Link to="/"><img src={logo} style={{ maxWidth: 70, maxHeight: 70 }} /></Link>
                </div>
            </div>
            
            <div className="flex items-center">
                <SelectCity />
                {userInfo == null ? (
                    <>
                        <Button onClick={() => setIsRegisterModalOpened(true)} style={{ marginRight: 10, marginLeft: 10 }} variant="outlined">Регистрация</Button>
                        <Button onClick={() => setIsLoginModalOpened(true)} variant="outlined">Вход</Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => logOut()} style={{ marginLeft: 10 }} variant="outlined">Выход</Button>
                        <Link to="/profile">
                            <div className="w-[60px] h-[60px] ml-2">
                                <img className="rounded-full" src={`${RENT_MEDIA_URL}${userInfo.avatar}`} />
                            </div>
                        </Link>
                    </>
                )} 
            </div>
        </div>
        </Container>
        </>
    )
}
