import axios from "axios";

const BASE_URL: string = 'https://swapi.dev/api'

// Точка входа для обращения к серверу с АПИ
export let apiInstance = axios.create({
  baseURL: `${BASE_URL}`
})