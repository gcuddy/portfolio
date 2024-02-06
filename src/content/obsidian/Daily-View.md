```dataviewjs
const allPages = dv.pages("")

const yesterday = luxon.DateTime.now().minus({days: 1}).startOf('day').valueOf()
const tomorrow = luxon.DateTime.now().plus({days: 1}).startOf('day').valueOf()

const groups = allPages.where(p => {
	const d = p.file?.day?.valueOf() || p.file.mtime.valueOf();
	return d >= yesterday && d <= tomorrow
})
.groupBy(p => p.file.day || p.file.mday)


//

dv.header(2, "Modified")
for (const group of Array.from(groups).reverse()) {
  dv.header(2, group.key);
  dv.table(["file", "path", "modified"],
	  group.rows
		  .sort(r => r.file.mtime, 'desc')
		  .map(r => [r.file.link, r.file.path, r.file.mtime]))
	
}

```
%%
```dataviewjs

const allPages = dv.pages("")

console.log(allPages.groupBy(p => p.file.day?.valueOf() || p.file.mday.valueOf()))

const pages = []

const yesterday = luxon.DateTime.now().minus({days: 1}).startOf('day').valueOf()
const tomorrow = luxon.DateTime.now().plus({days: 1}).startOf('day').valueOf()

for (const page of allPages) {
	const day = page.file?.day?.valueOf()
	if (day && day >= yesterday && day <= tomorrow) {
		pages.push(page)
		continue;
	}
	if (page.file?.mtime.valueOf() >= yesterday && page.file?.mtime.valueOf() <= tomorrow) pages.push(page)
}

dv.table(["File", "Path", "Modified"], pages.sort(p => p.file.mtime, 'desc').map(p => [p.file.link, p.file.path, p.file.mtime]))
```
%%
