---
date: "2016-03-30T16:38:59+02:00"
journeys:
  - djangocon-europe-2016
title: "How to Upgrade to the Newest and Shiniest Django by Susan Tan"
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/24
speakers:
  - name: Susan Tan
    website: https://twitter.com/ArcTanSusan
    bio: |
      works at Cisco and was a core committer at [openhatch.org](https://openhatch.org)
---

- Why shoud you upgrade? Because you get new features and fixes and it makes it
  easier to always stay up to date for future updates.
- http://semver.org for a quick intro to semantic versioning.
- Django doesn't completely follow semver. 1.7 should probably have been a 2.0.
- When is it the right time to upgrade?
    - When the version you're using is no longer supported.
    - Do a patch upgrade if possible.
    - If you don't have decent test coverage it gets harder because you can't
      easily check if your code is still working after the upgrade. So increase
      your coverage 😉
- On the download page you can find a detailed roadmap that also indicates how
  long each release is supported.
- What makes upgrading hard?
    - It's hard to know how long an upgrade will take, what will break.
    - Confirming that everything still works takes some time depending on your
      test coverage.
    - Always move from local to staging and only after that to production.
- For openhatch it took nearly 4 weeks to do one upgrade.

## Steps

- Uninstall django and install the target version (Never skip versions as you
  might miss deprecation warnings and removed APIs.)
- Run your tests
    - If they succeed, make sure that your coverage is good enough to be a
      reliable indicator for a successful upgrade.
- Check that the UI works locally
- Update requirements.txt and documentation.
- Upgrade the testing environment and test again.

## Challenges

- Dependencies may break
    - Upgrade the dependencies or patch them or switch to a similar app/library.
- Deprecations
    - Make sure to read the release notes as they have hints on how to get
      around that.
- Lots of repetition
    - You usually have to change the same thing in multiple places. Try to
      automate that.
- In general lots of things to do. Prepare a checklist beforehand in order not
  to forget steps.

## Django Upgrade Open Space

There will be a Django Upgrade Open Space during the weekend where people can
collaborate on updating their Django projects.

## Q&A

Is there anything that django could make better to improve this process?

- The documentation and release notes is already very well done. But here even
  more is even better 😉

How do you go from south to django migrations?

- Deleted old migrations and recreated the new ones.
- The official docs contain a section describing how you could do an upgrade
  with 1.7.
