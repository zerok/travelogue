---
date: 2016-04-01T15:06:22+02:00
title: "Don't be afraid of writing migrations by Markus Holtermann"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/4
speakers:
  - name: Markus Holtermann
    website: https://twitter.com/m_holtermann
---

## Notes

- Django 1.7 brought us the migration framework
- Since then much has changed: bug fixes, speed improvments, ...
- There are many things, though, that can't be done automatically and so you
  normally eventually end up writing your own migrations.
- What does the migrations system look like?
    - Migration files have to expose a single Migration class inheriting from
      `django.db.migrations.Migration`.
    - A migration declared `dependencies` to indicate, what migrations have to
      come first.
    - `operations` within the Migration declares what is happening during the
      migration. They are run in order and in reverse order when reverting a
      migration.
- 3 recipes
    - Optimizing makemigrations output is someting you should do once your
      project becomes more complex.
        - By default, relations are created as the very last step in a
          migration.
        - Migrations for models are processes in alphabetical order.
        - By knowing that you can combine createModel and foreign key operations
          into one.
    - Adding a non-nullable column
        - There is an operation called `RunPython` with two functions: One that
          is executed on migration and one on revert.
        - First create a migration with a nullable field, then create a
          migration that updates the fields from an external data source,
          finally make it non-nullable again (use the "ignore option (2)" now
          since the data is already ok).
    - Rename an app without dependencies
        - It's still not easy but at least it's possible unless you have
          incoming foreign keys.
        - Use `Meta.db_table` to hardcode the old table names in one migration.
        - `migrate old_app zero --fake`
        - Fix foreign keys in the other tables and rename the app
        - `migrate new_app --fake`
        - Remove db-table attribute


### Q&A

If I have a 3rd party application and want to remove later on from my project,
how can I get rid of these tables with migrations?

- First make sure that nothing refers to this app's tables anymore
- Unmigrate the migrations in that app.

Does Django rename also the constraints and indexes?

- No, they are not renamed, but there might be an issue in the tracker

Is there a difference between creating two migrations for the null-example above
or having a custom Python message that does all of that?

- Every migration is run within its own transaction which makes two migrations
  necessary at least in PostgreSQL.

What is the best way to minimize downtime when doing migrations?

- You would probably need to have 2 versions of your application running with
  seperate stacks or something like that. It's not yet really solved for
  Django.

Should we keep using loaddata and dumpdata?

- Dont use loaddata or dumpdata during migrations. Using serializers in there
  *will* blow up.
