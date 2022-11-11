import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL, HASHER_KEY } from "../constants"
import * as CryptoJS from "crypto-js"

import ReactLoading from "react-loading";
import { MainHeader } from "../components/MainHeader"
import { MainFooter } from "../components/MainFooter"
import { Navigate } from "react-router-dom";
import { BackButton } from "../components/utils/BackButton"
import { Container } from "../components/Container"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const History = () => {
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(true)
    let profile = JSON.parse(localStorage.getItem("userInfo"))

    const getData = async () => {
        let passwordDecrypted = CryptoJS.AES.decrypt(profile.password, HASHER_KEY).toString(CryptoJS.enc.Utf8)

        const res = await axios.post(API_URL+"/Profile/Rent", {
            "Login": profile.login,
            "Password": passwordDecrypted
        })
        
        if (res.data != null) {
            setLoading(false)
        }

        setHistory(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    function parseDate(date) {
        return date
    }
        
    return (
        <>
            <MainHeader />

            <Container>
            <BackButton title="Назад" />
            <div className="my-10">
                <div>
                    {profile == null ? (<Navigate to="/" replace />) :
                    (
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell align="right">Время</TableCell>
            <TableCell align="right">Инвертарь</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Итог</TableCell>
            <TableCell align="right">Оплачено</TableCell>
                    </TableRow>
                    </TableHead>
                            <TableBody>
                            {history.map((row, index) => (
                                <TableRow
                                  key={row.id}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index+1}
                                    </TableCell>
                                        <TableCell align="right">
                                            <div>{parseDate(row.timeStart)}</div>
                                            <div>{parseDate(row.timeEnd)}</div>
                                        </TableCell>
                                        <TableCell align="right">{row.inventories.map(item => (
                                            <div key={item.id}>{item.inventory.title}</div>
                                        ))}</TableCell>
                                        <TableCell align="right">{row.rentState.const}</TableCell>
                                        <TableCell align="right">{row.sumReal}</TableCell>
                                        <TableCell align="right">{row.payed}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>                      
                    )}
                </div>
            </div>
            </Container>
            <MainFooter />
        </>
    )
}
