---
id: fih6dsddpui
title: local graph
originalFileName: local graph.md

---

up:: [[Obsidian]]

Depth to: 2 or 3

## filters

these are the filters i usually use:

I filter out the Home Note, Kanbans, excalibrain, the "Readwise Syncs" note, and my daily notes (because these often clutter things up)

`-file:(Home 🌎) -file:(Readwise Syncs) -file:⫿⫿⫿  -file:☰ -file:excalibrain -tag:#journal/daily`

I usually filter out dated notes too, because they clutter up the graph:

`-file:(Home 🌎) -file:(Readwise Syncs) -file:⫿⫿⫿  -file:☰ -file:excalibrain -tag:#journal/daily -file:(/\d{4}-\d{2}-\d{2}/)`

I also filter out completed projects, so this is my **final filter**:

`-file:(Home 🌎) -file:(Readwise Syncs) -file:⫿⫿⫿  -file:☰ -file:excalibrain -tag:#journal/daily -file:(/\d{4}-\d{2}-\d{2}/) -file:▲ -tag:#project/completed -tag:#project/archived`
This is currently tied to the text expansion shortcut <kbd>ggraph</kbd>

And here's  a version without filtering journal entries:
`-file:(Home 🌎) -file:⫿⫿⫿ -file:☰ -file:excalibrain -file:▲ -tag:#project/completed -tag:#project/archived`
(beware this one though)

## groups

* `tag:#note/person OR file:ꆜ OR path:Network` - hsl(0 70 60)
* `file:△` - hsl(40 70 60)
* `tag:#source` hsl(32 79 34)
