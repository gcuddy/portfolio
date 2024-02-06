---
up:
  - "[[Home]]"
related:
  - "[[Add]]"
  - "[[Communicate]]"
tags:
  - map/view
obsidianUIMode: preview
cssclasses:
  - max
created: 2023-09-06
---
Your **Relate** note is a place of joy—without expectations or obligations.

This will be a head-scratcher for a culture obsessed with tasks, but when you start giving your thoughts the honor they deserve, you start to have better and better thoughts!

Here's how it works: When you are in a note and have a feeling that you want to return to it—for some fuzzy or clear reason—just add a tag in that note. Then through the magic of data views, you can confidently use these auto-updating lists to find them later:

> [!Multi-column] 
> 
> > [!Sailboat]+ Boats 🚤
> > You probably made these notes in a rush. These [[BOAT notes]] are *lonely boats floating in an empty ocean*. All you need to do is tether them to other notes.
> >
> > ```dataview
> > LIST
> > FROM #note/boat
> > SORT file.cday desc
> > LIMIT 10
> > ```
> >
> > This sorts up to the most recent `10`.
> > 
> 
> > [!Leaf]+ Develop 🍃
> > You can develop these notes by making remarks, clarifying, and critiquing. Add your opinion and if needed cite your sources.
> >
> > ```dataview
> > LIST
> > FROM #note/develop 
> > SORT file.cday desc
> > LIMIT 10
> > ```
> >
> > This sorts up to the most recent `10`.
> > 
