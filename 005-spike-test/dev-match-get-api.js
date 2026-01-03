import http from 'k6/http';
import { sleep } from 'k6';
import { BASE_URL, GET_PROFILES_EP } from '../urls-eps.js'

/**
 * Running tests to check how system responds when load is increased and then decreased all of a sudden.
 * More load than stress test. No ramp-up time. Spread across 2 stages.
 * Steep/sharp ramp-up and ramp-down stages. 4x of the Stress Test.
 * 
 * Example: A ticketing website for a major concert or sports event needs to handle a sudden rush of
 * hundreds of thousands of fans the moment tickets go on sale.
 * A spike test ensures the system can cope with this immediate, intense burst of activity without crashing. 
 * 
 * export const options = {
    stages: [
        {
            duration: '5m',
            target: 10000
        },
        {
            duration: '1m',
            target: 0
        }
    ]
}
 */

export const options = {
    stages: [
        {
            duration: '1m30s',
            target: 500
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