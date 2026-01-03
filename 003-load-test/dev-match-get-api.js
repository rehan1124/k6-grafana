import http from 'k6/http';
import { sleep } from 'k6';
import { BASE_URL, GET_PROFILES_EP } from '../urls-eps.js'

/**
 * Running tests to check how system responds on busy time of the day when multiple users are accessing it.
 * Test can run for 30-60 mins or more.
 * Spread across multiple stages. Ramp-up of 10% test duration and Ramp-down of 10% test duration.
 * Remaining time for test execution (Steady-load).
 * export const options = {
    stages: [
        {
            duration: '5m',
            target: 1000
        },
        {
            duration: '50m',
            target: 1000
        },
        {
            duration: '5m',
            target: 0
        }
    ]
}
 */

export const options = {
    stages: [
        {
            duration: '30s',
            target: 100
        },
        {
            duration: '1m',
            target: 100
        },
        {
            duration: '30s',
            target: 0
        }
    ]
}

export default function () {

    // console.log('Get all profiles API');

    http.get(BASE_URL + GET_PROFILES_EP);
    sleep(1);
}