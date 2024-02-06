---
id: 5t4am711bkf
title: Meditation MOC
originalFileName: Meditation MOC.md

---

# Meditation MOC

#map

## Log

```dataviewjs
const logs = dv.pages('"Meditation/Log"')
dv.table(["Day", "Focus", "Length"], logs.map(l => {
l.file.link.display = l.file.day.toISODate()
return [l.file.link, l.focus, l.length]
}))
```

***

Books:

[[Meditation Books, Courses, and Guided Meditation MOC]]
