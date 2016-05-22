---
date: 2016-04-01T16:35:48+02:00
title: "Using Django with service workers by Adrian Holovaty"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/10
speakers:
  - name: Adrian Holovaty
    website: http://www.holovaty.com/
---

## Notes

- SoundSlice provides interactive music lessons
- Chrome offers a simple way to fake being offline through the inspector
- SoundSlice gives you a nice offline-message when you're offline but also let's
  you mark sections of offline-use. These will be listed in offline-mode on the
  index.
- This is possible thanks to service workers
- Service Workers intercept browser requests an can change requests and
  responses dynamically.
- This way you can control which requests actually leave the browser and
  therefore work with offline-data.
- fetch() API, has a cache that is seperate from your browser's cache and can
  also execute custom JS.
- For network operations add an event listener to the `fetch` event.
- Events here have a `respondWith` method for reacting to that event
  specifically.
- Possibilities
    - Caching
    - Preloading assets when the service worker is registered. Use that for
      instance to download core JS and CSS files.
    - Alter data depending on the user
    - Enable offline usage.
- So far only works in Chrome, Firefox and Opera (to some degree). Edge will
  eventually support it. Apple has it in their 5-year-plan...
- Custom offline pages are cool 😊
    - during the registration download an offline-page
    - In the fetch handler check if you're online or offline
    - Combine that with an explicit way for users to save data for offline
      usage.
- Problems
    - We are caching a lot of stuff
        - There is a limit of how much can be cached depending on the user's
          browser.
        - App Shell architecture means that the service worker downloads the shell of
          the application during the registration and then the browser only downloads
          what's different from page to page.
            - Tell django that it only has to server the actual content minus the shell
              for instance with a query param or something similar.
    - Cache invalidation
        - Use hashed URLs for assets.
        - Load the app shell on every page load or in the ajax response include
          session information to be rendered within the shell.

### Q&A

What's the difference between standard browser caching an service worker
caching?

- Probably no real performance difference
- More dynamic

Service-workers in an offline-mode to capture and replay user requests?

- Not yet but looking forward to it

Can service workers intercept websocket requests?

- No idea

Logout + channels + service workers + caching (? 😉)

- Good idea 😉
