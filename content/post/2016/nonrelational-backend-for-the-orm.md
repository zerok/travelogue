---
date: 2016-03-31T15:04:14+02:00
title: "Building A Non-Relational Backend For The ORM by Adam Alton"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/3
speakers:
  - name: Adam Alton
    website: https://twitter.com/altonpowers
    bio: Works for Potato
---

## Notes

- Based on potatolandon/djangae which attempts to integrate Django better into
  Google App Engine.
- Potato has many projects for Google which also brings in tons of traffic and
  you therefore having think rather early about scaling issues.
- Google App Engine helps with scaling but offers it own data store.
- The datastore kind of assumes that you are building Gmail ...
    - The limitations of that store make sense in that context.
    - Every query must use an index
    - indexes are built and replicated asynchronously.
    - No unique constraints except for the primary key
    - Updating all rows (for adding a new feature for instance) takes a long
      time.
    - IDs are not auto-incremented but random.
    - Counting is very slow.
- Integration with Django means:
    - No joins and therefore no permissions
    - No unique fields or `unique_together`.
    - GenericForeignKeys don't work due to joins
    - No concrete model inheritance (again joins)
    - No transaction.atomic because transactions are completely different in teh
      datastore.
    - No Paginator as counting is so slow
- New backend that operates in this environment
- You have to create DatabaseFeature, DatabaseIntrospection, DatabaseCreation,
  DatabaseSchemaEditor and DatabaseWrapper classes which brings all of that
  together.
- Connections are only virtual here because the app actually only uses the
  "native" SDK which handles all the communication.
- Cursor.execute expects a string that is SQL. With about 15.000 lines you can
  get around this using duck-typing 😉
    - Where clauses have to be normalized as GAE doesn't support ORs (transform to
      disjunctive normal form).
- No unique constraints
    - So there is a new table that creates combined keys into a single primary
      key there.
- ManyToMany can be emulated with fields that contain multiple values which are
  themselves PKs.
- Permissions work again through that ManyToMany trick
- ContentTypes
    - The don't make any sense 😉
    - Content types look at the DB to find out what's in the code. Basically the
      inverse of migrations.
- Model inheritance
    - Store everything in one table with an additional column for the type
      information.
- Transactions
    - There can be abstractions that make it look like there were normal
      transactions.
- Paginator without a full count.
- Started in 2013.
- 45 contributors
- Works in 1.8 and 1.9 without any modifications of django itself.
- Battle-tested
- Migrations
    - But there is no SSH in GAE... but there is a remote DB API 😊
    - Calls there can take days.
    - The goal is to handle migrations within the admin panel.
    - django only tracks if a migration has been applied or not. There is no
      "scheduled" field. That model is sadly not updatable through migrations...
- What Django Can Do?
    - Make migrations.applied nullable
    - Stop passing ints as floats


### Q&A

Have you already checked the things that landed in 1.8 which might make some of
these Query adaptations easier?

- Not yet 😃

Features that were introduced along the duration field might help with some of
the conversion issues here. Are you using them or do you do them manually?

- Uses primarily public API methods, so perhaps 😊

How did you solve the problem with joining through arbitrary models?

- It can still not do something that looks like a join but allows to deal with
  ManyToMany-like situations.
- Reverse lookups are supported to allow for lookups in both directions.

Could Django adopt the fix for GenericForeignKeys?

- There are probably ways to improve GFKs but it would be hard to provide a
  migration path here.

Why do you need migrations?

- There is a difference between a field that is None and one that doesn't
  exist. The entries have to be updated with None-value fields.

When will djangae leave beta status?

- Once migrations work
