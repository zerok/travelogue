---
date: "2016-03-30T16:35:09+02:00"
journeys:
  - djangocon-europe-2016
title: "Going with the flow with Django Admin by Maria Lowas-Rzechonek"
tags:
  - session-notes
---

[Maria Lowas-Rzechonek](https://twitter.com/MariaLowas) has a philosophical
background and joined the community in 2014 with the Django Girls workshop in
Berlin 2014.

<!--more-->

- On the DjangoGirls website there is a section where you can find job offerings
  and meetups: https://djangogirls.org/community/
- Django Admin can be extended to offer specific workflows using custom views
  and URLs.
- You might think that you could also simply write your own app for complex
  workflows, but the admin panel already makes it rather simple.
- DjangoGirls uses that for the review workflow.
- Custom views within modeladmin instances where you can also inject custom URLs
  (`get_urls()`)
- You can extend all views with custom templates to add additional buttons to
  fit better with your workflow.
- You have to extend your `get_queryset` method to work with custom filters as
  the filtering has to happen on the database layer.
- In order to add extra stylesheets add them with the `extrastyle` template
  block for instance in your `base.html`.
- There was a talk about other customizations last year by Ola Sitarska.
