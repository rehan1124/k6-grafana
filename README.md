# [k6-grafana](https://k6.io/)

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
5) Scalability:
```
Vertical scaling (scale-up) -> Add more RAM memory, storage or use better CPU
Horizontal scaling (scale-out) -> Adding more systems to handle load, mostly with same config
```

## Types of Performance Testing

1) Load Test: Simulating multiple users accesing the system concurrently. Number of users accessing the system in
busiest time of the day. Tests could last for 30 mins or more depending on requirements. Gradual increase users and
decrease as test end time approaches.
Ramp-up can be 10% of total test duration. Same with Ramp-down. Remaining time for Steady-load.
2) Stress Test: Push the system to its breaking point. Higher than Load Tests. Heavier than usual loads.
Increased VUs, mimicking real world rush hours or surge situations.
3) Spike Test: Sudden increase and decrease of load
4) Smoke Test: System is up and running and script we have written is also working. Checks basic functionality.

## How to run tests

To run a basic test, execute below command.

***k6 run ./basics/dev-match-get-api.js***

