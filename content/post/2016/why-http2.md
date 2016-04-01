---
date: 2016-03-31T15:58:07+02:00
title: "HTTP/2 : why upgrading the web? by Quentin ADAM"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/2
speakers:
  - name: Quentin ADAM
    website: https://twitter.com/waxzce
    bio: CTO at [Clever Cloud](https://www.clever-cloud.com/en/)
---

## Notes

- "Department of IT Automation"
- HTTP 1 is based on the principle of request and response
- 4 parts: verb, headers, resource and body
- It can be extended into things like WebDAV.
- Requirements for a new version of HTTP?
    - It has to be faster
    - Over time pages required more and more requests. Offer a way to handle
      that better than something like HTTP Pipelining
    - Things like domain sharding was created to get around things like the
      number of connections you can have in parallel to the same host.
    - Static asset domains shouldn't handle cookies, which makes everything even
      more complicated.
    - Replace the hacks we have right now for getting a bidirectional
      data-channel between client and server.
- Managed by IETF's HTTPBIS Working Group.
- HTTP/2 is a binary protocol
- HTTP/1 + TLS + Compression is already kind of binary
- Binary is safer and quicker to parse (and easier).
- Wireshark supports HTTP/2 already pretty well and they were or are actually on
  the working group.
- Only *one* TCP connection which holds "streams" consisting of "frames"
- A stream can have a priority associated with it.
- The server can also explicitly push resources that it expects to receive a
  request for anyway 😉
- Headers in HTTP/1 were not compressed. Now they are using the HPACK format.
- The core terminology of HTTP hasn't changed though. The focus was on improving
  the transportation layer.
- Upgrading using protocol negotiation which is already used with
  WebSockets. The downside here is, that it is slow as you need actually two
  connections.
- You can combine the negotiation with the TLS upgrade and therefore safe a
  request.
- https://istlsfastyet.com/
- Huge performance gains
- Supported by Firefox, Chrome, IE, Google, ...
- To get more than the basic enhancements from HTTP/2 there is a lot of work to
  be done in the frameworks.
- The core of Django isn't yet ready for that.
- http://python-hyper.org/en/latest/ is a Python implementation that is not yet
  usuable with Django.
- https://http2.github.io for the specs and further information.


### Q&A

Monitoring & Page rank?

- It is an opportunity for new tools to arise.
- HTTP/2 probably doesn't affect your page rank right now, though.

WSGI and HTTP/2

- channels will help with the implementation of HTTP/2 in Django but there is
  also more work going on in other areas.
