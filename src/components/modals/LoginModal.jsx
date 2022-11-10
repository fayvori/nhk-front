import { useState } from "react"
import { Box, Modal, Button, TextField } from "@mui/material"
import { Formik } from "formik"
import { API_URL } from "../../constants"
import { ModalInput } from "../utils/ModalInput"
import axios from "axios"
import ReactLoading from "react-loading";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const LoginModal = (props) => {
    const [error, setError] = useState("")

    const handleLogin = async (values) => {
        const res = await axios.post(API_URL+"/User/Login", {
            "Login": values.login,
            "Password": values.password
        }).catch(error => {
            if (error.response.status == 404) {
                setError("Введен неверный логин или пароль")
                return
            }
        })
       
        if (res.data != null) {
            console.log(res)
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
                <div className="flex flex-col items-center">
                    <Formik
                        initialValues={{ login: '', password: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                                handleLogin(values)

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
            <h1 className="font-medium text-[25px] mb-6">Авторизация</h1>

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
        
           {error && <p className="text-red-600">{error}</p>}
          
           <button type="submit" disabled={isSubmitting}>
             Войти
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
