import { useState } from "react"
import { Button, Menu, MenuItem } from "@mui/material"
import axios from "axios"
import { API_URL } from "../../constants"

export const SelectCity = () => {
    const cities = [
        "Москва",
        "Санкт-Петербург",
        "Ростов-на-Дону",
        "Екатеринбург",
        "Таганрог"
    ]

    const [message, setMessage] = useState("")
    const [city, setCity] = useState("")
    let profile = JSON.parse(localStorage.getItem("userInfo"))

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const changeCity = async (city) => {
        if (profile == null) {
            localStorage.setItem("anonimCity", city)
            window.location.reload()
            return 
        } else {
            localStorage.removeItem('anonimCity')
        }

        const res = await axios.put(API_URL+"/Profile/City", {
            "City": city,
            "Login": profile.login
        })

        if (res.status == 200) {
            profile.city = city
            localStorage.setItem('userInfo', JSON.stringify(profile))
            window.location.reload()
        }
    }
    
    const handleClose = (city) => {
        changeCity(city)
        setAnchorEl(null);
    }

    return (
        <div>
      <Button
        variant="contained"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Город
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {cities.map(city => (
            <MenuItem key={city} onClick={() => handleClose(city)}>{city}</MenuItem>
        ))}
      </Menu>
    </div>
    )
}
