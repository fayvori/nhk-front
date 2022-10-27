import { MainFooter } from "../components/MainFooter.jsx"
import { MainHeader } from "../components/MainHeader"
import not_found from "../assets/404.png"
import { Button } from "@mui/material"
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <>
            <MainHeader />
            <div className="flex flex-col items-center m-10 justify-start">
                <img src={not_found} style={{ maxWidth: 550 }} />
                <Button variant="outlined"><Link to="/">На главную</Link></Button>
            </div>
            <MainFooter />
        </>
    )
}
