---
cssClasses: null
id: ag8xjhwpkfl
title: Projects ☵
originalFileName: Projects ☵.md

---

---
cssClasses: null
id: ml1jt2d59b
title: Projects ☵
originalFileName: Projects ☵.md

---

#map

* [[⧉ Projects To Review]]
* [[⫿⫿⫿ Projects (old)]]
  * [[⧉ Projects]]
* [[⫿⫿⫿ Writing Pipeline]]
  * [[⧉ Writing]]

## Active Projects 🏗️

```dataview
list from #project/active and -"Bins/Templates" sort file.mtime desc
```

## Engagements 🚣‍♂️

## Backburner ⏸️

## Archived 🗄️

#note/refactor

## misc

group by project tag

```dataview
TABLE without id
replace(Tags, "#idea/", "") AS "Tags",
rows.file.link as Ideas

FLATTEN file.etags AS Tags

WHERE contains(Tags, "#idea/")

GROUP BY Tags

SORT Tags, Ideas DESC
```

dataview to get where tagged proejct or has the project unicode

* [ ] and then sort by what's active, backburner, someday, and ... all other sub-tags (but active on top)

## Sorted projects

by algo ![[2022-02-18#^e05a0e]]

```dataviewjs

const projects = dv.pages("#project").sort(p => p.file.ctime, 'desc')

// [...projects].map(p => p.boost = 1)
const projectPaths = Array.from(projects).map(p => p.file.path)
// current rated higher, get daily/weekly/quarterly/monthly

const noteMap = new Map();

const journal = dv.pages('"Journal"')

const regexes = {
	daily:  /^\d{4}-\d{2}-\d{2}/,
	weekly: /^\d{4}-W[0-5][0-9]$/,
	monthly: /^202\d$/,
	quarterly: /^\d{4}-Q[0-4]$/,
}

for (const r in regexes) {
	const regex = regexes[r];
	journal.where(p => regex.test(p.file.name)).file.outlinks.forEach(link => {
	if (!projectPaths.includes(link.path)) return;
	const obj = {
	   weekly: 0,
	   daily: 0,
	   monthly: 0,
	   quarterly: 0,
	   ...noteMap.get(link.path)
   }
   obj[r]++;
   noteMap.set(link.path, obj)
	})
}

const sortedProjects = projects.map(p => {
	let boost = 1;
	const booster = noteMap.get(p.file.path);
	if (booster) {
		boost = boost + (booster.weekly * 3);
		boost = boost + (booster.monthly * 2);
		boost = boost + (booster.quarterly * 2);
		boost = boost + (booster.daily);
	}
	return {
	...p,
	boost
	}
});
console.log({sortedProjects})
dv.taskList(Array.from(sortedProjects).sort((a,b) => (b.boost - a.boost) || (a.file.ctime - b.file.ctime)).flatMap(p => Array.from(p.file.tasks).filter(t => !t.completed)))

```

## Next Actions

```dataview
TABLE due from "Actions" where !complete and contains(parent.file.tags, "#project/active")
```

```dataviewjs
const query = "#project/active or #project/engagements"
let tasks = []
const pages = dv.pages(query).sort(p => p.due, "asc").sort(p => p.file.mtime, 'desc')
console.log(pages)
const noTasks = []
for (const page of pages) {
	if (!page.file.tasks?.length) {
		noTasks.push(page);
		continue;
	}
	const task = page.file.tasks?.where(t => !t.completed).limit(1)
	tasks = [...tasks, ...task]
}
// dv.list(
// dv.pages(""'Actions'").where(a => a.parent.includes))
dv.taskList(tasks)

dv.header(3, "Projects with no tasks")

dv.list(noTasks.map(p => p.file.link))
```
