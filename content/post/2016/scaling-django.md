---
date: 2016-04-01T13:28:19+02:00
title: Best practices for scaling Django by Anton Pirker
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/16
speakers:
  - name: Anton Pirker
    website: http://www.anton-pirker.at/
---

## Notes

- Optimizing Queries
    - Django Debug Toolbar for finding query-intense pages
    - `select_related` and `prefetch_related` for doing fewer queries for related
      models.
- But what about monitoring?
    - New Relic is great but rather expensive. They offer a free plan, though.
    - Helps you find ressource bottlenecks and debug them.
- Caching?
    - Memcached
    - But Django assumes that if the cookies are changing, the cache should be
      invalidated. This is an issue with 3rd-party integrations like tracking
      and social media widgets.
- Pool DB connections before your site gets popular
    - There is a limit of how many connections PostgreSQL can have open at the
      same time.
    - PG Bouncer proxies the connections between the app and Django
- Asynchronous processing
    - Celery for moving tasks out of the request/response process through a task
      queue.
    - Celery flower provides a dashboard for the workers.
    - Multiple queues for tasks with different
      [priorities](http://docs.celeryproject.org/en/latest/userguide/calling.html#routing-options).
- Level 2 involves clustering 😉
- http://tinyurl.com/scalingdjango


### Q&A

What's the main difference between Redis and memcached here?

- Redis stores the data to the disk every 5 minutes by default.
