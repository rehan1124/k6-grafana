import http from 'k6/http';
import { sleep } from 'k6';
import { BASE_URL, GET_PROFILES_EP } from '../urls-eps.js'

/**
 * Running tests to check how system responds on when load on system is increased above the average load it can handle.
 * Better to perform when Load Test is finished and analyzed.
 * Test can run for 30-60 mins or more.
 * Spread across multiple stages. Ramp-up of 10% test duration and Ramp-down of 10% test duration.
 * Remaining time for test execution (Steady-load).
 * export const options = {
    stages: [
        {
            duration: '5m',
            target: 2000
        },
        {
            duration: '50m',
            target: 2000
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
            target: 200
        },
        {
            duration: '1m',
            target: 200
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