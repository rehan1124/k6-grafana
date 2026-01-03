import http from 'k6/http';
import { sleep } from 'k6';
import { BASE_URL, GET_PROFILES_EP } from '../urls-eps.js'

/**
 * Running tests in similar fashion as that of Load Test with multiple stages btu for extended time durations.
 * Checks system performance running for longer period of time.
 * Disk space usage, memory leaks, database getting populated and crashing, server crashes due to high usage,
 * resource depletion etc.
 * 
 * Example: An email server is run at its average expected load for 48 hours continuously to ensure it doesn't
 * develop memory leaks, which would cause performance to slow down gradually over time and eventually crash the system. 
 * 
 * export const options = {
    stages: [
        {
            duration: '5m',
            target: 1000
        },
        {
            duration: '12h',
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