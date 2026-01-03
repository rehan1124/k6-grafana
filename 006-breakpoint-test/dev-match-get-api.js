import http from 'k6/http';
import { sleep } from 'k6';
import { BASE_URL, GET_PROFILES_EP } from '../urls-eps.js'

/**
 * Running tests to check point at which system breaks.
 * Load gradually increases over time to the point at which system will break.
 * Similar to Stress Test, but with just 1 stage of infinite scale.
 * 
 * Example: A streaming service would slowly increase the number of simultaneous video streams until
 * the network bandwidth is saturated or server CPU hits 100%, determining the absolute maximum number
 * of users the current infrastructure can support at a certain quality. 
 * 
 * export const options = {
    stages: [
        {
            duration: '2h',
            target: 10000
        }
    ]
}
 */

export const options = {
    stages: [
        {
            duration: '2m',
            target: 1000
        }
    ]
}

export default function () {

    // console.log('Get all profiles API');

    http.get(BASE_URL + GET_PROFILES_EP);
    sleep(1);
}