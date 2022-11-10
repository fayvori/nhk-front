import { MainHeader } from "../components/MainHeader"
import { MainFooter } from "../components/MainFooter"
import { Link, Navigate } from "react-router-dom";
import { BackButton } from "../components/utils/BackButton"
import { Container } from "../components/Container"
import { Button } from "@mui/material"

export const Profile = () => {
    let profile = JSON.parse(localStorage.getItem("userInfo"))

    return (
        <>
            <MainHeader />

            <Container>
            <BackButton title="Назад" />
            <div className="my-10">
                <div>
                    {profile == null ? (<Navigate to="/" replace />) :
                    (<section className="flex flex-col md:flex-row{...bindTrigger(popupState)} items-center justify-center">
                        <div><img className="max-w-[250px] rounded-full min-h-[250px]" src={"https://media.rentinhand.ru/prod/public/preloader.png"} /></div>

                        <div className="ml-5">
                            <p className="mb-3">ФИО: <span className="text-gray-500">{profile.fio}</span></p>
                            <p className="mb-3">Номер телефона: <span className="text-gray-500">{profile.telephone}</span></p>
                            <p className="mb-3">Электронная почта: <span className="text-gray-500">{profile.email}</span></p>
                            <p>Город: <span className="capitalize text-gray-500">{profile.city}</span></p>
                        </div>
                        <Button variant="contained"><Link to="/history">История аренды</Link></Button>
                    </section>
                    )}
                </div>
            </div>
            </Container>
            <MainFooter />
        </>
    )
}
