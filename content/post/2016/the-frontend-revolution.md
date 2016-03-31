---
date: 2016-03-30T10:54:53+02:00
journeys: ["djangocon-europe-2016"]
title: The Front-End Revolution by Claudina Sarahe
tags:
  - session-notes
---

First keynote of the day by [Claudina Sarahe](https://twitter.com/itsmisscs)
from NYC where she works for [Casper][] and is active in the [Sass][] community.

[casper]: https://casper.com/
[sass]: http://sass-lang.com/

These are just my raw notes from the talk. If I can find the time, I will clean
this up and add more links 🙂

<!--more-->

- New tools have not only changed the field but also our lives as developers.
- They change our behaviour.
- Revolutions happen when we adopt new behaviours.
- What do we mean with behaviour? Doctor Fogg's model: Motiviation, Ability and
  Trigger form a behaviour.
      - Motivation is subjective and personal. You can't rely on it to influence
        general behaviour.
      - Ability: Varies for each individual. Persuasive technolgoies focus on
        making things as simple and easy as possible
      - Triggers: 3 characteristics: We notice it, association with target
        behaviour, trigger has to happen when motivated and able. A trigger has
        to happen if ability and motivation are above a certain threshold. If
        the ability is low, the motivation has to be much higher for a trigger
        to succeed.

## JavaScript

- After the first bubble multiple JS frameworks appeared to make the browser
  more of an interactive tool (Ext.JS, ...)
- In 2006 [jQuery][] entered the market but did some things nobody else was
  doing:
    - simplify the DOM
    - Launched with documentation
    - Invitation to participate
- Only days after the launch the first plugin was contributed.
- To this date it is one of the most popular JS frameworks out there. The design
  decisions here have proofen themselves.
- Collaboration is extremely important in developing tools and frameworks.

[jquery]: https://jquery.com/

## Django

- Django has put an emphasis on providing quality documentation.
- Django at the time was easier to setup and get up and running compared to most
  other Python frameworks.
- Open for contributions through the core and through plugins (or apps in this
  case).

## CSS & SASS

- CSS quite recently still had the same issues as JS had back before jQuery.
- CSS3 features were poorly implemented in the various browsers and so hacks
  were needed all over the place.
- CSS preprocessors became possible to generalize these fixes.
- SASS perhaps tried a bit too much early on with a completely different syntax
  and it had a hard dependency on Ruby.
- The SASS team learnt from Less added a more CSS-like syntax.
- Open for contributions within the language and also through compass plugins.
- sache.in hosts sass and compass extensions (189 projects or more)
- libsass was written by a frontend developer who had previously never written a
  line of C.

## Extensible web movement

- "Where would we be, if we asked for permission every time?"
- Extensible web movement tries to apply all that has been learnt in these
  communities to the web in general.
- It was hard to get the people out there to participate in the working groups.
- Rethinking their organizing tools through use of Github instead of mailing
  lists et al.
- Process:
    - Developers can submit proposals openly on Github
    - Prototype in JavaScript
    - Iteration of this prototype
    - If interesting enough, a proposal is made to the W3C.
    - Developers and writers work from live prototypes.
    - Developers can create "prollyfills" so that these new proposals can be
      used right away.
- The magics are removed from the web and the process is opened up.

## New behaviours

- Groups and indiviuals try radical things by removing barriers to
  collaborattion
- A supporting environment is created
- Small world networks that are connected with each other and form one big
  network
- Resistant to damage.
- Designed for resiliance
- "Participation Revolution"
- The web has a culture and this is shaped by everyone participating.
- We must encourage and reward participation and we have to move this ethos
  beyond the technical community.
- We have to be open to different viewpoints.
- It's not silly to release a little application that only you will use.

## Q&A

We've made some massive mistakes. How can we prevent others from doing the same?

- Same with parents and children
- Failing first is sometimes not bad.
- Learning how to correct a mistake quickly and never do it again.
- We should focus on moving past these problems.
- We can't say that everything we've learnt also has to work for somebody else.

How do we find a way to balance the need for stabilty with the need for
innovating?

- The speed of innovation is something good.
- It depends on the constraints of your project. If you can use the new stuff,
  do and enjoy it.
- For new people coming in, sticking with the fundamentals and a core stack
  should be used.
- Too many choices are actually bad, but it is good for your to think about the
  options and evaluate.
- You won't die if you're not using the latest stuff.

How can you finance opensource and that speed of innovation?

- We as developers make companies a lot of money so we should start putting
  preasure on these companies to work here.
- Funds have to distributed appropriately.
- The money is there but it's not yet coming to us.
