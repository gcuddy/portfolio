---
id: rv9car42c3j
title: Note-Taking MOC
originalFileName: Note-Taking MOC.md

---

#map

On my process:

* [[My own taxonomy of note types]]
* [[My own folder structure for my notes]]

## Reading Inbox

* [ ] group by priority 10s and sort by status/priority/mtime

```dataview
TABLE file.mtime as modified, status, priority from "Reading Inbox" sort file.mtime, desc
```

## Inbox notes

get it to also grab fleeting notes format....

```dataview
TABLE file.mtime as mtime from #inbox OR "Inbox" OR "Notes/Inbox" SORT file.mtime asc
```

%%

```query
tag:#inbox
```

%%

## Open questions:

![[↯ Questions]]

## Bookmarks:

```query
⫝
```
