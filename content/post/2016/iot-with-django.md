---
date: 2016-03-31T12:07:14+02:00
title: "IoT with Django: From hackathon to production"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/9
speakers:
  - name: Anna Schneider
    website: http://www.annaschneider.org/
    bio: CTO at [WattTime](http://watttime.org/)
---

## Notes

- IoT: Internet of Things
- Hackathon is a fun way to write fragile code 😉
- What happens if the server goes down while you're having fun at DjangoCon and
  your house locks depend on that server?

### Best practices

- Models
    - Store vendor IDs with your device models
    - put an index on your obversions' timestamp fields as you will be sorting quite
      a lot here.
    - Make your data models flexible enough that you can store different kinds of
      observations and be flexible about it.
- Tasks
    - Focus on tasks that are executed outside the normal request/response cycle
      (like cronjobs)
    - monitor and control-tasks are general patterns but there will also be
      completely custom tasks.
    - Pass primary keys of objects into the tasks instead of the objects
      themselves. Also just return primary keys if possible to make chaining
      tasks easier.
    - Keep vendor clients in their own modules to make mocking easier.
    - For hackathons using the heroku scheduler is a valid way to run tasks. It
      has only very limited functionality, though.
    - For production you will probably better use something like
      [Celery](http://www.celeryproject.org/) which acts as a scheduler and
      connects a message broker (like RabbitMQ or Redis) to workers who write
      the results back into a result-store (like Redis).
    - Celery can be configured to acts in a cron-like fashion within the
      settings. Check your tasks' arguments, though, as you might accidentally
      hard-code object IDs and things like that 😉
- https://github.com/aschn/cookiecutter-django-iot which comes with all of that
  😊


## Q&A

NoSQL database for these datasets?

- RDBMS should already get you quite far.

Is latency with devices a big issue?

- Mostly an issue when communicating with the vendor API.
