---
date: 2016-03-31T15:58:07+02:00
title: "Django Microservices Made Easy by Paul Hallett"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/20
speakers:
  - name: Paul Hallett
    website: https://twitter.com/phalt_
    bio: Works for Lyst
---

## Notes

- A monolith is like the Death Star. If something goes wrong, it goes really
  wrong.
- Microservices are like X-Wings that work together to achieve their job.
- With monoliths the problem is that everything is connected a bit too tightly.
- Django migrations are problematic on huge projects.
- But what to move out?
- Extracted the checkout first (which is the heart of an online-shop 😉). That
  lead to some problems:
    - Shared database. Always isolate dependencies.
    - Services ended up too different from each other and had inconsistent
      solutions for logging etc.: Creation of project templates (based on
      cookiecutters).
        - Tools in the cookiecutter (not yet opensource as it has to be cleaned up
          before that):
            - django
            - django rest framework
            - docker config
            - circle ci
            - error logging with sentry and new relic
            - common make commands
    - Inconsistent HTTP interfaces: Solved this with education and guidelines.
        - http://bit.ly/api-best-practices
        - Client templates were integrated directly into the projects
    - Inconsistent deployment paths
        - https://github.com/remind101/empire
- Moving to Python 3 is also much easier when you have independent components.
- The most important thing about microservices is consistency.
- Git init to production in 5 days
- Increases team autonomy and development momentum.
- Where to go next?
    - The platform team now needs to manage far more servers.
    - Should services be auto-generated using things like swagger?
    - There is now a communication overhead between people and teams. Perhaps
      solvable with ProtocolBuffers in combination with Django Rest Framework
      (also not yet opensource but perhaps in the future)
- There is a blogpost that asks 10 questions about your microservice
  structure. Something that you might want to do if you intend to use this
  architecture. http://bit.ly/micro-10-q
- Takeaways
    - Django can be used for Microservices
    - Always decouple your dependencies
    - Use templates and automation as much as possible to remove
      inconsistencies
    - Establish best practices
