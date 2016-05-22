---
date: 2016-04-01T15:35:02+02:00
title: "Safe-Ish by Default: The Django Security Model and How to Make it Better by Philip James"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/23
speakers:
  - name: Philip James
    website: http://www.philipjohnjames.com/
---

## Notes

- If someone is asking you if django is safe, what do you say?
- There are things that django does out of the box to make the result safe-ish.
- How will it help against XSS?
    - Escapes HTML entites by default in the templates.
    - Details in the `mark_safe` function
    - Use `mark_safe` explicitly or the `n` or `safe` filters to disable
      that. Usually only use them if you're absolutely sure about your data.
- CSRF
    - `CsrfViewMiddleware` in combination with the `csrf_token` tag and a
      dedicated cookie.
    - You can disable it with `@csrf_exempt` with disables the middleware for
      the specific request.
    - The cookie is not set as "http-only" which is a potential security issue
      but is necessary to allow XHRs
- SQL injection
    - "Don't ever confuse code and data" -- Alex Gaynor
    - When you create a query in the ORM, the data and the code are kept
      seperate throughout the entire processing chain.
    - `extra()` and `RawSQL()` are things you should again only use when you
      know what you're doing. In recent releases more and more use-cases for
      these two have been moved into proper API methods, though.
- Clickjacking
    - Used for phishing attacks
    - `XFrameOptionsMiddleware` helps here
- Host Header Validation
    - Is also responsible for that error nearly everyone sees when they deploy a
      django app to production for the first time
- Sessions
- Passwords
    - Strong passwords
    - with 1.9 built-in password protection
    - Automatic algorithm update
        - The next time a user logs in, the password will be compared with the old
          hash but updated with the new one 😃
- How can we make this even safer?
    - Keep on the look-out for new security threats but also stay careful.
    - HTTPS
    - CSP Reporting
    - `django_encrypted_field`
    - [django-secure](https://github.com/carljm/django-secure) (more and more
      things from there go into django's core)
    - [Pony Checkup](https://www.ponycheckup.com/)
    - [Make Django Ridiculously Secure](https://www.youtube.com/watch?v=H2llNbMe-V4)
      talk from DjangoCon US 2015

### Q&A

2FA?

- There are some packages out there but the speaker hasn't implemented 2FA
  directly so far.

API security with Django?

- Django Rest Framework already helps here greatly. Check the auth section in
  the docs. Use token and use oauth. Avoid username/password if possible.

Row-level data security?

- There is a package for that: Django-guardian.
