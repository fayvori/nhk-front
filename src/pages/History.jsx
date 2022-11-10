import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL } from "../constants"

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

const rows = [
    {
        "id": 110371,
        "timeStart": "2022-10-26T01:39:00+03:00",
        "timeEnd": "2022-10-26T02:39:00+03:00",
        "timeFactEnd": "0001-01-01T00:00:00",
        "sum": 0,
        "payed": 200,
        "fineTime": 0,
        "fineBroken": 0,
        "comment": null,
        "sumReal": 200,
        "sumDiscount": 0,
        "orderNumber": 1,
        "orderNumberText": 1,
        "needCalcBreaking": 1,
        "needCalcRentDelay": 1,
        "sumRental": 200,
        "sumProduct": 0,
        "sumAdditionalService": 0,
        "sumTotal": 200,
        "sumDeposit": 0,
        "isUnderstaffed": false,
        "title": "1",
        "rentState": {
            "title": "words.rent_state_overdue",
            "const": "OVERDUE",
            "domClass": "rent-state-overdue"
        },
        "inventories": [
            {
                "id": 231559,
                "timeEnd": "2022-10-26T02:39:00+03:00",
                "timeStart": "2022-10-26T01:39:00+03:00",
                "sum": 100,
                "sumInventory": 100,
                "sumBroken": 0,
                "sumService": 0,
                "finished": false,
                "sumAmountPayment": 100,
                "sumOne": 100,
                "count": 1,
                "parentInventoryId": 0,
                "sumDiscount": 0,
                "sumTotal": 100,
                "kitNumber": 0,
                "inventory": {
                    "updatedAt": "2022-10-26T20:02:55+03:00",
                    "title": "Лыжи",
                    "description": "Дам лыжи на прокат\n#лыжи #зима #сноутборды #отдых",
                    "artule": null,
                    "rentNumber": 0,
                    "hidden": 0,
                    "another": 0,
                    "amountRentSum": 100,
                    "amountRentTime": "PT1H",
                    "childrenCount": 100,
                    "amountRentCount": 1,
                    "expenseSum": 0,
                    "cashDeposit": 0,
                    "avatar": "/production/public/orig/20221109-4844ef30-6060-11ed-8411-930c855e8f21.webp",
                    "prices": [
                        {
                            "id": 13534,
                            "title": "Прокат лыж",
                            "article": null,
                            "values": [
                                {
                                    "period": "PT1H",
                                    "value": "100",
                                    "morethen": "PT0S",
                                    "isFixed": false
                                }
                            ]
                        },
                        {
                            "id": 13421,
                            "title": "Test",
                            "article": null,
                            "values": []
                        }
                    ],
                    "isGroup": true,
                    "state": null,
                    "point": {
                        "title": "Пункт проката 1",
                        "email": null,
                        "website": null,
                        "phone": null,
                        "placeText": 0
                    },
                    "resource": {
                        "title": "Лыжи",
                        "description": "INVENTORY",
                        "body": null,
                        "deletedAt": "0001-01-01T00:00:00",
                        "const": null
                    }
                },
                "price": {
                    "id": 13534,
                    "title": "Прокат лыж",
                    "article": null,
                    "values": [
                        {
                            "period": "PT1H",
                            "value": "100",
                            "morethen": "PT0S",
                            "isFixed": false
                        }
                    ]
                }
            },
            {
                "id": 231561,
                "timeEnd": "2022-10-26T02:39:00+03:00",
                "timeStart": "2022-10-26T01:39:00+03:00",
                "sum": 100,
                "sumInventory": 100,
                "sumBroken": 0,
                "sumService": 0,
                "finished": false,
                "sumAmountPayment": 100,
                "sumOne": 100,
                "count": 1,
                "parentInventoryId": 0,
                "sumDiscount": 0,
                "sumTotal": 100,
                "kitNumber": 0,
                "inventory": {
                    "updatedAt": "2022-11-09T21:47:41+03:00",
                    "title": "Репетитор жизни",
                    "description": null,
                    "artule": "хз что это",
                    "rentNumber": 1,
                    "hidden": 0,
                    "another": 0,
                    "amountRentSum": 100,
                    "amountRentTime": "PT1H",
                    "childrenCount": 0,
                    "amountRentCount": 1,
                    "expenseSum": 0,
                    "cashDeposit": 0,
                    "avatar": "/production/public/orig/20221026-55381e50-54ad-11ed-b20a-2d5222ea4705.png",
                    "prices": [
                        {
                            "id": 13534,
                            "title": "Прокат лыж",
                            "article": null,
                            "values": [
                                {
                                    "period": "PT1H",
                                    "value": "100",
                                    "morethen": "PT0S",
                                    "isFixed": false
                                }
                            ]
                        },
                        {
                            "id": 13421,
                            "title": "Test",
                            "article": null,
                            "values": []
                        }
                    ],
                    "isGroup": false,
                    "state": {
                        "title": "В аренде",
                        "textColor": "#000000",
                        "color": "#4fc3f7",
                        "const": "RENT"
                    },
                    "point": {
                        "title": "Пункт проката 1",
                        "email": null,
                        "website": null,
                        "phone": null,
                        "placeText": 0
                    },
                    "resource": {
                        "title": "Репетитор жизни",
                        "description": "INVENTORY",
                        "body": null,
                        "deletedAt": "0001-01-01T00:00:00",
                        "const": null
                    }
                },
                "price": {
                    "id": 13534,
                    "title": "Прокат лыж",
                    "article": null,
                    "values": [
                        {
                            "period": "PT1H",
                            "value": "100",
                            "morethen": "PT0S",
                            "isFixed": false
                        }
                    ]
                }
            }
        ],
        "admin": {
            "surname": "Коваленко",
            "name": "Виталий",
            "patro": "Михайлович",
            "male": 1,
            "birthday": "2004-12-29T00:00:00",
            "shortFio": "Коваленко В.М.",
            "avatarFio": "КВ",
            "fio": "Коваленко Виталий Михайлович",
            "avatar": "/prod/public/preloader.png",
            "isAdmin": false,
            "isDirector": false,
            "isEmployee": true,
            "isClient": false
        }
    }
]

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

    rows.map(item => {
        item.inventories.map(e => {
            console.log(e.inventory.title)
        })
    })

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
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell align="right">Инвертарь</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Итог</TableCell>
            <TableCell align="right">Оплачено</TableCell>
                    </TableRow>
                    </TableHead>
                            <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                  key={row.id}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index+1}
                                    </TableCell>
                                        <TableCell align="right">{row.inventories.map(item => (
                                            <div>{item.inventory.title}</div>
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
