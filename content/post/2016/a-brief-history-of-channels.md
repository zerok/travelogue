---
date: 2016-03-31T13:28:15+02:00
title: "A Brief History of Channels by Andrew Godwin"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/7
speakers:
  - name: Andrew Godwin
    website: http://www.aeracode.org/
    bio: Django core developer and senior engineer at Eventbrite
---

## Notes

- 80% in the room have already heard about channels
- Motivator were WebSockets that emerged a couple of years ago and got immensely
  popular over time.
- Classic HTTP is request/response based.
- HTTP/2 can send multiple requests on each connection before even getting a
  response back.
- WSGI requires a clear succession of request - response - request - response -
  ...
- Websockets connections are open for a long time and can send and receive data
  multiple times.
- Currently Django doesn't support anything like that partially because of WSGI.
- Django offers tons of extremely useful features that you need in nearly every
  web application but it can't really do Websockets.
- Goals:
    - hard to dedlock
    - built-in authornisation
    - widely deployable
    - scales down
    - optional. Not everything needs websockets and changing the basic view
      handling in a not-backwards-compatible way is not an option.
- What if we could change the "everything is just a request" mantra of Django?
- Channels replace requests with events.
- Requests could be just another type of events that live on channels.
- You write your handling against one of the channels (classic HTTP request, for
  instance).
- A channel is a named, first-in-first-out, at-most-once, non-broadcast and
  network-transparent queue of messages.
- Django is broken into two parts: The one that handled the request/response,
  the other that handled the business logic. These are implemented in different
  processes.
- The protocol-server is written in an async way (using Twisted right now).
- The workers then process the data in the channels and send the data back.
- You can send data from anywhere into channels.
- How to use?
    - A consumer takes an event and send zero or more events. Consumers are
      basically like views in the classic stack and as such also also simply
      callables.
    - You cannot wait on an event. The consumer is only executed once an event
      is available.
    - Django wraps classic views to make them compatible here.
    - A message has a reply-channel attached with it to make replying
      straight-forward.
    - Channels is rather low-level and is supposed to be a basic building block.
    - `routing.py` is similar to `urls.py` but for consumers and channels
    - Auth is available through `message.user` similar to `request.user`.
    - The system itself doesn't provide a shared state. Any worker can work on
      any event, but you can hae channel sessions.
    - Groups are for situations that broadcast/pub-sub-like solutions.
    - 3 operations: add a channel to a group, remove a channel from a group,
      send to a group
    - The backend is pluggable and specified.
- https://github.com/andrewgodwin/channels-examples contains fully implemented
  examples.
- Not as reliable as Celery for custom channels but usable in many situations
  where you'd normally go with Celery.
- By default ships with a Redis and a DB backend. Don't use the DB backend 😉
- It scales down. During development you can simply do `runserver` as before.
- Future?
    - Scheduler?
    - Rety logic?
    - Generic consumers?
- Targeted for 1.10 as a provisional feature (influences the backward-compatible
  agreement)
- `pip install channels` on 1.8 and 1.9
- Documentation available on http://channels.readthedocs.com (Documentation
  first!)

### Q&A

Can you connect this with other protocols like binary protocols or email?

- You can write multiple protocol servers for different protocols
- Comes with one by default implementation called daphne.

Can you stream responses?

- Yes, the response format defines that. You can also send chunks of content
  back that makes streaming possible.

When do I have to start thinking about sharding?

- Load tests showed good response times for 10 requests at once. If the sockets
  are not doing anything the number goes up dramatically.
- One machine should normally be able to handle a couple hundred sockets
