import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const resp = http.get('https://quickpizza.grafana.com');

    check(resp, {
        'Response should be 200': (resp) => resp.status === 200,
        'Contains work QuickPizza': (resp) => resp.body.includes('QuickPizza')
    });
}