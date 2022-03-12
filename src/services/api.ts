import axios from 'axios'

export const Api = axios.create({
    baseURL: "https://frontendproject.b2bit.company/account"
})