# k6 + Grafana Performance Testing Suite

This repository contains a structured collection of performance testing scripts using **k6**, along with support for visualization and analysis via **Grafana**.  
It includes examples covering all major performance testing types, along with best practices, terminology, and execution guidelines.

---

## 📁 Project Structure

```plaintext
k6-grafana/
│
├── 001-basics/
├── 002-smoke-test/
├── 003-load-test/
├── 004-stress-test/
├── 005-spike-test/
├── 006-breakpoint-test/
├── 006-soak-or-endurance-test/
├── 007-assertions/
│
├── urls-eps.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

Each folder contains dedicated test scripts demonstrating specific performance-testing concepts.

---

## 📘 Overview

This project helps you:

- Understand the different types of performance testing  
- Run tests using k6  
- Analyze test results using Grafana  
- Learn core performance testing terminology  
- Build scalable and reliable tests that mimic real-world usage

---

## 📚 Key Terminologies

### **1. VUs (Virtual Users)**
Simulated users that make requests to your application during a test.

### **2. Latency**
The total time required to complete a request:
- Request time + processing time + response time  
Often interpreted as the **delay per request**.

### **3. Throughput**
Number of requests your system can handle within a given time.

### **4. SLO (Service Level Objective)**
A measurable target for system performance.  
Common examples:

```
System will be available 99.8% of the time.
90% of the requests take < 0.5 seconds.
95% of the requests take < 0.9 seconds.
99% of the requests take < 2.5 seconds.
```

More reading:  
https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli

### **5. Scalability**

#### **Vertical Scaling (Scale-Up)**
Increase CPU, RAM, storage on a single machine.

#### **Horizontal Scaling (Scale-Out)**
Add more machines with similar configurations to share the load.

---

## 🧪 Types of Performance Tests

### **1) Smoke Test**
Verifies that:
- Application is reachable  
- Test scripts run successfully  
Used as a “sanity check”.

### **2) Load Test**
Simulates expected peak daily traffic by gradually increasing VUs and maintaining a stable load.
- Typically runs for 30+ minutes  
- Uses ramp-up → steady-load → ramp-down phases

### **3) Stress Test**
Pushes system beyond normal capacity to find breaking thresholds.
- Higher VUs than load tests  
- Represents heavy user spikes or peak-hour surges

### **4) Spike Test**
Sudden load increase and decrease.
- Much sharper than stress tests  
- Helps check system resilience against traffic bursts

### **5) Breakpoint Test**
Continuously increases load until system fails.
- Helps determine system capacity limits  
- Useful for infra planning and auto-scaling strategies

### **6) Soak/Endurance Test**
Long-duration tests (hours → days) to observe:
- Memory leaks  
- Resource exhaustion  
- Long-term stability under constant load

---

## ▶️ Running Tests

To execute any script from the repository:

```bash
k6 run ./basics/dev-match-get-api.js
```

Replace the file path based on the test you want to run.

---

## 🔗 Helpful Reference Links

- https://grafana.com/load-testing/types-of-load-testing/
- https://www.globalapptesting.com/blog/performance-testing-types
- https://www.browserstack.com/guide/types-of-performance-test

---