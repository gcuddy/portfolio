---
cssClasses: [row-alt, table-lines, table-nowrap, table-numbers, table-tabular]
banner: "![[gus_hemingway_writing_desk_8bc3735e-6584-4a24-95ab-a647e4e9612a.png]]"
banner_y: 0.46386
---

up:: [[Home]]
tags:: #atlas/scope

(now basing this a bit off [[Soren Bjornstadt Tour Through Zettelkasten 2021 (video)]] "write" tab)
Also want it to mimic [[Maggie Appleton]]'s digital garden (see her video re Tana)

https://youtu.be/GjpjE5pMZMI

## Stubs:

```dataview
table (date(today) - file.mday).day + " days ago" as "Last Touched" from #stub sort file.mtime desc
```

## Notes to develop

```dataviewjs
const notes = Array.from(dv.pages('#note/develop'));

const table = await Promise.all(notes.map(async (note) => {
	const content = await dv.io.load(note.file?.path);
	const word_count = content?.split(" ").length;
	
	return [
		note.file.link,
		word_count || 0
	]
}));

dv.table(["File", "Word Count"], table)

```

## Missing (dangling links)
(limited to 20)
```dataviewjs
let r = Object.entries(dv.app.metadataCache.unresolvedLinks) .filter(([k,v])=>Object.keys(v).length).map(([k,v]) => [dv.fileLink(k), Object.keys(v).flatMap(x=>dv.fileLink(x))])
.slice(0,20)
console.log({r})
dv.table(["File", "Unresolved Links"], r)
```







---



(a note can exist in multiple categories or might be in wrong category entirely, try not to take it too seriously)
Boat: a note that lives by itself and needs to be connected
Develop: a note that isnt' fleshed out, probably isn't 200-500 words see [[200 - 500 Words as the Note Mass Index 20220913015251]]
Refactor: a note that needs to be reworked, possibly merged with other notes
Tidy: A note that has lots of messiness in it: maybe saved searches, link dumps, or random dataview scopes
Delete: A note that wants to be deleted, but should be checked to see if anything can be pulled out. (maybe this has a lot of similarity with refactor)

Question: A note that is, actually, a question. This is sort of a higher order lens.

Remember to set up [[local graph]]!







## Lost Notes

These are notes that don't have any inlinks and/or outlinks (and aren't tagged already with stub).

```dataview
TABLE length(file.outlinks) as "Outlinks", length(file.inlinks) as Inlinks from -#stub where length(file.outlinks) < 1 and length(file.inlinks) < 1 and !contains(file.name, "excalidraw")
LIMIT 20
```

## Needs Attention

```dataview
table file.mtime as Modified from #note/develop or #note/tidy 
```

## Needs Incision

```dataview
table file.mtime as Modified, topic, file.etags from #note/refactor or #needs_incision 
```



# Notebox 🗃️



Should I used Spaced Repetition for this as well, ala [[Using Obsidian Spaced Repetition for Writing Inbox]]

Here's my writing pieces:

```dataview
list from #writing
```

## Inputs

```dataview
list from #input
limit 20
```

## Claims

```dataview
list from #claim
```

## Threads 



```dataview
list from #thread
```




## Boats ⛵
lonely boats floating in the ocean, need to be connected
also check `#inbox` - it's a mess.

make this limited, and a mix of old and new.

```dataview
TABLE (date(today) - file.mday).day + " days ago" as "Last Touched", file.inlinks, file.outlinks from #note/boat or #boat sort file.mtime asc LIMIT 20
```


and `to/process`

## Develop 🍃

Add and develop the content. Link to other notes. Add an uplink, MOC, and a tag if necessary.

```dataview
TABLE (date(today) - file.mday).day + " days ago" as "Last Touched", file.inlinks, file.outlinks from #note/develop sort file.name asc
```

## Refactor 🪚

```dataview
TABLE (date(today) - file.mday).day + " days ago" as "Last Touched", length(file.inlinks) as "Backlinks", length(file.outlinks) as "Outgoing Links", noterefactor from #note/refactor or #refactor sort file.name asc
```


## Tidy 🧹

```dataview
TABLE (date(today) - file.mday).day + " days ago" as "Last Touched", file.inlinks, file.outlinks from #note/tidy sort file.name asc
```

## Questions ↯
TODO: add in other means of questions, maybe make into dataviewjs so i can better handle inline tags vs note tags
```dataview
TABLE (date(today) - file.mday).day + " days ago" as "Last Touched", notequestion from #note/question sort file.name asc
```

## Delete 🗑️

pull out tidbits then delete

```dataview
TABLE (date(today) - file.mday).day + " days ago" as "Last Touched", file.inlinks, file.outlinks from #note/delete sort file.name asc
```



## Dangling Notes



```dataview
LIST
from ""
where length(file.outlinks) < 1 and length(file.inlinks) < 1
group by file.folder
```
hl
