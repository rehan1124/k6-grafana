# k6-grafana

k6 and Grafana

## Basic terminologies

1) VUs -> Virtual Users accessing application
2) Latency: Time taken to fullfill the request or Request time + Response time. Also interpreted as delay per request.
3) Throughput: Requests handled in a given amount of time.
4) SLO: [Service Level Objective](https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli)
```
Example:
"System will be available 99.8% of the time."
"90% of the requests took less than 0.5 seconds."
"95% of the requests took less than 0.9 seconds."
"99% of the requests took less than 2.5 seconds."
```

## Types of Performance Testing

## How to run tests

To run a basic test, execute below command.

***k6 run ./basics/dev-match-get-api.js***

