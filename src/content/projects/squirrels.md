---
title: Squirrel Stories
description: Playing with the Central Park Squirrel Census.
dates: "2023"
pubDate: 2023-11-07 00:00:00
url: https://squirrel-stories.vercel.app/
tags:
  - Dev
  - Data
  - Recurse Center
  - AI
technologies:
  - Svelte
  - Python
github: gcuddy/squirrels
scope: experiment
iframe: true
---

A fun data experiment. Our small group looked at the very robust [2018 Central Park Squirrel Census](https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Squirrel-Data/vfnx-vebw), an incredible open dataset. We played with the data in a few ways, like creating a Voronoi diagram of the data mapped over Central Park:

<iframe width="100%" height="476" frameborder="0"
  src="https://observablehq.com/embed/db61bccf7beee7f9@125?cells=voronoi"></iframe>

But for this experiment, we looked at the Stories collected by the census takers. Since some of them were so wonderful, we created a fun game of allowing the user to choose if a squirrel story is real or AI-generated. We massaged the data exports with Pandas, got it into plain text and JSON. We then generated a list of static AI stories by feeding it into the OpenAI API.
