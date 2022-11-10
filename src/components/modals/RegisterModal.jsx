import { useState } from "react"
import useGeolocation from "react-hook-geolocation"
import axios from "axios"
import { Formik } from "formik"
import { API_URL, HASHER_KEY } from "../../constants"
import { Box, Modal, Button, TextField } from "@mui/material"
import { ModalInput } from "../utils/ModalInput"
import AES from "crypto-js/aes"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const RegisterModal = (props) => {
    const geolocation = useGeolocation()
    const [error, setError] = useState("")


    console.log(geolocation.latitude)
    const handleRegister = async (values) => {
        const res = await axios.post(API_URL+"/User/Register", {
            "Login": values.login,
            "Password": values.password,
            "Telephone": values.telephone,
            "Email": values.email,
            "Lat": geolocation.latitude ?? 55.878,
            "Lon": geolocation.longitude ?? 37.653
        }).catch(error => {
            if (error.response.status == 400) {
                setError("Пользователель уже существует")
                return
            }

            if (error.response.status == 404) {
                setError("Произошла ошибка, проверьте корректность данных или попробуйте позже")
                return
            }
        })

        if (res.data != null) {
            const hashedPassword = AES.encrypt(res.data.password, HASHER_KEY).toString()
            res.data.password = hashedPassword 
            
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            props.handleClose()
        }
    }

    return (
        <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
                <div>
                    <Formik
                        initialValues={{ login: '', telephone: '', email: '', password: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                                handleRegister(values)
                                setSubmitting(false);
                                setError("")
                        }}
                    >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit} className="flex items-center flex-col">
            <h1 className="font-medium text-[25px] mb-6">Регистрация</h1>

           <ModalInput
             type="text"
             name="login"
             placeholder="Логин"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.login}
           />

           <ModalInput
             type="password"
             name="password"
             placeholder="Пароль"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
            
           <ModalInput
             type="tel"
             name="telephone"
             placeholder="Телефон"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.telephone}
           />

           <ModalInput
             type="email"
             name="email"
             placeholder="Почта"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email}

           {error && <p className="text-red-600">{error}</p>}
           <button type="submit" disabled={isSubmitting}>
             Зарегистрироваться
           </button>
         </form>
       )}
     </Formik>
                </div>
        </Box>
      </Modal>
    </div>    
    )

}
