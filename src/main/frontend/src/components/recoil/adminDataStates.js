import { atom } from "recoil";

export const userDataState = atom(
    {
        key : "userData",
        default : []
    }
)

export const subjectDataState = atom(
    {
        key : "subjectData",
        default : []
    }
)

export const registerDataState = atom(
    {
        key : "registerData",
        default : []
    }
)