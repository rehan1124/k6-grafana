import http from 'k6/http';
import { sleep } from 'k6';
import { BASE_URL, GET_PROFILES_EP } from '../urls-eps.js'

/**
 * Running basic tests to check if API is working as expected.
 * Test can run for 10-30 seconds.
 * 
 * To quickly verify that the most critical functions of an application work under a minimal load
 * (e.g., 1-5 virtual users) and that the system is ready for more rigorous testing.
 * 
 * Example: After a new software build of an online banking system is deployed to the testing environment,
 * a smoke test ensures users can log in, check their balance,
 * and transfer funds without the system immediately crashing or producing major errors. 
 */

export const options = {
    duration: '30s'
}

export default function () {

    // console.log('Get all profiles API');

    http.get(BASE_URL + GET_PROFILES_EP);
    sleep(1);
}