import axios from 'axios';

const googlefetch = process.env.NEXT_PUBLIC_GS_URL;
const apifetch = process.env.NEXT_PUBLIC_API_URL;

const apipost = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

export { googlefetch, apifetch, apipost }