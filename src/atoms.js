import { atom } from "recoil"

export const filterPrice = atom({
    key: "filterPrice",
    default: new Array(0, 50_000)
})

export const filterTags = atom({
    key: "filterTags",
    default: ""
})
