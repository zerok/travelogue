---
date: 2016-03-30T13:30:53+02:00
journeys: ["djangocon-europe-2016"]
title: "Django and ReactJS: The good, the bad and the ugly by Tomáš Ehrlich"
website: https://2016.djangocon.eu/speakers/12
tags:
  - session-notes
speaker:
  name: Tomáš Ehrlich
  website: http://www.tomasehrlich.cz/
  bio: Full-stack developer and co-organizer of PyCon CZ 2015.
---

- Full-time django developer, then full-time JavaScript developer and now tries
  to find a balance.

## ReactJS

- http://facebook.github.io/react/
- ReactJS can be seen as the view layer from MVC in your JavaScript application.
- Component focused. Makes composition and re-use easier.
- Think about it as a template language.
- Renders data and handles events.
- Handling data-change is hard.
- Rerendering everything because a tiny datapoint changed is slow and
  expensive. For this reason ReactJS operates on a virtual DOM to find all the
  nodes that actually have to be changed and applies these changes in a single
  step.
- [JSX][] as a mix of HTML/XML and JavaScript to make writing markup easier.

[jsx]: https://facebook.github.io/jsx/

## ReactJS in Django

- You can use ReactJS just as an add-on to your existing template layer but that
  doesn't really scale all that well.
- Alternatively only use Django as an API layer and do the whole rendering in
  ReactJS.
- Leads to more modular design and DRY.
- If you already have a finished project, doing that is rather hard as you need
  to replace all your frontend code.
- Best use for highly dynamic websites but not for static websites like
  news-pages.

## Future?

- Django Admin and Forms would be nice to have available through the API.

## Django in React

- What does Django offer in a modern application and why you should keep using
  it?
- Django offers a quite full-featured backend stack that is very mature. In
  NodeJS there exist a handful of full-stack frameworks but none are as mature.
- ReactJS is just the tip of the iceberg. You still have to solve all the other
  parts (like webpack, redux, ...).
- http://tricoder42.github.io/talk-react-django

## Q&A

Server-side rendering

- You can use the same code-base for rendering on the server and the client.
- Rendering done via NodeJS

There might be a sprint about exposing Django's admin as API.
