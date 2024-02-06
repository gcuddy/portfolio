up:: [[metaphor]]
#stub

- [[theatre is a medium of metaphor]]
- [[abstractions and metaphors in computing]]
- [[Interface Design and Metaphor]]
- [[Websites as metaphors]]


metaphor files:
```dataview
TABLE file.mtime.year + "-" + file.mtime.month + "-" + file.mtime.day as Modified

FROM !outgoing([[]])

WHERE contains(file.name, "metaphor")

SORT file.mtime desc
```

