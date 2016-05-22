---
date: 2016-04-01T10:51:44+02:00
title: "Lightning Talks, Day 3 part 1"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
---

## DUTH 2016
Mark

- There will be once again a Django Under The Hood this year from 3rd to 6th
  November.
- Same location as last year (Pakhuis de Zwijger in Amsterdam)
- Technical focus
- https://djangounderthehood.com

## Type hints
Dmitry (from JetBrains)

- PEP0484
- Was added Python 3.5
- You can now express type information in function arguments.
- You can also use this to some degree in Python 2.7 but through comments on top
  of the docstring.
- But how should you deal with adding these annotations to your existing code
  base (like the Python core)?
- PyCharm debugger can collect type information (for example collected after
  running your unittests) and you can then easily annotate your functions.

## 6 ways to make beginner tutorails more beginner friendly
Nicholle James, @oboechick_

- Don't use words like "easy", "fast", or "simple" since if they don't apply to
  a specific person, that person will more easily get demotivated.
- "There is no question that is stupid or boring"
- "Many beginners don't think to Google first, don't expect it of them."
- Don't assume a shared vocabulary like the word "set", which has too many
  definitions not to be ambiguous 😉
- "Break it down more than you think you need to"
- Have a backup plan handy for situations where the network breaks down, there
  is a power outage or something like that.

## Text to Speech
Sheryll

- Tools
    - Text on Top Reporter
    - Total Eclipse Application
- Hardware is basically an updated version of what you might have seen in courts
  with the paper slips.
- vowels down at the bottom.
- You press multiple buttons at once then the dictionary comes in and
  autocompletes the actual word you wanted to type.
- You can sync the transcript with the audio tracks. Clicking on a word will
  scan to the relevant location in the audio track.
- The software will also suggest new shortcuts from longer words that were
  recently typed.

## Docker
Maikel Vlasman

- Docker makes it easier to move apps from dev to staging to production
- docker-compose
- You can combine multiple docker-compose files using `extend` and `override`.
- A base file that is then extended for each environment.
- Override still doesn't make it easy to remove containers. They simply set the
  container to be a busybox.
- Extend is more explicit since you still have to define your containers and
  also write on what they are based in another file.
- For their use-cases extend is better than override.

## 10 or 11 things I love about Django
@misterrios

- You can create self-referencing foreign keys
- Management commands and managers
- It got your back for things like password policies through validators which
  was introduced in 1.9.

## Requirements for the Ember workshop
Emmanuelle Delescolle

- http://bit.ly/djember_requirements
- Optionally the Ember inspector and the Django Debug Panel

## Responsible DDoS
Akos Hochrein, Prezi

- Swiss cheese model: Each service you have is a layer of cheese. Each has
  issues but normally the next layer should catch an error. Often 😉 Sometimes an
  error goes all the way through.
- Make sure that users can't cause such an issue.
- Debug with pdb
- Have a good monitoring solution

## PyCon Namibia 2016
Daniele Procida

- Univeristy of Namibia
- 118 attendees with 50% being women
- 63 Namibian students and 30+ DjangoGirls
- Most tickets to locals were free because otherwise it would have been not
  affordable to them.
- Raspberry PIs for students
- Not just Python
- Got coverage on TV
- There were student protests going on at the same time but it took only 45
  minutes to book an alternative venue.
