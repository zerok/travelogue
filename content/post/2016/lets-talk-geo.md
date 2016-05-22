---
date: 2016-04-01T13:01:41+02:00
title: "Let's talk Geo: Adding the 'where' to your Django project"
journeys:
  - djangocon-europe-2016
tags:
  - session-notes
website: https://2016.djangocon.eu/speakers/19
speakers:
  - name: Corryn Smith
    website: https://twitter.com/HolaCorryn
---

## Notes

- GIS: Geographic information systems (or science depending on where you're
  coming from)
    - Environmental studies and science
    - Work with spatial data
    - Data that represents places on Earth
- GIS helps you to find a place for your new business, where to build a park, a
  playground, what have you.
- Helps you represent geographical change over time with maps and other tools.
- Use-cases in your projects
    - Define service areas
    - Map with favorite restaurants or other points of interest
    - Thematic or density maps for display where attendees are coming from the
      DjangoCon Europe 2016
- How do we get that into Django?
    - GIS and Python through ArcMap (which includes Python) and there is ArcPy
      for task automation.
    - [Python Scripting for ArcGIS](http://esripress.esri.com/display/index.cfm?fuseaction=display&websiteID=276&moduleID=0)
    - GeoDjango already comes with Django and there is a great tutorial in the
      core documentation.
    - But the terms are highly confusing for newcomers.
    - Spatial database: A database that can work with geographic
      data. PostgreSQL with PostGIS can do that.
    - Geographic data: Shapefiles are vector files that contain points, lines,
      or polygons. Usually you get a complete set of files which contains things
      like projection information alongside the polygons to map them to the
      world.
        - You can also make your own data using things like GPS trackers or
          create them using GIS software like ArcMap or QGIS (which is free)
    - You can import basic geo data during the migration step after installing
      geodjango.
    - Geo-friendly API through Django Rest Framework
    - Mapbox for customized map renderings that can then be rendered for
      instance with LeafletJS
- Example apps like a cementary mapping

### Q&A

OpenStreetMaps?

- You can simply treat OSM as a layer that you can use with Mapbox and Leaflet.
