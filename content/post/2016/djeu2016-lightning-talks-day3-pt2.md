---
date: 2016-04-01T17:23:18+02:00
title: "Lightning Talks, Day 3 part 2"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
---

## Extending Django with Twisted
@breakthesystem

- How can we keep realtime conns open between Django and IoT devices?
- Twisted for realtime communication which operates asynchronously. Here tasks
  are interleaved but there is only one actual thread.
- Don't call Django ORM's methods within Twisted.
- Tasks are handed of to Celery workers
- Celery act as communication bridge between Twisted and Django
- Channels might simplify the architecture here.

## Django Knocker (Desktop notifications using channels)
@yakkys

- Desktop notification library that you can include in your models to get
  notified when a model changes
- Sends a message to a channel group. In his case one group per language.
- Just a proof of concept
- https://github.com/nephila/django-knocker

## Newbie going for an interview
Marysia Lowas-Rzechonek

- Expectation 1: Juniors are fluent. Speaking in stressful situations is hard, so
  please don't expect that.
- Expectation 2: Juniors have good foundations.
- Expectation 3: All juniors studied CS, which is simply not true.
- Structure interviews more like language exams. Let them read code, manipulate
  code and give interviewees time to prepare (like tasks to prepare at home
  beforehand).

## Tim tam
Russel

- Chocolate biscuit
- Chocolate everywhere
- Drink your coffee through them like through a straw

## image-diet2 & pyimagediet
Marko Samastur

- https://terrabella.google.com is 15MB+ large
- image-diet2 helps with compressing image data to the specific use-case.

## How do we design APIs?
Idan

- Roy Fielding's REST
- Versioning with `/v1/asdf` and parameters with `/v1/asdf?details=true`
- You have a breaking change but you can't throw away your old API endpoints
- Take a look at GraphQL
    - Strongly typed
    - Declarative query language
    - You can pipeline requests
- http://graphene-python.org/

## PostgreSQL full text search
Marc Tamlyn

- Offers strong integration with relational data
- No additional dependency
- In Django through a search annotation or filter with the postgresql contrib
- contrib project now declared to be finished

## Async/await in 5 minutes
Milan Stanojevic

[Sorry, got distracted 😊]
