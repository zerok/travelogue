---
date: "2016-03-30T14:41:50+02:00"
journeys:
  - djangocon-europe-2016
title: "Rub-a-Dub Rubber Duck: Don’t Be Afraid to Debug! by Anna Ossowski"
tags:
  - session-notes
---

[Anna Ossowski][] is a director of the PSF, PyCon Open Spaces-Chair, DjangoCon
US Communications Chair, and group leader of [PyLadies Remote][]. She also
worked for [Eldarion][] as the Pinax community manager.

[Anna Ossowski]: https://twitter.com/OssAnna16
[eldarion]: http://eldarion.com/
[pyladies remote]: http://remote.pyladies.com/

<!--more-->

- Feel more confident when you encounter a bug and don't be scared.
- Multiple types:
    - Syntax errors
    - Runtime errors / Exceptions
    - Logical errors usually don't end in an error message or stack but make the
      application to behave in an unexpected way.
- Debugging errors
    - Google: Only when you can formulate your problem properly.
    - Rubber Duck Debugging: You explain a rubber duck the issue. This way you
      force yourself to think a problem through in a different way. (@zerok: I
      use a Teddy bear or my little Gopher for that 😊).
    - Hypothesis: Write down multiple hypothesis and go through each one.
    - Code changes: Introduce debug statements and/or refactor your code into
      smaller chunks that are easier to understand and debug. You could also
      force yourself to comment every single line of your code to get the
      narrative and flow. Same goes for flow charts.
- Prevente bugs by making your code easier understandable.
- Check the bug tracker of every involved project
- Reproducing bugs in order to track down if it might have something to do with
  your setup.
- Tools
    - [django-debug-toolbar](https://github.com/django-debug-toolbar/django-debug-toolbar)
    - [pdb](https://docs.python.org/2/library/pdb.html)
    - [pyflakes](https://github.com/pyflakes/pyflakes)
    - [pylint](https://www.pylint.org/)
    - pychecker (@zerok: On sourceforge. Won't link to that 😉)
    - [pep8](https://pypi.python.org/pypi/pep8)
- Try to set a time-limit before asking a friend or doing something else that
  has nothing to do with your problem.
- Break all the things 😉
