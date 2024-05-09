---
title: Reliable, Scalable, and Maintainable Applications
---

## Intro

Data-intensive applications are those where performance bottlenecks are
attributable to properties of the data involved (amount, complexity, changes)
rather than limits of the underlying hardware performance.

They are often comprised of many parts with different responsibilities,
including
- databases: store data
- caches: store results of expensive operations
- indexes: search and/or filter data
- stream processing: asynchronous message transportation
- batch processing: periodically process large amounts of data

Three of our main concerns when designing such systems are
- reliability: system should function correctly under adverse conditions
- scalability: growth should be easily manageable
- maintainability: the system should be easy to work with

## Reliability

Reliability is about the system functioning according to expectations even when
encountering faults. A system which is built to withstand faults is called 
fault-tolerant. 

Note that we do not consider faults to equal failures. The distinction is that 
faults represent a deviation from expected behaviour, where failures are a 
cessation of the functionality in question.

Hardware faults were the primary concern for developers when applications ran
on single servers, however the shift to systems that span multiple machines
has resulted in the need for software-based fault-tolerance techniques.

## Scalability

Scalability is the system's ability to handle load, and designing systems with
scalability in mind involves addressing hotspots. Consider the "post" and 
"view timeline" operations for Twitter. "Post" is a write operation of sorts,
and "view timeline" is its corresponding read operation. 
Two possible approaches to designing this system are
- writing tweets to a database, then using a relational operation to retrieve
all tweets by a user's following when they send a read request.
- writing a tweet to a cache per user, then simply retrieving the cache when 
a user tries to read their timeline.

The former approach is read-heavy while the latter is write-heavy, but
examining usage patterns we see that there are around 100x more reads
than writes, so it makes sense to favour the write-heavy approach if timely
delivery is of concern.

For async services, we care about throughput, or how many records we can 
process in a given span of time. For interactive applications, response time,
the amount of time from client sending a request to receiving a response, is 
critical.

Response times are usually discussed in terms of percentiles, where the 95th
percentile (p95) is the response time for which 95% of responses take less 
time. Response times can be affected by circumstances outside of the scope of
the request, for example if an operation is holding up a queue. In this case,
the server would report the operation completing quickly, but the client would
have experienced a delay, so it is important to measure response times 
client-side. In cases where clients depend on responses from parallel requests,
the probability that at least one is slow grows with the number of calls, also
referred to as tail latency amplification.

Approaches to scalability fall under two categories
- horizontal scaling: distributing load across machines
- vertical scaling: adding compute to the machine

How scale is handled is largely application-dependent, with request volume and
access patterns being just two of the factors to take into consideration.

## Maintainability

Maintainability is about employing practices that extend the lifespan of the 
system. These practices generally adhere to these principles
- operability: system should be easy for other teams to ensure smooth operation
- simplicity: should be easily understandable for new engineers
- evolvability: should facilitate adaptation in the future


