---
date: 2016-04-01T12:02:25+02:00
title: "Beyond Web 2.0 - Django and Python in the modern web ecosystem by Russell Keith-Magee"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/5
speakers:
  - name: Russell Keith-Magee
    website: http://cecinestpasun.com/
---

## Notes

- Where is Django going or is JavaScript in the end going to replace everything?
- In 2005 everything was rather static and MVC focused.
- GoogleMaps et al showed that you could do more but they were the
  exception. Clients didn't expect you to do something like that.
- 2016 is completely different. Users now want rich clients which means that
  lots of logic has to live on the client side and you have to deal with code
  duplication.
- Native applications have become important and so you need to offer more APIs
  in your projects.
- Adding a JavaScript framework on top of your Django project doesn't really
  help with solving your architectural issues. You still have to duplicate code
  somewhere.
- That's why the idea of isomorphic JavaScript has become so popular. Client
  logic and server logic is shared, but that doesn't help you when your backend
  is written in Python. You can use a NodeJS rendering layer to deal with that
  but that's rather inconvenient.
- But what is more important here? JavaScript or the isomorphic aspect? The only
  real advantage that JS has is that it is available natively inside the
  browser.
- Can we take a Python-everywhere-approach?
- Something like that also happened for Java in the 1990s with rich client and
  server applications. We can learn from the design patterns last time
  around. The prevelant pattern here is still MVC.
- API-first development to focus on making the controller layer is clean as
  possible. This does away with the classic form logic. But this also makes
  testing much easier. Integration becomes a first-class use-case.
- Problems appear when your connection is not reliable or you don't have a
  connection at all. For this reason part of the controller logic should be
  duplicated again on the client side.
- What options do we have to get Python into the browser? These are some
  interpreters (not transpilers):
    - Brython
    - Skulp
    - PyPy.js (20MB)
- The problem here is, though, that the code first has to be interpreted on the
  client and adds a huge delay. It doesn't help that you end up downloading a
  full Python implementation first.
- But do we actually need a full python interpreter in the browser? No. We just
  need to be able to run it. Similar to what we have on the server with `.pyc`
  files.
- [Batavia][] is a JS implementation of the Python VM which allows you to run
  Python bytecode in the browser.
- Should be fast enough for validation logic.
- There are some unexpected consequences as mobile development also gets
  easier. If we can write our mobile applications in Python we are getting very
  close to one ecosystem for everything.
- Since Objective-C is just a thin wrapper around C you can call from Python
  into its APIs. That's what [Rubicon][] is helping with.
- Android is a bit harder as you need to deal with JNI.
- "Android really wants you to use Java"
- Java and Python share some characteristics between their bytecodes so you
  could convert Python bytecode into Java bytecode. That's what [VOC][] is all
  about.
- How to deal with the UI in cross-platform environments?
    - Kivy
    - Toga (layer that uses native widgets under the hood but provides a common
      API on top of it; experimental)
- Could we do something like Toga for the web?
- Could a toga backend target the native web? Yes:
  http://freakboy3742.pythonanywhere.com/
- Channels will help with moving other aspects of Django into the modern web.
- Building a mobile enabled real-time app (e.g. chat) in 15 minutes is something
  that we should aim for in our tutorials and feature-set.
- Django's core hasn't changed in a long time. There is a limit on how long
  outside changes can be ignored until you end up being obsolete.

[batavia]: https://github.com/pybee/batavia/
[rubicon]: http://pybee.org/rubicon/
[voc]: http://pybee.org/voc/

### Q&A

There is a big difference between a performing todolist and a performing
large-scale app. Does Toga work for that?

- Russell hasn't tried that yet but has reason to believe that it should work.
- As Toga is client-side it should scale by default.

Why Batavia?

- A ship that sailed to Australia but only made it to Java.

What about Jython? Where's the difference between that and VOC?

- VOC just runs code. It doesn't have a REPL or something like that. Jython is a
  fully functional version of a Python interpreter. Some of its dependencies
  don't work well on Android.

There is a difference between doing validation and having a full-fledged
framework like React or Ember. How would you integrate that into these
frameworks?

- It is possible but still a bit fiddly.

There is a ton of tooling that we'd have to catch up with. Things like
debuggers et al. What do you do if this compiled code breaks?

- Creating sourcemaps should be possible but hasn't been done yet.
- Right now if code fails, you have to look through bytecode.

How big is the risk of running Python as beautiful hammer?

- There is sometimes a value in being polylingual
- But smaller things a monolingual approach has huge benefits there to get
  people started.

Is there a security risk of shipping bytecode to the client?

- Keep an eye out 😉
