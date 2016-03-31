---
date: 2016-03-31T10:51:56+02:00
title: "Introducing Django To The Foreign World by Bashar Al-Abdulhadi"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/21
speakers:
  - name: Bashar Al-Abdulhadi
    website: https://about.me/Bashar
    bio: |
      Works for [KuwaitNET](http://kuwaitnet.net/)
---

## Notes

- In Kuwait it is usual that you have business cards (among other things) in
  English and Arabic.
- Django is already very welcome to non-developers and it doesn't matter where
  you're coming from or what language you speak.
- DjangoCon Europe has attendees from more than 40 countries, more than 30
  languages are spoken from 3 different language directions (left to right,
  right to left and top to bottom (LTR on the web)).
- History or Arabic and the internet
    - Communication in the beginning was through IRC with relatives studying
      abroad, but that doesn't support Arabic letters. Arabish was created (mix
      of Arabic and English). Unlike other such transliterations Arabish also
      uses numbers. "Q8" means Kuwait, for instance but in other places numbers
      simply resemble an Arabic letter more closely and are used for this
      reason (these are just two examples)
    - Some startups also adopted this language but there were also services
      before that like [yamli](http://www.yamli.com/).
    - Gmail also supports Arabish
    - UIs started to change and be flexible enough to also support RTL
      renderings for languages like Arabic.
- There were challenges when transforming from Arabish or English to real Arabic
  as systems started to support the language.
    - Fonts have joined letters, even Python previously had issues with these.
    - Arabic fonts were not well supported and so many people went with using
      images instead.
    - Encoding in databases as most are running with Latin-1 or something
      similar by default. The result was the obivous: a complete mess. At least
      the breakage here was consistent so people started to be able to read
      broken renderings 😉
- A technical dictionary was created to standardize technical terms in Arabic.
    - http://www.arabeyes.org/Technical_Dictionary
    - There are discussions for each word and there is a voting process before a
      word is picked.
- Standards finally came in (Unicode)
- 99.9% of projects request multi-lingual support.
- Big sites like Wikipedia and Google support RTL.
- Arabizing Django and the associated packages to be able to use Django projects
  to clients.
- [django-parler](https://github.com/edoburu/django-parler) was presented by
  Deiederik van der Book at DjangoCon Europe 2014.
- Motivated by that presentation, the speaker started to 1005 translate Django's
  core through transifex.
- And then to Django CMS and so on 😃
- There is always something small that you can contribute which helps the whole
  community.
- Collaborative translation through services like Transifex helps greatly here
  to coordinate.
- Don't think that your package will never be used by a community that requires
  RTL or TTB. You can never know 😊
- Support your own language on other packages.

### Q&A

Are there similar innatives for other RTL languages?

- Yes, there are for instance for Farsi.

Are there any best practices for dealing with incoming translations and on-going
support?

- Translators are directly connected with the package's author. This connection
  can be used to answer questions more directly.

CSS and other changes are required to properly support RTL. Is there a good way
to involve the community in those adaptations?

- There are already many innatives that are working on this. Bootstrap et
  al. are actively working on this.
- There are challenges when mixing languages (English and Arabic) but it is
  being worked on.
