---
cssClasses: [table-lines, row-alt]
---

#atlas/scope 

# Inbox 🧊

This isn't a normal inbox. It's a cooling pad 🧊.

Thoughts come in hot 🌶. But after a few days, they cool down ❄️.

When cooler thoughts prevail, you can better prioritize. Cool? 

This view looks at the 20 newest notes in your **+ Encounters** folder. As you process each note, make connections, add details, move them to the best folder,  and delete everything that no longer sparks ✨. 

up:: [[Home]]

## Encounters

```dataview
TABLE WITHOUT ID
 file.link as "Encounters and new notes",
 (date(today) - file.cday).day as "Days alive"

FROM "+Encounters" 
  and -"+Encounters/+Annotations" 
  and -"+Encounters/+Anti-Library"
  and -#x/readme

WHERE (date(today) - file.cday).day > 1
SORT file.cday desc
LIMIT 20
```

``` dataview
TABLE WITHOUT ID
 file.link as "Encounters and new notes",
 (date(today) - file.cday).day as "Days alive"

FROM "+Encounters" and -#on/readme 

SORT file.cday asc

LIMIT 20
```

## Notes To Process

```dataview
TABLE file.mday as "Last Modified" from #to/process sort file.mtime, "asc"
```

## These notes are maybe in the wrong place

(make a [[△ Hall Monitor - A Hazel-like plugin for Obsidian]] rule for this)

```dataview
TABLE file.path from "Journal" where !regexmatch("^\d{4}", file.name)
```