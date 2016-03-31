---
date: "2016-03-30T15:41:36+02:00"
journeys:
  - djangocon-europe-2016
title: "To mock, or not to mock, that is the question by Ana Balica"
tags:
  - session-notes
---

[Ana Balica][ab] works for Potato in London.

[ab]: https://twitter.com/anabalica

<!--more-->

- Mocks simulate the looks an behaviour of real objects
- Useful when integrating real behaviour into the tests is impossible or
  impractical.
- Mocks are not stubs. Stubs are constructs that return canned responses and
  only react to what was setup before the test. They can also retain information
  from the test-run (how often they were called, ...).
- `unittest.mock` (or the backport package mock) comes with Python >= 3.3.
- Mocks are callables and can fake any property or behaviour.
- `MagicMock` comes with some default implementations for the most popular __
  methods.
- `patch` acts as a context manager or decorator and lets you setup mocks for a
  specific duration.
    - Used mostly for correcting namespacing.
    - Helps making tests system-agnostic
- "Mock the object where it's used, not where it came from"
- Examples
    - os.environ
    - timezones
    - random numbers
    - streams
    - IO
    - HTTP requests and responses
- Bad mocks
    - Incomplete tests that might end up being ignored too long and therefore
      hide wrong behaviour
- Try to provide functional tests to get the complete picture of a feature.
- Use both: Unit-tests and functional tests and hide mocks from your functional
  tests.

## Q&A

Are mocks sometimes indicators that you might have a larger issue in your code?

- Django is sometimes so packed, that it is hard to seperate or restructure and
  therefore mocks are useful.
- If you overdo mocks, there *is* something wrong with your code
  structure/architecture.

How to convince product owner to invest into more testing.

- Simply try and even play the cool-kids-card.
