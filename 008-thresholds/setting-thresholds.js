/**
 * Setting up thresholds are good way to achieve SLOs
 */

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 5,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<600'],
        http_req_failed: ['rate<0.001']
    }
}

export default function () {
    const resp = http.get('https://quickpizza.grafana.com');

    check(resp, {
        'Response should be 200': (resp) => resp.status === 200,
        'Contains work QuickPizza': (resp) => resp.body.includes('QuickPizza')
    });

    sleep(1);
}