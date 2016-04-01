---
date: 2016-03-31T12:59:30+02:00
title: "The Power and Responsibilty of Unicode Adoption by Katie McLaughlin"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/11
speakers:
  - name: Katie McLaughlin
    website: http://glasnt.com/
    bio: Operations engineer
---

## Notes

- 7 bits to encode the entire English alphabet
- Tht works great for the Americans but what about all the other peoples out
  there?
- 255 chars are enough for everyone, right?
- How to deal with Asian languages?
- Unicode was born which allows over a million different code points. Only 10%
  are used right now.
- UTF-32 is the fixed-length standard.
- UTF-8 is more flexible and backwards compatible with ASCII
- \u for hex encoded chars.
- You can also have combination characters like the additions of an umlaut after
  the base characters.
- Everybody but the Japanese were happy with that.
- Emojis were not in Unicode yet. But in Japan initially every network had their
  own set of emojis.
- A combined effort between Japanese telecoms and Apple and Google lead to the
  introduction of emojis into Unicode in 2010 (version 6).
- 6.1 added more faces which is supported by most systems
- 7.0 added things like the vulcan sign in 2014.
- 8.0 added even more things 😉
- Python3 offers a unicodedata module to do things like reverse-lookups from
  emojis to their names in the standard.
- Apple pushed emojis rather vehemently and Android had to follow as quickly as
  possible to stay competitive.
- That may also be the main reason why emojis are half-broken right now.
- Google got colors/variations wrong during this race for instance
- Twitter has opened up the licensing on their emoji set.
- How do you get a new emoji into the set?
    - There is an own board for that!
    - Is there a compat. issue?
    - Is it frequently used?
    - Is it distinctive?
    - Is something missing for completeness in a subset?
    - How frequently is it requested?
    - No branding allowed
- OSX 10.11 already support in the shortcut menu up to 8.0
- Most places on the web support short-codes (like `:cake:`) in order to get
  around possible compat. issues with the client. But thare are rarely
  consistent.
- auto-correct is often not helpful here when it replaces code-snippets with
  emojis on copy&paste.
- Try to keep your apps and site accessible. Provide fallback options for people
  with older devices are devices where the vendor simply got it wrong. Images
  and alt-attributes pointing to the codepoint. Also use the tooltip to include
  the meaning of the emoji.
- There is a hardware solution for that with an emoji keyboard 😉
- v9 will be released this year including an emoji for "selfie"...
- v10 in 2017 with more food et al.
- Humanized emojis are getting colortones ("Fitzpatrick modifiers") for more
  than just the skin. TR#52.

## Q&A

Are there directionality issues with emojis?

- TR52 suggests the including of fixes for that to be able flip
  directions. Usable for instance for pointers, fingers, ...

What emoji-set would you recommend?

- There are only a handful sets that have sufficiently open licenses.
- Not supposed to use the apple set (license + only images)
- Twitter's set or Emoji One set

Can't you use color modifiers on non-human emojis like drinks etc.?

- Things like switches through CSS are currently considered.
- But if you want to have that in the standard, comment on TR52 😉
