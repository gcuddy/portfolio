---
tags: [map, source/movie, source/music, source/paper, source/theatre, source/art, source/quote, source/clippings, source/video, source/talk, source/poem, source/tweet, source/article, source/newsletter]
created: 2021-03-12
---
up:: [[Home]] 

[[Books to read MOC]] | 

Types of sources I'm noting:

`#source/book  `                      


Quotes/Commonplace book:
here's an idea:

```dataviewjs
const quotes = dv.pages("#source").file.tasks.where(t => t.status === '"')
console.log({quotes})
dv.taskList(
quotes
)
```

```
LIST from "Sources" SORT file.mtime desc
```

# A data view from the Sources folder
This is a simple data view pulling anything from the **Sources** folder.

```dataview
table tags
from "Sources" and -#on/readme 
sort file.name asc
```
