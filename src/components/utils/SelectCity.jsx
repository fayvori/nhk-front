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

    console.log(city)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const changeCity = async (city) => {
        const res = await axios.put(API_URL+"/Profile/City", {
            params: {
                city
            }
        }).catch(resStatusError => {
            if (resStatusError.response.status == 200) {
                alert("Город изменен успешно")
            }   
        })

        console.log(res)
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
