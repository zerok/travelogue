---
date: "2016-03-30T17:30:01+02:00"
journeys:
  - djangocon-europe-2016
title: "Lightning Talks, Day 1"
tags:
  - session-notes
---

## Heroku Deployments without Git
Markus Zapke-Gründemann

- What if you only want to deploy a package and not a repository?
- You can build your own slug manually but that's a lot of work
- heroku-slugify helps with that
- For example useful of deployment jupyter notebooks
- Requires a requirements.txt, a Procfile and a runtime.txt for the runtime
  configuration.
- On Sunday there will be a general workshop on how to deploy Python packages
  that will also use this technique.
- https://github.com/keimlink/heroku-slugify

## Transaction Isolation Levels in Wonderland

- You usually don't want to think about them. Transactions should "just work".
- Standard SQL Isolation Levels
    - read uncommitted
    - rad committed (default for PostgreSQL and Oracle)
    - repeatable read (default for MySQL)
    - serializable
- Anomalies:
    - dirty read (can happen only in read uncommited)
    - non-repetable read (can also happen in read committed)
    - ...
- serializable
    - in the standard the general definition has been weakend to the point that
      the defined anomalies simply can't occur in this level.
- repeatable read in MySQL only applies to SELECT statements. Everything else
  behaves as in read committed.

## Mozilla Kinto
Rémy Hubscher

- https://github.com/Kinto/kinto
- Mozilla is using a lot of Django in the backend
- JavaSript web-apps usually need some storage, sync, push notifications,
  validation, data access management, and API handling.
- Usually, when you create a new project, you design the API, build the backend
  and consume it on the client.
- Kinto is a web database accessible via HTTP that supports snc, permissions,
  push. It also supports encyption and has an admin panel (written in ReactJS).
- This can also be used with Django in order to handle things like auth and
  validation in Kinto as implemented in Django.

## 4 Truths and 1 Lie about Australian Animals
Markus Holtermann

- Drop bears. Vegimite helps here. Lie 😉
- Wombats: Their poop is cubic.
- Koalas: Their pouches are upside-down (as is the case with Wombats).
- Brown falcon starts fires as part of its hunting process.
- Australian sheeps have evolved to get around cattle blocks.
- Emus: The Australian army once declared war against emus. And the emus won.
- DjangoCon Australia August 12 2016

## Django Act As Authentication Backend
[@zsepi](https://twitter.com/zsepi)

- djactasauth on PyPI
- Similar to what Atlassian apps offer in their SU addons.
- login using `admin/$username` but with the admin-password
- https://github.com/PaesslerAG/django-act-as-auth

## Octo Hat Rack
Katie McLaughlin

- How do we get analytics about all the things we do outside of Github
  (documentation, code review)
- http://bit.do/LABHR is the original blog post about this topic
- Think about the person you want to praise for their work
    - Extra points for additional mentions on linkedin etc.
    - And if they are unlike you.
- https://github.com/LABHR/octohatrack
