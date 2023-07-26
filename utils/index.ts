import { headers } from "next/dist/client/components/headers";

const axios = require('axios');


export const api = axios.create({
  baseURL: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '45c1076b18msha73ba0fcc96bb63p113955jsn89e3aeb13ab1',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
})