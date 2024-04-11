---
title: Citi Bike
description: A dead simple site to find the nearest empty station.
image: ./assets/citibike.jpg
dates: "2023"
pubDate: 2023-08-02 00:00:00
url: https://citibike.vercel.app
tags:
  - Dev
  - Geolocation
  - NYC
  - Hacky
technologies:
  - Sveltekit
  - JSON scraping
github: gcuddy/citibike
scope: experiment
---

Okay, Citi Bike got rid of this [loophole](https://nyc.streetsblog.org/2023/09/19/say-good-bye-to-the-free-citi-bike-e-bike-loophole), so this site is less relevant: it finds the nearest station with no bikes available, so you can get a free ride on an e-bike (by docking it and undocking it again).

My friend and I were talking about this, and I thought it would be fun to build a site that would find the nearest empty station. I built it in a few hours, and it's live at [citibike.vercel.app](https://citibike.vercel.app). The most fun part was spelunking in the Citi Bike JSON data to find the right fields to use. Nothing special, but fun and useful for me :~)
