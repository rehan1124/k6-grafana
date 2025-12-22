import http from 'k6/http';
import { sleep } from 'k6';
import { BASE_URL, GET_PROFILES_EP } from '../urls-eps.js'

export const options = {
    vus: 10,
    duration: '10s'
}

export default function () {
    http.get(BASE_URL + GET_PROFILES_EP);
    sleep(1);
}