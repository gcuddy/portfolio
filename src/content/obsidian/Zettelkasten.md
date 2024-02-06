#map 

Sources:
```dataview
TABLE file.mtime as Modified, file.outlinks as Links from #source or "Sources" where contains(topic,[[]])
```