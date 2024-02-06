#map #note/develop #thing

x:: [[hardware]]

- [[Software Design]]
	- [[§ playful software]]
	- [[software design talks]]
- [[local-first software]]

## Notes that contain software in them but aren't linked from here:

```dataview
TABLE file.mtime.year + "-" + file.mtime.month + "-" + file.mtime.day as Modified
from !outgoing([[]])
where contains(file.name, this.file.name)
and file.path != this.file.path
```

## Unrequited notes
```dataview
TABLE file.mtime.year + "-" + file.mtime.month + "-" + file.mtime.day as Modified

FROM [[]]
and !outgoing([[]])

SORT file.mtime desc
```
